---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockType Class
description: Contents of the Minecraft.BlockType class.
---
# BlockType Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

The type (or template) of a block. Does not contain permutation data (state) other than the type of block it represents. This type was introduced as of version 1.17.10.21.


## Methods
- [getName](#getname)
- [canBeWaterlogged](#canbewaterlogged)
- [createDefaultBlockPermutation](#createdefaultblockpermutation)
  
### **getName**
`
getName(): string
`

Name of the block type.

Returns *string* - Block type name - for example, `minecraft:acacia_stairs`.


### **canBeWaterlogged**
`
canBeWaterlogged(): boolean
`


Returns *boolean*


### **createDefaultBlockPermutation**
`
createDefaultBlockPermutation(): BlockPermutation
`

Creates the default [*Minecraft.BlockPermutation*](../Minecraft/BlockPermutation.md) for this type which uses the default values for all properties.

Returns [*BlockPermutation*](BlockPermutation.md) - Returns created permutation.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***place_bottom_stone_slab.js***
```javascript
import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";

// Create the permutation
let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;

// Fetch the block
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

// Set the permutation
block.setPermutation(bottomStoneSlab);

```
