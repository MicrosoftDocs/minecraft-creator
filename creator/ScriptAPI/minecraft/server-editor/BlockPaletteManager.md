---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BlockPaletteManager Class
description: Contents of the @minecraft/server-editor.BlockPaletteManager class.
---
# BlockPaletteManager Class

## Methods
- [addOrReplacePalette](#addorreplacepalette)
- [getPalette](#getpalette)
- [getPaletteIdList](#getpaletteidlist)
- [getPaletteItem](#getpaletteitem)
- [getPrimaryPalette](#getprimarypalette)
- [getSelectedBlockType](#getselectedblocktype)
- [getSelectedItem](#getselecteditem)
- [removePalette](#removepalette)
- [setPaletteItem](#setpaletteitem)
- [setPrimaryPalette](#setprimarypalette)
- [setSelectedItem](#setselecteditem)

### **addOrReplacePalette**
`
addOrReplacePalette(paletteId: string, palette: BlockPalette): void
`

#### **Parameters**
- **paletteId**: *string*
- **palette**: [*BlockPalette*](BlockPalette.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getPalette**
`
getPalette(paletteId: string): BlockPalette | undefined
`

#### **Parameters**
- **paletteId**: *string*

**Returns** [*BlockPalette*](BlockPalette.md) | *undefined*

### **getPaletteIdList**
`
getPaletteIdList(): string[]
`

**Returns** *string*[]

### **getPaletteItem**
`
getPaletteItem(paletteId: string, index: number): IBlockPaletteItem
`

#### **Parameters**
- **paletteId**: *string*
- **index**: *number*

**Returns** [*IBlockPaletteItem*](IBlockPaletteItem.md)

> [!WARNING]
> This function can throw errors.

### **getPrimaryPalette**
`
getPrimaryPalette(): BlockPalette
`

**Returns** [*BlockPalette*](BlockPalette.md)

### **getSelectedBlockType**
`
getSelectedBlockType(): minecraftserver.BlockType
`

**Returns** [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md)

> [!WARNING]
> This function can throw errors.

### **getSelectedItem**
`
getSelectedItem(): IBlockPaletteItem
`

**Returns** [*IBlockPaletteItem*](IBlockPaletteItem.md)

### **removePalette**
`
removePalette(paletteId: string): void
`

#### **Parameters**
- **paletteId**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setPaletteItem**
`
setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void
`

#### **Parameters**
- **paletteId**: *string*
- **index**: *number*
- **item**: [*IBlockPaletteItem*](IBlockPaletteItem.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setPrimaryPalette**
`
setPrimaryPalette(paletteId: string): void
`

#### **Parameters**
- **paletteId**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setSelectedItem**
`
setSelectedItem(item: IBlockPaletteItem): void
`

#### **Parameters**
- **item**: [*IBlockPaletteItem*](IBlockPaletteItem.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
