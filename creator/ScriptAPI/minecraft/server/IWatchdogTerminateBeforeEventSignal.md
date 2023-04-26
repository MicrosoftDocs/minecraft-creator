---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IWatchdogTerminateBeforeEventSignal Class
description: Contents of the @minecraft/server.IWatchdogTerminateBeforeEventSignal class.
---
# IWatchdogTerminateBeforeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IWatchdogTerminateBeforeEventSignal
- [*WatchdogTerminateBeforeEventSignal*](WatchdogTerminateBeforeEventSignal.md)

An event that fires before the watchdog is about to terminate a world because various performance metrics for scripting have exceeded a threshold.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*WatchdogTerminateBeforeEvent*](WatchdogTerminateBeforeEvent.md)) => *void*

#### **Returns** (arg: [*WatchdogTerminateBeforeEvent*](WatchdogTerminateBeforeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*WatchdogTerminateBeforeEvent*](WatchdogTerminateBeforeEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
