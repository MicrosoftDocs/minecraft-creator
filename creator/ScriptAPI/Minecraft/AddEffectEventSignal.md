---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.AddEffectEventSignal Class
description: Contents of the Minecraft.AddEffectEventSignal class.
---
# AddEffectEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Manages callbacks that are connected to when an effect is added to an entity.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ActorAddEffectEvent) => undefined): (arg: ActorAddEffectEvent) => undefined
`

Adds a callback that will be called when an effect is added to an entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: ActorAddEffectEvent) => undefined | - |

Returns (arg: ActorAddEffectEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: ActorAddEffectEvent) => undefined): void
`

Removes a callback from being called when an effect is added to an entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: ActorAddEffectEvent) => undefined | - |


> [!WARNING]
> This function can throw errors.

