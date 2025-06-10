---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerJoinAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerJoinAfterEventSignal class.
---
# PlayerJoinAfterEventSignal Class

Manages callbacks that are connected to a player joining the world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void
`

Adds a callback that will be called when a player joins the world.

#### **Parameters**
- **callback**: (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void
`

Removes a callback from being called when a player joins the world.

#### **Parameters**
- **callback**: (arg0: [*PlayerJoinAfterEvent*](PlayerJoinAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
