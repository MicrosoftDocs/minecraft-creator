---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemDefinitionEventSignal Class
description: Contents of the mojang-minecraft.ItemDefinitionEventSignal class.
---
# ItemDefinitionEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an item's definition and components changing.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => undefined): (arg: ItemDefinitionTriggeredEvent) => undefined
`

Adds a callback that will be called when an item's definition and components change.
#### **Parameters**
- **callback**: (arg: ItemDefinitionTriggeredEvent) => undefined

#### **Returns** (arg: ItemDefinitionTriggeredEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => undefined): void
`

Removes a callback from being called when an item's definition and components change.
#### **Parameters**
- **callback**: (arg: ItemDefinitionTriggeredEvent) => undefined


> [!WARNING]
> This function can throw errors.


