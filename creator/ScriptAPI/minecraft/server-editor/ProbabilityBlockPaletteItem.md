---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ProbabilityBlockPaletteItem Class
description: Contents of the @minecraft/server-editor.ProbabilityBlockPaletteItem class.
---
# ProbabilityBlockPaletteItem Class

## Extends
- [*IBlockPaletteItem*](IBlockPaletteItem.md)

## Methods
- [constructor](#constructor)
- [addBlock](#addblock)
- [getBlocks](#getblocks)
- [removeBlockAt](#removeblockat)

### **constructor**
`
new ProbabilityBlockPaletteItem(displayName?: string)
`

#### **Parameters**
- **displayName**?: *string* = `null`

**Returns** [*ProbabilityBlockPaletteItem*](ProbabilityBlockPaletteItem.md)

### **addBlock**
`
addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void
`

#### **Parameters**
- **block**: [*@minecraft/server.BlockPermutation*](../../../scriptapi/minecraft/server/BlockPermutation.md) | [*@minecraft/server.BlockType*](../../../scriptapi/minecraft/server/BlockType.md) | *string*
- **weight**: *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getBlocks**
`
getBlocks(): WeightedBlock[]
`

**Returns** [*WeightedBlock*](WeightedBlock.md)[]

### **removeBlockAt**
`
removeBlockAt(index: number): void
`

#### **Parameters**
- **index**: *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
