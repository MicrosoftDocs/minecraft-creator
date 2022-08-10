---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockExplodeEvent Class
description: Contents of the mojang-minecraft.BlockExplodeEvent class.
---
# BlockExplodeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an explosion that has occurred for a specific block.

## Properties

### **block**
`read-only block: Block;`

Block impacted by this explosion event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this explosion event.

Type: [*Dimension*](Dimension.md)

### **source**
`read-only source: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)
