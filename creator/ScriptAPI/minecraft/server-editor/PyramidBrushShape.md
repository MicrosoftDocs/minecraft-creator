---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.PyramidBrushShape Class
description: Contents of the @minecraft/server-editor.PyramidBrushShape class.
---
# PyramidBrushShape Class

## Extends
- *BrushShape*

## Methods
- [constructor](#(constructor))
- [createSettingsPane](#createsettingspane)
- [createShape](#createshape)

### **constructor**
`
new PyramidBrushShape(settings: {
        uniform?: boolean;
        width?: number;
        height?: number;
        depth?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    })
`

Constructs a new instance of the `PyramidBrushShape` class

#### **Parameters**
- **settings**: *{
        uniform?: boolean;
        width?: number;
        height?: number;
        depth?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    }*

**Returns** *PyramidBrushShape*

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
