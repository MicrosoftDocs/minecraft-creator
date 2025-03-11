---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerInputPermissionCategoryChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInputPermissionCategoryChangeAfterEventSignal class.
---
# PlayerInputPermissionCategoryChangeAfterEventSignal Class

Manages callbacks that are connected to after a players input permissions change.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void
`

Adds a callback that will be called after a players input permissions change.

#### **Parameters**
- **callback**: (arg0: [*PlayerInputPermissionCategoryChangeAfterEvent*](PlayerInputPermissionCategoryChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerInputPermissionCategoryChangeAfterEvent*](PlayerInputPermissionCategoryChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void
`

Removes a callback from being called after a players input permissions change.

#### **Parameters**
- **callback**: (arg0: [*PlayerInputPermissionCategoryChangeAfterEvent*](PlayerInputPermissionCategoryChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
