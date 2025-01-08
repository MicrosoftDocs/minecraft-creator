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
subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent) => void
`

Adds a callback that will be called before a block is broken by a player.

#### **Parameters**
- **callback**: (arg0: [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)) => *void*
- **options**?: [*BlockEventOptions*](BlockEventOptions.md) = `null`

**Returns** (arg0: [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void
`

Removes a callback from being called before a player breaks a block.

#### **Parameters**
- **callback**: (arg0: [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
