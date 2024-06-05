---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerEmoteAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerEmoteAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerEmoteAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerEmoteAfterEvent) => void): (arg: PlayerEmoteAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerEmoteAfterEvent*](PlayerEmoteAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerEmoteAfterEvent*](PlayerEmoteAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerEmoteAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerEmoteAfterEvent*](PlayerEmoteAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
