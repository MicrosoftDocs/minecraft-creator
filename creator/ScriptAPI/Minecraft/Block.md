---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Block Class
description: Contents of the Minecraft.Block class.
---
# Block Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.

## Properties
### **x** - `number`



### **y** - `number`



### **z** - `number`




## Methods
- [canBeWaterlogged](#canbewaterlogged)
- [getBlockData](#getblockdata)
- [getComponent](#getcomponent)
- [getLocation](#getlocation)
- [getTags](#gettags)
- [isEmpty](#isempty)
- [isWaterlogged](#iswaterlogged)
- [hasTag](#hastag)
- [setPermutation](#setpermutation)
- [setType](#settype)
- [setWaterlogged](#setwaterlogged)
  
### **canBeWaterlogged**
`
canBeWaterlogged(): boolean
`


Returns *boolean* - Whether this particular block, based on its block type, can be waterlogged.


### **getBlockData**
`
getBlockData(): BlockPermutation
`


Returns [*BlockPermutation*](BlockPermutation.md) - Additional block configuration data that describes the block.

> [!WARNING]
> This function can throw errors.

### **getComponent**
`
getComponent(): any
`


Returns *any*

> [!WARNING]
> This function can throw errors.

### **getLocation**
`
getLocation(): BlockLocation
`


Returns [*BlockLocation*](BlockLocation.md) - Coordinates of the specified block.

> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): any[]
`


Returns *any*[] - The list of tags that the block has.


### **isEmpty**
`
isEmpty(): boolean
`


Returns *boolean* - Whether this particular block is empty (air).


### **isWaterlogged**
`
isWaterlogged(): boolean
`


Returns *boolean* - Whether this particular block is in a waterlogged state.


### **hasTag**
`
hasTag(): boolean
`

Checks to see if the permutation of this block has a specific tag.

Returns *boolean* - Returns `true` if the permutation of this block has the tag, else `false`.


#### Examples
##### ***check_block_tags.js***
```javascript
import { World, BlockTypes, BlockLocation } from "Minecraft";

// Fetch the block
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

console.log(`Block is dirt: ${block.hasTag("dirt")}`);
console.log(`Block is wood: ${block.hasTag("wood")}`);
console.log(`Block is stone: ${block.hasTag("stone")}`);

```
### **setPermutation**
`
setPermutation(permutation: BlockPermutation): void
`

Sets the block in the dimension to the state of the permutation.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **permutation** | [*BlockPermutation*](BlockPermutation.md) | - |



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
### **setType**
`
setType(): void
`

Sets the type of block.



### **setWaterlogged**
`
setWaterlogged(setWaterlogged: boolean): void
`

Sets the waterlogged state of the block.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **setWaterlogged** | *boolean* | If set to true, and if the block can be waterlogged, then the block becomes waterlogged. |


> [!WARNING]
> This function can throw errors.

