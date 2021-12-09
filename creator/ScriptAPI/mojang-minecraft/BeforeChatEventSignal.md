---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeChatEventSignal Class
description: Contents of the mojang-minecraft.BeforeChatEventSignal class.
---
# BeforeChatEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an event that fires before chat messages are sent.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BeforeChatEvent) => undefined): (arg: BeforeChatEvent) => undefined
`

Adds a callback that will be called before new chat messages are sent.
#### **Parameters**
- **callback**: (arg: BeforeChatEvent) => undefined

#### **Returns** (arg: BeforeChatEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeChatEvent) => undefined): void
`

Removes a callback from being called before new chat messages are sent.
#### **Parameters**
- **callback**: (arg: BeforeChatEvent) => undefined


> [!WARNING]
> This function can throw errors.


