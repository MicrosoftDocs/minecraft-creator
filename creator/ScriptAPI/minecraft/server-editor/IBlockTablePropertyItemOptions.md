---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IBlockTablePropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IBlockTablePropertyItemOptions class.
---
# IBlockTablePropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Properties of block table item

## Properties

### **entries**
`entries?: Map<string, IBlockTableEntryInfo>;`

Map of block entries in the block table.

Type: *Map<string, IBlockTableEntryInfo>*

### **hiddenLabel**
`hiddenLabel?: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **onOperationClick**
`onOperationClick?: () => void;`

This callback is called when UI control operation is selected from the UI.

Type: () => void

### **title**
`title?: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip?: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*
