---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.JigsawPlaceOptions Interface
description: Contents of the @minecraft/server.JigsawPlaceOptions class.
---
# JigsawPlaceOptions Interface

Provides additional options for [*@minecraft/server.StructureManager.placeJigsaw*](../../../scriptapi/minecraft/server/StructureManager.md#placejigsaw).

## Properties

### **includeEntities**
`includeEntities?: boolean;`

Whether entities should be included in the structure. Defaults to true.

Type: *boolean*

### **keepJigsaws**
`keepJigsaws?: boolean;`

Whether the jigsaw blocks should be kept when generating the structure. Defaults to false.

Type: *boolean*

::: moniker range="=minecraft-bedrock-experimental"
### **liquidSettings**
`liquidSettings?: LiquidSettings;`

Specifies how to handle waterloggable blocks overlapping with existing liquid. Defaults to `ApplyWaterlogging`.

Type: [*LiquidSettings*](LiquidSettings.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end
