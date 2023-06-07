---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockPotionContainerComponent Class
description: Contents of the @minecraft/server.BlockPotionContainerComponent class.
---
# BlockPotionContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockLiquidContainerComponent*](BlockLiquidContainerComponent.md)

Represents a fluid container block that currently contains a potion.

## Methods
- [setPotionType](#setpotiontype)

### **setPotionType**
`
setPotionType(itemStack: ItemStack): void
`

Sets the potion type based on an item stack.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:potionContainer";`

Type: *string*
