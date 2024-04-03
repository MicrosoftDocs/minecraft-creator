---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityRaycastOptions Interface
description: Contents of the @minecraft/server.EntityRaycastOptions class.
---
# EntityRaycastOptions Interface

## Extends
- [*EntityFilter*](EntityFilter.md)

Contains additional options for an entity raycast operation.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **ignoreBlockCollision**
`ignoreBlockCollision?: boolean;`

If true, blocks will not be considered as blocks that 'stop' the raycast.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **includeLiquidBlocks**
`includeLiquidBlocks?: boolean;`

If true, liquid blocks will be considered as blocks that 'stop' the raycast.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **includePassableBlocks**
`includePassableBlocks?: boolean;`

If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **maxDistance**
`maxDistance?: number;`

Maximum distance, in blocks, to process the raycast.

Type: *number*
