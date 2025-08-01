---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.Block Class
description: Contents of the @minecraft/server.Block class (Version 1.x.x).
---
# Block Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/Block.md).

Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Returns the dimension that the block is within.

Type: [*Dimension*](Dimension.md)

### **isAir**
`read-only isAir: boolean;`

Returns true if this block is an air block (i.e., empty space).

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **isLiquid**
`read-only isLiquid: boolean;`

Returns true if this block is a liquid block - (e.g., a water block and a lava block are liquid, while an air block and a stone block are not. Water logged blocks are not liquid blocks).

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **isWaterlogged**
`read-only isWaterlogged: boolean;`

Returns or sets whether this block has water on it.

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **location**
`read-only location: Vector3;`

Coordinates of the specified block.

Type: [*Vector3*](Vector3.md)

Notes:
  - This property can throw errors when used.

### **permutation**
`read-only permutation: BlockPermutation;`

Additional block configuration data that describes the block.

Type: [*BlockPermutation*](BlockPermutation.md)

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **type**
`read-only type: BlockType;`

Gets the type of block.

Type: [*BlockType*](BlockType.md)

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **typeId**
`read-only typeId: string;`

Identifier of the type of block for this block. Warning: Vanilla block names can be changed in future releases, try using 'Block.matches' instead for block comparison.

