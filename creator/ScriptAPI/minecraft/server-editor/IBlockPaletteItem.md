---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IBlockPaletteItem Class
description: Contents of the @minecraft/server-editor.IBlockPaletteItem class.
---
# IBlockPaletteItem Class

## Classes that extend IBlockPaletteItem
- [*ProbabilityBlockPaletteItem*](ProbabilityBlockPaletteItem.md)
- [*SimpleBlockPaletteItem*](SimpleBlockPaletteItem.md)

## Methods
- [getBlock](#getblock)
- [getDisplayName](#getdisplayname)
- [getType](#gettype)
- [setBlock](#setblock)

### **getBlock**
`
getBlock(): minecraftserver.BlockType | undefined
`

**Returns** [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *undefined*

### **getDisplayName**
`
getDisplayName(): string
`

**Returns** *string*

### **getType**
`
getType(): BlockPaletteItemType
`

**Returns** [*BlockPaletteItemType*](BlockPaletteItemType.md)

### **setBlock**
`
setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void
`

#### **Parameters**
- **block**: [*@minecraft/server.BlockPermutation*](../../minecraft/server/BlockPermutation.md) | [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*
