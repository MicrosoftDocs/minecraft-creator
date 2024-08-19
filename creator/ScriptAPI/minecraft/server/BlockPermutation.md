---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockPermutation Class
description: Contents of the @minecraft/server.BlockPermutation class.
---
# BlockPermutation Class

Contains the combination of type [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) and properties (also sometimes called block state) which describe a block (but does not belong to a specific [*@minecraft/server.Block*](../../minecraft/server/Block.md)).

#### Examples
##### ***createTranslatedSign.ts***
```typescript
// A function the creates a sign at the specified location with the specified text
import { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function createSignAt(location: DimensionLocation) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('Could not find a block at specified location.');
        return;
    }

    const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm); // Update block to be a sign

    // Update the sign block's text
    // with "Steve's Head"
    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });
    }
}
```

## Properties

### **type**
`read-only type: BlockType;`

The [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) that the permutation has.

Type: [*BlockType*](BlockType.md)

## Methods
- [getAllStates](#getallstates)
- [getItemStack](#getitemstack)
- [getState](#getstate)
- [getTags](#gettags)
- [hasTag](#hastag)
- [matches](#matches)
- [withState](#withstate)
- [resolve](#resolve)

### **getAllStates**
`
getAllStates(): Record<string, boolean | number | string>
`

Returns all available block states associated with this block.

**Returns** Record<*string*, *boolean* | *number* | *string*> - Returns the list of all of the block states that the permutation has.

### **getItemStack**
`
getItemStack(amount?: number): ItemStack | undefined
`

Retrieves a prototype item stack based on this block permutation that can be used with item Container/ContainerSlot APIs.

#### **Parameters**
- **amount**?: *number* = `1`
  
  Number of instances of this block to place in the prototype item stack.

**Returns** [*ItemStack*](ItemStack.md) | *undefined*

### **getState**
`
getState(stateName: string): boolean | number | string | undefined
`

Gets a state for the permutation.

#### **Parameters**
- **stateName**: *string*
  
  Name of the block state who's value is to be returned.

**Returns** *boolean* | *number* | *string* | *undefined* - Returns the state if the permutation has it, else `undefined`.

### **getTags**
`
getTags(): string[]
`

Creates a copy of the permutation.

**Returns** *string*[]

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation has a specific tag.

#### **Parameters**
- **tag**: *string*

**Returns** *boolean* - Returns `true` if the permutation has the tag, else `false`.

#### Examples
##### ***check_block_tags.js***
```typescript
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

**Returns** *boolean*

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

**Returns** [*BlockPermutation*](BlockPermutation.md)

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

**Returns** [*BlockPermutation*](BlockPermutation.md)

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***addBlockColorCube.ts***
```typescript
import { DimensionLocation, BlockPermutation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

const allWoolBlocks: string[] = [
    MinecraftBlockTypes.WhiteWool,
    MinecraftBlockTypes.OrangeWool,
    MinecraftBlockTypes.MagentaWool,
    MinecraftBlockTypes.LightBlueWool,
    MinecraftBlockTypes.YellowWool,
    MinecraftBlockTypes.LimeWool,
    MinecraftBlockTypes.PinkWool,
    MinecraftBlockTypes.GrayWool,
    MinecraftBlockTypes.LightGrayWool,
    MinecraftBlockTypes.CyanWool,
    MinecraftBlockTypes.PurpleWool,
    MinecraftBlockTypes.BlueWool,
    MinecraftBlockTypes.BrownWool,
    MinecraftBlockTypes.GreenWool,
    MinecraftBlockTypes.RedWool,
    MinecraftBlockTypes.BlackWool,
];

const cubeDim = 7;

function placeRainbowCube(location: DimensionLocation) {
    let colorIndex = 0;
    for (let x = 0; x <= cubeDim; x++) {
        for (let y = 0; y <= cubeDim; y++) {
            for (let z = 0; z <= cubeDim; z++) {
                colorIndex++;
                location.dimension
                    .getBlock({ x: location.x + x, y: location.y + y, z: location.z + z })
                    ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
            }
        }
    }
}
```

#### Examples
##### ***createTranslatedSign.ts***
```typescript
// A function the creates a sign at the specified location with the specified text
import { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function createSignAt(location: DimensionLocation) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('Could not find a block at specified location.');
        return;
    }

    const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm); // Update block to be a sign

    // Update the sign block's text
    // with "Steve's Head"
    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });
    }
}
```
