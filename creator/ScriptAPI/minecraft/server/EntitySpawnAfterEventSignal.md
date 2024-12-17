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
  
Notes:
- This function can't be called in read-only mode.

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

### **unsubscribe**
`
unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void
`

Unregisters a method that was previously subscribed to the subscription event.

#### **Parameters**
- **callback**: (arg: [*EntitySpawnAfterEvent*](EntitySpawnAfterEvent.md)) => *void*
  
  Original function that was passed into the subscribe event, that is to be unregistered.
  
Notes:
- This function can't be called in read-only mode.
