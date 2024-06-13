---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Block Class
description: Contents of the @minecraft/server.Block class.
---
# Block Class

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

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **isLiquid**
`read-only isLiquid: boolean;`

Returns true if this block is a liquid block - (e.g., a water block and a lava block are liquid, while an air block and a stone block are not. Water logged blocks are not liquid blocks).

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **isSolid**
`read-only isSolid: boolean;`

Returns true if this block is solid and impassible - (e.g., a cobblestone block and a diamond block are solid, while a ladder block and a fence block are not).

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **isWaterlogged**
`read-only isWaterlogged: boolean;`

Returns or sets whether this block has a liquid on it.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

### **location**
`read-only location: Vector3;`

Coordinates of the specified block.

Type: [*Vector3*](Vector3.md)

> [!WARNING]
> This property can throw errors when used.

### **permutation**
`read-only permutation: BlockPermutation;`

Additional block configuration data that describes the block.

Type: [*BlockPermutation*](BlockPermutation.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **type**
`read-only type: BlockType;`

Gets the type of block.

Type: [*BlockType*](BlockType.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **typeId**
`read-only typeId: string;`

Identifier of the type of block for this block. Warning: Vanilla block names can be changed in future releases, try using 'Block.matches' instead for block comparison.

Type: *string*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

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
::: moniker range="=minecraft-bedrock-experimental"
- [canPlace](#canplace)
::: moniker-end
- [center](#center)
- [east](#east)
- [getComponent](#getcomponent)
- [getItemStack](#getitemstack)
::: moniker range="=minecraft-bedrock-experimental"
- [getMapColor](#getmapcolor)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [getRedstonePower](#getredstonepower)
::: moniker-end
- [getTags](#gettags)
- [hasTag](#hastag)
- [isValid](#isvalid)
- [matches](#matches)
- [north](#north)
- [offset](#offset)
- [setPermutation](#setpermutation)
- [setType](#settype)
::: moniker range="=minecraft-bedrock-experimental"
- [setWaterlogged](#setwaterlogged)
::: moniker-end
- [south](#south)
::: moniker range="=minecraft-bedrock-experimental"
- [trySetPermutation](#trysetpermutation)
::: moniker-end
- [west](#west)

### **above**
`
above(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) above this block (positive in the Y direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps above to step before returning.

**Returns** [*Block*](Block.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **below**
`
below(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) below this block (negative in the Y direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps below to step before returning.

**Returns** [*Block*](Block.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **bottomCenter**
`
bottomCenter(): Vector3
`

Returns the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) of the center of this block on the X and Z axis.

**Returns** [*Vector3*](Vector3.md)

::: moniker range="=minecraft-bedrock-experimental"
### **canPlace**
`
canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean
`

Checks to see whether it is valid to place the specified block type or block permutation, on a specified face on this block

#### **Parameters**
- **blockToPlace**: [*BlockPermutation*](BlockPermutation.md) | [*BlockType*](BlockType.md) | *string*
  
  Block type or block permutation to check placement for.
- **faceToPlaceOn**?: [*Direction*](Direction.md) = `null`
  
  Optional specific face of this block to check placement against.

**Returns** *boolean* - Returns `true` if the block type or permutation can be placed on this block, else `false`.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

### **center**
`
center(): Vector3
`

Returns the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) of the center of this block on the X, Y, and Z axis.

**Returns** [*Vector3*](Vector3.md)

### **east**
`
east(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) to the east of this block (positive in the X direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the east to step before returning.

**Returns** [*Block*](Block.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **getComponent**
`
getComponent(componentId: T): BlockComponentTypeMap[T] | undefined
`

Gets a component (that represents additional capabilities) for a block - for example, an inventory component of a chest block.

#### **Parameters**
- **componentId**: *T*
  
  The identifier of the component (e.g., 'minecraft:inventory'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the [*@minecraft/server.BlockComponentTypes*](../../minecraft/server/BlockComponentTypes.md) enum.

**Returns** *BlockComponentTypeMap[T] | undefined* - Returns the component if it exists on the block, otherwise undefined.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

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

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **getMapColor**
`
getMapColor(): RGBA
`

**Returns** [*RGBA*](RGBA.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **getRedstonePower**
`
getRedstonePower(): number | undefined
`

Returns the net redstone power of this block.

**Returns** *number* | *undefined* - Returns undefined if redstone power is not applicable to this block.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

### **getTags**
`
getTags(): string[]
`

Returns a set of tags for a block.

**Returns** *string*[] - The list of tags that the block has.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks to see if the permutation of this block has a specific tag.

#### **Parameters**
- **tag**: *string*
  
  Tag to check for.

**Returns** *boolean* - Returns `true` if the permutation of this block has the tag, else `false`.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples
##### ***check_block_tags.js***
```typescript
import { world } from "@minecraft/server";

// Fetch the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

console.log(`Block is dirt: ${block.hasTag("dirt")}`);
console.log(`Block is wood: ${block.hasTag("wood")}`);
console.log(`Block is stone: ${block.hasTag("stone")}`);
```

### **isValid**
`
isValid(): boolean
`

Returns true if this reference to a block is still valid (for example, if the block is unloaded, references to that block will no longer be valid.)

**Returns** *boolean* - True if this block object is still working and valid.

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

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **north**
`
north(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) to the north of this block (negative in the Z direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the north to step before returning.

**Returns** [*Block*](Block.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **offset**
`
offset(offset: Vector3): Block | undefined
`

Returns a block at an offset relative vector to this block.

#### **Parameters**
- **offset**: [*Vector3*](Vector3.md)
  
  The offset vector. For example, an offset of 0, 1, 0 will return the block above the current block.

**Returns** [*Block*](Block.md) | *undefined* - Block at the specified offset, or undefined if that block could not be retrieved (for example, the block and its relative chunk is not loaded yet.)

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setPermutation**
`
setPermutation(permutation: BlockPermutation): void
`

Sets the block in the dimension to the state of the permutation.

#### **Parameters**
- **permutation**: [*BlockPermutation*](BlockPermutation.md)
  
  Permutation that contains a set of property states for the Block.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setType**
`
setType(blockType: BlockType | string): void
`

Sets the type of block.

#### **Parameters**
- **blockType**: [*BlockType*](BlockType.md) | *string*
  
  Identifier of the type of block to apply - for example, minecraft:powered_repeater.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **setWaterlogged**
`
setWaterlogged(isWaterlogged: boolean): void
`

Sets whether this block has a water logged state - for example, whether stairs are submerged within water.

#### **Parameters**
- **isWaterlogged**: *boolean*
  
  true if the block should have water within it.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

### **south**
`
south(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) to the south of this block (positive in the Z direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the south to step before returning.

**Returns** [*Block*](Block.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **trySetPermutation**
`
trySetPermutation(permutation: BlockPermutation): boolean
`

Tries to set the block in the dimension to the state of the permutation by first checking if the placement is valid.

#### **Parameters**
- **permutation**: [*BlockPermutation*](BlockPermutation.md)
  
  Permutation that contains a set of property states for the Block.

**Returns** *boolean* - Returns `true` if the block permutation data was successfully set, else `false`.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

### **west**
`
west(steps?: number): Block | undefined
`

Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) to the west of this block (negative in the X direction).

#### **Parameters**
- **steps**?: *number* = `1`
  
  Number of steps to the west to step before returning.

**Returns** [*Block*](Block.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
