---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockWaterContainerComponent Class
description: Contents of the @minecraft/server.BlockWaterContainerComponent class.
---
# BlockWaterContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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

> [!WARNING]
> This function can throw errors.

### **getCustomColor**
`
getCustomColor(): Color
`

Retrieves a custom base color used for the sign text.

#### **Returns** [*Color*](Color.md) - Color that is used as the base color for sign text.

> [!WARNING]
> This function can throw errors.

### **setCustomColor**
`
setCustomColor(color: Color): void
`

Sets a custom base color used for the sign text. 

#### **Parameters**
- **color**: [*Color*](Color.md)

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:waterContainer";`

Identifier of this component. Should always be minecraft:waterContainer.

Type: *string*
