---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.CylinderBrushShape Class
description: Contents of the @minecraft/server-editor.CylinderBrushShape class.
---
# CylinderBrushShape Class

## Extends
- *BrushShape*

## Methods
- [constructor](#(constructor))
- [createSettingsPane](#createsettingspane)
- [createShape](#createshape)

### **constructor**
`
new CylinderBrushShape(settings: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
    })
`

Constructs a new instance of the `CylinderBrushShape` class

#### **Parameters**
- **settings**: *{
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
    }*

**Returns** *CylinderBrushShape*

### **createSettingsPane**
`
createSettingsPane(parentPane: IPropertyPane, onSettingsChange: () => void): ISubPanePropertyItem
`

#### **Parameters**
- **parentPane**: *IPropertyPane*
- **onSettingsChange**: *() => void*

**Returns** *ISubPanePropertyItem*

### **createShape**
`
createShape(): RelativeVolumeListBlockVolume
`

**Returns** *RelativeVolumeListBlockVolume*
