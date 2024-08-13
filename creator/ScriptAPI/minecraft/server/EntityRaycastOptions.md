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

### **ignoreBlockCollision**
`ignoreBlockCollision?: boolean;`

If true, blocks will not be considered as blocks that 'stop' the raycast.

Type: *boolean*

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
