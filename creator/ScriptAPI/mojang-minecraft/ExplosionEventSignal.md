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
subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void
`

Adds a callback that will be called when an explosion occurs.
#### **Parameters**
- **callback**: (arg: [*ExplosionEvent*](ExplosionEvent.md)) => *void*

#### **Returns** (arg: [*ExplosionEvent*](ExplosionEvent.md)) => *void*


### **unsubscribe**
`
unsubscribe(callback: (arg: ExplosionEvent) => void): void
`

Removes a callback from being called when an explosion occurs.
#### **Parameters**
- **callback**: (arg: [*ExplosionEvent*](ExplosionEvent.md)) => *void*


> [!WARNING]
> This function can throw errors.

