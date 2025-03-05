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

##### ***addTranslatedSign.ts***

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: "item.skull.player.name", with: [players[0].name] });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTranslatedSign.ts) code sandbox.

## Properties

### **type**
`read-only type: BlockType;`

The [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) that the permutation has.

Type: [*BlockType*](BlockType.md)

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [canBeDestroyedByLiquidSpread](#canbedestroyedbyliquidspread)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [canContainLiquid](#cancontainliquid)
::: moniker-end
- [getAllStates](#getallstates)
- [getItemStack](#getitemstack)
- [getState](#getstate)
- [getTags](#gettags)
- [hasTag](#hastag)
::: moniker range="=minecraft-bedrock-experimental"
- [isLiquidBlocking](#isliquidblocking)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [liquidSpreadCausesSpawn](#liquidspreadcausesspawn)
::: moniker-end
- [matches](#matches)
- [withState](#withstate)
- [resolve](#resolve)

::: moniker range="=minecraft-bedrock-experimental"
### **canBeDestroyedByLiquidSpread**
`
canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean
`

Returns whether this block is removed when touched by liquid.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block is removed when touched by liquid.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws *Error*
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **canContainLiquid**
`
canContainLiquid(liquidType: LiquidType): boolean
`

Returns whether this block can have a liquid placed over it, i.e. be waterlogged.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block can have a liquid placed over it.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws *Error*
::: moniker-end

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
getState(stateName: T): minecraftvanilladata.BlockStateSuperset[T] | undefined
`

Gets a state for the permutation.

#### **Parameters**
- **stateName**: *T*
  
  Name of the block state who's value is to be returned.

**Returns** *minecraftvanilladata.BlockStateSuperset[T] | undefined* - Returns the state if the permutation has it, else `undefined`.

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

##### ***checkBlockTags.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";

function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch the block
  const block = targetLocation.dimension.getBlock(targetLocation);

  // check that the block is loaded
  if (block) {
    log(`Block is dirt: ${block.hasTag("dirt")}`);
    log(`Block is wood: ${block.hasTag("wood")}`);
    log(`Block is stone: ${block.hasTag("stone")}`);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/checkBlockTags.ts) code sandbox.

::: moniker range="=minecraft-bedrock-experimental"
### **isLiquidBlocking**
`
isLiquidBlocking(liquidType: LiquidType): boolean
`

Returns whether this block stops liquid from flowing.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block stops liquid from flowing.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws *Error*
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **liquidSpreadCausesSpawn**
`
liquidSpreadCausesSpawn(liquidType: LiquidType): boolean
`

Returns whether this block is removed and spawns its item when touched by liquid.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block is removed and spawns its item when touched by liquid.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws *Error*
::: moniker-end

### **matches**
`
matches(blockName: T, states: BlockStateArg<T>): boolean
`

Returns a boolean whether a specified permutation matches this permutation. If states is not specified, matches checks against the set of types more broadly.

#### **Parameters**
- **blockName**: *T*
  
  An optional set of states to compare against.
- **states**: *BlockStateArg<T>*

**Returns** *boolean*

### **withState**
`
withState(name: T, value: minecraftvanilladata.BlockStateSuperset[T]): BlockPermutation
`

Returns a derived BlockPermutation with a specific property set.

#### **Parameters**
- **name**: *T*
  
  Identifier of the block property.
- **value**: *minecraftvanilladata.BlockStateSuperset[T]*
  
  Value of the block property.

**Returns** *BlockPermutation*
  
Notes:
- This function can throw errors.

### **resolve**
`
static resolve(blockName: T, states: BlockStateArg<T>): BlockPermutation
`

Given a type identifier and an optional set of properties, will return a BlockPermutation object that is usable in other block APIs (e.g., block.setPermutation)

#### **Parameters**
- **blockName**: *T*
  
  Identifier of the block to check.
- **states**: *BlockStateArg<T>*

**Returns** *BlockPermutation*
  
Notes:
- This function can throw errors.

#### Examples

##### ***addBlockColorCube.ts***

```typescript
import { BlockPermutation, DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addBlockColorCube(targetLocation: DimensionLocation) {
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

  let colorIndex = 0;

  for (let x = 0; x <= cubeDim; x++) {
    for (let y = 0; y <= cubeDim; y++) {
      for (let z = 0; z <= cubeDim; z++) {
        colorIndex++;
        targetLocation.dimension
          .getBlock(Vector3Utils.add(targetLocation, { x, y, z }))
          ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
      }
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addBlockColorCube.ts) code sandbox.

#### Examples

##### ***addTranslatedSign.ts***

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: "item.skull.player.name", with: [players[0].name] });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTranslatedSign.ts) code sandbox.
