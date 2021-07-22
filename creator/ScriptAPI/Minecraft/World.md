---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.World Class
description: Contents of the Minecraft.World class.
---
# World Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

A class that wraps the state of a dimension (such as the overworld, the nether, or the end)

## Properties
### **events** - `Events`
Contains a set of events that are applicable to the entirety of the world.



## Methods
- [getDimension](#getdimension)
- [getPlayers](#getplayers)
  
### **getDimension**
`
getDimension(dimensionName: ('overworld'|'nether'|'the end')): Dimension
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **dimensionName** | `'overworld'`, `'nether'`, `'the end'` | The name of the Dimension |

Returns [*Dimension*](Dimension.md) - The requested dimension

> [!WARNING]
> Throws if the given dimension name is invalid

### **getPlayers**
`
getPlayers(): Player[]
`

Returns all players currently in the world.

Returns [*Player*](Player.md)[] - All players currently in the world.


