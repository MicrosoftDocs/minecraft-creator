---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ActivatePistonEventSignal Class
description: Contents of the Minecraft.ActivatePistonEventSignal class.
---
# ActivatePistonEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Manages callbacks that are connected to piston activations.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ActivatePistonEvent) => undefined): (arg: ActivatePistonEvent) => undefined
`

Adds a callback that will be called when a piston expands or retracts.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: ActivatePistonEvent) => undefined | - |

Returns (arg: ActivatePistonEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: ActivatePistonEvent) => undefined): void
`

Removes a callback from being called when a piston expands or retracts.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: ActivatePistonEvent) => undefined | - |


> [!WARNING]
> This function can throw errors.

