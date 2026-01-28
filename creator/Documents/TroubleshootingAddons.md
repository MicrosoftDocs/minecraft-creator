---
author: chipotle
ms.author: mikeam
title: Troubleshooting and Fixing Add-On Bugs
description: "The definitive guide to finding, diagnosing, and fixing bugs in Minecraft: Bedrock Edition add-ons, covering JSON, entities, blocks, items, scripts, recipes, and performance issues."
ms.service: minecraft-bedrock-edition
ai-usage: ai-assisted
ms.date: 12/23/2025
---

# Troubleshooting and Fixing Add-On Bugs

Every add-on creator encounters bugs. This comprehensive guide catalogs the most common issues you'll face when creating add-ons for Minecraft: Bedrock Edition, explains why they happen, and shows you how to fix and prevent them. Use this as your go-to reference whenever something isn't working.

## Quick troubleshooting checklist

Before diving into specific issues, run through this quick checklist:

> [!div class="checklist"]
>
> - **Check the Content Log** - Most bugs produce error messages
> - **Verify JSON syntax** - Use VS Code with JSON linting
> - **Confirm file locations** - Correct folders and file names
> - **Match identifiers exactly** - Case-sensitive, with namespaces
> - **Reload properly** - Use `/reload` or restart the world
> - **Clear caches if needed** - Sometimes old data persists

## Setting up your debugging environment

### Enable content logging

The Content Log should be one of your go-to debugging tools; enable it in Minecraft's creator settings. Check out [the  Content Error Log article](./ContentErrorLog.md) for full details on how to use it!

### Set up your IDE for debugging

In Visual Studio Code, you should install [Minecraft-specific extensions](./scripting/developer-tools.md) like the Minecraft Debugger and Blockception's development pack.

## Useful commands for testing

- `/reload`: Reload behavior and resource packs
- `/give @s namespace:item_name`: Test items
- `/summon namespace:entity_name`: Test entities
- `/setblock ~ ~ ~ namespace:block`: Test blocks
- `/function my_function`: Test functions
- `/script profiler start`: Profile script performance
- `/script profiler stop`: Stop profiler and view results

## JSON and syntax errors

JSON syntax errors are the most common issues and often the easiest to fix once you know what to look for. Visual Studio Code should highlight many of these errors automatically if you have JSON linting enabled:

- Missing or extra commas: JSON requires commas between all properties except the last one in an object or array.
- Mismatched brackets/braces: you have to close `{` and `[` characters in the same order they're opened.
- Invalid characters: hidden Unicode characters, improperly-used Unicode characters (e.g., curly quotes copied from Word), JSON comments in files that don't allow them

## Identifier and naming issues

- You need to make sure your packs use unique UUIDs.
- Identifiers in resource packs and behavior packs must match. (Remember that identifiers are case-sensitive, too: `custom_mob` and `Custom_Mob` are not the same!)
- Use namespaces to avoid conflicts.
- Avoid using names reserved for Vanilla content.

## Entity bugs

### Entity falls through the world

**Symptom:** Custom entity spawns then immediately falls into the void.

**The Cause:** Missing physics component.

**The Fix:**

```json
"components": {
    "minecraft:physics": {
        "has_gravity": true,
        "has_collision": true
    }
}
```

### Entity doesn't move

**Symptom:** Entity spawns but stands completely still.

**Common Causes and Fixes:**

1. **Missing movement components:**

    ```json
    "components": {
        "minecraft:movement": { "value": 0.25 },
        "minecraft:movement.basic": {},
        "minecraft:navigation.walk": {
            "can_path_over_water": true
        }
    }
    ```

2. **No AI goals:**

    Add behavior components:

    ```json
    "minecraft:behavior.random_stroll": {
        "priority": 6,
        "speed_multiplier": 1.0
    }
    ```

3. **Movement speed is zero:** Check the movement value is greater than 0.

### Entity has no texture (pink/black checkered)

**Symptom:** Entity appears with missing texture pattern.

**Troubleshooting Steps:**

1. Verify texture path in client entity file matches actual file location
2. Check behavior and resource pack identifiers match **exactly**
3. Ensure texture is a valid PNG (not just a renamed file)
4. Verify render controller references correct texture

### Entity not spawning naturally

**Symptom:** Entity only appears via spawn egg or commands.

**The Cause:** Missing or incorrect spawn rules.

**The Fix:** Create a spawn rule file:

