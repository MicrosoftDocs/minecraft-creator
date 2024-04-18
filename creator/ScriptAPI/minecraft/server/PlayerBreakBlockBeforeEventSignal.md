---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerBreakBlockBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerBreakBlockBeforeEventSignal class.
---
# PlayerBreakBlockBeforeEventSignal Class

Manages callbacks that are connected to before a player breaks a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void, options?: BlockEventOptions): (arg: PlayerBreakBlockBeforeEvent) => void
`

Adds a callback that will be called before a block is broken by a player.

#### **Parameters**
- **callback**: (arg: [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)) => *void*
- **options**?: [*BlockEventOptions*](BlockEventOptions.md) = `null`

**Returns** (arg: [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void
`

Removes a callback from being called before a player breaks a block.

#### **Parameters**
- **callback**: (arg: [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
