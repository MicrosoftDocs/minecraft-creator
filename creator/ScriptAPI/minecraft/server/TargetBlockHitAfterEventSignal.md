---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.TargetBlockHitAfterEventSignal Class
description: Contents of the @minecraft/server.TargetBlockHitAfterEventSignal class.
---
# TargetBlockHitAfterEventSignal Class

Manages callbacks that are connected to when a target block is hit.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void
`

Adds a callback that will be called when a target block is hit.

#### **Parameters**
- **callback**: (arg: [*TargetBlockHitAfterEvent*](TargetBlockHitAfterEvent.md)) => *void*

**Returns** (arg: [*TargetBlockHitAfterEvent*](TargetBlockHitAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void
`

Removes a callback from being called when a target block is hit.

#### **Parameters**
- **callback**: (arg: [*TargetBlockHitAfterEvent*](TargetBlockHitAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
