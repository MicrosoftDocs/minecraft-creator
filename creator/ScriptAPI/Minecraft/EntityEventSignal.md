---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.EntityEventSignal Class
description: Contents of the Minecraft.EntityEventSignal class.
---
# EntityEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.



## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: EntityEvent) => undefined): (arg: EntityEvent) => undefined
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: EntityEvent) => undefined | - |

Returns (arg: EntityEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: EntityEvent) => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: EntityEvent) => undefined | - |


> [!WARNING]
> This function can throw errors.

