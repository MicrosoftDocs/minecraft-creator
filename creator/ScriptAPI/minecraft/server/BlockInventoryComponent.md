---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockInventoryComponent Class
description: Contents of the @minecraft/server.BlockInventoryComponent class.
---
# BlockInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
## Extends
- [*BlockComponent*](BlockComponent.md)

Represents the inventory of a block in the world. Used with blocks like chests.

## Properties

### **container**
`read-only container: Container;`

The container which holds an [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md).

Type: [*Container*](Container.md)

## Constants

### **componentId**
`static read-only componentId = "minecraft:inventory";`

Identifier of this component. Should always be minecraft:inventory.

Type: *string*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

#### **Examples**
##### *place_items_in_chest.js*
```javascript
import { world, MinecraftBlockTypes, Items, ItemStack } from "@minecraft/server";
// Fetch block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
// Make it a chest
block.setType(MinecraftBlockTypes.chest);
// Get the inventory
const inventoryComponent = block.getComponent("inventory");
const inventoryContainer = inventoryComponent.container;
// Set slot 0 to a stack of 10 apples
inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
```
