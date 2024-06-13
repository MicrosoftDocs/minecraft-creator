---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.CompoundBlockVolume Class
description: Contents of the @minecraft/server.CompoundBlockVolume class.
monikerRange: "=minecraft-bedrock-experimental"
---
# CompoundBlockVolume Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

The Compound Block Volume is a collection of individual block volume definitions which, as a collection, define a larger volume of (sometimes non-contiguous) irregular shapes.

This class is loosely based on the concept of CSG (Computational Solid Geometry) and allows a user to create complex volumes by building a stack of volumes and voids to make a larger single volume.

For example - normally a creator would create a hollow cube by creating 6 "wall" surfaces for each face.

With a Compound Block Volume, a creator can define a hollow cube by creating a single outer solid cube, and then defining a further single 'void' cube inside the larger one.

Similarly, the Compound Block Volume can represent irregular shaped volumes (e.g. a tree consists of a trunk and lots of leaf cubes which are not necessarily contiguously placed).

Each of the volumes added to the CompoundBlockVolume are (by default) relative to the origin set (either at construction or via one of the set functions).

However, it is also possible to push volumes to the compound collection which are absolute in nature and are not affected by origin changes.

## Properties

### **capacity**
`read-only capacity: number;`

Return the 'capacity' of the bounding rectangle which represents the collection of volumes in the stack

Type: *number*

### **items**
`read-only items: CompoundBlockVolumeItem[];`

Type: [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md)[]

### **itemsAbsolute**
`read-only itemsAbsolute: CompoundBlockVolumeItem[];`

Type: [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md)[]

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
- [getOrigin](#getorigin)
- [isEmpty](#isempty)
- [isInside](#isinside)
- [peekLastVolume](#peeklastvolume)
- [popVolume](#popvolume)
- [pushVolume](#pushvolume)
- [replaceOrAddLastVolume](#replaceoraddlastvolume)
- [setOrigin](#setorigin)
- [translateOrigin](#translateorigin)

### **constructor**
`
new CompoundBlockVolume(origin?: Vector3)
`

Create a CompoundBlockVolume object

#### **Parameters**
- **origin**?: [*Vector3*](Vector3.md) = `null`
  
  An optional world space origin on which to center the compound volume.
  
  If not specified, the origin is set to (0,0,0)

**Returns** [*CompoundBlockVolume*](CompoundBlockVolume.md)

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

Note that the Block Locations returned by this iterator are in absolute world space (irrespective of whether the compound volume items pushed are absolute or relative)

**Returns** [*BlockLocationIterator*](BlockLocationIterator.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBoundingBox**
`
getBoundingBox(): BoundingBox
`

Get the largest bounding box that represents a container for all of the volumes on the stack

Note that the bounding box returned is represented in absolute world space  (irrespective of whether the compound volume items pushed are absolute or relative)

**Returns** [*BoundingBox*](BoundingBox.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMax**
`
getMax(): Vector3
`

Get the max block location of the outermost bounding rectangle which represents the volumes on the stack.

Note that the max location returned is in absolute world space (irrespective of whether the compound volume items pushed are absolute or relative)

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getMin**
`
getMin(): Vector3
`

Get the min block location of the outermost bounding rectangle which represents the volumes on the stack.

Note that the min location returned is in absolute world space (irrespective of whether the compound volume items pushed are absolute or relative)

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getOrigin**
`
getOrigin(): Vector3
`

Fetch the origin in world space of the compound volume

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isEmpty**
`
isEmpty(): boolean
`

Return a boolean which signals if there are any volume items pushed to the volume

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isInside**
`
isInside(worldLocation: Vector3): boolean
`

Return a boolean representing whether or not a given absolute world space block location is inside a positive block volume.

E.g. if the stack contains a large cube followed by a slightly smaller negative cube, and the test location is within the negative cube - the function will return false because it's not 'inside' a volume (it IS inside the bounding rectangle, but it is not inside a positively defined location)

#### **Parameters**
- **worldLocation**: [*Vector3*](Vector3.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **peekLastVolume**
`
peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined
`

Inspect the last entry pushed to the volume stack without affecting the stack contents.

#### **Parameters**
- **forceRelativity**?: [*CompoundBlockVolumePositionRelativity*](CompoundBlockVolumePositionRelativity.md) = `null`
  
  Determine whether the function returns a CompoundBlockVolumeItem which is forced into either relative or absolute coordinate system.
  
  `true` = force returned item to be relative to volume origin
  
  `false` = force returned item to be absolute world space location
  
  
  
  If no flag is specified, the item returned retains whatever relativity it had when it was pushed

**Returns** [*CompoundBlockVolumeItem*](CompoundBlockVolumeItem.md) | *undefined* - Returns undefined if the stack is empty

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **popVolume**
`
popVolume(): boolean
`

Remove the last entry from the volume stack.  This will reduce the stack size by one

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **pushVolume**
`
pushVolume(item: CompoundBlockVolumeItem): void
`

Push a volume item to the stack.  The volume item contains an 'action' parameter which determines whether this volume is a positive or negative space.

The item also contains a `locationRelativity` which determines whether it is relative or absolute to the compound volume origin

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

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setOrigin**
`
setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void
`

Set the origin of the compound volume to an absolute world space location

#### **Parameters**
- **position**: [*Vector3*](Vector3.md)
- **preserveExistingVolumes**?: *boolean* = `null`
  
  This optional boolean flag determines whether the relative `CompoundBlockVolumeItem`'s are frozen in place, or are affected by the new origin.
  
  Imagine a scenario where you have a series of relative locations around an origin which make up a sphere; all of these locations are in the range of -2 to 2.
  
  Push each of these locations to the compound volume as relative items.
  
  Now, move the origin and all of the locations representing the sphere move accordingly.
  
  However, let's say you want to add a 2nd sphere next to the 1st.
  
  In this case, set the new origin a few locations over, but 'preserveExistingVolumes' = true.
  
  This will set a new origin, but the existing sphere locations will remain relative to the original origin.
  
  Now, you can push the relative sphere locations again (this time they will be relative to the new origin) - resulting in 2 spheres next to each other.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **translateOrigin**
`
translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void
`

Similar to [*@minecraft/server.CompoundBlockVolume.setOrigin*](../../minecraft/server/CompoundBlockVolume.md#setorigin) - this function will translate the origin by a given delta to a new position

#### **Parameters**
- **delta**: [*Vector3*](Vector3.md)
- **preserveExistingVolumes**?: *boolean* = `null`
  
  See the description for the arguments to [*@minecraft/server.CompoundBlockVolume.setOrigin*](../../minecraft/server/CompoundBlockVolume.md#setorigin)

> [!IMPORTANT]
> This function can't be called in read-only mode.
