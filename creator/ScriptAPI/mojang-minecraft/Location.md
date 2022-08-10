---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Location Class
description: Contents of the mojang-minecraft.Location class.
---
# Location Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains a location description that is useful for entities and other items. X, Y, and Z can contain decimal fractions. For integer-based locations useful for blocks, see [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md).

## Properties

### **x**
`x: number;`

X component of this location.

Type: *number*

### **y**
`y: number;`

Y component of this location.

Type: *number*

### **z**
`z: number;`

Z component of this location.

Type: *number*

## Methods
- [constructor](#constructor)
- [equals](#equals)
- [isNear](#isnear)

### **constructor**
`
new Location(x: number, y: number, z: number)
`
Creates a new instance of an abstract location.

#### **Parameters**
- **x**: *number*
  
  X position of the location.
- **y**: *number*
  
  Y position of the location.
- **z**: *number*
  
  Z position of the location.

#### **Returns** [*Location*](Location.md)

### **equals**
`
equals(other: Location): boolean
`
Compares this Location and another Location to one another.

#### **Parameters**
- **other**: [*Location*](Location.md)
  
  Other location to compare this Location to.

#### **Returns** *boolean* - True if the two locations are equal.

### **isNear**
`
isNear(other: Location, epsilon: number): boolean
`
Determines whether or not two Locations are considered to be near each other.

#### **Parameters**
- **other**: [*Location*](Location.md)
  
  Other Location to compare this Location to.
- **epsilon**: *number*
  
  Maximum distance that the Locations can be from each other to be considered nearby.

#### **Returns** *boolean* - True if the two Locations are within epsilon distance of each other.
