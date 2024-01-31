---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockRaycastOptions Interface
description: Contents of the @minecraft/server.BlockRaycastOptions class.
---
# BlockRaycastOptions Interface

Contains additional options for configuring a block raycast query.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **blockFilter**
`blockFilter?: BlockFilter;`

Type: [*BlockFilter*](BlockFilter.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **includeLiquidBlocks**
`includeLiquidBlocks?: boolean;`

If true, liquid blocks will be considered as blocks that 'stop' the raycast.

Type: *boolean*

### **includePassableBlocks**
`includePassableBlocks?: boolean;`

If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast.

Type: *boolean*

### **maxDistance**
`maxDistance?: number;`

Maximum distance, in blocks, to process the raycast.

Type: *number*
