---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockPermutation Class
description: Contents of the @minecraft/server.BlockPermutation class.
---
# BlockPermutation Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Contains the combination of type [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) and properties (also sometimes called block state) which describe a block (but does not belong to a specific [*@minecraft/server.Block*](../../minecraft/server/Block.md)). This type was introduced as of version 1.17.10.21.

## Properties

### **type**
`read-only type: BlockType;`

The [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) that the permutation has.

Type: [*BlockType*](BlockType.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [clone](#clone)
- [getAllStates](#getallstates)
- [getItemStack](#getitemstack)
- [getState](#getstate)
- [getTags](#gettags)
- [hasTag](#hastag)
- [matches](#matches)
- [withState](#withstate)
- [resolve](#resolve)

### **clone**
`
clone(): BlockPermutation
`

Creates a copy of this permutation.

#### **Returns** [*BlockPermutation*](BlockPermutation.md) - A copy of the permutation.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getAllStates**
`
getAllStates(): Record<string, boolean | number | string>
`

Returns all available block states associated with this block.

#### **Returns** Record<*string*, *boolean* | *number* | *string*> - Returns the list of all of the block states that the permutation has.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getItemStack**
`
getItemStack(amount?: number): ItemStack
`

Retrieves a prototype item stack based on this block permutation that can be used with item Container/ContainerSlot APIs.

#### **Parameters**
- **amount**?: *number* = `1`
  
  Number of instances of this block to place in the prototype item stack.

#### **Returns** [*ItemStack*](ItemStack.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getState**
`
getState(stateName: string): boolean | number | string | undefined
`

Gets a state for the permutation.

#### **Parameters**
- **stateName**: *string*
  
  Name of the block state who's value is to be returned.

#### **Returns** *boolean* | *number* | *string* | *undefined* - Returns the state if the permutation has it, else `undefined`.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getTags**
`
getTags(): string[]
`

Creates a copy of the permutation.

#### **Returns** *string*[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation has a specific tag.

#### **Parameters**
- **tag**: *string*

#### **Returns** *boolean* - Returns `true` if the permutation has the tag, else `false`.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

#### **Examples**
##### *check_block_tags.js*
```javascript
import { world } from "@minecraft/server";
// Fetch the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
const blockPerm = block.getPermutation();
console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
```

### **matches**
`
matches(blockName: string, states?: Record<string, boolean | number | string>): boolean
`

Returns a boolean whether a specified permutation matches this permutation. If states is not specified, matches checks against the set of types more broadly.

#### **Parameters**
- **blockName**: *string*
  
  An optional set of states to compare against.
- **states**?: Record<*string*, *boolean* | *number* | *string*> = `null`

#### **Returns** *boolean*

### **withState**
`
withState(name: string, value: boolean | number | string): BlockPermutation
`

Returns a derived BlockPermutation with a specific property set.

#### **Parameters**
- **name**: *string*
  
  Identifier of the block property.
- **value**: *boolean* | *number* | *string*
  
  Value of the block property.

#### **Returns** [*BlockPermutation*](BlockPermutation.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **resolve**
`
static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation
`

Given a type identifier and an optional set of properties, will return a BlockPermutation object that is usable in other block APIs (e.g., block.setPermutation)

#### **Parameters**
- **blockName**: *string*
  
  Identifier of the block to check.
- **states**?: Record<*string*, *boolean* | *number* | *string*> = `null`

#### **Returns** [*BlockPermutation*](BlockPermutation.md)

> [!WARNING]
> This function can throw errors.
