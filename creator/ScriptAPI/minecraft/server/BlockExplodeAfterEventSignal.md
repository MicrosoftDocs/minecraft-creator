---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockExplodeAfterEventSignal Class
description: Contents of the @minecraft/server.BlockExplodeAfterEventSignal class.
---
# BlockExplodeAfterEventSignal Class

Manages callbacks that are connected to when an explosion occurs, as it impacts individual blocks.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void
`

Adds a callback that will be called when an explosion occurs, as it impacts individual blocks.

#### **Parameters**
- **callback**: (arg: [*BlockExplodeAfterEvent*](BlockExplodeAfterEvent.md)) => *void*

**Returns** (arg: [*BlockExplodeAfterEvent*](BlockExplodeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void
`

Removes a callback from being called when an explosion occurs, as it impacts individual blocks.

#### **Parameters**
- **callback**: (arg: [*BlockExplodeAfterEvent*](BlockExplodeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
