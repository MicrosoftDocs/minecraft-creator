---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.WidgetComponentBoundingBox Class
description: Contents of the @minecraft/server-editor.WidgetComponentBoundingBox class.
---
# WidgetComponentBoundingBox Class

## Extends
- [*WidgetComponentBase*](WidgetComponentBase.md)

## Properties

### **boundsOffset**
`boundsOffset: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **enableResizeHandles**
`enableResizeHandles: Axis;`

Type: [*Axis*](Axis.md)

Notes:
  - This property can't be edited in read-only mode.

### **hullColor**
`hullColor: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)

Notes:
  - This property can't be edited in read-only mode.

### **mirror**
`mirror: minecraftserver.StructureMirrorAxis;`

Type: [*@minecraft/server.StructureMirrorAxis*](../../../scriptapi/minecraft/server/StructureMirrorAxis.md)

Notes:
  - This property can't be edited in read-only mode.

### **normalizedOrigin**
`normalizedOrigin: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **outlineColor**
`outlineColor: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)

Notes:
  - This property can't be edited in read-only mode.

### **rotation**
`rotation: minecraftserver.StructureRotation;`

Type: [*@minecraft/server.StructureRotation*](../../../scriptapi/minecraft/server/StructureRotation.md)

Notes:
  - This property can't be edited in read-only mode.

### **showWorldIntersections**
`showWorldIntersections: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **size**
`size: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **transformedWorldVolume**
`read-only transformedWorldVolume: minecraftserver.BlockVolume;`

Type: [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **visibleHull**
`visibleHull: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [deactivateHandles](#deactivatehandles)
- [setStateChangeEvent](#setstatechangeevent)

### **deactivateHandles**
`
deactivateHandles(): void
`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **setStateChangeEvent**
`
setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void
`

#### **Parameters**
- **eventFunction**?: (arg0: [*WidgetComponentBoundingBoxStateChangeEventParameters*](WidgetComponentBoundingBoxStateChangeEventParameters.md)) => *void* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)
