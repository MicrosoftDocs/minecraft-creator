---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockVolume Class
description: Contents of the @minecraft/server.BlockVolume class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockVolume Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockVolumeBase*](BlockVolumeBase.md)

A BlockVolume is a simple interface to an object which represents a 3D rectangle of a given size (in blocks) at a world block location.

Note that these are not analogous to "min" and "max" values, in that the vector components are not guaranteed to be in any order.

In addition, these vector positions are not interchangeable with BlockLocation.

If you want to get this volume represented as range of of BlockLocations, you can use the getBoundingBox utility function.

This volume class will maintain the ordering of the corner indexes as initially set. imagine that each corner is assigned in Editor - as you move the corner around (potentially inverting the min/max relationship of the bounds) - what

you had originally selected as the top/left corner would traditionally become the bottom/right.  

When manually editing these kinds of volumes, you need to maintain the identity of the corner as you edit - the BlockVolume utility functions do this.



Important to note that this measures block sizes (to/from) - a normal AABB (0,0,0) to (0,0,0) would traditionally be of size (0,0,0)

However, because we're measuring blocks - the size or span of a BlockVolume would actually be (1,1,1)



## Properties

### **from**
`from: Vector3;`

A world block location that represents a corner in a 3D rectangle

Type: [*Vector3*](Vector3.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **to**
`to: Vector3;`

A world block location that represents the opposite corner in a 3D rectangle

Type: [*Vector3*](Vector3.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [constructor](#constructor)
- [doesLocationTouchFaces](#doeslocationtouchfaces)
- [doesVolumeTouchFaces](#doesvolumetouchfaces)
- [intersects](#intersects)

### **constructor**
`
new BlockVolume(from: Vector3, to: Vector3)
`

#### **Parameters**
- **from**: [*Vector3*](Vector3.md)
- **to**: [*Vector3*](Vector3.md)

**Returns** [*BlockVolume*](BlockVolume.md)

### **doesLocationTouchFaces**
`
doesLocationTouchFaces(pos: Vector3): boolean
`

Check to see if the given location is directly adjacent to the outer surface of a BlockVolume.  



#### **Parameters**
- **pos**: [*Vector3*](Vector3.md)
  
  The world block location to test

**Returns** *boolean* - If the location is either inside or more than 0 blocks away, the function will return false.,If the location is directly contacting the outer surface of the BlockVolume, the function will return true. - If the location is either inside or more than 0 blocks away, the function will return false.,If the location is directly contacting the outer surface of the BlockVolume, the function will return true.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **doesVolumeTouchFaces**
`
doesVolumeTouchFaces(other: BlockVolume): boolean
`

Check to see if a two block volumes are directly adjacent and two faces touch.

#### **Parameters**
- **other**: [*BlockVolume*](BlockVolume.md)
  
  The volume to test

**Returns** *boolean* - If the outer faces of both block volumes touch and are directly adjacent at any point, return true.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **intersects**
`
intersects(other: BlockVolume): BlockVolumeIntersection
`

Return an enumeration which represents the intersection between two BlockVolume objects

#### **Parameters**
- **other**: [*BlockVolume*](BlockVolume.md)

**Returns** [*BlockVolumeIntersection*](BlockVolumeIntersection.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.
