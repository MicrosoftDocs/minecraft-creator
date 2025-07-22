---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IToggleGroupPropertyItem Interface
description: Contents of the @minecraft/server-editor.IToggleGroupPropertyItem class.
---
# IToggleGroupPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports toggle button properties

## Properties

### **value**
`read-only value: number;`

Current selected entry value.

Type: *number*

## Methods
- [getEntryByIndex](#getentrybyindex)
- [getEntryByValue](#getentrybyvalue)
- [setTitle](#settitle)
- [setTooltip](#settooltip)
- [updateEntries](#updateentries)

### **getEntryByIndex**
`
getEntryByIndex(index: number): IToggleGroupPropertyItemEntry | void
`

Find a toggle entry at an index in the group.

#### **Parameters**
- **index**: *number*
  
  Index of the toggle entry in the list.

**Returns** *IToggleGroupPropertyItemEntry* | *void*

### **getEntryByValue**
`
getEntryByValue(value: number): IToggleGroupPropertyItemEntry | void
`

Find a toggle entry with a specific value associated with property item.

#### **Parameters**
- **value**: *number*
  
  Value of the toggle entry in the group.

**Returns** *IToggleGroupPropertyItemEntry* | *void*

### **setTitle**
`
setTitle(title: LocalizedString | void): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString* | *void*
  
  New title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: BasicTooltipContent | void): void
`

Updates tooltip of the property item.

#### **Parameters**
- **tooltip**: *BasicTooltipContent* | *void*
  
  New tooltip.

**Returns** *void*

### **updateEntries**
`
updateEntries(entries: IToggleGroupPropertyItemEntry[], newValue?: number): void
`

Update list of toggle group entries.

#### **Parameters**
- **entries**: *IToggleGroupPropertyItemEntry*[]
  
  New list of updated entries.
- **newValue**?: *number*
  
  New value value to use for the selected toggle button.

**Returns** *void*
