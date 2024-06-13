---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockVolumeBase Class
description: Contents of the @minecraft/server.BlockVolumeBase class.
---
# BlockVolumeBase Class

## Classes that extend BlockVolumeBase
- [*BlockVolume*](BlockVolume.md)
- [*ListBlockVolume*](ListBlockVolume.md)

Base type for BlockVolumes.

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [getBlockLocationIterator](#getblocklocationiterator)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [getBoundingBox](#getboundingbox)
::: moniker-end
- [getCapacity](#getcapacity)
- [getMax](#getmax)
- [getMin](#getmin)
- [getSpan](#getspan)
- [isInside](#isinside)
- [translate](#translate)

::: moniker range="=minecraft-bedrock-experimental"
### **getBlockLocationIterator**
`
getBlockLocationIterator(): BlockLocationIterator
`

Fetch a [*@minecraft/server.BlockLocationIterator*](../../minecraft/server/BlockLocationIterator.md) that represents all of the block world locations within the specified volume

**Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **getBoundingBox**
`
getBoundingBox(): BoundingBox
`

Return a [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) object which represents the validated min and max coordinates of the volume

**Returns** [*BoundingBox*](BoundingBox.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

### **getCapacity**
`
getCapacity(): number
`

Return the capacity (volume) of the BlockVolume (W*D*H)

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMax**
`
getMax(): Vector3
`

Get the largest corner position of the volume (guaranteed to be >= min)

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getMin**
`
getMin(): Vector3
`

Get the smallest corner position of the volume (guaranteed to be <= max)

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getSpan**
`
getSpan(): Vector3
`

Get a [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) object where each component represents the number of blocks along that axis

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isInside**
`
isInside(location: Vector3): boolean
`

Check to see if a given world block location is inside a BlockVolume

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **translate**
`
translate(delta: Vector3): void
`

Move a BlockVolume by a specified amount

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)
  
  Amount of blocks to move by

> [!IMPORTANT]
> This function can't be called in read-only mode.
