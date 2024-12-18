---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BlockUtilities Class
description: Contents of the @minecraft/server-editor.BlockUtilities class.
---
# BlockUtilities Class

## Methods
- [fillVolume](#fillvolume)

### **fillVolume**
`
fillVolume(volume: minecraftserver.BlockVolumeBase | minecraftserver.CompoundBlockVolume | Selection, block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void
`

#### **Parameters**
- **volume**: [*@minecraft/server.BlockVolumeBase*](../../minecraft/server/BlockVolumeBase.md) | [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) | [*Selection*](Selection.md)
- **block**?: [*@minecraft/server.BlockPermutation*](../../minecraft/server/BlockPermutation.md) | [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
