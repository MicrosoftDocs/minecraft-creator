---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerPlaceBlockBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerPlaceBlockBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerPlaceBlockBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to before a block is placed by a player.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void, options?: BlockEventOptions): (arg: PlayerPlaceBlockBeforeEvent) => void
`

Adds a callback that will be called before a block is placed by a player.

#### **Parameters**
- **callback**: (arg: [*PlayerPlaceBlockBeforeEvent*](PlayerPlaceBlockBeforeEvent.md)) => *void*
- **options**?: [*BlockEventOptions*](BlockEventOptions.md) = `null`

**Returns** (arg: [*PlayerPlaceBlockBeforeEvent*](PlayerPlaceBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void
`

Removes a callback from being called before an block is placed by a player.

#### **Parameters**
- **callback**: (arg: [*PlayerPlaceBlockBeforeEvent*](PlayerPlaceBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
