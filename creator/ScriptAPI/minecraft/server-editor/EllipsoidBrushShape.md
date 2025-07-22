---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.EllipsoidBrushShape Class
description: Contents of the @minecraft/server-editor.EllipsoidBrushShape class.
---
# EllipsoidBrushShape Class

## Extends
- *BrushShape*

## Methods
- [constructor](#(constructor))
- [createSettingsPane](#createsettingspane)
- [createShape](#createshape)

### **constructor**
`
new EllipsoidBrushShape(settings?: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    })
`

Constructs a new instance of the `EllipsoidBrushShape` class

#### **Parameters**
- **settings**?: *{
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    }*

**Returns** *EllipsoidBrushShape*

### **createSettingsPane**
`
createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem
`

#### **Parameters**
- **parentPane**: *IPropertyPane*
- **onSettingsChange**?: () => void

**Returns** *ISubPanePropertyItem*

### **createShape**
`
createShape(): RelativeVolumeListBlockVolume
`

**Returns** *RelativeVolumeListBlockVolume*
