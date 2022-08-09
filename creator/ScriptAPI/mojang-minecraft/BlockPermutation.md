---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockPermutation Class
description: Contents of the mojang-minecraft.BlockPermutation class.
---
# BlockPermutation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains the combination of type [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) and properties (also sometimes called block state) which describe a block (but does not belong to a specific [*mojang-minecraft.Block*](../mojang-minecraft/Block.md)). This type was introduced as of version 1.17.10.21.

## Properties

### **type**
`read-only type: BlockType;`

The [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) that the permutation has.

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
import { world, BlockLocation } from "mojang-minecraft";
// Fetch the block
const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
const blockPerm = block.getPermutation();
console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
```
