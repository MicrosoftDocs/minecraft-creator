---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IDataDrivenEntityTriggerAfterEventSignal Class
description: Contents of the @minecraft/server.IDataDrivenEntityTriggerAfterEventSignal class.
---
# IDataDrivenEntityTriggerAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IDataDrivenEntityTriggerAfterEventSignal
- [*DataDrivenEntityTriggerAfterEventSignal*](DataDrivenEntityTriggerAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires when an entities' definition is triggered to change.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: DataDrivenEntityTriggerAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*
- **options**?: [*EntityDataDrivenTriggerEventOptions*](EntityDataDrivenTriggerEventOptions.md) = `null`

#### **Returns** (arg: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
