---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockLocation Class
description: Contents of the Minecraft.BlockLocation class.
---
# BlockLocation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains the integer X, Y, Z coordinates for a block. For decimal locations useful for entities, items, and more, see [*Minecraft.Location*](../Minecraft/Location.md).

## Properties
### **x** - `number`
The X coordinate.


### **y** - `number`
The integer-based Y position.


### **z** - `number`
The integer-based Z position.



## Methods
- [constructor](#constructor)
- [equals](#equals)
- [offset](#offset)
- [above](#above)
  
### **constructor**
`
new BlockLocation(x: number, y: number, z: number)
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **x** | *number* | - |
| **y** | *number* | - |
| **z** | *number* | - |

Returns [*BlockLocation*](BlockLocation.md)


### **equals**
`
equals(other: BlockLocation): boolean
`

Compares this BlockLocation and another BlockLocation to one another.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **other** | [*BlockLocation*](BlockLocation.md) | Other block location to compare this BlockLocation to. |

Returns *boolean* - True if the two block locations are equal.


### **offset**
`
offset(x: number, y: number, z: number): BlockLocation
`

Returns a block location using a position relative to this block location
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **x** | *number* | X offset relative to this BlockLocation. |
| **y** | *number* | Y offset relative to this BlockLocation. |
| **z** | *number* | Z offset relative to this BlockLocation. |

Returns [*BlockLocation*](BlockLocation.md) - BlockLocation that is positioned relative to this BlockLocation.


### **above**
`
above(): BlockLocation
`

Returns a BlockLocation for a block above this BlockLocation (that is, y - 1).

Returns [*BlockLocation*](BlockLocation.md)


