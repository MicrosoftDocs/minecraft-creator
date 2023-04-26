---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BoundingBoxUtils Class
description: Contents of the @minecraft/server.BoundingBoxUtils class.
---
# BoundingBoxUtils Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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

#### **Parameters**
- **min**: [*Vector3*](Vector3.md)
- **max**: [*Vector3*](Vector3.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)

### **dilate**
`
static dilate(box: BoundingBox, size: Vector3): BoundingBox
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **size**: [*Vector3*](Vector3.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)

### **equals**
`
static equals(box: BoundingBox, other: BoundingBox): boolean
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

#### **Returns** *boolean*

### **expand**
`
static expand(box: BoundingBox, other: BoundingBox): BoundingBox
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)

### **getCenter**
`
static getCenter(box: BoundingBox): Vector3
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)

#### **Returns** [*Vector3*](Vector3.md)

### **getIntersection**
`
static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)

> [!WARNING]
> This function can throw errors.

### **getSpan**
`
static getSpan(box: BoundingBox): Vector3
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)

#### **Returns** [*Vector3*](Vector3.md)

### **intersects**
`
static intersects(box: BoundingBox, other: BoundingBox): boolean
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **other**: [*BoundingBox*](BoundingBox.md)

#### **Returns** *boolean*

### **isInside**
`
static isInside(box: BoundingBox, pos: Vector3): boolean
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **pos**: [*Vector3*](Vector3.md)

#### **Returns** *boolean*

### **isValid**
`
static isValid(box: BoundingBox): boolean
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)

#### **Returns** *boolean*

### **translate**
`
static translate(box: BoundingBox, delta: Vector3): BoundingBox
`

#### **Parameters**
- **box**: [*BoundingBox*](BoundingBox.md)
- **delta**: [*Vector3*](Vector3.md)

#### **Returns** [*BoundingBox*](BoundingBox.md)
