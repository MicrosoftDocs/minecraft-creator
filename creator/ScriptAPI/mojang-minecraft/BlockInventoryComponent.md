---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockInventoryComponent Class
description: Contents of the mojang-minecraft.BlockInventoryComponent class.
---
# BlockInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents the inventory of a block in the world. Used with blocks like chests.

## Properties

### **container**
`read-only container: BlockInventoryComponentContainer;`

The container which holds an [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md).

Type: [*BlockInventoryComponentContainer*](BlockInventoryComponentContainer.md)

### **location**
`read-only location: BlockLocation;`

Coordinates of the specified block.

Type: [*BlockLocation*](BlockLocation.md)

## Constants

### **id**
`static read-only id = "inventory";`

Type: *string*

#### **Examples**
##### *place_items_in_chest.js*
```javascript
import { world, MinecraftBlockTypes, BlockLocation, Items, ItemStack } from "mojang-minecraft";
// Fetch block
const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
// Make it a chest
block.setType(MinecraftBlockTypes.chest);
// Get the inventory
const inventoryComponent = block.getComponent("inventory");
const inventoryContainer = inventoryComponent.container;
// Set slot 0 to a stack of 10 apples
inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
```
