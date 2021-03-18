---
title: Minecraft.BlockLocation
description: Contents of the Minecraft.BlockLocation class
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
---
# BlockLocation

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

Returns [*BlockLocation*]("BlockLocation.md")

### **equals**
`
equals(other: BlockLocation): boolean
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **other** | [*BlockLocation*]("BlockLocation.md") | - |

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

Returns [*BlockLocation*]("BlockLocation.md")

### **above**
`
above(): BlockLocation
`


Returns [*BlockLocation*]("BlockLocation.md")

