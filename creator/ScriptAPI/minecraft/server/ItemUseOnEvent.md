---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemUseOnEvent Class
description: Contents of the @minecraft/server.ItemUseOnEvent class.
---
# ItemUseOnEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend ItemUseOnEvent
- [*BeforeItemUseOnEvent*](BeforeItemUseOnEvent.md)

Contains information related to an item being used on a block.

## Properties

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that an item is being used on.

Type: [*Direction*](Direction.md)

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

## Methods
- [getBlockLocation](#getblocklocation)

### **getBlockLocation**
`
getBlockLocation(): Vector3
`

#### **Returns** [*Vector3*](Vector3.md)

> [!WARNING]
> This function can throw errors.
