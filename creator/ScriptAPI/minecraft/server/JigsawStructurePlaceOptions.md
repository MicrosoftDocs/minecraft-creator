---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.JigsawStructurePlaceOptions Interface
description: Contents of the @minecraft/server.JigsawStructurePlaceOptions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# JigsawStructurePlaceOptions Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Provides additional options for [*@minecraft/server.StructureManager.placeJigsawStructure*](../../minecraft/server/StructureManager.md#placejigsawstructure).

## Properties

### **ignoreStartHeight**
`ignoreStartHeight?: boolean;`

Whether the start height defined in the jigsaw structure definition should be ignored and overridden with the specified y coordinate. Defaults to false.

Type: *boolean*

### **keepJigsaws**
`keepJigsaws?: boolean;`

Whether the jigsaw blocks should be kept when generating the structure. Defaults to false.

Type: *boolean*
