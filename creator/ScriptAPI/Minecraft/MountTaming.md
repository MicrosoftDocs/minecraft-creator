---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.MountTaming Class
description: Contents of the Minecraft.MountTaming class.
---
# MountTaming Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains options for taming a rideable entity based on the entity that mounts it.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:mount_taming.



## Methods
- [setTamed](#settamed)
  
### **setTamed**
`
setTamed(showParticles: boolean): void
`

Sets this rideable entity as tamed.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **showParticles** | *boolean* | Whether to show effect particles when this entity is tamed. |


> [!WARNING]
> This function can throw errors.