Type: *string*

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

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
- [above](#above)
- [below](#below)
- [bottomCenter](#bottomcenter)
- [canBeDestroyedByLiquidSpread](#canbedestroyedbyliquidspread)
- [canContainLiquid](#cancontainliquid)
- [center](#center)
- [east](#east)
- [getComponent](#getcomponent)
- [getItemStack](#getitemstack)
- [getRedstonePower](#getredstonepower)
- [getTags](#gettags)
- [hasTag](#hastag)
- [isLiquidBlocking](#isliquidblocking)
- [isValid](#isvalid)
- [liquidCanFlowFromDirection](#liquidcanflowfromdirection)
- [liquidSpreadCausesSpawn](#liquidspreadcausesspawn)
- [matches](#matches)
- [north](#north)
- [offset](#offset)
- [setPermutation](#setpermutation)
- [setType](#settype)
- [setWaterlogged](#setwaterlogged)
- [south](#south)
- [west](#west)

### **above**
`
above(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) above this block (positive in the Y direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps above to step before returning.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **below**
`
below(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) below this block (negative in the Y direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps below to step before returning.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **bottomCenter**
`
bottomCenter(): Vector3
`

Returns the [*@minecraft/server.Vector3*](../../../priorscriptapi/minecraft/server-1xx/Vector3.md) of the center of this block on the X and Z axis.

**Returns** [*Vector3*](Vector3.md)

### **canBeDestroyedByLiquidSpread**
`
canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean
`

Returns whether this block is removed when touched by liquid.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block is removed when touched by liquid.
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **canContainLiquid**
`
canContainLiquid(liquidType: LiquidType): boolean
`

Returns whether this block can have a liquid placed over it, i.e. be waterlogged.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block can have a liquid placed over it.
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **center**
`
center(): Vector3
`

Returns the [*@minecraft/server.Vector3*](../../../priorscriptapi/minecraft/server-1xx/Vector3.md) of the center of this block on the X, Y, and Z axis.

**Returns** [*Vector3*](Vector3.md)

### **east**
`
east(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) to the east of this block (positive in the X direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the east to step before returning.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **getComponent**
`
getComponent(componentId: T): BlockComponentReturnType<T> | undefined
`

Gets a component (that represents additional capabilities) for a block - for example, an inventory component of a chest block.

#### **Parameters**
- **componentId**: *T*
  
  The identifier of the component (e.g., 'minecraft:inventory'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs are those in the [*@minecraft/server.BlockComponentTypes*](../../../priorscriptapi/minecraft/server-1xx/BlockComponentTypes.md) enum and custom component IDs registered with the [*@minecraft/server.BlockComponentRegistry*](../../../priorscriptapi/minecraft/server-1xx/BlockComponentRegistry.md).

**Returns** *BlockComponentReturnType<T>* | *undefined* - Returns the component if it exists on the block, otherwise undefined.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **getItemStack**
`
getItemStack(amount?: number, withData?: boolean): ItemStack | undefined
`

Creates a prototype item stack based on this block that can be used with Container/ContainerSlot APIs.

#### **Parameters**
- **amount**?: *number* = `1`
  
  Number of instances of this block to place in the item stack.
- **withData**?: *boolean* = `false`
  
  Whether additional data facets of the item stack are included.

**Returns** [*ItemStack*](ItemStack.md) | *undefined* - An itemStack with the specified amount of items and data. Returns undefined if block type is incompatible.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **getRedstonePower**
`
getRedstonePower(): number | undefined
`

Returns the net redstone power of this block.

**Returns** *number* | *undefined* - Returns undefined if redstone power is not applicable to this block.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **getTags**
`
getTags(): string[]
`

Returns a set of tags for a block.

**Returns** *string*[] - The list of tags that the block has.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation of this block has a specific tag.

#### **Parameters**
- **tag**: *string*
  
  Tag to check for.

**Returns** *boolean* - Returns `true` if the permutation of this block has the tag, else `false`.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

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

### **isLiquidBlocking**
`
isLiquidBlocking(liquidType: LiquidType): boolean
`

Returns whether this block stops liquid from flowing.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block stops liquid from flowing.
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **isValid**
`
isValid(): boolean
`

Returns true if this reference to a block is still valid (for example, if the block is unloaded, references to that block will no longer be valid.)

**Returns** *boolean* - True if this block object is still working and valid.

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.

### **liquidCanFlowFromDirection**
`
liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean
`

Returns whether liquid can flow into the block from the provided direction, or flow out from the provided direction when liquid is placed into it with a bucket.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.
- **flowDirection**: [*Direction*](Direction.md)

**Returns** *boolean* - Whether liquid can flow into the block from the provided direction, or flow out from the provided direction when liquid is placed into it with a bucket
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **liquidSpreadCausesSpawn**
`
liquidSpreadCausesSpawn(liquidType: LiquidType): boolean
`

Returns whether this block is removed and spawns its item when touched by liquid.

#### **Parameters**
- **liquidType**: [*LiquidType*](LiquidType.md)
  
  The type of liquid this function should be called for.

**Returns** *boolean* - Whether this block is removed and spawns its item when touched by liquid.
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **matches**
`
matches(blockName: string, states?: Record<string, boolean | number | string>): boolean
`

Tests whether this block matches a specific criteria.

#### **Parameters**
- **blockName**: *string*
  
  Block type identifier to match this API against.
- **states**?: Record<*string*, *boolean* | *number* | *string*> = `null`
  
  Optional set of block states to test this block against.

**Returns** *boolean* - Returns true if the block matches the specified criteria.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **north**
`
north(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) to the north of this block (negative in the Z direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the north to step before returning.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **offset**
`
offset(offset: Vector3): Block | undefined
`

Returns a block at an offset relative vector to this block.

#### **Parameters**
- **offset**: [*Vector3*](Vector3.md)
  
  The offset vector. For example, an offset of 0, 1, 0 will return the block above the current block.

**Returns** [*Block*](Block.md) | *undefined* - Block at the specified offset, or undefined if that block could not be retrieved (for example, the block and its relative chunk is not loaded yet.)
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setPermutation**
`
setPermutation(permutation: BlockPermutation): void
`

Sets the block in the dimension to the state of the permutation.

#### **Parameters**
- **permutation**: [*BlockPermutation*](BlockPermutation.md)
  
  Permutation that contains a set of property states for the Block.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setType**
`
setType(blockType: BlockType | string): void
`

Sets the type of block.

#### **Parameters**
- **blockType**: [*BlockType*](BlockType.md) | *string*
  
  Identifier of the type of block to apply - for example, minecraft:powered_repeater.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setWaterlogged**
`
setWaterlogged(isWaterlogged: boolean): void
`

Sets whether this block has a water logged state - for example, whether stairs are submerged within water.

#### **Parameters**
- **isWaterlogged**: *boolean*
  
  true if the block should have water within it.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **south**
`
south(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) to the south of this block (positive in the Z direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the south to step before returning.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **west**
`
west(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) to the west of this block (negative in the X direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the west to step before returning.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
