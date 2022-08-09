---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeItemUseOnEvent Class
description: Contents of the mojang-minecraft.BeforeItemUseOnEvent class.
---
# BeforeItemUseOnEvent Class
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

### **cancel**
`cancel: boolean;`

If set to true, this will cancel the item use behavior.

Type: *boolean*

### **faceLocationX**
`read-only faceLocationX: number;`

X coordinate of the item-use impact location on the face of the target block.

Type: *number*

### **faceLocationY**
`read-only faceLocationY: number;`

Y coordinate of the item-use impact location on the face of the target block.

Type: *number*

### **item**
`item: ItemStack;`

The impacted item stack that is being used on a block.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)
