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

Manages callbacks that are connected to before an explosion occurs.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BeforeExplosionEvent) => undefined): (arg: BeforeExplosionEvent) => undefined
`

Adds a callback that will be called when before an explosion occurs. The callback can optionally change or cancel explosion behavior.
#### **Parameters**
- **callback**: (arg: [*BeforeExplosionEvent*](BeforeExplosionEvent.md)) => undefined

#### **Returns** (arg: [*BeforeExplosionEvent*](BeforeExplosionEvent.md)) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeExplosionEvent) => undefined): void
`

Removes a callback from being called from before when an explosion would occur.
#### **Parameters**
- **callback**: (arg: [*BeforeExplosionEvent*](BeforeExplosionEvent.md)) => undefined


> [!WARNING]
> This function can throw errors.


