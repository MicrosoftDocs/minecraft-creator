---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ProjectileHitEventSignal Class
description: Contents of the mojang-minecraft.ProjectileHitEventSignal class.
---
# ProjectileHitEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when a projectile hits an entity or block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ProjectileHitEvent) => void): (arg: ProjectileHitEvent) => void
`
Adds a callback that will be called when a projectile hits an entity or block.

#### **Parameters**
- **callback**: (arg: [*ProjectileHitEvent*](ProjectileHitEvent.md)) => *void*

#### **Returns** (arg: [*ProjectileHitEvent*](ProjectileHitEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ProjectileHitEvent) => void): void
`
Removes a callback from being called when a projectile hits an entity or block.

#### **Parameters**
- **callback**: (arg: [*ProjectileHitEvent*](ProjectileHitEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
