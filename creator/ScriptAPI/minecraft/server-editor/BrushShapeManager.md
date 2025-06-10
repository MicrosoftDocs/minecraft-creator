---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.BrushShapeManager Class
description: Contents of the @minecraft/server-editor.BrushShapeManager class.
---
# BrushShapeManager Class

## Properties

### **activeBrushVolume**
`read-only activeBrushVolume?: RelativeVolumeListBlockVolume;`

Type: [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md)

## Methods
- [activateBrushTool](#activatebrushtool)
- [beginPainting](#beginpainting)
- [deactivateBrushTool](#deactivatebrushtool)
- [endPainting](#endpainting)
- [getBrushShapeOffset](#getbrushshapeoffset)
- [getDirectionalPlacementMode](#getdirectionalplacementmode)
- [getInverseEraseMode](#getinverseerasemode)
- [isBrushPaintBusy](#isbrushpaintbusy)
- [setBrushMask](#setbrushmask)
- [setBrushShape](#setbrushshape)
- [setBrushShapeOffset](#setbrushshapeoffset)
- [setBrushShapeVisible](#setbrushshapevisible)
- [setDirectionalPlacementMode](#setdirectionalplacementmode)
- [setFlattenHeight](#setflattenheight)
- [setFlattenRadius](#setflattenradius)
- [setInverseEraseMode](#setinverseerasemode)
- [setTerrainStrength](#setterrainstrength)
- [singlePaint](#singlepaint)
- [switchBrushPaintMode](#switchbrushpaintmode)

### **activateBrushTool**
`
activateBrushTool(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **beginPainting**
`
beginPainting(onComplete: (arg0: PaintCompletionState) => void): void
`

#### **Parameters**
- **onComplete**: (arg0: [*PaintCompletionState*](PaintCompletionState.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

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

### **getBrushShapeOffset**
`
getBrushShapeOffset(): minecraftserver.Vector3
`

**Returns** [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.

### **getDirectionalPlacementMode**
`
getDirectionalPlacementMode(): BrushDirectionalPlacementMode
`

**Returns** [*BrushDirectionalPlacementMode*](BrushDirectionalPlacementMode.md)
  
Notes:
- This function can't be called in read-only mode.

### **getInverseEraseMode**
`
getInverseEraseMode(): boolean
`

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.

### **isBrushPaintBusy**
`
isBrushPaintBusy(): boolean
`

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.

### **setBrushMask**
`
setBrushMask(mask: BlockMaskList): void
`

#### **Parameters**
- **mask**: [*BlockMaskList*](BlockMaskList.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setBrushShape**
`
setBrushShape(shape: minecraftserver.Vector3[] | RelativeVolumeListBlockVolume): void
`

#### **Parameters**
- **shape**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md)
  
Notes:
- This function can't be called in read-only mode.

### **setBrushShapeOffset**
`
setBrushShapeOffset(offset: minecraftserver.Vector3): void
`

#### **Parameters**
- **offset**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
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

### **setDirectionalPlacementMode**
`
setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void
`

#### **Parameters**
- **directionalPlacementMode**: [*BrushDirectionalPlacementMode*](BrushDirectionalPlacementMode.md)
  
Notes:
- This function can't be called in read-only mode.

### **setFlattenHeight**
`
setFlattenHeight(flattenHeight: number): void
`

#### **Parameters**
- **flattenHeight**: *number*
  
Notes:
- This function can't be called in read-only mode.

### **setFlattenRadius**
`
setFlattenRadius(flattenRadius: number): void
`

#### **Parameters**
- **flattenRadius**: *number*
  
Notes:
- This function can't be called in read-only mode.

### **setInverseEraseMode**
`
setInverseEraseMode(inverseEraseMode: boolean): void
`

#### **Parameters**
- **inverseEraseMode**: *boolean*
  
Notes:
- This function can't be called in read-only mode.

### **setTerrainStrength**
`
setTerrainStrength(terrainStrength: number): void
`

#### **Parameters**
- **terrainStrength**: *number*
  
Notes:
- This function can't be called in read-only mode.

### **singlePaint**
`
singlePaint(onComplete: (arg0: PaintCompletionState) => void): void
`

#### **Parameters**
- **onComplete**: (arg0: [*PaintCompletionState*](PaintCompletionState.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **switchBrushPaintMode**
`
switchBrushPaintMode(paintMode: PaintMode): void
`

#### **Parameters**
- **paintMode**: [*PaintMode*](PaintMode.md)
  
Notes:
- This function can't be called in read-only mode.
