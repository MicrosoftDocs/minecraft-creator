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
subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void
`

Adds a callback that will be called when a new entity is created.
#### **Parameters**
- **callback**: (arg: [*EntityCreateEvent*](EntityCreateEvent.md)) => *void*

#### **Returns** (arg: [*EntityCreateEvent*](EntityCreateEvent.md)) => *void*


### **unsubscribe**
`
unsubscribe(callback: (arg: EntityCreateEvent) => void): void
`

Removes a callback from being called when a new entity is created.
#### **Parameters**
- **callback**: (arg: [*EntityCreateEvent*](EntityCreateEvent.md)) => *void*


> [!WARNING]
> This function can throw errors.


