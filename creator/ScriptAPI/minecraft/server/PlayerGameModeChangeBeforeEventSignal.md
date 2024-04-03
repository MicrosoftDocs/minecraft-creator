---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerGameModeChangeBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerGameModeChangeBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerGameModeChangeBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

**Returns** (arg: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
