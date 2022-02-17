---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockLavaContainerComponent Class
description: Contents of the mojang-minecraft.BlockLavaContainerComponent class.
---
# BlockLavaContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Represents a fluid container block that currently contains lava.

## Properties
### **fillLevel**
`fillLevel: number;`

Relative level of lava within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).

Type: *number*


### **location**
`read-only location: BlockLocation;`

Source location of the block.

Type: [*BlockLocation*](BlockLocation.md)


