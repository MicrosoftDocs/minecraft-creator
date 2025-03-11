---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.RelativeVolumeListBlockVolume Class
description: Contents of the @minecraft/server-editor.RelativeVolumeListBlockVolume class.
---
# RelativeVolumeListBlockVolume Class

## Extends
- [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md)

## Properties

### **isEmpty**
`read-only isEmpty: boolean;`

Type: *boolean*

### **origin**
`origin?: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **volumeCount**
`read-only volumeCount: number;`

Type: *number*

## Methods
- [constructor](#constructor)
- [add](#add)
- [clear](#clear)
- [getVolumeList](#getvolumelist)
- [hasAdjacent](#hasadjacent)
- [moveTo](#moveto)
- [remove](#remove)
- [set](#set)
- [translate](#translate)

### **constructor**
`
new RelativeVolumeListBlockVolume(origin?: minecraftserver.Vector3)
`

#### **Parameters**
- **origin**?: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md) = `null`

**Returns** [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md)

### **add**
`
add(toAdd: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **toAdd**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **clear**
`
clear(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **getVolumeList**
`
getVolumeList(): minecraftserver.BlockVolume[]
`

**Returns** [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md)[]
  
Notes:
- This function can't be called in read-only mode.

### **hasAdjacent**
`
hasAdjacent(location: minecraftserver.Vector3, normalizedOffset: minecraftserver.Vector3): boolean
`

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
- **normalizedOffset**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

**Returns** *boolean*

### **moveTo**
`
moveTo(location: minecraftserver.Vector3): void
`

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **remove**
`
remove(toRemove: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **toRemove**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **set**
`
"set"(toSet: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **toSet**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **translate**
`
translate(offset: minecraftserver.Vector3): void
`

#### **Parameters**
- **offset**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.
