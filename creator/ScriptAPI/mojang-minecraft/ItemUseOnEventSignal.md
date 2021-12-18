---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemUseOnEventSignal Class
description: Contents of the mojang-minecraft.ItemUseOnEventSignal class.
---
# ItemUseOnEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an item being used on a block event.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ItemUseOnEvent) => undefined): (arg: ItemUseOnEvent) => undefined
`

Adds a callback that will be called when an item is used on a block.
#### **Parameters**
- **callback**: (arg: [*ItemUseOnEvent*](ItemUseOnEvent.md)) => undefined

#### **Returns** (arg: [*ItemUseOnEvent*](ItemUseOnEvent.md)) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: ItemUseOnEvent) => undefined): void
`

Removes a callback from being called when an item is used on a block.
#### **Parameters**
- **callback**: (arg: [*ItemUseOnEvent*](ItemUseOnEvent.md)) => undefined


> [!WARNING]
> This function can throw errors.


