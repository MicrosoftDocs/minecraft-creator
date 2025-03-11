---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.BlockUtilities Class
description: Contents of the @minecraft/server-editor.BlockUtilities class.
---
# BlockUtilities Class

## Methods
- [fillVolume](#fillvolume)
- [getContiguousSelection](#getcontiguousselection)
- [getFacePreviewSelection](#getfacepreviewselection)
- [quickExtrude](#quickextrude)

### **fillVolume**
`
fillVolume(volume: minecraftserver.BlockVolumeBase | minecraftserver.CompoundBlockVolume | RelativeVolumeListBlockVolume, block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void
`

#### **Parameters**
- **volume**: [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*@minecraft/server.CompoundBlockVolume*](../../../scriptapi/minecraft/server/CompoundBlockVolume.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md)
- **block**?: [*@minecraft/server.BlockPermutation*](../../../scriptapi/minecraft/server/BlockPermutation.md) | [*@minecraft/server.BlockType*](../../../scriptapi/minecraft/server/BlockType.md) | *string* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getContiguousSelection**
`
getContiguousSelection(properties?: ContiguousSelectionProperties): minecraftserver.CompoundBlockVolume
`

#### **Parameters**
- **properties**?: [*ContiguousSelectionProperties*](ContiguousSelectionProperties.md) = `null`

**Returns** [*@minecraft/server.CompoundBlockVolume*](../../../scriptapi/minecraft/server/CompoundBlockVolume.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **getFacePreviewSelection**
`
getFacePreviewSelection(properties?: QuickExtrudeProperties): minecraftserver.ListBlockVolume
`

#### **Parameters**
- **properties**?: [*QuickExtrudeProperties*](QuickExtrudeProperties.md) = `null`

**Returns** [*@minecraft/server.ListBlockVolume*](../../../scriptapi/minecraft/server/ListBlockVolume.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **quickExtrude**
`
quickExtrude(properties?: QuickExtrudeProperties): void
`

#### **Parameters**
- **properties**?: [*QuickExtrudeProperties*](QuickExtrudeProperties.md) = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
