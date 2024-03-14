---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerGameModeChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerGameModeChangeAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerGameModeChangeAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
