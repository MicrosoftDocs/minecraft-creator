---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockWaterContainerComponent Class
description: Contents of the mojang-minecraft.BlockWaterContainerComponent class.
---
# BlockWaterContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Represents a fluid container block that currently contains water.

## Properties
### **customColor**
`customColor: Color;`

Represents a color facet of the water.

Type: [*Color*](Color.md)


### **fillLevel**
`fillLevel: number;`

Relative level of water within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).

Type: *number*


### **location**
`read-only location: BlockLocation;`

Source location of the block.

Type: [*BlockLocation*](BlockLocation.md)



## Methods
- [addDye](#adddye)
  
### **addDye**
`
addDye(itemType: ItemType): void
`

Adds an item and colors the water based on a dye item type.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*ItemType*](ItemType.md) | n/a | - |


> [!WARNING]
> This function can throw errors.


