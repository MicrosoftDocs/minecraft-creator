---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Dimension Class
description: Contents of the mojang-minecraft.Dimension class.
---
# Dimension Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

A class that represents a particular dimension (e.g., The End) within a world.


## Methods
- [createExplosion](#createexplosion)
- [getBlock](#getblock)
- [getBlockFromRay](#getblockfromray)
- [getEntities](#getentities)
- [getEntitiesAtBlockLocation](#getentitiesatblocklocation)
- [getEntitiesFromRay](#getentitiesfromray)
- [getPlayers](#getplayers)
- [isEmpty](#isempty)
- [runCommand](#runcommand)
- [spawnEntity](#spawnentity)
  
### **createExplosion**
`
createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void
`

Creates an explosion at the specified location.
#### **Parameters**
- **location**: [*Location*](Location.md)
  
  The location of the explosion.
- **radius**: *number*
  
  Radius, in blocks, of the explosion to create.
- **explosionOptions**: [*ExplosionOptions*](ExplosionOptions.md)
  
  Additional configurable options for the explosion.


> [!WARNING]
> This function can throw errors.

### **getBlock**
`
getBlock(location: BlockLocation): Block
`

Returns a block instance at the given location. This method was introduced as of version 1.17.10.21.
#### **Parameters**
- **location**: [*BlockLocation*](BlockLocation.md)
  
  The location at which to return a block.

#### **Returns** [*Block*](Block.md) - Block at the specified location.


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

> [!WARNING]
> This function can throw errors.

### **getEntitiesAtBlockLocation**
`
getEntitiesAtBlockLocation(location: BlockLocation): Entity[]
`

Returns a set of entities at a particular location.
#### **Parameters**
- **location**: [*BlockLocation*](BlockLocation.md)
  
  The location at which to return entities.

#### **Returns** [*Entity*](Entity.md)[] - Zero or more entities at the specified location.


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

> [!WARNING]
> This function can throw errors.

### **getPlayers**
`
getPlayers(getPlayers?: EntityQueryOptions): EntityIterator
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
#### **Parameters**
- **getPlayers**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`

#### **Returns** [*EntityIterator*](EntityIterator.md) - An entity iterator that can be used to loop over the returned players.

> [!WARNING]
> This function can throw errors.

### **isEmpty**
`
isEmpty(location: BlockLocation): boolean
`

Tests whether a particular location contains an Air (empty) block.
#### **Parameters**
- **location**: [*BlockLocation*](BlockLocation.md)
  
  The location at which to check for emptiness

#### **Returns** *boolean* - True if the block at the location is air (empty)


### **runCommand**
`
runCommand(commandString: string): any
`

Runs a particular command from the context of this entity.
#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

#### **Returns** *any* - For commands that return data, returns a JSON structure with command response values.

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *commands.js*
```javascript
world.getDimension("overworld").runCommand("say You got a new high score!");
world.getDimension("overworld").runCommand("scoreboard players set @p score 10");
```
### **spawnEntity**
`
spawnEntity(identifier: string, location: BlockLocation | Location): Entity
`

Creates a new entity (e.g., a mob) at the specified location. This method was introduced as of version 1.17.10.21.
#### **Parameters**
- **identifier**: *string*
  
  Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.
- **location**: [*BlockLocation*](BlockLocation.md) | [*Location*](Location.md)
  
  The location at which to create the entity.

#### **Returns** [*Entity*](Entity.md) - Newly created entity at the specified location.

> [!WARNING]
> This function can throw errors.


