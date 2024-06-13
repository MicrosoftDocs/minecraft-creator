---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerGameModeChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerGameModeChangeAfterEventSignal class.
---
# PlayerGameModeChangeAfterEventSignal Class

Manages callbacks that are connected to after a players game mode is changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void
`

Adds a callback that will be called after a players game mode is changed.

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void
`

Removes a callback from being called after a players game mode is changed.

#### **Parameters**
- **callback**: (arg: [*PlayerGameModeChangeAfterEvent*](PlayerGameModeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
