---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.Dimension Class
description: Contents of the @minecraft/server.Dimension class (Version 1.x.x).
---
# Dimension Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/Dimension.md).

A class that represents a particular dimension (e.g., The End) within a world.

## Properties

### **heightRange**
`read-only heightRange: minecraftcommon.NumberRange;`

Height range of the dimension.

Type: [*@minecraft/common.NumberRange*](../../../scriptapi/minecraft/common/NumberRange.md)

Notes:
  - This property can throw errors when used.

### **id**
`read-only id: string;`

Identifier of the dimension.

Type: *string*

## Methods
- [containsBlock](#containsblock)
- [createExplosion](#createexplosion)
- [fillBlocks](#fillblocks)
- [getBlock](#getblock)
- [getBlockFromRay](#getblockfromray)
- [getBlocks](#getblocks)
- [getEntities](#getentities)
- [getEntitiesAtBlockLocation](#getentitiesatblocklocation)
- [getEntitiesFromRay](#getentitiesfromray)
- [getPlayers](#getplayers)
- [getTopmostBlock](#gettopmostblock)
- [placeFeature](#placefeature)
- [placeFeatureRule](#placefeaturerule)
- [playSound](#playsound)
- [runCommand](#runcommand)
- [runCommandAsync](#runcommandasync)
- [setBlockPermutation](#setblockpermutation)
- [setBlockType](#setblocktype)
- [setWeather](#setweather)
- [spawnEntity](#spawnentity)
- [spawnItem](#spawnitem)
- [spawnParticle](#spawnparticle)

### **containsBlock**
`
containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean
`

Searches the block volume for a block that satisfies the block filter.

#### **Parameters**
- **volume**: [*BlockVolumeBase*](BlockVolumeBase.md)
  
  Volume of blocks that will be checked.
- **filter**: [*BlockFilter*](BlockFilter.md)
  
  Block filter that will be checked against each block in the volume.
- **allowUnloadedChunks**?: *boolean* = `false`
  
  If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.

**Returns** *boolean* - Returns true if at least one block in the volume satisfies the filter, false otherwise.
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*UnloadedChunksError*](UnloadedChunksError.md)

### **createExplosion**
`
createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean
`

Creates an explosion at the specified location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location of the explosion.
- **radius**: *number*
  
  Radius, in blocks, of the explosion to create.
- **explosionOptions**?: [*ExplosionOptions*](ExplosionOptions.md) = `null`
  
  Additional configurable options for the explosion.

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples

##### ***createExplosion.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";

function createExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  log("Creating an explosion of radius 10.");
  targetLocation.dimension.createExplosion(targetLocation, 10);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createExplosion.ts) code sandbox.

##### ***createNoBlockExplosion.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createNoBlockExplosion(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));

  log("Creating an explosion of radius 15 that does not break blocks.");
  targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createNoBlockExplosion.ts) code sandbox.

##### ***createExplosions.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });

  log("Creating an explosion of radius 15 that causes fire.");
  targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });

  const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });

  log("Creating an explosion of radius 10 that can go underwater.");
  targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createExplosions.ts) code sandbox.

### **fillBlocks**
`
fillBlocks(volume: BlockVolumeBase, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume
`

Fills an area of blocks with a specific block type.

#### **Parameters**
- **volume**: [*BlockVolumeBase*](BlockVolumeBase.md)
  
  Volume of blocks to be filled.
- **block**: [*BlockPermutation*](BlockPermutation.md) | [*BlockType*](BlockType.md) | *string*
  
  Type of block to fill the volume with.
- **options**?: [*BlockFillOptions*](BlockFillOptions.md) = `null`
  
  A set of additional options, such as a block filter which can be used to include / exclude specific blocks in the fill.

**Returns** [*ListBlockVolume*](ListBlockVolume.md) - Returns a ListBlockVolume which contains all the blocks that were placed.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), *Error*, [*UnloadedChunksError*](UnloadedChunksError.md)

### **getBlock**
`
getBlock(location: Vector3): Block | undefined
`

Returns a block instance at the given location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to return a block.

**Returns** [*Block*](Block.md) | *undefined* - Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.
  
Notes:
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **getBlockFromRay**
`
getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined
`

Gets the first block that intersects with a vector emanating from a location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  Location from where to initiate the ray check.
- **direction**: [*Vector3*](Vector3.md)
  
  Vector direction to cast the ray.
- **options**?: [*BlockRaycastOptions*](BlockRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

**Returns** [*BlockRaycastHit*](BlockRaycastHit.md) | *undefined*
  
Notes:
- This function can throw errors.

### **getBlocks**
`
getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume
`

Gets all the blocks in a volume that satisfy the filter.

#### **Parameters**
- **volume**: [*BlockVolumeBase*](BlockVolumeBase.md)
  
  Volume of blocks that will be checked.
- **filter**: [*BlockFilter*](BlockFilter.md)
  
  Block filter that will be checked against each block in the volume.
- **allowUnloadedChunks**?: *boolean* = `false`
  
  If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.

**Returns** [*ListBlockVolume*](ListBlockVolume.md) - Returns the ListBlockVolume that contains all the block locations that satisfied the block filter.
  
Notes:
- This function can throw errors.
  - Throws *Error*, [*UnloadedChunksError*](UnloadedChunksError.md)

### **getEntities**
`
getEntities(options?: EntityQueryOptions): Entity[]
`

Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of entities returned.

**Returns** [*Entity*](Entity.md)[] - An entity array.
  
Notes:
- This function can throw errors.
  - Throws [*CommandError*](CommandError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

#### Examples

##### ***bounceSkeletons.ts***

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  const eqo: EntityQueryOptions = {
    type: "skeleton",
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(0, 0, 0, 1);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/bounceSkeletons.ts) code sandbox.

##### ***tagsQuery.ts***

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag("mobparty." + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ["mobparty.skeleton"],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/tagsQuery.ts) code sandbox.

##### ***testThatEntityIsFeatherItem.ts***

```typescript
import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";

function testThatEntityIsFeatherItem(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const items = targetLocation.dimension.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith("feather")) {
        log("Success! Found a feather", 1);
      }
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/testThatEntityIsFeatherItem.ts) code sandbox.

### **getEntitiesAtBlockLocation**
`
getEntitiesAtBlockLocation(location: Vector3): Entity[]
`

Returns a set of entities at a particular location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to return entities.

**Returns** [*Entity*](Entity.md)[] - Zero or more entities at the specified location.

### **getEntitiesFromRay**
`
getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]
`

Gets entities that intersect with a specified vector emanating from a location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
- **direction**: [*Vector3*](Vector3.md)
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

**Returns** [*EntityRaycastHit*](EntityRaycastHit.md)[]
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidEntityError*](InvalidEntityError.md), [*@minecraft/common.UnsupportedFunctionalityError*](../../../scriptapi/minecraft/common/UnsupportedFunctionalityError.md)

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): Player[]
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of players returned.

**Returns** [*Player*](Player.md)[] - A player array.
  
Notes:
- This function can throw errors.
  - Throws [*CommandError*](CommandError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **getTopmostBlock**
`
getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined
`

Returns the highest block at the given XZ location.

#### **Parameters**
- **locationXZ**: [*VectorXZ*](VectorXZ.md)
  
  Location to retrieve the topmost block for.
- **minHeight**?: *number* = `null`
  
  The Y height to begin the search from. Defaults to the maximum dimension height.

**Returns** [*Block*](Block.md) | *undefined*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **placeFeature**
`
placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean
`

Places the given feature into the dimension at the specified location.

#### **Parameters**
- **featureName**: *string*
  
  The string identifier for the feature.
- **location**: [*Vector3*](Vector3.md)
  
  Location to place the feature.
- **shouldThrow**?: *boolean* = `false`
  
  Specifies if the function call will throw an error if the feature could not be placed.
  
  Note: The function call will always throw an error if using an unknown feature name or trying to place in a unloaded chunk.

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md)

### **placeFeatureRule**
`
placeFeatureRule(featureRuleName: string, location: Vector3): boolean
`

Places the given feature rule into the dimension at the specified location.

#### **Parameters**
- **featureRuleName**: *string*
  
  The string identifier for the feature rule.
- **location**: [*Vector3*](Vector3.md)
  
  Location to place the feature rule.

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md)

### **playSound**
`
playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void
`

Plays a sound for all players.

#### **Parameters**
- **soundId**: *string*
  
  Identifier of the sound.
- **location**: [*Vector3*](Vector3.md)
  
  Location of the sound.
- **soundOptions**?: [*WorldSoundOptions*](WorldSoundOptions.md) = `null`
  
  Additional options for configuring additional effects for the sound.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.PropertyOutOfBoundsError*](../../../scriptapi/minecraft/common/PropertyOutOfBoundsError.md)

### **runCommand**
`
runCommand(commandString: string): CommandResult
`

Runs a command synchronously using the context of the broader dimenion.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

**Returns** [*CommandResult*](CommandResult.md) - Returns a command result with a count of successful values from the command.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*CommandError*](CommandError.md)

### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<CommandResult>
`

#### **Parameters**
- **commandString**: *string*

**Returns** Promise&lt;[*CommandResult*](CommandResult.md)&gt;

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can throw errors.

### **setBlockPermutation**
`
setBlockPermutation(location: Vector3, permutation: BlockPermutation): void
`

Sets a block in the world using a BlockPermutation. BlockPermutations are blocks with a particular state.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location within the dimension to set the block.
- **permutation**: [*BlockPermutation*](BlockPermutation.md)
  
  The block permutation to set.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setBlockType**
`
setBlockType(location: Vector3, blockType: BlockType | string): void
`

Sets a block at a given location within the dimension.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location within the dimension to set the block.
- **blockType**: [*BlockType*](BlockType.md) | *string*
  
  The type of block to set. This can be either a string identifier or a BlockType. The default block permutation is used.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setWeather**
`
setWeather(weatherType: WeatherType, duration?: number): void
`

Sets the current weather within the dimension

#### **Parameters**
- **weatherType**: [*WeatherType*](WeatherType.md)
  
  Set the type of weather to apply.
- **duration**?: *number* = `null`
  
  Sets the duration of the weather (in ticks). If no duration is provided, the duration will be set to a random duration between 300 and 900 seconds.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **spawnEntity**
`
spawnEntity(identifier: string, location: Vector3): Entity
`

Creates a new entity (e.g., a mob) at the specified location.

#### **Parameters**
- **identifier**: *string*
  
  Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to create the entity.

**Returns** [*Entity*](Entity.md) - Newly created entity at the specified location.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*EntitySpawnError*](EntitySpawnError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidEntityError*](InvalidEntityError.md), [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples

##### ***spawnAdultHorse.ts***

```typescript
import { DimensionLocation } from '@minecraft/server';
import { Vector3Utils } from '@minecraft/math';

function spawnAdultHorse(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
    log('Create a horse and triggering the ageable_grow_up event, ensuring the horse is created as an adult');
    targetLocation.dimension.spawnEntity(
        'minecraft:horse<minecraft:ageable_grow_up>',
        Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
    );
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/spawnAdultHorse.ts) code sandbox.

##### ***quickFoxLazyDog.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes, MinecraftEffectTypes } from "@minecraft/vanilla-data";

function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
    x: targetLocation.x + 1,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });

  fox.addEffect(MinecraftEffectTypes.Speed, 10, {
    amplifier: 2,
  });
  log("Created a fox.");

  const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
    x: targetLocation.x + 4,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });
  wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
    amplifier: 2,
  });
  wolf.isSneaking = true;
  log("Created a sneaking wolf.", 1);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/quickFoxLazyDog.ts) code sandbox.

##### ***triggerEvent.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function triggerEvent(targetLocation: DimensionLocation) {
  const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);

  creeper.triggerEvent("minecraft:start_exploding_forced");
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/triggerEvent.ts) code sandbox.

### **spawnItem**
`
spawnItem(itemStack: ItemStack, location: Vector3): Entity
`

Creates a new item stack as an entity at the specified location.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to create the item stack.

**Returns** [*Entity*](Entity.md) - Newly created item stack entity at the specified location.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples

##### ***itemStacks.ts***

```typescript
import { ItemStack, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
  const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
  const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

  const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
  const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
  const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);

  log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
  targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);

  log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
  targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);

  log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
  targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/itemStacks.ts) code sandbox.

##### ***spawnFeatherItem.ts***

```typescript
import { ItemStack, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);

  targetLocation.dimension.spawnItem(featherItem, targetLocation);
  log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/spawnFeatherItem.ts) code sandbox.

### **spawnParticle**
`
spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void
`

Creates a new particle emitter at a specified location in the world.

#### **Parameters**
- **effectName**: *string*
  
  Identifier of the particle to create.
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to create the particle emitter.
- **molangVariables**?: [*MolangVariableMap*](MolangVariableMap.md) = `null`
  
  A set of optional, customizable variables that can be adjusted for this particle.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples

##### ***spawnParticle.ts***

```typescript
import { MolangVariableMap, DimensionLocation } from "@minecraft/server";

function spawnParticle(targetLocation: DimensionLocation) {
  for (let i = 0; i < 100; i++) {
    const molang = new MolangVariableMap();

    molang.setColorRGB("variable.color", { red: Math.random(), green: Math.random(), blue: Math.random() });

    const newLocation = {
      x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
      y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
      z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
    };
    targetLocation.dimension.spawnParticle("minecraft:colored_flame_particle", newLocation, molang);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/spawnParticle.ts) code sandbox.
