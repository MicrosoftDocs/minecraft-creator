---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockPermutation Class
description: Contents of the @minecraft/server.BlockPermutation class.
---
# BlockPermutation Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains the combination of type [*@minecraft/server.BlockType*](../server/BlockType.md) and properties (also sometimes called block state) which describe a block (but does not belong to a specific [*@minecraft/server.Block*](../server/Block.md)). This type was introduced as of version 1.17.10.21.

## Properties

### **type**
`read-only type: BlockType;`

The [*@minecraft/server.BlockType*](../server/BlockType.md) that the permutation has.

Type: [*BlockType*](BlockType.md)

## Methods
- [clone](#clone)
- [getAllProperties](#getallproperties)
- [getProperty](#getproperty)
- [getTags](#gettags)
- [hasTag](#hastag)

### **clone**
`
clone(): BlockPermutation
`

Creates a copy of this permutation.

#### **Returns** [*BlockPermutation*](BlockPermutation.md) - A copy of the permutation.

### **getAllProperties**
`
getAllProperties(): IBlockProperty[]
`

#### **Returns** [*IBlockProperty*](IBlockProperty.md)[] - Returns the list of all of the properties that the permutation has.

### **getProperty**
`
getProperty(propertyName: string): IBlockProperty
`

Gets a property for the permutation.

#### **Parameters**
- **propertyName**: *string*

#### **Returns** [*IBlockProperty*](IBlockProperty.md) - Returns the property if the permutation has it, else `null`.

> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`

Creates a copy of the permutation.

#### **Returns** *string*[]

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation has a specific tag.

#### **Parameters**
- **tag**: *string*

#### **Returns** *boolean* - Returns `true` if the permutation has the tag, else `false`.

#### **Examples**
##### *check_block_tags.js*
```javascript
import { world, BlockLocation } from "@minecraft/server";
// Fetch the block
const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
const blockPerm = block.getPermutation();
console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
```


