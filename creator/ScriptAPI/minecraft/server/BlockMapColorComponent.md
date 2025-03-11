---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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

## Properties

### **color**
`read-only color: RGBA;`

Base map color defined for that block.

Type: [*RGBA*](RGBA.md)

Notes:
  - This property can throw errors when used.
    - Throws *Error*

### **tintedColor**
`read-only tintedColor: RGBA;`

Returns the base color multiplied to the evaluated tint at the given position.

Type: [*RGBA*](RGBA.md)

### **tintMethod**
`read-only tintMethod: TintMethod;`

Type of tint applied to the color.

Type: [*TintMethod*](TintMethod.md)

Notes:
  - This property can throw errors when used.
    - Throws *Error*

## Constants

### **componentId**
`static read-only componentId = "minecraft:map_color";`

Type: *string*
