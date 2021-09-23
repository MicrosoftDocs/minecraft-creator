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
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.

## Properties
### **dimension**
`read-only dimension: Dimension;`

Returns the dimension that the block is within.

Type: [*Dimension*](Dimension.md)


### **id**
`read-only id: string;`

Identifier of the type of block for this block.

Type: *string*


### **isEmpty**
`read-only isEmpty: boolean;`

Whether this particular block is empty (air).

Type: *boolean*


### **isWaterlogged**
`isWaterlogged: boolean;`

Returns or sets whether this block has a liquid on it.

Type: *boolean*


### **location**
`read-only location: BlockLocation;`

Coordinates of the specified block.

Type: [*BlockLocation*](BlockLocation.md)


### **permutation**
`read-only permutation: BlockPermutation;`

Additional block configuration data that describes the block.

Type: [*BlockPermutation*](BlockPermutation.md)


### **type**
`read-only type: BlockType;`

Gets the type of block.

Type: [*BlockType*](BlockType.md)


### **x**
`read-only x: number;`

X coordinate of the block.

Type: *number*


### **y**
`read-only y: number;`

Y coordinate of the block.

Type: *number*


### **z**
`read-only z: number;`

Z coordinate of the block.

Type: *number*



## Methods
- [getComponent](#getcomponent)
- [getTags](#gettags)
- [hasTag](#hastag)
- [setPermutation](#setpermutation)
- [setType](#settype)
  
### **getComponent**
`
getComponent(componentName: string): any
`

Gets additional configuration properties (a component) for specific capabilities of particular blocks - for example, an inventory component of a chest block.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **componentName** | *string* | n/a | Identifier of the component. If a namespace is not specified, minecraft: is assumed. |

Returns *any* - Returns the component object if it is present on the particular block.

> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`


Returns *string*[] - The list of tags that the block has.


### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation of this block has a specific tag.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **tag** | *string* | n/a | Tag to check for. |

Returns *boolean* - Returns `true` if the permutation of this block has the tag, else `false`.


#### Examples
##### ***check_block_tags.js***
```javascript
import { World, BlockLocation } from "mojang-minecraft";
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **permutation** | [*BlockPermutation*](BlockPermutation.md) | n/a | Permutation that contains a set of property states for the Block. |



#### Examples
##### ***place_bottom_stone_slab.js***
```javascript
import { World, MinecraftBlockTypes, BlockProperties, BlockLocation } from "mojang-minecraft";
// Create the permutation
let bottomStoneSlab = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*BlockType*](BlockType.md) | n/a | Identifier of the type of block to apply - for example, minecraft:powered_repeater. |




