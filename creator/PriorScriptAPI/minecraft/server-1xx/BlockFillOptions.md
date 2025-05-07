---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockFillOptions Interface
description: Contents of the @minecraft/server.BlockFillOptions class (Version 1.x.x).
---
# BlockFillOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockFillOptions.md).

Contains additional options for a block fill operation.

## Properties

### **blockFilter**
`blockFilter?: BlockFilter;`

When specified, the fill operation will include / exclude the blocks added to the block filter.

Type: [*BlockFilter*](BlockFilter.md)

### **ignoreChunkBoundErrors**
`ignoreChunkBoundErrors?: boolean;`

When true fillBlocks will not error if part of the fill volume is outside of loaded chunks bounds. Instead it will just fill the blocks that are inside the loaded chunk bounds and ignoring blocks outside.

Type: *boolean*
