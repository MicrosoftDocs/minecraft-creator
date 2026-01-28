---
author: chipotle
ms.author: mikeam
title: Script Error Handling Best Practices
description: "Patterns for handling errors gracefully in Minecraft: Bedrock Edition scripts, including try-catch blocks, async error handling, and user-friendly error messages."
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 12/12/2025
---

# Script Error Handling Best Practices

Robust error handling is essential for creating reliable Minecraft scripts. Without proper error handling, a single unexpected condition can crash your entire script, ruining the player experience. This guide covers patterns and best practices for handling errors gracefully.

## Prerequisites

Before reading this guide, you should be familiar with:

- [Introduction to Scripting](./introduction.md)
- [Next Steps: Scripting with TypeScript](./next-steps.md)
- Basic JavaScript error handling concepts

## Why error handling matters

Consider this simple script:

```javascript
import { world, system } from "@minecraft/server";

system.runInterval(() => {
  const players = world.getAllPlayers();
  const player = players[0];
  const health = player.getComponent("health").currentValue;
  world.sendMessage(`Player health: ${health}`);
}, 20);
```

This script works perfectly—until a player leaves. Then it crashes, because `players[0]` is `undefined`. One unhandled error stops your entire script from running.

## Basic try-catch patterns

The most basic error handling uses `try-catch` blocks:

```javascript
system.runInterval(() => {
  try {
    const players = world.getAllPlayers();
    if (players.length === 0) return;
    
    const player = players[0];
    const healthComponent = player.getComponent("health");
    if (!healthComponent) return;
    
    world.sendMessage(`Player health: ${healthComponent.currentValue}`);
  } catch (error) {
    console.warn(`Error in health display: ${error}`);
  }
}, 20);
```

If you're going to use this pattern extensively in your code, consider creating a wrapping function. This lets you add the `try-catch` construct to any function without modifying it&mdash;you pass the function you want to wrap into your wrapping function as a parameter. Here's an example:

```javascript
/**
 * Safely executes a function and logs any errors
 * @param {string} context - Description for error logging
 * @param {Function} fn - Function to execute
 */
function safeExecute(context, fn) {
  try {
    fn();
  } catch (error) {
    console.warn(`[${context}] Error: ${error}`);
    if (error.stack) {
      console.warn(`Stack: ${error.stack}`);
    }
  }
}

// Usage
system.runInterval(() => {
  safeExecute("Main game loop", () => {
    // Your game logic here
    processPlayers();
    updateScoreboard();
    checkWinConditions();
  });
}, 1);
```

When you have multiple independent operations, wrap each one separately, so a failure in one doesn't stop the others:

```javascript
system.runInterval(() => {
    safeExecute("Player processing", processPlayers);
    safeExecute("Entity AI", updateEntityBehaviors);
    safeExecute("World effects", applyWorldEffects);
    safeExecute("Scoreboard", updateScoreboard);
}, 1);
```

## Defensive programming

Always verify that objects exist before accessing their properties. Here's a few ways to do that:

```javascript
// Using optional chaining (?.)
const health = player?.getComponent("health")?.currentValue;

// Using nullish coalescing (??) for defaults
const healthValue = player?.getComponent("health")?.currentValue ?? 20;

// Full defensive check
function getPlayerHealth(player) {
    if (!player) {
        console.warn("getPlayerHealth called with null player");
        return 0;
    }
    
    const healthComponent = player.getComponent("health");
    if (!healthComponent) {
        console.warn(`Player ${player.name} has no health component`);
        return 0;
    }
    
    return healthComponent.currentValue;
}
```

When using TypeScript, create type guards to ensure type safety:

```typescript
import { Entity, Player } from "@minecraft/server";

function isPlayer(entity: Entity): entity is Player {
    return entity.typeId === "minecraft:player";
}

function processEntity(entity: Entity) {
    if (isPlayer(entity)) {
        // TypeScript knows entity is a Player here
        console.warn(`Processing player: ${entity.name}`);
    } else {
        console.warn(`Processing entity: ${entity.typeId}`);
    }
}
```

For public functions, validate arguments early:

```javascript
/**
 * Teleports a player to specified coordinates
 * @throws {Error} If arguments are invalid
 */
function teleportPlayer(player, x, y, z) {
    // Validate player
    if (!player) {
        throw new Error("teleportPlayer: player is required");
    }
    
    // Validate coordinates
    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
        throw new Error("teleportPlayer: x, y, z must be numbers");
    }
    
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        throw new Error("teleportPlayer: coordinates cannot be NaN");
    }
    
    // Validate coordinate ranges
    if (y < -64 || y > 320) {
        throw new Error(`teleportPlayer: y coordinate ${y} is out of valid range`);
    }
    
    player.teleport({ x, y, z });
}
```

## Handling Async Operations

Some Script API operations may involve asynchronous behavior. Handle these carefully! When you're using `async`/`await`, consider wrapping them in `try-catch` blocks.

```typescript
async function loadPlayerData(player: Player): Promise<PlayerData | null> {
    try {
        const data = await someAsyncOperation(player.id);
        return data;
    } catch (error) {
        console.warn(`Failed to load data for ${player.name}: ${error}`);
        return null;
    }
}
```

You can also use a `catch` clause with promises:

```javascript
someAsyncOperation()
    .then(result => {
        processResult(result);
    })
    .catch(error => {
        console.warn(`Async operation failed: ${error}`);
        handleFailure();
    });
```

## Testing error handling

You should test your error handling by intentionally causing failures. You can (and should) do this in gameplay, and potentially in code:

```javascript
// Test helper - only use during development
function testErrorHandling() {
    console.warn("=== Testing Error Handling ===");
    
    // Test null player
    try {
        getPlayerHealth(null);
        console.warn("FAIL: Should have thrown for null player");
    } catch (e) {
        console.warn("PASS: Handled null player");
    }
    
    // Test invalid coordinates
    try {
        teleportPlayer(world.getAllPlayers()[0], NaN, 100, 100);
        console.warn("FAIL: Should have thrown for NaN coordinate");
    } catch (e) {
        console.warn("PASS: Handled NaN coordinate");
    }
    
    console.warn("=== Error Handling Tests Complete ===");
}
```

## Related resources

- [Debugging Scripts in Minecraft](./debugging-scripts.md)
- [Introduction to Scripting](./introduction.md)
- [Building Debug Tools](../../Casual/DebugTools.md)
