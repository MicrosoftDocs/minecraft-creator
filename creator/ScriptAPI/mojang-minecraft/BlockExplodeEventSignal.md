---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockExplodeEventSignal Class
description: Contents of the mojang-minecraft.BlockExplodeEventSignal class.
---
# BlockExplodeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.



## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BlockExplodeEvent) => undefined): (arg: BlockExplodeEvent) => undefined
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | (arg: BlockExplodeEvent) => undefined | n/a | - |

Returns (arg: BlockExplodeEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BlockExplodeEvent) => undefined): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | (arg: BlockExplodeEvent) => undefined | n/a | - |


> [!WARNING]
> This function can throw errors.


