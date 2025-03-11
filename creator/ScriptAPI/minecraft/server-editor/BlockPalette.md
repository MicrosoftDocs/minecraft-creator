---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.BlockPalette Class
description: Contents of the @minecraft/server-editor.BlockPalette class.
---
# BlockPalette Class

## Methods
- [constructor](#constructor)
- [getItem](#getitem)
- [removeItemAt](#removeitemat)
- [removeItems](#removeitems)
- [setItem](#setitem)

### **constructor**
`
new BlockPalette()
`

**Returns** [*BlockPalette*](BlockPalette.md)

### **getItem**
`
getItem(index: number): IBlockPaletteItem
`

#### **Parameters**
- **index**: *number*

**Returns** [*IBlockPaletteItem*](IBlockPaletteItem.md)
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md)

### **removeItemAt**
`
removeItemAt(index: number): void
`

#### **Parameters**
- **index**: *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md)

### **removeItems**
`
removeItems(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **setItem**
`
setItem(blockPaletteItem: IBlockPaletteItem, index: number): void
`

#### **Parameters**
- **blockPaletteItem**: [*IBlockPaletteItem*](IBlockPaletteItem.md)
- **index**: *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md)
