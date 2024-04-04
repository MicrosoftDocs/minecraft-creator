---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.IPlayerSpawnAfterEventSignal Class
description: Contents of the @minecraft/server.IPlayerSpawnAfterEventSignal class.
---
# IPlayerSpawnAfterEventSignal Class

## Classes that extend IPlayerSpawnAfterEventSignal
- [*PlayerSpawnAfterEventSignal*](PlayerSpawnAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a player spawns.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void
`

Subscribes to the event.

#### **Parameters**
- **callback**: (arg: [*PlayerSpawnAfterEvent*](PlayerSpawnAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerSpawnAfterEvent*](PlayerSpawnAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void
`

Unsubscribes from the event.

#### **Parameters**
- **callback**: (arg: [*PlayerSpawnAfterEvent*](PlayerSpawnAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
