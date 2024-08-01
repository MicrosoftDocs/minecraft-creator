---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IDropdownPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IDropdownPropertyItemOptions class.
---
# IDropdownPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Dropdown property item

## Properties

### **entries**
`entries: IDropdownPropertyItemEntry[];`

List of dropdown entries associated with the property item. If undefined, list will be empty.

Type: *IDropdownPropertyItemEntry[]*

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **onChange**
`onChange: (newValue: number, oldValue: number, items: IDropdownPropertyItemEntry[]) => void;`

This callback is called when UI control value is changed.

Type: *(newValue: number, oldValue: number, items: IDropdownPropertyItemEntry[]) => void*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*
