---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerPlaceBlockAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerPlaceBlockAfterEventSignal class.
---
# PlayerPlaceBlockAfterEventSignal Class

Manages callbacks that are connected to when a block is placed by a player.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent) => void
`

Adds a callback that will be called when a block is placed by a player.

#### **Parameters**
- **callback**: (arg0: [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)) => *void*
- **options**?: [*BlockEventOptions*](BlockEventOptions.md) = `null`

**Returns** (arg0: [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void
`

Removes a callback from being called when an block is placed by a player.

#### **Parameters**
- **callback**: (arg0: [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