```json
{
    "format_version": "1.8.0",
    "minecraft:spawn_rules": {
        "description": {
            "identifier": "mypack:my_entity",
            "population_control": "animal"
        },
        "conditions": [
            {
                "minecraft:spawns_on_surface": {},
                "minecraft:brightness_filter": {
                    "min": 7,
                    "max": 15
                },
                "minecraft:weight": {
                    "default": 50
                }
            }
        ]
    }
}
```

### Component group not activating

**Symptom:** Features in a component group don't work.

**The Problem:** Component groups require events to activate them.

```json
"component_groups": {
    "angry_mode": {
        "minecraft:attack": { "damage": 10 }
    }
},
"events": {
    "become_angry": {
        "add": {
            "component_groups": ["angry_mode"]
        }
    }
}
```

The event must be triggered (spawn event, sensor, interaction, etc.).

### Animations not playing

**Symptom:** Entity doesn't animate or uses wrong animation.

**Checklist:**

1. Animation controller exists and is referenced in client entity
2. Animation files have correct identifiers
3. State transitions use correct query conditions
4. Animation is referenced with correct name

## Block bugs

### Block Has No Texture

**Symptom:** Block appears as solid color or missing texture.

**Troubleshooting Checklist:**

1. **terrain_texture.json** has an entry for your texture
2. Texture name in block JSON matches the `terrain_texture` entry
3. The texture file exists at specified path
4. Texture dimensions are power-of-2 (16x16, 32x32, etc.)

### Block doesn't drop loot

**Symptom:** Breaking custom block drops nothing.

**The Fix:** Ensure you reference a loot table, and the loot table exists.

```json
"components": {
  "minecraft:loot": "loot_tables/blocks/my_block.json"
}
```

**Simple loot table (loot_tables/blocks/my_block.json):**

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "mypack:my_block"
        }
      ]
    }
  ]
}
```

### Custom geometry not showing

**Symptom:** Block uses default cube instead of custom model.

**Checklist:**

1. Geometry file is in `models/blocks/` folder
2. Geometry identifier matches block JSON reference
3. Block JSON uses correct syntax:

    ```json
    "minecraft:geometry": {
      "identifier": "geometry.my_custom_block"
    }
    ```

### Block states not changing

**Symptom:** Block permutations don't activate correctly.

**Common Causes:**

1. State values not defined in description
2. Condition query syntax errors
3. Event not properly setting state

```json
{
  "description": {
    "identifier": "mypack:my_block",
    "states": {
      "mypack:active": [false, true]
    }
  },
  "permutations": [
    {
      "condition": "query.block_state('mypack:active') == true",
      "components": { ... }
    }
  ]
}
```

## Item bugs

### Item not in creative inventory

**Symptom:** Can only get item via commands.

**The Fix:** Add menu category:

```json
"description": {
    "identifier": "mypack:custom_item",
    "menu_category": {
        "category": "equipment",
        "group": "itemGroup.name.sword"
    }
}
```

**Valid categories:** `construction`, `nature`, `equipment`, `items`, `none`

### Item has wrong texture

**Symptom:** Item shows default or wrong texture.

**Checklist:**

1. `item_texture.json` exists in textures folder
2. Texture name in item JSON matches item_texture entry
3. Texture file exists at correct path

```json
{
    "resource_pack_name": "My Pack",
    "texture_name": "atlas.items",
    "texture_data": {
        "my_item": {
            "textures": "textures/items/my_item"
        }
    }
}
```

### Tool not mining correctly

**Symptom:** Custom tool doesn't mine expected blocks or mines too slowly.

**The Fix:** Configure digger component properly:

```json
"minecraft:digger": {
  "use_efficiency": true,
  "destroy_speeds": [
    {
      "block": {
        "tags": "query.any_tag('stone', 'metal')"
      },
      "speed": 8
    }
  ]
}
```

## Script bugs

### Script doesn't Load

**Symptom:** No script functionality, no errors in log.

**Checklist:**

1. Script module in **manifest.json** has `"type": "script"`
2. Entry path points to correct file: `"entry": "scripts/main.js"`
3. Dependencies use `module_name`, not `uuid`:

    ```json
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "1.17.0"
        }
    ]
    ```

4. Script file has valid JavaScript syntax

### "Cannot read property of undefined"

**Symptom:** Script crashes with this error.

**The Problem:** Accessing properties on undefined values.

```javascript
// Crashes if no players online
const player = world.getAllPlayers()[0];
const x = player.location.x;  // Error if player is undefined
```

**The Fix:** Always validate before accessing:

```javascript
const players = world.getAllPlayers();
if (players.length > 0) {
  const player = players[0];
  const x = player.location.x;
}
```

### Events firing multiple times after reload

**Symptom:** Events trigger more times than expected after `/reload`.

**The Problem:** Each reload adds another subscription.

**The Fix:**

```javascript
let isInitialized = false;

