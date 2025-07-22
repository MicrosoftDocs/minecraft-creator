---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.BrushShape Class
description: Contents of the @minecraft/server-editor.BrushShape class.
---
# BrushShape Class

## Classes that extend BrushShape
- *ConeBrushShape*
- *CuboidBrushShape*
- *CylinderBrushShape*
- *EllipsoidBrushShape*
- *PyramidBrushShape*
- *SingleBlockBrushShape*

Base for creating new brush shapes

## Properties

### **displayName**
`read-only displayName: string;`

Type: *string*

### **icon**
`read-only icon: string;`

Type: *string*

### **id**
`read-only id: string;`

Type: *string*

## Methods
- [constructor](#(constructor))
- [createSettingsPane](#createsettingspane)
- [createShape](#createshape)

### **constructor**
`
new BrushShape(_id: string, _displayName: string, _icon: string)
`

Constructs a new instance of the `BrushShape` class

#### **Parameters**
- **_id**: *string*
- **_displayName**: *string*
- **_icon**: *string*

**Returns** *BrushShape*

### **createSettingsPane**
`
createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem | void
`

#### **Parameters**
- **parentPane**: *IPropertyPane*
- **onSettingsChange**?: () => void

**Returns** *ISubPanePropertyItem* | *void*

### **createShape**
`
createShape(): RelativeVolumeListBlockVolume
`

**Returns** *RelativeVolumeListBlockVolume*
