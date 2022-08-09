---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
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

#### **Parameters**
- **componentName**: *string*
  
  Identifier of the component. If a namespace is not specified, minecraft: is assumed.

#### **Returns** *any* - Returns the component object if it is present on the particular block.
> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`

#### **Returns** *string*[] - The list of tags that the block has.
> [!WARNING]
> This function can throw errors.

### **hasTag**
`
hasTag(tag: string): boolean
`
Checks to see if the permutation of this block has a specific tag.

#### **Parameters**
- **tag**: *string*
  
  Tag to check for.

#### **Returns** *boolean* - Returns `true` if the permutation of this block has the tag, else `false`.
> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *check_block_tags.js*
```javascript
import { world, BlockLocation } from "mojang-minecraft";
// Fetch the block
const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
console.log(`Block is dirt: ${block.hasTag("dirt")}`);
console.log(`Block is wood: ${block.hasTag("wood")}`);
console.log(`Block is stone: ${block.hasTag("stone")}`);
```

### **setPermutation**
`
setPermutation(permutation: BlockPermutation): void
`
Sets the block in the dimension to the state of the permutation.

#### **Parameters**
- **permutation**: [*BlockPermutation*](BlockPermutation.md)
  
  Permutation that contains a set of property states for the Block.
> [!WARNING]
> This function can throw errors.

### **setType**
`
setType(blockType: BlockType): void
`
Sets the type of block.

#### **Parameters**
- **blockType**: [*BlockType*](BlockType.md)
  
  Identifier of the type of block to apply - for example, minecraft:powered_repeater.
> [!WARNING]
> This function can throw errors.
