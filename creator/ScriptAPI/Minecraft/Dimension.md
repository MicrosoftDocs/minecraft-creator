---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: Minecraft.Dimension Class
description: Contents of the Minecraft.Dimension class.
---
# Dimension Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.A class that represents the entire world of the server


## Methods
- [isEmpty](#isempty)
  
### **isEmpty**
`
isEmpty(location: BlockLocation): boolean
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*BlockLocation*](BlockLocation.md) | The location at which to check for emptiness |

Returns *boolean*

True if the block at the location is air (empty)


