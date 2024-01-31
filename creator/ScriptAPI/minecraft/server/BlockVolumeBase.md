---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockVolumeBase Class
description: Contents of the @minecraft/server.BlockVolumeBase class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockVolumeBase Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [getBlockLocationIterator](#getblocklocationiterator)
- [getBoundingBox](#getboundingbox)
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

#### **Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBoundingBox**
`
getBoundingBox(): BoundingBox
`

#### **Returns** [*BoundingBox*](BoundingBox.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getCapacity**
`
getCapacity(): number
`

#### **Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMax**
`
getMax(): Vector3
`

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMin**
`
getMin(): Vector3
`

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getSpan**
`
getSpan(): Vector3
`

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isInside**
`
isInside(pos: Vector3): boolean
`

#### **Parameters**
- **pos**: [*Vector3*](Vector3.md)

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **translate**
`
translate(delta: Vector3): void
`

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.
