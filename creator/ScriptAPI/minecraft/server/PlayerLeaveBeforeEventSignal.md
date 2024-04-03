---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerLeaveBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerLeaveBeforeEventSignal class.
---
# PlayerLeaveBeforeEventSignal Class

Manages callbacks that are connected to a player leaving the world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void
`

Adds a callback that will be called when a player leaves the world.

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveBeforeEvent*](PlayerLeaveBeforeEvent.md)) => *void*

**Returns** (arg: [*PlayerLeaveBeforeEvent*](PlayerLeaveBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void
`

Removes a callback that will be called when a player leaves the world.

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveBeforeEvent*](PlayerLeaveBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
