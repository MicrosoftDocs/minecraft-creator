---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Vector Class
description: Contents of the @minecraft/server.Vector class.
---
# Vector Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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
- [length](#length)
- [lengthSquared](#lengthsquared)
- [normalized](#normalized)
- [add](#add)
- [cross](#cross)
- [distance](#distance)
- [divide](#divide)
- [lerp](#lerp)
- [max](#max)
- [min](#min)
- [multiply](#multiply)
- [slerp](#slerp)
- [subtract](#subtract)

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

### **length**
`
length(): number
`

Returns the length of this vector.

#### **Returns** *number*

### **lengthSquared**
`
lengthSquared(): number
`

Returns the squared length of this vector.

#### **Returns** *number*

### **normalized**
`
normalized(): Vector
`

Returns this vector as a normalized vector.

#### **Returns** [*Vector*](Vector.md)

### **add**
`
static add(a: Vector3, b: Vector3): Vector
`

Returns the addition of these vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

### **cross**
`
static cross(a: Vector3, b: Vector3): Vector
`

Returns the cross product of these two vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

### **distance**
`
static distance(a: Vector3, b: Vector3): number
`

Returns the distance between two vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)

#### **Returns** *number*

### **divide**
`
static divide(a: Vector3, b: number | Vector3): Vector
`

Returns the component-wise division of these vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: *number* | [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

### **lerp**
`
static lerp(a: Vector3, b: Vector3, t: number): Vector
`

Returns the linear interpolation between a and b using t as the control.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)
- **t**: *number*

#### **Returns** [*Vector*](Vector.md)

### **max**
`
static max(a: Vector3, b: Vector3): Vector
`

Returns a vector that is made from the largest components of two vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

### **min**
`
static min(a: Vector3, b: Vector3): Vector
`

Returns a vector that is made from the smallest components of two vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

### **multiply**
`
static multiply(a: Vector3, b: number | Vector3): Vector
`

Returns the component-wise product of these vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: *number* | [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

### **slerp**
`
static slerp(a: Vector3, b: Vector3, s: number): Vector
`

Returns the spherical linear interpolation between a and b using s as the control.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)
- **s**: *number*

#### **Returns** [*Vector*](Vector.md)

### **subtract**
`
static subtract(a: Vector3, b: Vector3): Vector
`

Returns the subtraction of these vectors.

#### **Parameters**
- **a**: [*Vector3*](Vector3.md)
- **b**: [*Vector3*](Vector3.md)

#### **Returns** [*Vector*](Vector.md)

## Constants

### **back**
`static read-only back: Vector;`

A constant vector that represents (0, 0, -1).

Type: [*Vector*](Vector.md)

### **down**
`static read-only down: Vector;`

A constant vector that represents (0, -1, 0).

Type: [*Vector*](Vector.md)

### **forward**
`static read-only forward: Vector;`

A constant vector that represents (0, 0, 1).

Type: [*Vector*](Vector.md)

### **left**
`static read-only left: Vector;`

A constant vector that represents (-1, 0, 0).

Type: [*Vector*](Vector.md)

### **one**
`static read-only one: Vector;`

A constant vector that represents (1, 1, 1).

Type: [*Vector*](Vector.md)

### **right**
`static read-only right: Vector;`

A constant vector that represents (1, 0, 0).

Type: [*Vector*](Vector.md)

### **up**
`static read-only up: Vector;`

A constant vector that represents (0, 1, 0).

Type: [*Vector*](Vector.md)

### **zero**
`static read-only zero: Vector;`

A constant vector that represents (0, 0, 0).

Type: [*Vector*](Vector.md)
