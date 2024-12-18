---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ProjectileHitBlockAfterEventSignal Class
description: Contents of the @minecraft/server.ProjectileHitBlockAfterEventSignal class.
---
# ProjectileHitBlockAfterEventSignal Class

Manages callbacks that are connected to when a projectile hits a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void
`

Adds a callback that will be called when a projectile hits a block.

#### **Parameters**
- **callback**: (arg: [*ProjectileHitBlockAfterEvent*](ProjectileHitBlockAfterEvent.md)) => *void*

**Returns** (arg: [*ProjectileHitBlockAfterEvent*](ProjectileHitBlockAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void
`

Removes a callback from being called when a projectile hits a block.

#### **Parameters**
- **callback**: (arg: [*ProjectileHitBlockAfterEvent*](ProjectileHitBlockAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
