---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.StructureAnimationMode Enumeration
description: Contents of the @minecraft/server.StructureAnimationMode enumeration (Version 1.x.x).
---
# StructureAnimationMode Enumeration (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/StructureAnimationMode.md).

Specifies how structure blocks should be animated when a structure is placed.

## Constants
### **Blocks**
`Blocks = "Blocks"`

Blocks will be randomly placed one at at time. Use @minecraft/server.StructurePlaceOptions.animationSeconds to control how long it takes for all blocks to be placed.
### **Layers**
`Layers = "Layers"`

Blocks will be placed one layer at a time from bottom to top. Use @minecraft/server.StructurePlaceOptions.animationSeconds to control how long it takes for all blocks to be placed.
### **None**
`None = "None"`

All blocks will be placed immediately.
