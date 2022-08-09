---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockLocation Class
description: Contents of the mojang-minecraft.BlockLocation class.
---
# BlockLocation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains the integer X, Y, Z coordinates for a block. For decimal locations useful for entities, items, and more, see [*mojang-minecraft.Location*](../mojang-minecraft/Location.md).

## Properties

### **x**
`x: number;`

The X coordinate.

Type: *number*

### **y**
`y: number;`

The integer-based Y position.

Type: *number*

### **z**
`z: number;`

The integer-based Z position.

Type: *number*

## Methods
- [constructor](#constructor)
- [above](#above)
- [blocksBetween](#blocksbetween)
- [equals](#equals)
- [offset](#offset)

### **constructor**
`
new BlockLocation(x: number, y: number, z: number)
`
Creates a new instance of an abstract block location.

#### **Parameters**
- **x**: *number*
  
  X position of the block location. This number should be an integer.
- **y**: *number*
  
  Y position of the block location. This number should be an integer.
- **z**: *number*
  
  Z position of the block location. This number should be an integer.

#### **Returns** [*BlockLocation*](BlockLocation.md)

### **above**
`
above(): BlockLocation
`
Returns a BlockLocation for a block above this BlockLocation (that is, y + 1).

#### **Returns** [*BlockLocation*](BlockLocation.md)

### **blocksBetween**
`
blocksBetween(other: BlockLocation): BlockLocation[]
`
Returns an array of block locations representing all blocks in the volume (cuboid) between this location and another location.

#### **Parameters**
- **other**: [*BlockLocation*](BlockLocation.md)
  
  Additional BlockLocation used to determine the set of locations in between this location and another point.

#### **Returns** [*BlockLocation*](BlockLocation.md)[] - Array of block locations representing the volume between this location and another, inclusive of the start and end points.

### **equals**
`
equals(other: BlockLocation): boolean
`
Compares this BlockLocation and another BlockLocation to one another.

#### **Parameters**
- **other**: [*BlockLocation*](BlockLocation.md)
  
  Other block location to compare this BlockLocation to.

#### **Returns** *boolean* - True if the two block locations are equal.

### **offset**
`
offset(x: number, y: number, z: number): BlockLocation
`
Returns a block location using a position relative to this block location

#### **Parameters**
- **x**: *number*
  
  X offset relative to this BlockLocation.
- **y**: *number*
  
  Y offset relative to this BlockLocation.
- **z**: *number*
  
  Z offset relative to this BlockLocation.

#### **Returns** [*BlockLocation*](BlockLocation.md) - BlockLocation that is positioned relative to this BlockLocation.
