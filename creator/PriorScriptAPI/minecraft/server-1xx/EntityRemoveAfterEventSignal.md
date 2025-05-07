---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityRemoveAfterEventSignal Class
description: Contents of the @minecraft/server.EntityRemoveAfterEventSignal class (Version 1.x.x).
---
# EntityRemoveAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityRemoveAfterEventSignal.md).

Allows registration for an event that fires when an entity is removed from  the game (for example, unloaded, or a few seconds after they are dead.)

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: EntityRemoveAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent) => void
`

Will call your function every time an entity is removed from the game.

#### **Parameters**
- **callback**: (arg0: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*
  
  Function to call.
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`
  
  Additional filtering options for this event.

**Returns** (arg0: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void* - Returns a closure that can be used in subsequent unsubscribe operations.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void
`

Unsubscribes your function from subsequent calls when an entity is removed.

#### **Parameters**
- **callback**: (arg0: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
