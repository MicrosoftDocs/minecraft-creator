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

### **brushShapeList**
`read-only brushShapeList: BrushShape[];`

Type: [*BrushShape*](BrushShape.md)[]

## Methods
- [activateBrushShape](#activatebrushshape)
- [activateBrushTool](#activatebrushtool)
- [beginPainting](#beginpainting)
- [deactivateBrushTool](#deactivatebrushtool)
- [endPainting](#endpainting)
- [getSettingsUIElements](#getsettingsuielements)
- [registerBrushShape](#registerbrushshape)
- [setBlockPaletteOverride](#setblockpaletteoverride)
- [setBrushMask](#setbrushmask)
- [setBrushShape](#setbrushshape)
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
>
> Throws *@minecraft/server.Error*

### **activateBrushTool**
`
activateBrushTool(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **beginPainting**
`
beginPainting(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **deactivateBrushTool**
`
deactivateBrushTool(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **endPainting**
`
endPainting(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

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
>
> Throws *Error*

### **registerBrushShape**
`
registerBrushShape(name: string, icon: string, rebuild: () => minecraftserver.CompoundBlockVolume, getSettingsUIElements: () => SettingsUIElement[]): void
`

#### **Parameters**
- **name**: *string*
- **icon**: *string*
- **rebuild**: () => [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)
- **getSettingsUIElements**: () => [*SettingsUIElement*](SettingsUIElement.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **setBlockPaletteOverride**
`
setBlockPaletteOverride(overrideBlock?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void
`

#### **Parameters**
- **overrideBlock**?: [*@minecraft/server.BlockPermutation*](../../minecraft/server/BlockPermutation.md) | [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string* = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **setBrushMask**
`
setBrushMask(mask: BlockMaskList): void
`

#### **Parameters**
- **mask**: [*BlockMaskList*](BlockMaskList.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **setBrushShape**
`
setBrushShape(shape: minecraftserver.Vector3[] | minecraftserver.CompoundBlockVolume): void
`

#### **Parameters**
- **shape**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)[] | [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **uiSettingValueChanged**
`
uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean
`

#### **Parameters**
- **elementName**: *string*
- **newValue**: *boolean* | *number* | *string* | [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*
