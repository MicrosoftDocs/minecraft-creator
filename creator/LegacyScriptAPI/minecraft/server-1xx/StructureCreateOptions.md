---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.StructureCreateOptions Interface
description: Contents of the @minecraft/server.StructureCreateOptions class (Version 1.x.x).
---
# StructureCreateOptions Interface (Version 1.x.x)

Provides additional options for [*@minecraft/server.StructureManager.createFromWorld*](../../../legacyscriptapi/minecraft/server-1xx/StructureManager.md#createfromworld)

## Properties

### **includeBlocks**
`includeBlocks?: boolean;`

Whether blocks should be included in the structure. Defaults to true.

Type: *boolean*

### **includeEntities**
`includeEntities?: boolean;`

Whether entities should be included in the structure. Defaults to true.

Type: *boolean*

### **saveMode**
`saveMode?: StructureSaveMode;`

How the Structure should be saved. Defaults to StructureSaveMode.World.

Type: [*StructureSaveMode*](StructureSaveMode.md)
