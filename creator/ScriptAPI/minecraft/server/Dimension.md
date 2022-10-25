---
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
- [getBlock](#getblock)
- [getBlockFromRay](#getblockfromray)
- [getEntities](#getentities)
- [getEntitiesAtBlockLocation](#getentitiesatblocklocation)
- [getEntitiesFromRay](#getentitiesfromray)
- [getPlayers](#getplayers)
- [runCommandAsync](#runcommandasync)
- [spawnEntity](#spawnentity)
- [spawnItem](#spawnitem)
- [spawnParticle](#spawnparticle)

### **createExplosion**
`
createExplosion(location: Location, radius: number, explosionOptions?: ExplosionOptions): void
`

Creates an explosion at the specified location.

#### **Parameters**
- **location**: [*Location*](Location.md)
  
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
  const explosionLoc = new mc.Location(targetLocation.x + 0.5, targetLocation.y + 0.5, targetLocation.z + 0.5);
  const fireExplosionOptions = new mc.ExplosionOptions();
  // Explode with fire
  fireExplosionOptions.causesFire = true;
  overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
  const waterExplosionOptions = new mc.ExplosionOptions();
  // Explode in water
  waterExplosionOptions.allowUnderwater = true;
  const belowWaterLoc = new mc.Location(targetLocation.x + 3, targetLocation.y + 1, targetLocation.z + 3);
  overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
```
##### *createNoBlockExplosion.ts*
```javascript
  const explosionOptions = new mc.ExplosionOptions();
  // Start by exploding without breaking blocks
  explosionOptions.breaksBlocks = false;
  const explodeNoBlocksLoc = new mc.Location(
    Math.floor(targetLocation.x + 1),
    Math.floor(targetLocation.y + 2),
    Math.floor(targetLocation.z + 1)
  );
  overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
```



### **getBlock**
`
getBlock(location: BlockLocation): Block
`

Returns a block instance at the given location. This method was introduced as of version 1.17.10.21.

#### **Parameters**
- **location**: [*BlockLocation*](BlockLocation.md)
  
  The location at which to return a block.

#### **Returns** [*Block*](Block.md) - Block at the specified location.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **getBlockFromRay**
`
getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block
`

Gets the first block that intersects with a vector emanating from a location.

#### **Parameters**
- **location**: [*Location*](Location.md)
- **direction**: [*Vector*](Vector.md)
- **options**?: [*BlockRaycastOptions*](BlockRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Block*](Block.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **getEntities**
`
getEntities(getEntities?: EntityQueryOptions): EntityIterator
`

Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **getEntities**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`

#### **Returns** [*EntityIterator*](EntityIterator.md) - An entity iterator that can be used to loop over the returned entities.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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
getEntitiesAtBlockLocation(location: BlockLocation): Entity[]
`

Returns a set of entities at a particular location.

#### **Parameters**
- **location**: [*BlockLocation*](BlockLocation.md)
  
  The location at which to return entities.

#### **Returns** [*Entity*](Entity.md)[] - Zero or more entities at the specified location.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.



### **getEntitiesFromRay**
`
getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[]
`

Gets entities that intersect with a specified vector emanating from a location.

#### **Parameters**
- **location**: [*Location*](Location.md)
- **direction**: [*Vector*](Vector.md)
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Entity*](Entity.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **getPlayers**
`
getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **getPlayers**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`

#### **Returns** [*PlayerIterator*](PlayerIterator.md) - An entity iterator that can be used to loop over the returned players.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

### **spawnEntity**
`
spawnEntity(identifier: string, location: BlockLocation | Location): Entity
`

Creates a new entity (e.g., a mob) at the specified location.

#### **Parameters**
- **identifier**: *string*
  
  Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.
- **location**: [*BlockLocation*](BlockLocation.md) | [*Location*](Location.md)
  
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
  const fox = overworld.spawnEntity(
    "minecraft:fox",
    new mc.BlockLocation(targetLocation.x + 1, targetLocation.y + 2, targetLocation.z + 3)
  );
  fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
  log("Created a fox.");
  const wolf = overworld.spawnEntity(
    "minecraft:wolf",
    new mc.BlockLocation(targetLocation.x + 4, targetLocation.y + 2, targetLocation.z + 3)
  );
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
spawnItem(item: ItemStack, location: BlockLocation | Location): Entity
`

Creates a new item stack as an entity at the specified location.

#### **Parameters**
- **item**: [*ItemStack*](ItemStack.md)
- **location**: [*BlockLocation*](BlockLocation.md) | [*Location*](Location.md)
  
  The location at which to create the item stack.

#### **Returns** [*Entity*](Entity.md) - Newly created item stack entity at the specified location.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *itemStacks.ts*
```javascript
  const oneItemLoc = new mc.BlockLocation(3, 2, 1);
  const fiveItemsLoc = new mc.BlockLocation(1, 2, 1);
  const diamondPickaxeLoc = new mc.BlockLocation(2, 2, 4);
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
spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void
`

Creates a new particle emitter at a specified location in the world.

#### **Parameters**
- **effectName**: *string*
  
  Identifier of the particle to create.
- **location**: [*Location*](Location.md)
  
  The location at which to create the particle emitter.
- **molangVariables**: [*MolangVariableMap*](MolangVariableMap.md)
  
  A set of additional, customizable variables that can be adjusted for this particle emitter.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
