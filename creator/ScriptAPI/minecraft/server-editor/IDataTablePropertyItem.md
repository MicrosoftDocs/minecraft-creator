---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IDataTablePropertyItem Interface
description: Contents of the @minecraft/server-editor.IDataTablePropertyItem class.
---
# IDataTablePropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports data entries displayed in a table

## Methods
- [updateEntries](#updateentries)
- [updateEntry](#updateentry)
- [updateRow](#updaterow)

### **updateEntries**
`
updateEntries(data: IDataTablePropertyItemEntry[][]): void
`

Update table entries

#### **Parameters**
- **data**: *IDataTablePropertyItemEntry[][]*
  
  New data entries.

**Returns** *void*

### **updateEntry**
`
updateEntry(data: IDataTablePropertyItemEntry, row: number, column: number): void
`

Update table cell entry

#### **Parameters**
- **data**: *IDataTablePropertyItemEntry*
  
  New data entry.
- **row**: *number*
  
  Cell row index.
- **column**: *number*
  
  Cell column index.

**Returns** *void*

### **updateRow**
`
updateRow(data: IDataTablePropertyItemEntry[], row: number): void
`

Update table row entries

#### **Parameters**
- **data**: *IDataTablePropertyItemEntry[]*
  
  New data entries.
- **row**: *number*
  
  Cell row index.

**Returns** *void*
