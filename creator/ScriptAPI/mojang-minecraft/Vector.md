---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Vector Class
description: Contents of the mojang-minecraft.Vector class.
---
# Vector Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains a description of a vector.

## Properties
### **x**
`x: number;`

X component of this vector.

Type: *number*


### **y**
`y: number;`

Y component of this vector.

Type: *number*


### **z**
`z: number;`

Z component of this vector.

Type: *number*



## Methods
- [constructor](#constructor)
- [equals](#equals)
- [isNear](#isnear)
  
### **constructor**
`
new Vector(x: number, y: number, z: number)
`

Creates a new instance of an abstract vector.
#### **Parameters**
- **x**: *number*
  
  X component of the vector.
- **y**: *number*
  
  Y component of the vector.
- **z**: *number*
  
  Z component of the vector.

#### **Returns** [*Vector*](Vector.md)


### **equals**
`
equals(other: Vector): boolean
`

Compares this vector and another vector to one another.
#### **Parameters**
- **other**: [*Vector*](Vector.md)
  
  Other vector to compare this vector to.

#### **Returns** *boolean* - True if the two vectors are equal.


### **isNear**
`
isNear(other: Vector, epsilon: number): boolean
`

To be removed.
#### **Parameters**
- **other**: [*Vector*](Vector.md)
- **epsilon**: *number*

#### **Returns** *boolean*



