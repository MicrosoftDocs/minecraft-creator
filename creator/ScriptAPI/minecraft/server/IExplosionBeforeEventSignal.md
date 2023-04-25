---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IExplosionBeforeEventSignal Class
description: Contents of the @minecraft/server.IExplosionBeforeEventSignal class.
---
# IExplosionBeforeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IExplosionBeforeEventSignal
- [*ExplosionBeforeEventSignal*](ExplosionBeforeEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires before an explosion begins.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

#### **Returns** (arg: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
