---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ProjectileHitEntityAfterEventSignal Class
description: Contents of the @minecraft/server.ProjectileHitEntityAfterEventSignal class (Version 1.x.x).
---
# ProjectileHitEntityAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ProjectileHitEntityAfterEventSignal.md).

Manages callbacks that are connected to when a projectile hits an entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void
`

Adds a callback that will be called when a projectile hits an entity.

#### **Parameters**
- **callback**: (arg0: [*ProjectileHitEntityAfterEvent*](ProjectileHitEntityAfterEvent.md)) => *void*

**Returns** (arg0: [*ProjectileHitEntityAfterEvent*](ProjectileHitEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void
`

Removes a callback from being called when a projectile hits an entity.

#### **Parameters**
- **callback**: (arg0: [*ProjectileHitEntityAfterEvent*](ProjectileHitEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
