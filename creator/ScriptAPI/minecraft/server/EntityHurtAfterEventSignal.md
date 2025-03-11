---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityHurtAfterEventSignal Class
description: Contents of the @minecraft/server.EntityHurtAfterEventSignal class.
---
# EntityHurtAfterEventSignal Class

Manages callbacks that are connected to when an entity is hurt.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: EntityHurtAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent) => void
`

Adds a callback that will be called when an entity is hurt.

#### **Parameters**
- **callback**: (arg0: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg0: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void
`

Removes a callback from being called when an entity is hurt.

#### **Parameters**
- **callback**: (arg0: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
