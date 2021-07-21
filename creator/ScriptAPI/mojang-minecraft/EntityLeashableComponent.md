---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityLeashableComponent Class
description: Contents of the mojang-minecraft.EntityLeashableComponent class.
---
# EntityLeashableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.


## Properties
### **id**
`read-only id: string;`

Type: *string*


### **softDistance**
`read-only softDistance: number;`

Type: *number*



## Methods
- [leash](#leash)
- [unleash](#unleash)
  
### **leash**
`
leash(leashHolder: Entity): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **leashHolder** | [*Entity*](Entity.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **unleash**
`
unleash(): void
`



> [!WARNING]
> This function can throw errors.


