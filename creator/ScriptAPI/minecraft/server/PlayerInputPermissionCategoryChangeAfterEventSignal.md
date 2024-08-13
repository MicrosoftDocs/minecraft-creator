---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
subscribe(callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void): (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void
`

Adds a callback that will be called after a players input permissions change.

#### **Parameters**
- **callback**: (arg: [*PlayerInputPermissionCategoryChangeAfterEvent*](PlayerInputPermissionCategoryChangeAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerInputPermissionCategoryChangeAfterEvent*](PlayerInputPermissionCategoryChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void): void
`

Removes a callback from being called after a players input permissions change.

#### **Parameters**
- **callback**: (arg: [*PlayerInputPermissionCategoryChangeAfterEvent*](PlayerInputPermissionCategoryChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
