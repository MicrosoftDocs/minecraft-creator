---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityHitEventSignal Class
description: Contents of the mojang-minecraft.EntityHitEventSignal class.
---
# EntityHitEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when an entity makes a melee attack on another entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void
`
Adds a callback that will be called when an entity hits another entity.

#### **Parameters**
- **callback**: (arg: [*EntityHitEvent*](EntityHitEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

#### **Returns** (arg: [*EntityHitEvent*](EntityHitEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHitEvent) => void): void
`
Removes a callback from being called when an entity makes a melee attack on another entity.

#### **Parameters**
- **callback**: (arg: [*EntityHitEvent*](EntityHitEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
