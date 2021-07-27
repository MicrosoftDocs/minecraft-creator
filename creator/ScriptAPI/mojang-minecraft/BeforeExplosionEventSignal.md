---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeExplosionEventSignal Class
description: Contents of the mojang-minecraft.BeforeExplosionEventSignal class.
---
# BeforeExplosionEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.




## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BeforeExplosionEvent) => undefined): (arg: BeforeExplosionEvent) => undefined
`

#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | (arg: BeforeExplosionEvent) => undefined | n/a | - |

Returns (arg: BeforeExplosionEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeExplosionEvent) => undefined): void
`

#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | (arg: BeforeExplosionEvent) => undefined | n/a | - |


> [!WARNING]
> This function can throw errors.


