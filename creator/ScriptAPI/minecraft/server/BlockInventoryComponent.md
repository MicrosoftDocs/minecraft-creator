---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockInventoryComponent Class
description: Contents of the @minecraft/server.BlockInventoryComponent class.
---
# BlockInventoryComponent Class

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents the inventory of a block in the world. Used with blocks like chests.

#### Examples
##### ***place_items_in_chest.js***
```typescript
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

## Properties

### **container**
`read-only container?: Container;`

The container which holds an [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md).

Type: [*Container*](Container.md)

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:inventory";`

Type: *string*

#### Examples
##### ***place_items_in_chest.js***
```typescript
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
