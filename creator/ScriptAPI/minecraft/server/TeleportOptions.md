---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.TeleportOptions Interface
description: Contents of the @minecraft/server.TeleportOptions class.
---
# TeleportOptions Interface

Contains additional options for teleporting an entity.

## Properties

### **checkForBlocks**
`checkForBlocks?: boolean;`

Whether to check whether blocks will block the entity after teleport.

Type: *boolean*

### **dimension**
`dimension?: Dimension;`

Dimension to potentially move the entity to.  If not specified, the entity is teleported within the dimension that they reside.

Type: [*Dimension*](Dimension.md)

### **facingLocation**
`facingLocation?: Vector3;`

Location that the entity should be facing after teleport.

Type: [*Vector3*](Vector3.md)

### **keepVelocity**
`keepVelocity?: boolean;`

Whether to retain the entities velocity after teleport.

Type: *boolean*

### **rotation**
`rotation?: Vector2;`

Rotation of the entity after teleport.

Type: [*Vector2*](Vector2.md)

#### Examples

##### ***teleport.ts***

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function teleport(targetLocation: DimensionLocation) {
  const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);

  system.runTimeout(() => {
    cow.teleport(
      { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
      {
        facingLocation: targetLocation,
      }
    );
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/teleport.ts) code sandbox.

##### ***teleportMovement.ts***

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function teleportMovement(targetLocation: DimensionLocation) {
  const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);

  let inc = 1;
  const runId = system.runInterval(() => {
    pig.teleport(
      { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
      {
        facingLocation: targetLocation,
      }
    );

    if (inc > 100) {
      system.clearRun(runId);
    }
    inc++;
  }, 4);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/teleportMovement.ts) code sandbox.
