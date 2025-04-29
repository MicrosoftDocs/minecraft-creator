---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.LiquidSettings Enumeration
description: Contents of the @minecraft/server.LiquidSettings enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# LiquidSettings Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

Specifies how to handle waterloggable blocks overlapping with existing liquid.

## Constants
### **ApplyWaterlogging**
`ApplyWaterlogging = "ApplyWaterlogging"`

Causes a waterloggable block to become waterlogged, if it overlaps with existing liquid.
### **IgnoreWaterlogging**
`IgnoreWaterlogging = "IgnoreWaterlogging"`

Do not waterlog any waterloggable blocks that overlap existing liquid.
