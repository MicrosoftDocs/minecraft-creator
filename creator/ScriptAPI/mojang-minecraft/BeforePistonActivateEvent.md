---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforePistonActivateEvent Class
description: Contents of the mojang-minecraft.BeforePistonActivateEvent class.
---
# BeforePistonActivateEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes before a piston expands or retracts.

## Properties

### **block**
`read-only block: Block;`

Block impacted by this event.

Type: [*Block*](Block.md)

### **cancel**
`cancel: boolean;`

If this is set to true within an event handler, the piston activation is canceled.

Type: *boolean*

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this event.

Type: [*Dimension*](Dimension.md)

### **isExpanding**
`read-only isExpanding: boolean;`

True if the piston is the process of expanding.

Type: *boolean*

### **piston**
`read-only piston: BlockPistonComponent;`

Contains additional properties and details of the piston.

Type: [*BlockPistonComponent*](BlockPistonComponent.md)
