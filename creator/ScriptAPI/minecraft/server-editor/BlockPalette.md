---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md)

### **removeItemAt**
`
removeItemAt(index: number): void
`

#### **Parameters**
- **index**: *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md)

### **removeItems**
`
removeItems(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setItem**
`
setItem(blockPaletteItem: IBlockPaletteItem, index: number): void
`

#### **Parameters**
- **blockPaletteItem**: [*IBlockPaletteItem*](IBlockPaletteItem.md)
- **index**: *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md)
