---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerGameModeChangeBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerGameModeChangeBeforeEventSignal class.
---
# PlayerGameModeChangeBeforeEventSignal Class

Manages callbacks that are connected to before a players game mode is changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void
`

Adds a callback that will be called before a players game mode is changed.

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

**Returns** (arg: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void
`

Removes a callback from being called before a players game mode is changed.

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeBeforeEvent*](PlayerGameModeChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
