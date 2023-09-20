---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.PlayerPlaceBlockAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerPlaceBlockAfterEventSignal class.
ms.service: minecraft-bedrock-edition
---
# PlayerPlaceBlockAfterEventSignal Class

Manages callbacks that are connected to when a block is placed by a player.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void, options?: BlockEventOptions): (arg: PlayerPlaceBlockAfterEvent) => void
`

Adds a callback that will be called when a block is placed by a player.

#### **Parameters**
- **callback**: (arg: [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)) => *void*
- **options**?: [*BlockEventOptions*](BlockEventOptions.md) = `null`

#### **Returns** (arg: [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void
`

Removes a callback from being called when an block is placed by a player.

#### **Parameters**
- **callback**: (arg: [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
