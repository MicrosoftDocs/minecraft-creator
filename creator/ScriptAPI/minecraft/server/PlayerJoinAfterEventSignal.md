---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerJoinAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerJoinAfterEventSignal class.
---
# PlayerJoinAfterEventSignal Class

Manages callbacks that are connected to a player joining the world.

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [subscribe](#subscribe)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [unsubscribe](#unsubscribe)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **subscribe**
`
subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void
`

Adds a callback that will be called when a player joins the world.

#### **Parameters**
- **callback**: (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void
`

Removes a callback from being called when a player joins the world.

#### **Parameters**
- **callback**: (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
::: moniker-end
