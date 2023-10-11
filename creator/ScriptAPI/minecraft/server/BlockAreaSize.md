---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockAreaSize Class
description: Contents of the @minecraft/server.BlockAreaSize class.
---
# BlockAreaSize Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Holds information for expressing the net size of a volume of blocks.

## Properties

### **x**
`x: number;`

X size (west to east) component of this block area.

Type: *number*

### **y**
`y: number;`

Y size (down to up) of this block area size.

Type: *number*

### **z**
`z: number;`

Z size (south to north) of this block area size.

Type: *number*

## Methods
- [constructor](#constructor)
- [equals](#equals)

### **constructor**
`
new BlockAreaSize(x: number, y: number, z: number)
`

Creates a new BlockAreaSize object.

#### **Parameters**
- **x**: *number*
- **y**: *number*
- **z**: *number*

#### **Returns** [*BlockAreaSize*](BlockAreaSize.md)

### **equals**
`
equals(other: BlockAreaSize): boolean
`

Tests whether this block area size is equal to another BlockAreaSize object.

#### **Parameters**
- **other**: [*BlockAreaSize*](BlockAreaSize.md)

#### **Returns** *boolean*
