---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ExplosionEventSignal Class
description: Contents of the mojang-minecraft.ExplosionEventSignal class.
---
# ExplosionEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when an explosion occurs.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback:(arg: ExplosionEvent) => undefined): (arg: ExplosionEvent) => undefined
`

Adds a callback that will be called when an explosion occurs.
#### **Parameters**
- **callback**: (arg: ExplosionEvent) => undefined

#### **Returns** (arg: ExplosionEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback:(arg: ExplosionEvent) => undefined): void
`

Removes a callback from being called when an explosion occurs.
#### **Parameters**
- **callback**: (arg: ExplosionEvent) => undefined


> [!WARNING]
> This function can throw errors.


