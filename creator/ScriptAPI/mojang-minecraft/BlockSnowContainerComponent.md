---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockSnowContainerComponent Class
description: Contents of the mojang-minecraft.BlockSnowContainerComponent class.
---
# BlockSnowContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a fluid container block that currently contains snow.

## Properties

### **fillLevel**
`fillLevel: number;`

Relative level of snow within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).

Type: *number*

### **location**
`read-only location: BlockLocation;`

Source location of the block.

Type: [*BlockLocation*](BlockLocation.md)

## Constants

### **id**
`static read-only id = "snowContainer";`

Type: *string*
