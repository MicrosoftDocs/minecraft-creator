---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockPotionContainerComponent Class
description: Contents of the mojang-minecraft.BlockPotionContainerComponent class.
---
# BlockPotionContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a fluid container block that currently contains a potion.

## Properties

### **fillLevel**
`fillLevel: number;`

Relative level of potion liquid within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).

Type: *number*

### **location**
`read-only location: BlockLocation;`

Source location of the block.

Type: [*BlockLocation*](BlockLocation.md)

## Methods
- [setPotionType](#setpotiontype)

### **setPotionType**
`
setPotionType(item: ItemStack): void
`
Sets the potion type based on an item stack.

#### **Parameters**
- **item**: [*ItemStack*](ItemStack.md)
  
  Potion to use as the type of potion for this potion container.
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "potionContainer";`

Type: *string*
