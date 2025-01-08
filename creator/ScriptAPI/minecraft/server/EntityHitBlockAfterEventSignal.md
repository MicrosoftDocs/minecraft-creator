---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHitBlockAfterEventSignal Class
description: Contents of the @minecraft/server.EntityHitBlockAfterEventSignal class.
---
# EntityHitBlockAfterEventSignal Class

Manages callbacks that are connected to when an entity hits a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: EntityHitBlockAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent) => void
`

Adds a callback that will be called when an entity hits a block.

#### **Parameters**
- **callback**: (arg0: [*EntityHitBlockAfterEvent*](EntityHitBlockAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg0: [*EntityHitBlockAfterEvent*](EntityHitBlockAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void
`

Removes a callback from being called when an entity hits a block.

#### **Parameters**
- **callback**: (arg0: [*EntityHitBlockAfterEvent*](EntityHitBlockAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
