---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.EmptySignal Class
description: Contents of the Minecraft.EmptySignal class.
---
# EmptySignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Manages callbacks associated with simple events, like Tick.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: () => undefined): () => undefined
`

Adds a callback that will be called for basic events that take no arguments, like Tick.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns () => undefined


### **unsubscribe**
`
unsubscribe(callback: () => undefined): void
`

Removes a callback from being called for basic events.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |


> [!WARNING]
> This function can throw errors.

