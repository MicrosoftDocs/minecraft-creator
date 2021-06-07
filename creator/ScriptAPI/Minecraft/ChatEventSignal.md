---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChatEventSignal Class
description: Contents of the Minecraft.ChatEventSignal class.
---
# ChatEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Manages callbacks that are connected to chat messages being sent.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg0: ChatEvent) => undefined): (arg0: ChatEvent) => undefined
`

Adds a callback that will be called when new chat messages are sent.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg0: ChatEvent) => undefined | - |

Returns (arg0: ChatEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg0: ChatEvent) => undefined): void
`

Removes a callback from being called when new chat messages are sent.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg0: ChatEvent) => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

