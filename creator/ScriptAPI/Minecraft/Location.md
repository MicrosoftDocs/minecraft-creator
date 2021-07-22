---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Location Class
description: Contents of the Minecraft.Location class.
---
# Location Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains a location description that is useful for entities and other items. X, Y, and Z can contain decimal fractions. For integer-based locations useful for blocks, see [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md).

## Properties
### **x** - `number`
X component of this location.


### **y** - `number`
Y component of this location.


### **z** - `number`
Z component of this location.



## Methods
- [constructor](#constructor)
- [equals](#equals)
  
### **constructor**
`
new Location(x: number, y: number, z: number)
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **x** | *number* | - |
| **y** | *number* | - |
| **z** | *number* | - |

Returns [*Location*](Location.md)


### **equals**
`
equals(other: Location): boolean
`

Compares this Location and another Location to one another.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **other** | [*Location*](Location.md) | Other location to compare this Location to. |

Returns *boolean* - True if the two locations are equal.


