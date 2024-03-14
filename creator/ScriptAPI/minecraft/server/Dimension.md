---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Dimension Class
description: Contents of the @minecraft/server.Dimension class.
---
# Dimension Class

A class that represents a particular dimension (e.g., The End) within a world.

## Properties

### **heightRange**
`read-only heightRange: minecraftcommon.NumberRange;`

Height range of the dimension.

Type: [*@minecraft/common.NumberRange*](../../minecraft/common/NumberRange.md)

> [!WARNING]
> This property can throw errors when used.

### **id**
`read-only id: string;`

Identifier of the dimension.

Type: *string*

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [containsBlock](#containsblock)
::: moniker-end
- [createExplosion](#createexplosion)
::: moniker range="=minecraft-bedrock-experimental"
- [fillBlocks](#fillblocks)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [findClosestBiome](#findclosestbiome)
::: moniker-end
- [getBlock](#getblock)
- [getBlockFromRay](#getblockfromray)
::: moniker range="=minecraft-bedrock-experimental"
- [getBlocks](#getblocks)
::: moniker-end
- [getEntities](#getentities)
- [getEntitiesAtBlockLocation](#getentitiesatblocklocation)
- [getEntitiesFromRay](#getentitiesfromray)
- [getPlayers](#getplayers)
::: moniker range="=minecraft-bedrock-experimental"
- [getWeather](#getweather)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [playSound](#playsound)
::: moniker-end
- [runCommand](#runcommand)
- [runCommandAsync](#runcommandasync)
::: moniker range="=minecraft-bedrock-experimental"
- [setBlockPermutation](#setblockpermutation)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [setBlockType](#setblocktype)
::: moniker-end
- [setWeather](#setweather)
- [spawnEntity](#spawnentity)
- [spawnItem](#spawnitem)
- [spawnParticle](#spawnparticle)

::: moniker range="=minecraft-bedrock-experimental"
### **containsBlock**
`
containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean
`

#### **Parameters**
- **volume**: [*BlockVolumeBase*](BlockVolumeBase.md)
- **filter**: [*BlockFilter*](BlockFilter.md)
- **allowUnloadedChunks**?: *boolean* = `false`

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*UnloadedChunksError*](UnloadedChunksError.md)
::: moniker-end

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples
##### ***createExplosions.ts***
```typescript
// Creates an explosion of radius 15 that does not break blocks
import { DimensionLocation } from '@minecraft/server';

function createExplosions(location: DimensionLocation) {
    // Creates an explosion of radius 15 that does not break blocks
    location.dimension.createExplosion(location, 15, { breaksBlocks: false });

    // Creates an explosion of radius 15 that does not cause fire
    location.dimension.createExplosion(location, 15, { causesFire: true });

    // Creates an explosion of radius 10 that can go underwater
    location.dimension.createExplosion(location, 10, { allowUnderwater: true });
}
```

::: moniker range="=minecraft-bedrock-experimental"
### **fillBlocks**
`
fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): number
`

Fills an area between begin and end with block of type block.

#### **Parameters**
- **begin**: [*Vector3*](Vector3.md)
  
  The lower northwest starting corner of the area.
- **end**: [*Vector3*](Vector3.md)
  
  The upper southeast ending corner of the area.
- **block**: [*BlockPermutation*](BlockPermutation.md) | [*BlockType*](BlockType.md) | *string*
  
  Type of block to fill the volume with.
- **options**?: [*BlockFillOptions*](BlockFillOptions.md) = `null`
  
  A set of additional options, such as a matching block to potentially replace this fill block with.

**Returns** *number* -  Returns number of blocks placed.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **findClosestBiome**
`
findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined
`

Finds the location of the closest biome of a particular type. Note that the findClosestBiome operation can take some time to complete, so avoid using many of these calls within a particular tick.

#### **Parameters**
- **pos**: [*Vector3*](Vector3.md)
  
  Starting location to look for a biome to find.
- **biomeToFind**: [*BiomeType*](BiomeType.md) | *string*
  
  Identifier of the biome to look for.
- **options**?: [*BiomeSearchOptions*](BiomeSearchOptions.md) = `null`
  
  Additional selection criteria for a biome search.

**Returns** [*Vector3*](Vector3.md) | *undefined* - Returns a location of the biome, or undefined if a biome could not be found.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), *Error*
::: moniker-end

### **getBlock**
`
getBlock(location: Vector3): Block | undefined
`

Returns a block instance at the given location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to return a block.

**Returns** [*Block*](Block.md) | *undefined* - Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

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

> [!WARNING]
> This function can throw errors.

::: moniker range="=minecraft-bedrock-experimental"
### **getBlocks**
`
getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume
`

#### **Parameters**
- **volume**: [*BlockVolumeBase*](BlockVolumeBase.md)
- **filter**: [*BlockFilter*](BlockFilter.md)
- **allowUnloadedChunks**?: *boolean* = `false`

**Returns** [*ListBlockVolume*](ListBlockVolume.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*UnloadedChunksError*](UnloadedChunksError.md)
::: moniker-end

### **getEntities**
`
getEntities(options?: EntityQueryOptions): Entity[]
`

Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of entities returned.

**Returns** [*Entity*](Entity.md)[] - An entity array.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***checkFeatherNearby.ts***
```typescript
import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";

// Returns true if a feather item entity is within 'distance' blocks of 'location'.
function isFeatherNear(location: DimensionLocation, distance: number): boolean {
    const items = location.dimension.getEntities({
        location: location,
        maxDistance: 20,
    });
    
    for (const item of items) {
        const itemComp = item.getComponent(EntityComponentTypes.Item);
    
        if (itemComp) {
            if (itemComp.itemStack.typeId.endsWith('feather')) {
                return true;
            }
        }
    }

    return false;
}
```
##### ***tagsQuery.ts***
```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function mobParty(targetLocation: DimensionLocation) {
    const mobs = ['creeper', 'skeleton', 'sheep'];

    // create some sample mob data
    for (let i = 0; i < 10; i++) {
        const mobTypeId = mobs[i % mobs.length];
        const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
        entity.addTag('mobparty.' + mobTypeId);
    }

    const eqo: EntityQueryOptions = {
        tags: ['mobparty.skeleton'],
    };

    for (const entity of targetLocation.dimension.getEntities(eqo)) {
        entity.kill();
    }
}
```

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

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): Player[]
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of players returned.

**Returns** [*Player*](Player.md)[] - A player array.

> [!WARNING]
> This function can throw errors.

::: moniker range="=minecraft-bedrock-experimental"
### **getWeather**
`
getWeather(): WeatherType
`

Returns the current weather.

**Returns** [*WeatherType*](WeatherType.md) - Returns a WeatherType that explains the broad category of weather that is currently going on.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **playSound**
`
playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void
`

#### **Parameters**
- **soundId**: *string*
- **location**: [*Vector3*](Vector3.md)
- **soundOptions**?: [*WorldSoundOptions*](WorldSoundOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

### **runCommand**
`
runCommand(commandString: string): CommandResult
`

Runs a command synchronously using the context of the broader dimenion.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

**Returns** [*CommandResult*](CommandResult.md) - Returns a command result with a count of successful values from the command.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*CommandError*](CommandError.md)

### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<CommandResult>
`

Runs a particular command asynchronously from the context of the broader dimension.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

**Returns** Promise&lt;[*CommandResult*](CommandResult.md)&gt; - For commands that return data, returns a CommandResult with an indicator of command results.

> [!WARNING]
> This function can throw errors.
>
> Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.

::: moniker range="=minecraft-bedrock-experimental"
### **setBlockPermutation**
`
setBlockPermutation(location: Vector3, permutation: BlockPermutation): void
`

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
- **permutation**: [*BlockPermutation*](BlockPermutation.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **setBlockType**
`
setBlockType(location: Vector3, blockType: BlockType | string): void
`

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
- **blockType**: [*BlockType*](BlockType.md) | *string*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)
::: moniker-end

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples
##### ***createOldHorse.ts***
```typescript
// Spawns an adult horse
import { DimensionLocation } from '@minecraft/server';

function spawnAdultHorse(location: DimensionLocation) {
    // Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult
    location.dimension.spawnEntity('minecraft:horse<minecraft:ageable_grow_up>', location);
}
```
##### ***quickFoxLazyDog.ts***
```typescript
// Spawns a fox over a dog
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function spawnAdultHorse(location: DimensionLocation) {
    // Create fox (our quick brown fox)
    const fox = location.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
        x: location.x,
        y: location.y + 2,
        z: location.z,
    });

    fox.addEffect('speed', 10, {
        amplifier: 2,
    });

    // Create wolf (our lazy dog)
    const wolf = location.dimension.spawnEntity(MinecraftEntityTypes.Wolf, location);
    wolf.addEffect('slowness', 10, {
        amplifier: 2,
    });
    wolf.isSneaking = true;
}
```

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples
##### ***spawnFeatherItem.ts***
```typescript
// Spawns a feather at a location
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeather(location: DimensionLocation) {
    const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
    location.dimension.spawnItem(featherItem, location);
}
```

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples
##### ***spawnParticle.ts***
```typescript
// A function that spawns a particle at a random location near the target location for all players in the server
import { world, MolangVariableMap, DimensionLocation, Vector3 } from '@minecraft/server';

function spawnConfetti(location: DimensionLocation) {
    for (let i = 0; i < 100; i++) {
        const molang = new MolangVariableMap();

        molang.setColorRGB('variable.color', {
            red: Math.random(),
            green: Math.random(),
            blue: Math.random()
        });

        const newLocation: Vector3 = {
            x: location.x + Math.floor(Math.random() * 8) - 4,
            y: location.y + Math.floor(Math.random() * 8) - 4,
            z: location.z + Math.floor(Math.random() * 8) - 4,
        };
        location.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
    }
}
```
