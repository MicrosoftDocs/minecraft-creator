---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IPlayerLeaveAfterEventSignal Class
description: Contents of the @minecraft/server.IPlayerLeaveAfterEventSignal class.
---
# IPlayerLeaveAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IPlayerLeaveAfterEventSignal
- [*PlayerLeaveAfterEventSignal*](PlayerLeaveAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a player leaves a world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

#### **Returns** (arg: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveAfterEvent*](PlayerLeaveAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
