---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.StructureSaveMode Enumeration
description: Contents of the @minecraft/server.StructureSaveMode enumeration.
---
# StructureSaveMode Enumeration

Specifies how a structure should be saved.

## Constants
### **Memory**
`Memory = "Memory"`

The structure will be temporarily saved to memory. The structure will persist until the world is shut down.
### **World**
`World = "World"`

The structure will be saved to the world file and persist between world loads. A saved structure can be removed from the world via @minecraft/server.StructureManager.delete.
