---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockLiquidContainerComponent Class
description: Contents of the @minecraft/server.BlockLiquidContainerComponent class.
---
# BlockLiquidContainerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

## Classes that extend BlockLiquidContainerComponent
- [*BlockLavaContainerComponent*](BlockLavaContainerComponent.md)
- [*BlockPotionContainerComponent*](BlockPotionContainerComponent.md)
- [*BlockSnowContainerComponent*](BlockSnowContainerComponent.md)
- [*BlockWaterContainerComponent*](BlockWaterContainerComponent.md)

For blocks that can contain a liquid (e.g., a cauldron), this is a base component for liquid containers. 

## Properties

### **fillLevel**
`fillLevel: number;`

Relative fill level of the liquid container.

Type: *number*
