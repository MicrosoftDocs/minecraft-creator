---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockVolumeUtils Class
description: Contents of the @minecraft/server.BlockVolumeUtils class.
---
# BlockVolumeUtils Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Block Volume Utils is a utility class that provides a number of useful functions for the creation and utility of {@link @minecraft-server.BlockVolume} objects

## Methods
- [doesLocationTouchFaces](#doeslocationtouchfaces)
- [doesVolumeTouchFaces](#doesvolumetouchfaces)
- [equals](#equals)
- [getBlockLocationIterator](#getblocklocationiterator)
- [getBoundingBox](#getboundingbox)
- [getCapacity](#getcapacity)
- [getMax](#getmax)
- [getMin](#getmin)
- [getSpan](#getspan)
- [intersects](#intersects)
- [isInside](#isinside)
- [translate](#translate)

### **doesLocationTouchFaces**
`
static doesLocationTouchFaces(volume: BlockVolume, pos: Vector3): boolean
`

Check to see if the given location is directly adjacent to the outer surface of a BlockVolume.  



#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
  
  The volume to test against
- **pos**: [*Vector3*](Vector3.md)
  
  The world block location to test

#### **Returns** *boolean* - If the location is either inside or more than 0 blocks away, the function will return false.,If the location is directly contacting the outer surface of the BlockVolume, the function will return true. - If the location is either inside or more than 0 blocks away, the function will return false.,If the location is directly contacting the outer surface of the BlockVolume, the function will return true.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **doesVolumeTouchFaces**
`
static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): boolean
`

Check to see if a two block volumes are directly adjacent and two faces touch.

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
  
  The volume to test against
- **other**: [*BlockVolume*](BlockVolume.md)
  
  The volume to test

#### **Returns** *boolean* - If the outer faces of both block volumes touch and are directly adjacent at any point, return true.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **equals**
`
static equals(volume: BlockVolume, other: BlockVolume): boolean
`

Test the equality of two block volumes

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **other**: [*BlockVolume*](BlockVolume.md)

#### **Returns** *boolean* - Return true if two block volumes are identical

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBlockLocationIterator**
`
static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator
`

Fetch a [*@minecraft/server.BlockLocationIterator*](../../minecraft/server/BlockLocationIterator.md) that represents all of the block world locations within the specified volume

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBoundingBox**
`
static getBoundingBox(volume: BlockVolume): BoundingBox
`

Return a [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) object which represents the validated min and max coordinates of the volume

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getCapacity**
`
static getCapacity(volume: BlockVolume): number
`

Return the capacity (volume) of the BlockVolume (W*D*H)

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMax**
`
static getMax(volume: BlockVolume): Vector3
`

Get the largest corner position of the volume (guaranteed to be >= min)

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMin**
`
static getMin(volume: BlockVolume): Vector3
`

Get the smallest corner position of the volume (guaranteed to be <= max)

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getSpan**
`
static getSpan(volume: BlockVolume): Vector3
`

Get a [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) object where each component represents the number of blocks along that axis

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **intersects**
`
static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection
`

Return an enumeration which represents the intersection between two BlockVolume objects

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **other**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*BlockVolumeIntersection*](BlockVolumeIntersection.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isInside**
`
static isInside(volume: BlockVolume, pos: Vector3): boolean
`

Check to see if a given world block location is inside a BlockVolume

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **pos**: [*Vector3*](Vector3.md)

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **translate**
`
static translate(volume: BlockVolume, delta: Vector3): BlockVolume
`

Move a BlockVolume by a specified amount

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **delta**: [*Vector3*](Vector3.md)
  
  Amount of blocks to move by

#### **Returns** [*BlockVolume*](BlockVolume.md) - Returns a new BlockVolume object which represents the new volume

> [!IMPORTANT]
> This function can't be called in read-only mode.
