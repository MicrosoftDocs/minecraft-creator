---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.SelectionContainerVolume Class
description: Contents of the @minecraft/server-editor.SelectionContainerVolume class.
---
# SelectionContainerVolume Class

## Extends
- [*SelectionContainerBase*](SelectionContainerBase.md)

## Properties

### **isEmpty**
`read-only isEmpty: boolean;`

Type: *boolean*

### **volumeCount**
`read-only volumeCount: number;`

Type: *number*

## Methods
- [add](#add)
- [clear](#clear)
- [get](#get)
- [getBoundingBox](#getboundingbox)
- [moveTo](#moveto)
- [remove](#remove)
- [set](#set)
- [translate](#translate)

### **add**
`
add(volume: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **volume**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **clear**
`
clear(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **get**
`
"get"(): RelativeVolumeListBlockVolume
`

**Returns** [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md)

### **getBoundingBox**
`
getBoundingBox(): minecraftserver.BoundingBox
`

**Returns** [*@minecraft/server.BoundingBox*](../../../scriptapi/minecraft/server/BoundingBox.md)
  
Notes:
- This function can throw errors.
  - Throws *Error*

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
remove(volume: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **volume**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **set**
`
"set"(volume: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **volume**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
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
