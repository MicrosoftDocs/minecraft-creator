---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockLocation Class
description: Contents of the mojang-minecraft.BlockLocation class.
---
# BlockLocation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains the integer X, Y, Z coordinates for a block. For decimal locations useful for entities, items, and more, see @Minecraft.Location.

## Properties
### **x**
`x: number;`

The X coordinate.

Type: *number*


### **y**
`y: number;`

The integer-based Y position.

Type: *number*


### **z**
`z: number;`

The integer-based Z position.

Type: *number*



## Methods
- [constructor](#constructor)
- [above](#above)
- [blocksBetween](#blocksbetween)
- [equals](#equals)
- [offset](#offset)
  
### **constructor**
`
new BlockLocation(x: number, y: number, z: number)
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **x** | *number* | n/a | - |
| **y** | *number* | n/a | - |
| **z** | *number* | n/a | - |

Returns [*BlockLocation*](BlockLocation.md)


### **above**
`
above(): BlockLocation
`

Returns a BlockLocation for a block above this BlockLocation (that is, y - 1).

Returns [*BlockLocation*](BlockLocation.md)


### **blocksBetween**
`
blocksBetween(other: BlockLocation): BlockLocation[]
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **other** | [*BlockLocation*](BlockLocation.md) | n/a | - |

Returns [*BlockLocation*](BlockLocation.md)[]


### **equals**
`
equals(other: BlockLocation): boolean
`

Compares this BlockLocation and another BlockLocation to one another.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **other** | [*BlockLocation*](BlockLocation.md) | n/a | Other block location to compare this BlockLocation to. |

Returns *boolean* - True if the two block locations are equal.


### **offset**
`
offset(x: number, y: number, z: number): BlockLocation
`

Returns a block location using a position relative to this block location
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **x** | *number* | n/a | X offset relative to this BlockLocation. |
| **y** | *number* | n/a | Y offset relative to this BlockLocation. |
| **z** | *number* | n/a | Z offset relative to this BlockLocation. |

Returns [*BlockLocation*](BlockLocation.md) - BlockLocation that is positioned relative to this BlockLocation.



