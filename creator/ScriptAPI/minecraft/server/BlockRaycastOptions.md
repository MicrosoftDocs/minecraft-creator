---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockRaycastOptions Interface
description: Contents of the @minecraft/server.BlockRaycastOptions class.
---
# BlockRaycastOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains additional options for configuring a block raycast query.

## Properties

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
