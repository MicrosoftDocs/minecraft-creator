---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.DataDrivenEntityTriggerEventSignal Class
description: Contents of the mojang-minecraft.DataDrivenEntityTriggerEventSignal class.
---
# DataDrivenEntityTriggerEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains event registration related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: DataDrivenEntityTriggerEvent) => void
`
Adds a callback that will be called after a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerEvent*](DataDrivenEntityTriggerEvent.md)) => *void*
- **options**?: [*EntityDataDrivenTriggerEventOptions*](EntityDataDrivenTriggerEventOptions.md) = `null`

#### **Returns** (arg: [*DataDrivenEntityTriggerEvent*](DataDrivenEntityTriggerEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void
`
Removes a callback that will be called after a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerEvent*](DataDrivenEntityTriggerEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
