---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerSpawnAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerSpawnAfterEventSignal class.
---
# PlayerSpawnAfterEventSignal Class

Registers an event when a player is spawned (or re-spawned after death) and fully ready within the world.

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
subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void
`

Registers a new event receiver for this particular type of event.

#### **Parameters**
- **callback**: (arg0: [*PlayerSpawnAfterEvent*](PlayerSpawnAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerSpawnAfterEvent*](PlayerSpawnAfterEvent.md)) => *void*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void
`

De-registers an event receiver for the player spawn event.

#### **Parameters**
- **callback**: (arg0: [*PlayerSpawnAfterEvent*](PlayerSpawnAfterEvent.md)) => *void*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
::: moniker-end
