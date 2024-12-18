---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IDropdownPropertyItem Interface
description: Contents of the @minecraft/server-editor.IDropdownPropertyItem class.
---
# IDropdownPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Dropdown properties

## Properties

### **value**
`read-only value: number;`

Current selected entry value of the property item list.

Type: *number*

## Methods
- [getEntryByIndex](#getentrybyindex)
- [getEntryByValue](#getentrybyvalue)
- [setTitle](#settitle)
- [setTooltip](#settooltip)
- [updateEntries](#updateentries)

### **getEntryByIndex**
`
getEntryByIndex(index: number): IDropdownPropertyItemEntry | undefined
`

Find a dropdown entry at an index in the dropdown list.

#### **Parameters**
- **index**: *number*
  
  Index of the dropdown entry in the list.

**Returns** *IDropdownPropertyItemEntry | undefined*

### **getEntryByValue**
`
getEntryByValue(value: number): IDropdownPropertyItemEntry | undefined
`

Find a dropdown entry with a specific value associated with property item.

#### **Parameters**
- **value**: *number*
  
  Value of the dropdown entry in the list.

**Returns** *IDropdownPropertyItemEntry | undefined*

### **setTitle**
`
setTitle(title: LocalizedString | undefined): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString | undefined*
  
  New title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: LocalizedString | undefined): void
`

Updates tooltip of the property item.

#### **Parameters**
- **tooltip**: *LocalizedString | undefined*
  
  New tooltip.

**Returns** *void*

### **updateEntries**
`
updateEntries(entries: IDropdownPropertyItemEntry[], newValue: number): void
`

Update list of dropdown entries.

#### **Parameters**
- **entries**: *IDropdownPropertyItemEntry[]*
  
  New list of updated entries.
- **newValue**: *number*
  
  New value value to use for the dropdown.

**Returns** *void*
