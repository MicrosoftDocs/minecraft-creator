---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntitySpawnAfterEventSignal Class
description: Contents of the @minecraft/server.EntitySpawnAfterEventSignal class.
---
# EntitySpawnAfterEventSignal Class

Registers a script-based event handler for handling what happens when an entity spawns.

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

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void
`

Method to register an event handler for what happens when an entity spawns.

#### **Parameters**
- **callback**: (arg: [*EntitySpawnAfterEvent*](EntitySpawnAfterEvent.md)) => *void*
  
  Function that handles the spawn event.

**Returns** (arg: [*EntitySpawnAfterEvent*](EntitySpawnAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void
`

Unregisters a method that was previously subscribed to the subscription event.

#### **Parameters**
- **callback**: (arg: [*EntitySpawnAfterEvent*](EntitySpawnAfterEvent.md)) => *void*
  
  Original function that was passed into the subscribe event, that is to be unregistered.

> [!IMPORTANT]
> This function can't be called in read-only mode.

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
