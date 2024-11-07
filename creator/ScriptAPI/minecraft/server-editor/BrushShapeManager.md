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
- [activateBrushTool](#activatebrushtool)
- [beginPainting](#beginpainting)
- [deactivateBrushTool](#deactivatebrushtool)
- [endPainting](#endpainting)
- [getBrushShapeOffset](#getbrushshapeoffset)
- [getSettingsUIElements](#getsettingsuielements)
- [registerBrushShape](#registerbrushshape)
- [setBrushMask](#setbrushmask)
- [setBrushShape](#setbrushshape)
- [setBrushShapeOffset](#setbrushshapeoffset)
- [setBrushShapeVisible](#setbrushshapevisible)
- [setSmoothStrength](#setsmoothstrength)
- [singlePaint](#singlepaint)
- [switchBrushPaintMode](#switchbrushpaintmode)
- [switchBrushShape](#switchbrushshape)
- [uiSettingValueChanged](#uisettingvaluechanged)

### **activateBrushTool**
`
activateBrushTool(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **beginPainting**
`
beginPainting(onComplete: (arg: PaintCompletionState) => void): void
`

#### **Parameters**
- **onComplete**: (arg: [*PaintCompletionState*](PaintCompletionState.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **deactivateBrushTool**
`
deactivateBrushTool(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **endPainting**
`
endPainting(cancelled: boolean): void
`

#### **Parameters**
- **cancelled**: *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **getBrushShapeOffset**
`
getBrushShapeOffset(): minecraftserver.Vector3
`

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **getSettingsUIElements**
`
getSettingsUIElements(brushName: string): SettingsUIElement[]
`

#### **Parameters**
- **brushName**: *string*

**Returns** [*SettingsUIElement*](SettingsUIElement.md)[]
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **registerBrushShape**
`
registerBrushShape(name: string, icon: string, rebuild: () => minecraftserver.CompoundBlockVolume, getSettingsUIElements: () => SettingsUIElement[]): void
`

#### **Parameters**
- **name**: *string*
- **icon**: *string*
- **rebuild**: () => [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)
- **getSettingsUIElements**: () => [*SettingsUIElement*](SettingsUIElement.md)[]
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **setBrushMask**
`
setBrushMask(mask: BlockMaskList): void
`

#### **Parameters**
- **mask**: [*BlockMaskList*](BlockMaskList.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **setBrushShape**
`
setBrushShape(shape: minecraftserver.Vector3[] | minecraftserver.CompoundBlockVolume): void
`

#### **Parameters**
- **shape**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)[] | [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)
  
Notes:
- This function can't be called in read-only mode.

### **setBrushShapeOffset**
`
setBrushShapeOffset(offset: minecraftserver.Vector3): void
`

#### **Parameters**
- **offset**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **setBrushShapeVisible**
`
setBrushShapeVisible(visible: boolean): void
`

#### **Parameters**
- **visible**: *boolean*
  
Notes:
- This function can't be called in read-only mode.

### **setSmoothStrength**
`
setSmoothStrength(smoothStrength: number): void
`

#### **Parameters**
- **smoothStrength**: *number*
  
Notes:
- This function can't be called in read-only mode.

### **singlePaint**
`
singlePaint(onComplete: (arg: PaintCompletionState) => void): void
`

#### **Parameters**
- **onComplete**: (arg: [*PaintCompletionState*](PaintCompletionState.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **switchBrushPaintMode**
`
switchBrushPaintMode(paintMode: PaintMode): void
`

#### **Parameters**
- **paintMode**: [*PaintMode*](PaintMode.md)
  
Notes:
- This function can't be called in read-only mode.

### **switchBrushShape**
`
switchBrushShape(name: string): minecraftserver.CompoundBlockVolume
`

#### **Parameters**
- **name**: *string*

**Returns** [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *@minecraft/server.Error*

### **uiSettingValueChanged**
`
uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean
`

#### **Parameters**
- **elementName**: *string*
- **newValue**: *boolean* | *number* | *string* | [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*
