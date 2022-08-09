---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStartUseOnEvent Class
description: Contents of the mojang-minecraft.ItemStartUseOnEvent class.
---
# ItemStartUseOnEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to an item being used on a block.

## Properties

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that an item is being used on.

Type: [*Direction*](Direction.md)

### **blockLocation**
`read-only blockLocation: BlockLocation;`

Location of the block being impacted.

Type: [*BlockLocation*](BlockLocation.md)

### **buildBlockLocation**
`read-only buildBlockLocation: BlockLocation;`

Location of the resulting build block position. Useful for determining where a block was placed.

Type: [*BlockLocation*](BlockLocation.md)

### **item**
`item: ItemStack;`

The impacted item stack that is starting to be used.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)
