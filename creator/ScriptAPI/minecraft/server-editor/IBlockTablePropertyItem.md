---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IBlockTablePropertyItem Interface
description: Contents of the @minecraft/server-editor.IBlockTablePropertyItem class.
---
# IBlockTablePropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Block Table properties

## Methods
- [addOrUpdateEntry](#addorupdateentry)
- [deleteEntry](#deleteentry)
- [getEntry](#getentry)
- [setTitle](#settitle)
- [updateEntries](#updateentries)

### **addOrUpdateEntry**
`
addOrUpdateEntry(block: string | minecraftserver.BlockType, blockInfo: IBlockTableEntryInfo): void
`

Create new or update an existing entry in the block table

#### **Parameters**
- **block**: *string | minecraftserver.BlockType*
  
  a new entry in the block table.
- **blockInfo**: *IBlockTableEntryInfo*
  
  block info for the entry in the block table.

**Returns** *void*

### **deleteEntry**
`
deleteEntry(block: string): void
`

Delete entry in the block table, by block name

#### **Parameters**
- **block**: *string*
  
  an entry in the block table.

**Returns** *void*

### **getEntry**
`
getEntry(block: string | minecraftserver.BlockType): IBlockTableEntryInfo | undefined
`

Read entry from the block table, by block name

#### **Parameters**
- **block**: *string | minecraftserver.BlockType*
  
  an entry in the block table.

**Returns** *IBlockTableEntryInfo | undefined*

### **setTitle**
`
setTitle(title: LocalizedString): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString*
  
  New title.

**Returns** *void*

### **updateEntries**
`
updateEntries(entries: Map<string, IBlockTableEntryInfo>): void
`

Update the block table entries

#### **Parameters**
- **entries**: *Map<string, IBlockTableEntryInfo>*
  
  The new value for the block table.

**Returns** *void*
