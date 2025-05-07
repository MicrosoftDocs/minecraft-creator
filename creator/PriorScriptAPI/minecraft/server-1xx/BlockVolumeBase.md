---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockVolumeBase Class
description: Contents of the @minecraft/server.BlockVolumeBase class (Version 1.x.x).
---
# BlockVolumeBase Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockVolumeBase.md).

## Classes that extend BlockVolumeBase
- [*ListBlockVolume*](ListBlockVolume.md)
- [*BlockVolume*](BlockVolume.md)

Base type for BlockVolumes.

## Methods
- [getBlockLocationIterator](#getblocklocationiterator)
- [getCapacity](#getcapacity)
- [getMax](#getmax)
- [getMin](#getmin)
- [getSpan](#getspan)
- [isInside](#isinside)
- [translate](#translate)

### **getBlockLocationIterator**
`
getBlockLocationIterator(): BlockLocationIterator
`

Fetch a [*@minecraft/server.BlockLocationIterator*](../../../priorscriptapi/minecraft/server-1xx/BlockLocationIterator.md) that represents all of the block world locations within the specified volume

**Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

### **getCapacity**
`
getCapacity(): number
`

Return the capacity (volume) of the BlockVolume (W*D*H)

**Returns** *number*

### **getMax**
`
getMax(): Vector3
`

Get the largest corner position of the volume (guaranteed to be >= min)

**Returns** [*Vector3*](Vector3.md)
  
Notes:
- This function can throw errors.

### **getMin**
`
getMin(): Vector3
`

Get the smallest corner position of the volume (guaranteed to be <= max)

**Returns** [*Vector3*](Vector3.md)
  
Notes:
- This function can throw errors.

### **getSpan**
`
getSpan(): Vector3
`

Get a [*@minecraft/server.Vector3*](../../../priorscriptapi/minecraft/server-1xx/Vector3.md) object where each component represents the number of blocks along that axis

**Returns** [*Vector3*](Vector3.md)

### **isInside**
`
isInside(location: Vector3): boolean
`

Check to see if a given world block location is inside a BlockVolume

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)

**Returns** *boolean*

### **translate**
`
translate(delta: Vector3): void
`

Move a BlockVolume by a specified amount

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)
  
  Amount of blocks to move by
