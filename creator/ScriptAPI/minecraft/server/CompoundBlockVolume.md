---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.CompoundBlockVolume Class
description: Contents of the @minecraft/server.CompoundBlockVolume class.
---
# CompoundBlockVolume Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Properties

### **capacity**
`read-only capacity: number;`

Type: *number*

### **volumeCount**
`read-only volumeCount: number;`

Type: *number*

## Methods
- [constructor](#constructor)
- [clear](#clear)
- [getBlockLocationIterator](#getblocklocationiterator)
- [getBoundingBox](#getboundingbox)
- [getMax](#getmax)
- [getMin](#getmin)
- [isInside](#isinside)
- [peekLastVolume](#peeklastvolume)
- [popVolume](#popvolume)
- [pushVolume](#pushvolume)
- [replaceOrAddLastVolume](#replaceoraddlastvolume)
- [translate](#translate)

### **constructor**
`
new CompoundBlockVolume()
`

#### **Returns** [*CompoundBlockVolume*](CompoundBlockVolume.md)

### **clear**
`
clear(): void
`

### **getBlockLocationIterator**
`
getBlockLocationIterator(): BlockLocationIterator
`

#### **Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

### **getBoundingBox**
`
getBoundingBox(): BoundingBox
`

#### **Returns** [*BoundingBox*](BoundingBox.md)

### **getMax**
`
getMax(): Vector3
`

#### **Returns** [*Vector3*](Vector3.md)

### **getMin**
`
getMin(): Vector3
`

#### **Returns** [*Vector3*](Vector3.md)

### **isInside**
`
isInside(delta: Vector3): boolean
`

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)

#### **Returns** *boolean*

### **peekLastVolume**
`
peekLastVolume(): CompoundBlockVolumeItem | undefined
`

#### **Returns** [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md) | *undefined*

### **popVolume**
`
popVolume(): boolean
`

#### **Returns** *boolean*

### **pushVolume**
`
pushVolume(item: CompoundBlockVolumeItem): void
`

#### **Parameters**
- **item**: [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md)

### **replaceOrAddLastVolume**
`
replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean
`

#### **Parameters**
- **item**: [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md)

#### **Returns** *boolean*

### **translate**
`
translate(delta: Vector3): void
`

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)
