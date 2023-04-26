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

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **pos**: [*Vector3*](Vector3.md)

#### **Returns** *boolean*

### **doesVolumeTouchFaces**
`
static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): boolean
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **other**: [*BlockVolume*](BlockVolume.md)

#### **Returns** *boolean*

### **equals**
`
static equals(volume: BlockVolume, other: BlockVolume): boolean
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **other**: [*BlockVolume*](BlockVolume.md)

#### **Returns** *boolean*

### **getBlockLocationIterator**
`
static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

### **getBoundingBox**
`
static getBoundingBox(volume: BlockVolume): BoundingBox
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)

### **getCapacity**
`
static getCapacity(volume: BlockVolume): number
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** *number*

### **getMax**
`
static getMax(volume: BlockVolume): Vector3
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*Vector3*](Vector3.md)

### **getMin**
`
static getMin(volume: BlockVolume): Vector3
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*Vector3*](Vector3.md)

### **getSpan**
`
static getSpan(volume: BlockVolume): Vector3
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*Vector3*](Vector3.md)

### **intersects**
`
static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **other**: [*BlockVolume*](BlockVolume.md)

#### **Returns** [*BlockVolumeIntersection*](BlockVolumeIntersection.md)

### **isInside**
`
static isInside(volume: BlockVolume, pos: Vector3): number
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **pos**: [*Vector3*](Vector3.md)

#### **Returns** *number*

### **translate**
`
static translate(volume: BlockVolume, delta: Vector3): BlockVolume
`

#### **Parameters**
- **volume**: [*BlockVolume*](BlockVolume.md)
- **delta**: [*Vector3*](Vector3.md)

#### **Returns** [*BlockVolume*](BlockVolume.md)
