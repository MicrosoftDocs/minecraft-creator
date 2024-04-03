---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BrushShapeManager Class
description: Contents of the @minecraft/server-editor.BrushShapeManager class.
---
# BrushShapeManager Class

## Properties

### **activeBrushShape**
`read-only activeBrushShape?: BrushShape;`

Type: [*BrushShape*](BrushShape.md)

### **activeBrushVolume**
`read-only activeBrushVolume?: minecraftserver.CompoundBlockVolume;`

Type: [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)

### **brushShapeNames**
`read-only brushShapeNames: string[];`

Type: *string*[]

## Methods
- [activateBrushShape](#activatebrushshape)
- [getSettingsUIElements](#getsettingsuielements)
- [registerBrushShape](#registerbrushshape)
- [uiSettingValueChanged](#uisettingvaluechanged)

### **activateBrushShape**
`
activateBrushShape(name: string): minecraftserver.CompoundBlockVolume
`

#### **Parameters**
- **name**: *string*

**Returns** [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getSettingsUIElements**
`
getSettingsUIElements(brushName: string): SettingsUIElement[]
`

#### **Parameters**
- **brushName**: *string*

**Returns** [*SettingsUIElement*](SettingsUIElement.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **registerBrushShape**
`
registerBrushShape(brushShape: BrushShape): void
`

#### **Parameters**
- **brushShape**: [*BrushShape*](BrushShape.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **uiSettingValueChanged**
`
uiSettingValueChanged(elementName: string, newValue: boolean | number): void
`

#### **Parameters**
- **elementName**: *string*
- **newValue**: *boolean* | *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
