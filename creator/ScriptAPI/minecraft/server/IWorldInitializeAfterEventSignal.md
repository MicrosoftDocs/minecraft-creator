---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IWorldInitializeAfterEventSignal Class
description: Contents of the @minecraft/server.IWorldInitializeAfterEventSignal class.
---
# IWorldInitializeAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IWorldInitializeAfterEventSignal
- [*WorldInitializeAfterEventSignal*](WorldInitializeAfterEventSignal.md)

An event that fires when a world is first initialized or loaded.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*

#### **Returns** (arg: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
