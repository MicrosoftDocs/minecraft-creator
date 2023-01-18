---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Block Class
description: Contents of the @minecraft/server.Block class.
---
# Block Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Returns the dimension that the block is within.

Type: [*Dimension*](Dimension.md)

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

### **typeId**
`read-only typeId: string;`

Identifier of the type of block for this block.

Type: *string*

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
- [canPlace](#canplace)
- [getComponent](#getcomponent)
- [getRedstonePower](#getredstonepower)
- [getTags](#gettags)
- [hasTag](#hastag)
- [setPermutation](#setpermutation)
- [setType](#settype)
- [trySetPermutation](#trysetpermutation)

### **canPlace**
`
canPlace(blockToPlace: BlockPermutation | BlockType, faceToPlaceOn?: Direction): boolean
`

Checks to see whether it is valid to place the specified block type or block permutation, on a specified face on this block

#### **Parameters**
- **blockToPlace**: [*BlockPermutation*](BlockPermutation.md) | [*BlockType*](BlockType.md)
  
  Block type or block permutation to check placement for.
- **faceToPlaceOn**?: [*Direction*](Direction.md) = `null`
  
  Optional specific face of this block to check placement against.

#### **Returns** *boolean* - Returns `true` if the block type or permutation can be placed on this block, else `false`.

> [!WARNING]
> This function can throw errors.

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

### **getRedstonePower**
`
getRedstonePower(): number | undefined
`

Returns the net redstone power of this block.

#### **Returns** *number* | *undefined* - Returns undefined if redstone power is not applicable to this block.

> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`

Returns a set of tags for a block.

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
import { world, BlockLocation } from "@minecraft/server";
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

### **trySetPermutation**
`
trySetPermutation(permutation: BlockPermutation): boolean
`

Tries to set the block in the dimension to the state of the permutation by first checking if the placement is valid.

#### **Parameters**
- **permutation**: [*BlockPermutation*](BlockPermutation.md)
  
  Permutation that contains a set of property states for the Block.

#### **Returns** *boolean* - Returns `true` if the block permutation data was successfully set, else `false`.

> [!WARNING]
> This function can throw errors.
