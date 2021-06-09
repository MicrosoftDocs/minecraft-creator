---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.TickEventSignal Class
description: Contents of the Minecraft.TickEventSignal class.
---
# TickEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Manages callbacks that are connected to a tick event.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: () => undefined): () => undefined
`

Adds a callback that will be called on every tick.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns () => undefined


### **unsubscribe**
`
unsubscribe(callback: () => undefined): void
`

Removes a callback from being called every tick.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

