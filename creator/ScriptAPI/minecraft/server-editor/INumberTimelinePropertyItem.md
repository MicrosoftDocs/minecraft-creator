---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.INumberTimelinePropertyItem Interface
description: Contents of the @minecraft/server-editor.INumberTimelinePropertyItem class.
---
# INumberTimelinePropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Number Timeline properties

## Methods
- [addNode](#addnode)
- [getData](#getdata)
- [getTime](#gettime)
- [removeNode](#removenode)
- [setBounds](#setbounds)
- [setSeparatorSliceCount](#setseparatorslicecount)
- [setSeparatorStepCount](#setseparatorstepcount)
- [setTime](#settime)
- [setTitle](#settitle)
- [updateNode](#updatenode)

### **addNode**
`
addNode(data: INumberTimelinePropertyItemEntry): void
`

Update color timeline entry

#### **Parameters**
- **data**: *INumberTimelinePropertyItemEntry*
  
  New color node.

**Returns** *void*

### **getData**
`
getData(): INumberTimelinePropertyItemEntry[]
`

Get the list of nodes in the property item.

**Returns** *INumberTimelinePropertyItemEntry*[]

### **getTime**
`
getTime(): number
`

Get time current time value on the slider.

**Returns** *number*

### **removeNode**
`
removeNode(data: INumberTimelinePropertyItemEntry): void
`

Remove color node

#### **Parameters**
- **data**: *INumberTimelinePropertyItemEntry*
  
  Node to be removed.

**Returns** *void*

### **setBounds**
`
setBounds(bounds: {
        minValue: number;
        maxValue: number;
    }): void
`

Updates data entries value bounds.

#### **Parameters**
- **bounds**: *{
        minValue: number;
        maxValue: number;
    }*

**Returns** *void*

### **setSeparatorSliceCount**
`
setSeparatorSliceCount(counts: minecraftserver.Vector2): void
`

Set separator slice counts for x and y for the minor grid.

#### **Parameters**
- **counts**: *minecraftserver.Vector2*
  
  Counts for the thin grid lines.

**Returns** *void*

### **setSeparatorStepCount**
`
setSeparatorStepCount(counts: minecraftserver.Vector2): void
`

Set separator step counts for x and y for the major grid.

#### **Parameters**
- **counts**: *minecraftserver.Vector2*
  
  Counts for the thick grid lines.

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
updateNode(data: INumberTimelinePropertyItemEntry): void
`

Update node value

#### **Parameters**
- **data**: *INumberTimelinePropertyItemEntry*
  
  Node to be updated.

**Returns** *void*
