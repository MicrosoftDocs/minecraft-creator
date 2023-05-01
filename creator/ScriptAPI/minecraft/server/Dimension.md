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

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *createExplosion.ts*
```javascript
  overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());
```
##### *createFireAndWaterExplosions.ts*
```javascript
const explosionLoc: mc.Vector3 = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5 };
const fireExplosionOptions = new mc.ExplosionOptions();
// Explode with fire
fireExplosionOptions.causesFire = true;
overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
const waterExplosionOptions = new mc.ExplosionOptions();
// Explode in water
waterExplosionOptions.allowUnderwater = true;
const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };
overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
```
##### *createNoBlockExplosion.ts*
```javascript
const explosionOptions = new mc.ExplosionOptions();
// Start by exploding without breaking blocks
explosionOptions.breaksBlocks = false;
const explodeNoBlocksLoc: mc.Vector3 = {
  x: Math.floor(targetLocation.x + 1),
  y: Math.floor(targetLocation.y + 2),
  z: Math.floor(targetLocation.z + 1),
};
overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
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

#### **Returns** [*Block*](Block.md) | *undefined* - Block at the specified location.

> [!WARNING]
> This function can throw errors.

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

#### **Examples**
##### *testThatEntityIsFeatherItem.ts*
```javascript
const query = {
  type: "item",
  location: targetLocation,
};
const items = overworld.getEntities(query);
for (const item of items) {
  const itemComp = item.getComponent("item") as any;
  if (itemComp) {
    if (itemComp.itemStack.id.endsWith("feather")) {
      console.log("Success! Found a feather", 1);
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

#### **Parameters**
- **commandString**: *string*

#### **Returns** [*CommandResult*](CommandResult.md)

> [!WARNING]
> This function can throw errors.

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
> This function can throw errors.

### **setWeather**
`
setWeather(weatherType: WeatherType): void
`

#### **Parameters**
- **weatherType**: [*WeatherType*](WeatherType.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *createOldHorse.ts*
```javascript
  // create a horse and trigger the 'ageable_grow_up' event, ensuring the horse is created as an adult
  overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
```
##### *quickFoxLazyDog.ts*
```javascript
const fox = overworld.spawnEntity("minecraft:fox", {
  x: targetLocation.x + 1,
  y: targetLocation.y + 2,
  z: targetLocation.z + 3,
});
fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
log("Created a fox.");
const wolf = overworld.spawnEntity("minecraft:wolf", {
  x: targetLocation.x + 4,
  y: targetLocation.y + 2,
  z: targetLocation.z + 3,
});
wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
wolf.isSneaking = true;
log("Created a sneaking wolf.", 1);
```
##### *trapTick.ts*
```javascript
  let ticks = 0;
  mc.world.events.tick.subscribe((event: mc.TickEvent) => {
    ticks++;
    // Minecraft runs at 20 ticks per second
    if (ticks % 1200 === 0) {
      overworld.runCommand("say Another minute passes...");
    }
  });
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

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *itemStacks.ts*
```javascript
const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };
const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };
const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);
overworld.spawnItem(oneEmerald, oneItemLoc);
overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
```
##### *spawnItem.ts*
```javascript
  const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);
  overworld.spawnItem(featherItem, targetLocation);
  log("New feather created!");
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

> [!WARNING]
> This function can throw errors.
