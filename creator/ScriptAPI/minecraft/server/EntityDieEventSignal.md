---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityDieEventSignal Class
description: Contents of the @minecraft/server.EntityDieEventSignal class.
---
# EntityDieEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Used to register event receivers for entity death occurrences within Minecraft.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityDieEvent) => void, options?: EntityEventOptions): (arg: EntityDieEvent) => void
`

Subscribes to an event that will fire any time an entity dies.

#### **Parameters**
- **callback**: (arg: [*EntityDieEvent*](EntityDieEvent.md)) => *void*
  
  Function that will handle the event.
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`
  
  Further filter options that can narrow down how frequently this event fires.

#### **Returns** (arg: [*EntityDieEvent*](EntityDieEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityDieEvent) => void): void
`

Unsubscribes to an event that fires when an entity dies.

#### **Parameters**
- **callback**: (arg: [*EntityDieEvent*](EntityDieEvent.md)) => *void*
  
  Original function used at subscribe time that was registered for the event..

> [!WARNING]
> This function can throw errors.
