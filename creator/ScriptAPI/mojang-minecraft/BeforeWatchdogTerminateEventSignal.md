---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeWatchdogTerminateEventSignal Class
description: Contents of the mojang-minecraft.BeforeWatchdogTerminateEventSignal class.
---
# BeforeWatchdogTerminateEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): (arg: BeforeWatchdogTerminateEvent) => void
`
Adds a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.

#### **Parameters**
- **callback**: (arg: [*BeforeWatchdogTerminateEvent*](BeforeWatchdogTerminateEvent.md)) => *void*

#### **Returns** (arg: [*BeforeWatchdogTerminateEvent*](BeforeWatchdogTerminateEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): void
`
Removes a callback from being called when a script runtime is being terminated due to a violation of the performance watchdog system.

#### **Parameters**
- **callback**: (arg: [*BeforeWatchdogTerminateEvent*](BeforeWatchdogTerminateEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
