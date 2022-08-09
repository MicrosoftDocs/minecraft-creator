---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.LeverActionEvent Class
description: Contents of the mojang-minecraft.LeverActionEvent class.
---
# LeverActionEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a lever activating or deactivating.

## Properties

### **block**
`read-only block: Block;`

Block impacted by this event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this event.

Type: [*Dimension*](Dimension.md)

### **isPowered**
`read-only isPowered: boolean;`

True if the lever is activated (that is, transmitting power).

Type: *boolean*

### **player**
`read-only player: Player;`

Optional player that triggered the lever activation.

Type: [*Player*](Player.md)
