---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.JigsawStructurePlaceOptions Interface
description: Contents of the @minecraft/server.JigsawStructurePlaceOptions class.
---
# JigsawStructurePlaceOptions Interface

Provides additional options for [*@minecraft/server.StructureManager.placeJigsawStructure*](../../../scriptapi/minecraft/server/StructureManager.md#placejigsawstructure).

## Properties

### **ignoreStartHeight**
`ignoreStartHeight?: boolean;`

Whether the start height defined in the jigsaw structure definition should be ignored and overridden with the specified y coordinate. Defaults to false.

Type: *boolean*

### **includeEntities**
`includeEntities?: boolean;`

Whether entities should be included in the structure. Defaults to true.

Type: *boolean*

### **keepJigsaws**
`keepJigsaws?: boolean;`

Whether the jigsaw blocks should be kept when generating the structure. Defaults to false.

Type: *boolean*
