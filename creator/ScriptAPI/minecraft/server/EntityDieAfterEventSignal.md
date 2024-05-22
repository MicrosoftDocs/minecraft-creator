---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityDieAfterEventSignal Class
description: Contents of the @minecraft/server.EntityDieAfterEventSignal class.
---
# EntityDieAfterEventSignal Class

Supports registering for an event that fires after an entity has died.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityDieAfterEvent) => void, options?: EntityEventOptions): (arg: EntityDieAfterEvent) => void
`

Subscribes to an event that fires when an entity dies.

#### **Parameters**
- **callback**: (arg: [*EntityDieAfterEvent*](EntityDieAfterEvent.md)) => *void*
  
  Function to call when an entity dies.
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`
  
  Additional filtering options for when the subscription fires.

**Returns** (arg: [*EntityDieAfterEvent*](EntityDieAfterEvent.md)) => *void* - Returns the closure that can be used in future downstream calls to unsubscribe.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void
`

Stops this event from calling your function when an entity dies.

#### **Parameters**
- **callback**: (arg: [*EntityDieAfterEvent*](EntityDieAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
