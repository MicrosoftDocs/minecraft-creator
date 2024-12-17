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

##### ***placeItemsInChest.ts***

```typescript
import { ItemStack, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

function placeItemsInChest(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch block
  const block = targetLocation.dimension.getBlock(targetLocation);

  if (!block) {
    log("Could not find block. Maybe it is not loaded?", -1);
    return;
  }

  // Make it a chest
  block.setType(MinecraftBlockTypes.Chest);

  // Get the inventory
  const inventoryComponent = block.getComponent("inventory") as BlockInventoryComponent;

  if (!inventoryComponent || !inventoryComponent.container) {
    log("Could not find inventory component.", -1);
    return;
  }

  const inventoryContainer = inventoryComponent.container;

  // Set slot 0 to a stack of 10 apples
  inventoryContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/placeItemsInChest.ts) code sandbox.

## Properties

### **container**
`read-only container?: Container;`

The container which holds an [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md).

Type: [*Container*](Container.md)

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:inventory";`

Type: *string*

#### Examples

##### ***placeItemsInChest.ts***

```typescript
import { ItemStack, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

function placeItemsInChest(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch block
  const block = targetLocation.dimension.getBlock(targetLocation);

  if (!block) {
    log("Could not find block. Maybe it is not loaded?", -1);
    return;
  }

  // Make it a chest
  block.setType(MinecraftBlockTypes.Chest);

  // Get the inventory
  const inventoryComponent = block.getComponent("inventory") as BlockInventoryComponent;

  if (!inventoryComponent || !inventoryComponent.container) {
    log("Could not find inventory component.", -1);
    return;
  }

  const inventoryContainer = inventoryComponent.container;

  // Set slot 0 to a stack of 10 apples
  inventoryContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/placeItemsInChest.ts) code sandbox.
