---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeDataDrivenEntityTriggerEventSignal Class
description: Contents of the @minecraft/server.BeforeDataDrivenEntityTriggerEventSignal class.
---
# BeforeDataDrivenEntityTriggerEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: BeforeDataDrivenEntityTriggerEvent) => void
`

Adds a callback that will be called before a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*BeforeDataDrivenEntityTriggerEvent*](BeforeDataDrivenEntityTriggerEvent.md)) => *void*
- **options**?: [*EntityDataDrivenTriggerEventOptions*](EntityDataDrivenTriggerEventOptions.md) = `null`

#### **Returns** (arg: [*BeforeDataDrivenEntityTriggerEvent*](BeforeDataDrivenEntityTriggerEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void
`

Removes a callback that will be called before a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*BeforeDataDrivenEntityTriggerEvent*](BeforeDataDrivenEntityTriggerEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
