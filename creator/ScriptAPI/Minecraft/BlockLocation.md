---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: Minecraft.BlockLocation Class
description: Contents of the Minecraft.BlockLocation class.
---
# BlockLocation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.
## Properties
### **x** - `number`



### **y** - `number`



### **z** - `number`




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

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **other** | [*BlockLocation*](BlockLocation.md) | - |

Returns *boolean*


### **offset**
`
offset(x: number, y: number, z: number): BlockLocation
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **x** | *number* | - |
| **y** | *number* | - |
| **z** | *number* | - |

Returns [*BlockLocation*](BlockLocation.md)


### **above**
`
above(): BlockLocation
`


Returns [*BlockLocation*](BlockLocation.md)


