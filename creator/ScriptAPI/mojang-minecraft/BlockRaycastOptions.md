---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockRaycastOptions Class
description: Contents of the mojang-minecraft.BlockRaycastOptions class.
---
# BlockRaycastOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains additional options for configuring a block raycast query.

## Properties

### **includeLiquidBlocks**
`includeLiquidBlocks: boolean;`

If true, liquid blocks will be considered as blocks that 'stop' the raycast.

Type: *boolean*

### **includePassableBlocks**
`includePassableBlocks: boolean;`

If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast.

Type: *boolean*

### **maxDistance**
`maxDistance: number;`

Maximum distance, in blocks, to process the raycast.

Type: *number*

## Methods
- [constructor](#constructor)

### **constructor**
`
new BlockRaycastOptions()
`
Creates a new BlockRaycastOptions object, for use in a block vector query.

#### **Returns** [*BlockRaycastOptions*](BlockRaycastOptions.md)
