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

#### **Returns** (arg: [*EntitySpawnAfterEvent*](EntitySpawnAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

#### Examples
##### ***runEntitySpawnEvent.ts***
```typescript
  // register a new function that is called when a new entity is created.
  mc.world.afterEvents.entitySpawn.subscribe((entityEvent: mc.EntitySpawnAfterEvent) => {
    if (entityEvent && entityEvent.entity) {
      log(`New entity of type '${entityEvent.entity.typeId}' created!`, 1);
    } else {
      log(`The entity event didn't work as expected.`, -1);
    }
  });

  mc.system.runTimeout(() => {
    createOldHorse(log, targetLocation);
  }, 20);
```

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

> [!WARNING]
> This function can throw errors.
