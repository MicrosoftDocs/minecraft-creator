---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockWaterContainerComponent Class
description: Contents of the @minecraft/server.BlockWaterContainerComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockWaterContainerComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockLiquidContainerComponent*](BlockLiquidContainerComponent.md)

Represents a fluid container block that currently contains water.

## Methods
- [addDye](#adddye)
- [getCustomColor](#getcustomcolor)
- [setCustomColor](#setcustomcolor)

### **addDye**
`
addDye(itemType: ItemType): void
`

Adds an item and colors the water based on a dye item type.

#### **Parameters**
- **itemType**: [*ItemType*](ItemType.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getCustomColor**
`
getCustomColor(): RGBA
`

Retrieves a custom base color used for the sign text.

**Returns** [*RGBA*](RGBA.md) - Color that is used as the base color for sign text.

> [!WARNING]
> This function can throw errors.

### **setCustomColor**
`
setCustomColor(color: RGBA): void
`

Sets a custom base color used for the sign text. 

#### **Parameters**
- **color**: [*RGBA*](RGBA.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:waterContainer";`

Type: *string*
