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

The Compound Block Volume is a collection of individual block volume definitions which, as a collection, define a larger volume of (sometimes non-contiguous) irregular shapes.

This class is loosely based on the concept of CSG (Computational Solid Geometry) and allows a user to create complex volumes by building a stack of volumes and voids to make a larger single volume.

For example - normally a creator would create a hollow cube by creating 6 "wall" surfaces for each face.

With a Compound Block Volume, a creator can define a hollow cube by creating a single outer solid cube, and then defining a further single 'void' cube inside the larger one.

Similarly, the Compound Block Volume can represent irregular shaped volumes (e.g. a tree consists of a trunk and lots of leaf cubes which are not necessarily contiguously placed)

## Properties

### **capacity**
`read-only capacity: number;`

Return the 'capacity' of the bounding rectangle which represents the collection of volumes in the stack

Type: *number*

### **volumeCount**
`read-only volumeCount: number;`

Return the number of volumes (positive and negative) in the volume stack

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

Create a CompoundBlockVolume object

#### **Returns** [*CompoundBlockVolume*](CompoundBlockVolume.md)

### **clear**
`
clear(): void
`

Clear the contents of the volume stack

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBlockLocationIterator**
`
getBlockLocationIterator(): BlockLocationIterator
`

Fetch a Block Location Iterator for the Compound Block Volume.  This iterator will allow a creator to iterate across all of the selected volumes within the larger bounding area.

Areas of a volume which have been overridden by a subtractive volume will not be included in the iterator step.

(i.e. if you push a cube to the stack, and then push a subtractive volume to the same location, then the iterator will step over the initial volume because it is considered negative space)



#### **Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBoundingBox**
`
getBoundingBox(): BoundingBox
`

Get the largest bounding box that represents a container for all of the volumes on the stack

#### **Returns** [*BoundingBox*](BoundingBox.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMax**
`
getMax(): Vector3
`

Get the max block location of the outermost bounding rectangle which represents the volumes on the stack

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMin**
`
getMin(): Vector3
`

Get the min block location of the outermost bounding rectangle which represents the volumes on the stack

#### **Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isInside**
`
isInside(delta: Vector3): boolean
`

Return a boolean representing whether or not a given block location is inside a positive block volume.

E.g. if the stack contains a large cube followed by a slightly smaller negative cube, and the test location is within the negative cube - the function will return false because it's not 'inside' a volume (it IS inside the bounding rectangle, but it is not inside a positively defined location)

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)
  
  block location to test

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **peekLastVolume**
`
peekLastVolume(): CompoundBlockVolumeItem | undefined
`

Inspect the last entry pushed to the volume stack without affecting the stack contents

#### **Returns** [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md) | *undefined* - Returns undefined if the stack is empty

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **popVolume**
`
popVolume(): boolean
`

Remove the last entry from the volume stack.  This will reduce the stack size by one

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **pushVolume**
`
pushVolume(item: CompoundBlockVolumeItem): void
`

Push a volume item to the stack.  The volume item contains an 'action' parameter which determines whether this volume is a positive or negative space

#### **Parameters**
- **item**: [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md)
  
  Item to push to the end of the stack

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **replaceOrAddLastVolume**
`
replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean
`

If the volume stack is empty, this function will push the specified item to the stack.

If the volume stack is NOT empty, this function will replace the last item on the stack with the new item.

#### **Parameters**
- **item**: [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md)
  
  Item to add or replace

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **translate**
`
translate(delta: Vector3): void
`

Move the root block location of the volume by a given amount.  This effectively adds the specified delta to the block location of all of the volumes in the stack

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)
  
  Amount to move

> [!IMPORTANT]
> This function can't be called in read-only mode.
