---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockPermutation Class
description: Contents of the Minecraft.BlockPermutation class.
---
# BlockPermutation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains the combination of type [*Minecraft.BlockType*](../Minecraft/BlockType.md) and properties (also sometimes called block state) which describe a block (but does not belong to a specific [*Minecraft.Block*](../Minecraft/Block.md)). This type was introduced as of version 1.17.10.21.


## Methods
- [clone](#clone)
- [getAllProperties](#getallproperties)
- [getProperty](#getproperty)
- [getTags](#gettags)
- [getType](#gettype)
- [hasTag](#hastag)
  
### **clone**
`
clone(): BlockPermutation
`

Creates a copy of this permutation.

Returns [*BlockPermutation*](BlockPermutation.md) - A copy of the permutation.


### **getAllProperties**
`
getAllProperties(): any[]
`


Returns *any*[] - Returns the list of all of the properties that the permutation has.


### **getProperty**
`
getProperty(propertyName: string): any
`

Gets a property for the permutation.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **propertyName** | *string* | - |

Returns *any* - Returns the property if the permutation has it, else `null`.

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
### **getTags**
`
getTags(): any[]
`

Creates a copy of the permutation.

Returns *any*[]


### **getType**
`
getType(): BlockType
`


Returns [*BlockType*](BlockType.md) - The [*Minecraft.BlockType*](../Minecraft/BlockType.md) that the permutation has.

> [!WARNING]
> This function can throw errors.

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation has a specific tag.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tag** | *string* | - |

Returns *boolean* - Returns `true` if the permutation has the tag, else `false`.


#### Examples
##### ***check_block_tags.js***
```javascript
import { World, BlockTypes, BlockLocation } from "Minecraft";

// Fetch the block
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
const blockPerm = block.getPermutation();

console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);

```
