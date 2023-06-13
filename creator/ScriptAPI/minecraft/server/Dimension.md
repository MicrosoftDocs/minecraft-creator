---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Dimension Class
description: Contents of the @minecraft/server.Dimension class.
---
# Dimension Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
A class that represents a particular dimension (e.g., The End) within a world.

## Properties

### **id**
`read-only id: string;`

Identifier of the dimension.

Type: *string*

## Methods
- [createExplosion](#createexplosion)
- [fillBlocks](#fillblocks)
- [getBlock](#getblock)
- [getBlockFromRay](#getblockfromray)
- [getEntities](#getentities)
- [getEntitiesAtBlockLocation](#getentitiesatblocklocation)
- [getEntitiesFromRay](#getentitiesfromray)
- [getPlayers](#getplayers)
- [runCommand](#runcommand)
- [runCommandAsync](#runcommandasync)
- [setWeather](#setweather)
- [spawnEntity](#spawnentity)
- [spawnItem](#spawnitem)
- [spawnParticle](#spawnparticle)

### **createExplosion**
`
createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void
`

Creates an explosion at the specified location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location of the explosion.
- **radius**: *number*
  
  Radius, in blocks, of the explosion to create.
- **explosionOptions**?: [*ExplosionOptions*](ExplosionOptions.md) = `null`
  
  Additional configurable options for the explosion.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***createExplosion.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  log("Creating an explosion of radius 10.");
  overworld.createExplosion(targetLocation, 10);
```
##### ***createFireAndWaterExplosions.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  const explosionLoc = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5};

  log("Creating an explosion of radius 15 that causes fire.");
  overworld.createExplosion(explosionLoc, 15, { causesFire: true });

  const belowWaterLoc = { x: targetLocation.x + 3, y: targetLocation.y + 1,z: targetLocation.z + 3};

  log("Creating an explosion of radius 10 that can go underwater.");
  overworld.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
```
##### ***createNoBlockExplosion.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  const explodeNoBlocksLoc = {
    x: Math.floor(targetLocation.x + 1),
    y: Math.floor(targetLocation.y + 2),
    z: Math.floor(targetLocation.z + 1)
  };

  log("Creating an explosion of radius 15 that does not break blocks.");
  overworld.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
```

### **fillBlocks**
`
fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number
`

Fills an area between begin and end with block of type block.

#### **Parameters**
- **begin**: [*Vector3*](Vector3.md)
  
  The lower northwest starting corner of the area.
- **end**: [*Vector3*](Vector3.md)
  
  The upper southeast ending corner of the area.
- **block**: [*BlockPermutation*](BlockPermutation.md) | [*BlockType*](BlockType.md)
  
  Type of block to fill the volume with.
- **options**?: [*BlockFillOptions*](BlockFillOptions.md) = `null`
  
  A set of additional options, such as a matching block to potentially replace this fill block with.

#### **Returns** *number* -  Returns number of blocks placed.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getBlock**
`
getBlock(location: Vector3): Block | undefined
`

Returns a block instance at the given location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to return a block.

#### **Returns** [*Block*](Block.md) | *undefined* - Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.

> [!WARNING]
> PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore,,PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range,

> [!WARNING]
> PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore,,PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range,

> [!WARNING]
> PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore,,PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range,

> [!WARNING]
> PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore,,PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range,

### **getBlockFromRay**
`
getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): Block
`

Gets the first block that intersects with a vector emanating from a location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  Location from where to initiate the ray check.
- **direction**: [*Vector3*](Vector3.md)
  
  Vector direction to cast the ray.
- **options**?: [*BlockRaycastOptions*](BlockRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Block*](Block.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getEntities**
`
getEntities(options?: EntityQueryOptions): Entity[]
`

Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of entities returned.

#### **Returns** [*Entity*](Entity.md)[] - An entity array.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***bounceSkeletons.ts***
```typescript
  let mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  let eqo: mc.EntityQueryOptions = {
    type: "skeleton",
  };

  for (let entity of overworld.getEntities(eqo)) {
    entity.applyKnockback(0, 0, 0, 1);
  }
```
##### ***tagsQuery.ts***
```typescript
  let mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    let mobTypeId = mobs[i % mobs.length];
    let entity = overworld.spawnEntity(mobTypeId, targetLocation);
    entity.addTag("mobparty." + mobTypeId);
  }

  let eqo: mc.EntityQueryOptions = {
    tags: ["mobparty.skeleton"],
  };

  for (let entity of overworld.getEntities(eqo)) {
    entity.kill();
  }
```
##### ***testThatEntityIsFeatherItem.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  const items = overworld.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent("item") as mc.EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith("feather")) {
        log("Success! Found a feather", 1);
      }
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

#### **Returns** [*Entity*](Entity.md)[] - Zero or more entities at the specified location.

### **getEntitiesFromRay**
`
getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): Entity[]
`

Gets entities that intersect with a specified vector emanating from a location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
- **direction**: [*Vector3*](Vector3.md)
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Entity*](Entity.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): Player[]
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of players returned.

#### **Returns** [*Player*](Player.md)[] - A player array.

> [!WARNING]
> This function can throw errors.

### **runCommand**
`
runCommand(commandString: string): CommandResult
`

Runs a command synchronously using the context of the broader dimenion.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

#### **Returns** [*CommandResult*](CommandResult.md) - Returns a command result with a count of successful values from the command.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.

### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<CommandResult>
`

Runs a particular command asynchronously from the context of the broader dimension.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

#### **Returns** Promise&lt;[*CommandResult*](CommandResult.md)&gt; - For commands that return data, returns a CommandResult with an indicator of command results.

> [!WARNING]
> Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.

### **setWeather**
`
setWeather(weatherType: WeatherType): void
`

Sets the current weather within the dimesion

#### **Parameters**
- **weatherType**: [*WeatherType*](WeatherType.md)
  
  Set of weather to apply.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

#### **Returns** [*Entity*](Entity.md) - Newly created entity at the specified location.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***createOldHorse.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  log("Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult");
  overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
```
##### ***quickFoxLazyDog.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  const fox = overworld.spawnEntity("minecraft:fox", {
    x: targetLocation.x + 1,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });

  fox.addEffect("speed", 10, {
    amplifier: 2,
  });
  log("Created a fox.");

  const wolf = overworld.spawnEntity("minecraft:wolf", {
    x: targetLocation.x + 4,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });
  wolf.addEffect("slowness", 10, {
    amplifier: 2,
  });
  wolf.isSneaking = true;
  log("Created a sneaking wolf.", 1);
```
##### ***triggerEvent.ts***
```typescript
  const creeper = overworld.spawnEntity("minecraft:creeper", targetLocation);

  creeper.triggerEvent("minecraft:start_exploding_forced");
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

#### **Returns** [*Entity*](Entity.md) - Newly created item stack entity at the specified location.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***itemStacks.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
  const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
  const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

  const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1);
  const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1);
  const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5);

  log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
  overworld.spawnItem(oneEmerald, oneItemLoc);

  log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
  overworld.spawnItem(fiveEmeralds, fiveItemsLoc);

  log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
  overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
```
##### ***spawnItem.ts***
```typescript
  const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1);

  overworld.spawnItem(featherItem, targetLocation);
  log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
```

### **spawnParticle**
`
spawnParticle(effectName: string, location: Vector3, molangVariables: MolangVariableMap): void
`

Creates a new particle emitter at a specified location in the world.

#### **Parameters**
- **effectName**: *string*
  
  Identifier of the particle to create.
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to create the particle emitter.
- **molangVariables**: [*MolangVariableMap*](MolangVariableMap.md)
  
  A set of additional, customizable variables that can be adjusted for this particle emitter.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spawnParticle.ts***
```typescript
  for (let i = 0; i < 100; i++) {
    const molang = new mc.MolangVariableMap();

    molang.setColorRGB("variable.color", { red: Math.random(), green: Math.random(), blue: Math.random(), alpha: 1 });

    let newLocation = {
      x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
      y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
      z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
    };
    overworld.spawnParticle("minecraft:colored_flame_particle", newLocation, molang);
  }
```
