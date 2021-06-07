---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockInventoryComponent Class
description: Contents of the Minecraft.BlockInventoryComponent class.
---
# BlockInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Represents the inventory of a block in the world. Used with blocks like chests.

## Properties
### **container** - `BlockInventoryComponentContainer`
The container which holds an [ItemStack](ItemStack.md).


#### Examples
##### ***place_items_in_chest.js***
```javascript
import { World, BlockTypes, BlockProperties, BlockLocation, Items, ItemStack } from "Minecraft";

// Fetch block
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

// Make it a chest
block.setType(BlockTypes.chest);

// Get the inventory
const inventoryComponent = block.getComponent("inventory");
const inventoryContainer = inventoryComponent.container;

// Set slot 0 to a stack of 10 apples
inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));

```

