---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.IPlayerJoinAfterEventSignal Class
description: Contents of the @minecraft/server.IPlayerJoinAfterEventSignal class.
---
# IPlayerJoinAfterEventSignal Class

## Classes that extend IPlayerJoinAfterEventSignal
- [*PlayerJoinAfterEventSignal*](PlayerJoinAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a player joins a world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void
`

Subscribes to the event.

#### **Parameters**
- **callback**: (arg: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void
`

Unsubscribes from the event.

#### **Parameters**
- **callback**: (arg: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
