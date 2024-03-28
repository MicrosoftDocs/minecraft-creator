---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntitySpawnAfterEvent Class
description: Contents of the @minecraft/server.EntitySpawnAfterEvent class.
---
# EntitySpawnAfterEvent Class

Contains data related to an entity spawning within the world.

#### Examples
##### ***logEntitySpawnEvents.ts***
```typescript
// Register a new function that is called when a new entity is created.
import { world, EntitySpawnAfterEvent } from '@minecraft/server';

world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
    const spawnLocation = entityEvent.entity.location;
    world.sendMessage(
        `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,
    );
});
```

## Properties

### **cause**
`read-only cause: EntityInitializationCause;`

Initialization cause (Spawned, Born ...).

Type: [*EntityInitializationCause*](EntityInitializationCause.md)

### **entity**
`entity: Entity;`

Entity that was spawned.

Type: [*Entity*](Entity.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

#### Examples
##### ***logEntitySpawnEvents.ts***
```typescript
// Register a new function that is called when a new entity is created.
import { world, EntitySpawnAfterEvent } from '@minecraft/server';

world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
    const spawnLocation = entityEvent.entity.location;
    world.sendMessage(
        `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,
    );
});
```
