---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
- **block**: [*@minecraft/server.BlockPermutation*](../../minecraft/server/BlockPermutation.md) | [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string*
- **weight**: *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md), *Error*
