---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeActivatePistonEventSignal Class
description: Contents of the Minecraft.BeforeActivatePistonEventSignal class.
---
# BeforeActivatePistonEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Manages callbacks that are connected to an event that fires before a piston is activated.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BeforeActivatePistonEvent) => undefined): (arg: BeforeActivatePistonEvent) => undefined
`

Adds a callback that will be called before a piston expands or retracts.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: BeforeActivatePistonEvent) => undefined | - |

Returns (arg: BeforeActivatePistonEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeActivatePistonEvent) => undefined): void
`

Removes a callback from being called before a piston expands or retracts.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: BeforeActivatePistonEvent) => undefined | - |


> [!WARNING]
> This function can throw errors.

