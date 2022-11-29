---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeExplosionEventSignal Class
description: Contents of the @minecraft/server.BeforeExplosionEventSignal class.
---
# BeforeExplosionEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to before an explosion occurs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void
`

Adds a callback that will be called when before an explosion occurs. The callback can optionally change or cancel explosion behavior.

#### **Parameters**
- **callback**: (arg: [*BeforeExplosionEvent*](BeforeExplosionEvent.md)) => *void*

#### **Returns** (arg: [*BeforeExplosionEvent*](BeforeExplosionEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void
`

Removes a callback from being called from before when an explosion would occur.

#### **Parameters**
- **callback**: (arg: [*BeforeExplosionEvent*](BeforeExplosionEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
