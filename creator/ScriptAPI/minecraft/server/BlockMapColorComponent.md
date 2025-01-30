---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockMapColorComponent Class
description: Contents of the @minecraft/server.BlockMapColorComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockMapColorComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents the color of a block when displayed on a map.

## Methods
- [color](#color)
- [tintedColor](#tintedcolor)
- [tintMethod](#tintmethod)

### **color**
`
color(): RGBA
`

Base map color defined for that block.

**Returns** [*RGBA*](RGBA.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **tintedColor**
`
tintedColor(): RGBA
`

Returns the base color multiplied to the evaluated tint at the given position.

**Returns** [*RGBA*](RGBA.md)
  
Notes:
- This function can't be called in read-only mode.

### **tintMethod**
`
tintMethod(): TintMethod
`

Type of tint applied to the color.

**Returns** [*TintMethod*](TintMethod.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

## Constants

### **componentId**
`static read-only componentId = "minecraft:map_color";`

Type: *string*
