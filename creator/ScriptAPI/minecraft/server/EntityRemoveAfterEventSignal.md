---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityRemoveAfterEventSignal Class
description: Contents of the @minecraft/server.EntityRemoveAfterEventSignal class.
---
# EntityRemoveAfterEventSignal Class

Allows registration for an event that fires when an entity is removed from  the game (for example, unloaded, or a few seconds after they are dead.)

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityRemoveAfterEvent) => void, options?: EntityEventOptions): (arg: EntityRemoveAfterEvent) => void
`

Will call your function every time an entity is removed from the game.

#### **Parameters**
- **callback**: (arg: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*
  
  Function to call.
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`
  
  Additional filtering options for this event.

**Returns** (arg: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void* - Returns a closure that can be used in subsequent unsubscribe operations.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void
`

Unsubscribes your function from subsequent calls when an entity is removed.

#### **Parameters**
- **callback**: (arg: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
