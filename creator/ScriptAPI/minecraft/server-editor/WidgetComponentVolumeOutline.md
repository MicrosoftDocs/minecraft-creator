---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.WidgetComponentVolumeOutline Class
description: Contents of the @minecraft/server-editor.WidgetComponentVolumeOutline class.
---
# WidgetComponentVolumeOutline Class

## Extends
- [*WidgetComponentBase*](WidgetComponentBase.md)

## Properties

### **highlightHullColor**
`highlightHullColor: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)

Notes:
  - This property can't be edited in read-only mode.

### **highlightOutlineColor**
`highlightOutlineColor: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)

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

### **showHighlightOutline**
`showHighlightOutline: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **showOutline**
`showOutline: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **transformedWorldVolume**
`read-only transformedWorldVolume: minecraftserver.BlockVolume;`

Type: [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **volumeOffset**
`volumeOffset: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [getVolume](#getvolume)
- [setVolume](#setvolume)

### **getVolume**
`
getVolume(): RelativeVolumeListBlockVolume | undefined
`

**Returns** [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | *undefined*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **setVolume**
`
setVolume(volumeToSet?: minecraftserver.Vector3[] | minecraftserver.BlockVolume | minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume | minecraftserver.Vector3): void
`

#### **Parameters**
- **volumeToSet**?: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)[] | [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) | [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) | [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md) = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)
