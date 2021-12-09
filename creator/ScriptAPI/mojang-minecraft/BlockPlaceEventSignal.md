---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockPlaceEventSignal Class
description: Contents of the mojang-minecraft.BlockPlaceEventSignal class.
---
# BlockPlaceEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when a block is broken.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BlockPlaceEvent) => undefined): (arg: BlockPlaceEvent) => undefined
`

Adds a callback that will be called when a block is placed by a player.
#### **Parameters**
- **callback**: (arg: BlockPlaceEvent) => undefined

#### **Returns** (arg: BlockPlaceEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BlockPlaceEvent) => undefined): void
`

Removes a callback from being called when an block is placed.
#### **Parameters**
- **callback**: (arg: BlockPlaceEvent) => undefined


> [!WARNING]
> This function can throw errors.


