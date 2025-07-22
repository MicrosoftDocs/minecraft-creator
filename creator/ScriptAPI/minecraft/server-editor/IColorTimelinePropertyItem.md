---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IColorTimelinePropertyItem Interface
description: Contents of the @minecraft/server-editor.IColorTimelinePropertyItem class.
---
# IColorTimelinePropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Color Timeline properties

## Methods
- [addNode](#addnode)
- [getData](#getdata)
- [getTime](#gettime)
- [removeNode](#removenode)
- [setPrecision](#setprecision)
- [setTime](#settime)
- [setTitle](#settitle)
- [updateNode](#updatenode)

### **addNode**
`
addNode(data: IColorTimelinePropertyItemEntry): void
`

Update color timeline entry

#### **Parameters**
- **data**: *IColorTimelinePropertyItemEntry*
  
  New color node.

**Returns** *void*

### **getData**
`
getData(): IColorTimelinePropertyItemEntry[]
`

Get the list of nodes in the property item.

**Returns** *IColorTimelinePropertyItemEntry*[]

### **getTime**
`
getTime(): number
`

Get time current time value on the slider.

**Returns** *number*

### **removeNode**
`
removeNode(data: IColorTimelinePropertyItemEntry): void
`

Remove color node

#### **Parameters**
- **data**: *IColorTimelinePropertyItemEntry*
  
  Node to be removed.

**Returns** *void*

### **setPrecision**
`
setPrecision(precision: number): void
`

Set custom decimal precision for the calculations

#### **Parameters**
- **precision**: *number*

**Returns** *void*

### **setTime**
`
setTime(time: number): void
`

Set time line slider value to a new value

#### **Parameters**
- **time**: *number*
  
  The new time value.

**Returns** *void*

### **setTitle**
`
setTitle(title: LocalizedString): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString*
  
  New title.

**Returns** *void*

### **updateNode**
`
updateNode(data: IColorTimelinePropertyItemEntry): void
`

Update node value

#### **Parameters**
- **data**: *IColorTimelinePropertyItemEntry*
  
  Node to be updated.

**Returns** *void*
