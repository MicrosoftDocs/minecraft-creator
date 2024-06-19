---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BoundingBoxUtils Class
description: Contents of the @minecraft/server.BoundingBoxUtils class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BoundingBoxUtils Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Bounding Box Utils is a utility class that provides a number of useful functions for the creation and utility of [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) objects

## Methods
- [createValid](#createvalid)
- [dilate](#dilate)
- [equals](#equals)
- [expand](#expand)
- [getCenter](#getcenter)
- [getIntersection](#getintersection)
- [getSpan](#getspan)
- [intersects](#intersects)
- [isInside](#isinside)
- [isValid](#isvalid)
- [translate](#translate)

### **createValid**
`
static createValid(min: Vector3, max: Vector3): BoundingBox
`

Create a validated instance of a [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) where the min and max components are guaranteed to be (min <= max)

#### **Parameters**
- **min**: [*Vector3*](Vector3.md)
  
  A corner world location
- **max**: [*Vector3*](Vector3.md)
  
  A corner world location diametrically opposite

**Returns** [*BoundingBox*](BoundingBox.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **dilate**
`
static dilate(box: BoundingBox, size: Vector3): BoundingBox
`

Expand a [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) by a given amount along each axis.

Sizes can be negative to perform contraction.

Note: corners can be inverted if the contraction size is greater than the span, but the min/max relationship will remain correct

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **size**: [*Vector3*](Vector3.md)

**Returns** [*BoundingBox*](BoundingBox.md) - Return a new [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) object representing the changes

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **equals**
`
static equals(box: BoundingBox, other: BoundingBox): boolean
`

Check if two [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) objects are identical

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **expand**
`
static expand(box: BoundingBox, other: BoundingBox): BoundingBox
`

Expand the initial box object bounds to include the 2nd box argument.  The resultant [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) object will be a BoundingBox which exactly encompasses the two boxes.

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

**Returns** [*BoundingBox*](BoundingBox.md) - A new [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) instance representing the smallest possible bounding box which can encompass both

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getCenter**
`
static getCenter(box: BoundingBox): Vector3
`

Calculate the center block of a given [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) object.  

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)

**Returns** [*Vector3*](Vector3.md) - Note that [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) objects represent whole blocks, so the center of boxes which have odd numbered bounds are not mathematically centered...,i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected) - Note that [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md) objects represent whole blocks, so the center of boxes which have odd numbered bounds are not mathematically centered...,i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getIntersection**
`
static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined
`

Calculate the BoundingBox which represents the union area of two intersecting BoundingBoxes

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

**Returns** [*BoundingBox*](BoundingBox.md) | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getSpan**
`
static getSpan(box: BoundingBox): Vector3
`

Get the Span of each of the BoundingBox Axis components

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)

**Returns** [*Vector3*](Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **intersects**
`
static intersects(box: BoundingBox, other: BoundingBox): boolean
`

Check to see if two BoundingBox objects intersect

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isInside**
`
static isInside(box: BoundingBox, pos: Vector3): boolean
`

Check to see if a given coordinate is inside a BoundingBox

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **pos**: [*Vector3*](Vector3.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **isValid**
`
static isValid(box: BoundingBox): boolean
`

Check to see if a BoundingBox is valid (i.e. (min <= max))

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **translate**
`
static translate(box: BoundingBox, delta: Vector3): BoundingBox
`

Move a BoundingBox by a given amount

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **delta**: [*Vector3*](Vector3.md)

**Returns** [*BoundingBox*](BoundingBox.md) - Return a new BoundingBox object which represents the change

> [!IMPORTANT]
> This function can't be called in read-only mode.
