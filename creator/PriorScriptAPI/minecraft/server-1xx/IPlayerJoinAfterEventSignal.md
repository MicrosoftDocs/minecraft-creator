---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.IPlayerJoinAfterEventSignal Class
description: Contents of the @minecraft/server.IPlayerJoinAfterEventSignal class (Version 1.x.x).
---
# IPlayerJoinAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module.

> [!CAUTION]
> This class is deprecated and will be removed in 2.0.0.

## Classes that extend IPlayerJoinAfterEventSignal
- [*PlayerJoinAfterEventSignal*](PlayerJoinAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a player joins a world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void
`

Subscribes to the event.

#### **Parameters**
- **callback**: (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void
`

Unsubscribes from the event.

#### **Parameters**
- **callback**: (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
