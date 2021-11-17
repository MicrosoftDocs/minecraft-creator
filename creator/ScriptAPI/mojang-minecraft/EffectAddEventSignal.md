---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EffectAddEventSignal Class
description: Contents of the mojang-minecraft.EffectAddEventSignal class.
---
# EffectAddEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when an effect is added to an entity.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback:(arg: EffectAddEvent) => undefined): (arg: EffectAddEvent) => undefined
`

Adds a callback that will be called when an effect is added to an entity.
#### **Parameters**
- **callback**: (arg: EffectAddEvent) => undefined

#### **Returns** (arg: EffectAddEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback:(arg: EffectAddEvent) => undefined): void
`

Removes a callback from being called when an effect is added to an entity.
#### **Parameters**
- **callback**: (arg: EffectAddEvent) => undefined


> [!WARNING]
> This function can throw errors.


