---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityCreateEventSignal Class
description: Contents of the mojang-minecraft.EntityCreateEventSignal class.
---
# EntityCreateEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Manages callbacks that are connected to when a new entity is created.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: EntityCreateEvent) => undefined): (arg: EntityCreateEvent) => undefined
`

Adds a callback that will be called when a new entity is created.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | (arg: EntityCreateEvent) => undefined | n/a | - |

Returns (arg: EntityCreateEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: EntityCreateEvent) => undefined): void
`

Removes a callback from being called when a new entity is created.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | (arg: EntityCreateEvent) => undefined | n/a | - |


> [!WARNING]
> This function can throw errors.


