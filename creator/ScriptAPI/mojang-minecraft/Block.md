---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Block Class
description: Contents of the mojang-minecraft.Block class.
---
# Block Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.

## Properties
### **x**
`read-only x: number;`

Type: *number*


### **y**
`read-only y: number;`

Type: *number*


### **z**
`read-only z: number;`

Type: *number*



## Methods
- [canBeWaterlogged](#canbewaterlogged)
- [getBlockData](#getblockdata)
- [getComponent](#getcomponent)
- [getDimension](#getdimension)
- [getLocation](#getlocation)
- [getTags](#gettags)
- [hasTag](#hastag)
- [isEmpty](#isempty)
- [isWaterlogged](#iswaterlogged)
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
getComponent(componentName: string): any
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **componentName** | *string* | n/a | - |

Returns *any*

> [!WARNING]
> This function can throw errors.

### **getDimension**
`
getDimension(): Dimension
`


Returns [*Dimension*](Dimension.md)


### **getLocation**
`
getLocation(): BlockLocation
`


Returns [*BlockLocation*](BlockLocation.md) - Coordinates of the specified block.


### **getTags**
`
getTags(): any[]
`


Returns *any*[] - The list of tags that the block has.


### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation of this block has a specific tag.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **tag** | *string* | n/a | - |

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


### **setPermutation**
`
setPermutation(permutation: BlockPermutation): void
`

Sets the block in the dimension to the state of the permutation.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **permutation** | [*BlockPermutation*](BlockPermutation.md) | n/a | - |



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
setType(blockType: BlockType): void
`

Sets the type of block.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*BlockType*](BlockType.md) | n/a | - |



### **setWaterlogged**
`
setWaterlogged(setWaterlogged: boolean): void
`

Sets the waterlogged state of the block.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **setWaterlogged** | *boolean* | n/a | If set to true, and if the block can be waterlogged, then the block becomes waterlogged. |


> [!WARNING]
> This function can throw errors.


