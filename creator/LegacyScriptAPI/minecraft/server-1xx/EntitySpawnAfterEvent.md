---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntitySpawnAfterEvent Class
description: Contents of the @minecraft/server.EntitySpawnAfterEvent class (Version 1.x.x).
---
# EntitySpawnAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntitySpawnAfterEvent.md).

Contains data related to an entity spawning within the world.

## Properties

### **cause**
`read-only cause: EntityInitializationCause;`

Initialization cause (Spawned, Born ...).

Type: [*EntityInitializationCause*](EntityInitializationCause.md)

### **entity**
`entity: Entity;`

Entity that was spawned.

Type: [*Entity*](Entity.md)

Notes:
  - This property can't be edited in read-only mode.

#### Examples

##### ***logEntitySpawnEvent.ts***

```typescript
import { world, system, EntitySpawnAfterEvent, DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function logEntitySpawnEvent(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  // register a new function that is called when a new entity is created.
  world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
    if (entityEvent && entityEvent.entity) {
      log(`New entity of type ${entityEvent.entity.typeId} created!`, 1);
    } else {
      log(`The entity event did not work as expected.`, -1);
    }
  });

  system.runTimeout(() => {
    targetLocation.dimension.spawnEntity(
      "minecraft:horse<minecraft:ageable_grow_up>",
      Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
    );
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/logEntitySpawnEvent.ts) code sandbox.
