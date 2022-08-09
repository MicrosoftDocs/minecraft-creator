---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeItemDefinitionEventSignal Class
description: Contents of the mojang-minecraft.BeforeItemDefinitionEventSignal class.
---
# BeforeItemDefinitionEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an item's definition and components changing.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): (arg: BeforeItemDefinitionTriggeredEvent) => void
`
Adds a callback that will be called when an item's definition and components change.

#### **Parameters**
- **callback**: (arg: [*BeforeItemDefinitionTriggeredEvent*](BeforeItemDefinitionTriggeredEvent.md)) => *void*

#### **Returns** (arg: [*BeforeItemDefinitionTriggeredEvent*](BeforeItemDefinitionTriggeredEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void
`
Removes a callback from being called when an item's definition and components change.

#### **Parameters**
- **callback**: (arg: [*BeforeItemDefinitionTriggeredEvent*](BeforeItemDefinitionTriggeredEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
