---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerBreakBlockAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerBreakBlockAfterEventSignal class.
---
# PlayerBreakBlockAfterEventSignal Class

Manages callbacks that are connected to when a player breaks a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void, options?: BlockEventOptions): (arg: PlayerBreakBlockAfterEvent) => void
`

Adds a callback that will be called when a block is broken by a player.

#### **Parameters**
- **callback**: (arg: [*PlayerBreakBlockAfterEvent*](PlayerBreakBlockAfterEvent.md)) => *void*
- **options**?: [*BlockEventOptions*](BlockEventOptions.md) = `null`

**Returns** (arg: [*PlayerBreakBlockAfterEvent*](PlayerBreakBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void
`

Removes a callback from being called when a player breaks a block.

#### **Parameters**
- **callback**: (arg: [*PlayerBreakBlockAfterEvent*](PlayerBreakBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