function initialize() {
  if (isInitialized) return;
  
  world.afterEvents.playerSpawn.subscribe(onPlayerSpawn);
  isInitialized = true;
}

initialize();
```

### Script runs, but nothing happens

**Symptom:** No errors, but expected behavior doesn't occur.

**Debugging Steps:**

1. Add `console.log` statements to verify code execution
2. Check you're using the correct event (beforeEvents vs afterEvents)
3. Verify entity/block types match exactly (with namespace)
4. Ensure you're not canceling events unintentionally

See [Debugging Scripts](scripting/debugging-scripts.md) for comprehensive debugging techniques.

---

## Recipe Bugs

### Recipe doesn't Work

**Symptom:** Crafting ingredients don't produce output.

**Checklist:**

1. Recipe file in `recipes/` folder
2. Recipe type matches crafting method
3. Item identifiers include namespace
4. Pattern and keys are correct

**Correctly shaped recipe:**

```json
{
  "format_version": "1.21.40",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "mypack:custom_recipe"
    },
    "tags": ["crafting_table"],
    "pattern": [
      "###",
      " | ",
      " | "
    ],
    "key": {
      "#": { "item": "minecraft:diamond" },
      "|": { "item": "minecraft:stick" }
    },
    "unlock": [
      { "item": "minecraft:diamond" }
    ],
    "result": {
      "item": "mypack:custom_sword"
    }
  }
}
```

### Furnace recipe not working

**Symptom:** Item won't smelt.

**The Fix:** Use correct tags:

```json
{
  "format_version": "1.21.40",
  "minecraft:recipe_furnace": {
    "description": {
      "identifier": "mypack:smelt_custom_ore"
    },
    "tags": ["furnace", "blast_furnace"],
    "input": "mypack:custom_ore",
    "output": "mypack:custom_ingot"
  }
}
```

## Loot table bugs

### Loot not dropping

**Symptom:** Entity or block drops nothing.

**Checklist:**

1. Loot table file exists in **loot_tables/** folder
2. Entity/block references correct loot table path
3. Loot table syntax is valid

**Basic loot table:**

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "mypack:custom_item",
          "weight": 1
        }
      ]
    }
  ]
}
```

### Conditional Loot Not Working

**Symptom:** Conditions don't affect drops as expected.

**The Fix:** Verify condition syntax:

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "mypack:rare_drop",
          "weight": 1
        }
      ],
      "conditions": [
        {
          "condition": "random_chance_with_looting",
          "chance": 0.1,
          "looting_multiplier": 0.05
        }
      ]
    }
  ]
}
```

## Performance bugs

### World loads slowly

**Possible Causes:**

- Too many or too large textures
- Excessive entity spawning on load
- Complex scripts at startup

**Solutions:**

- Optimize textures (16x16 or 32x32 when possible)
- Defer non-essential script initialization
- Reduce entity density limits

### FPS Drops During Gameplay

**Common Causes:**

- Too many entities in one area
- Scripts running every tick
- Complex particle effects
- Excessive dynamic block updates

**Solutions:**

```javascript
// Instead of every tick
system.runInterval(() => {
  // Logic here
}, 20);  // Run every second instead

// Limit processing scope
const nearbyEntities = dimension.getEntities({
  location: player.location,
  maxDistance: 50  // Don't process entire world
});
```

### Script memory issues

**Symptom:** Game slows down over time.

**Common Causes:**

- Growing arrays/maps that aren't cleaned
- Event subscriptions not removed
- Caching too much data

**The Fix:**

```javascript
// Clean up on player leave
world.afterEvents.playerLeave.subscribe((event) => {
  playerDataMap.delete(event.playerId);
});

// Limit cache size
if (cache.size > 1000) {
  const firstKey = cache.keys().next().value;
  cache.delete(firstKey);
}
```

See [Improving Performance and Resource Usage](Practices/ImprovingPerformanceAndResourceUsage.md).
