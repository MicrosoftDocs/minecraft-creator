---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntitySpawnEventSignal Class
description: Contents of the @minecraft/server.EntitySpawnEventSignal class.
---
# EntitySpawnEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Registers a script-based event handler for handling what happens when an entity spawns.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntitySpawnEvent) => void): (arg: EntitySpawnEvent) => void
`

Method to register an event handler for what happens when an entity spawns.

#### **Parameters**
- **callback**: (arg: [*EntitySpawnEvent*](EntitySpawnEvent.md)) => *void*
  
  Function that handles the spawn event.

#### **Returns** (arg: [*EntitySpawnEvent*](EntitySpawnEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: EntitySpawnEvent) => void): void
`

Unregisters a method that was previously subscribed to the subscription event.

#### **Parameters**
- **callback**: (arg: [*EntitySpawnEvent*](EntitySpawnEvent.md)) => *void*
  
  Original function that was passed into the subscribe event, that is to be unregistered.

> [!WARNING]
> This function can throw errors.
