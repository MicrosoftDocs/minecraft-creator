---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Entity Class
description: Contents of the mojang-minecraft.Entity class.
---
# Entity Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Classes that extend Entity
- [*Player*](Player.md)

Represents the state of an entity (a mob, the player, or other moving objects like minecarts) in the world.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Dimension that the entity is currently within.

Type: [*Dimension*](Dimension.md)

### **headLocation**
`read-only headLocation: Location;`

Location of the center of the head component of the entity.

Type: [*Location*](Location.md)

### **id**
`read-only id: string;`

Unique identifier of the entity.

Type: *string*

### **isSneaking**
`isSneaking: boolean;`

Whether the entity is sneaking - that is, moving more slowly and more quietly.

Type: *boolean*

### **location**
`read-only location: Location;`

Current location of the entity.

Type: [*Location*](Location.md)

### **nameTag**
`nameTag: string;`

Given name of the entity.

Type: *string*

### **rotation**
`read-only rotation: XYRotation;`

Main rotation of the entity.

Type: [*XYRotation*](XYRotation.md)

### **scoreboard**
`read-only scoreboard: ScoreboardIdentity;`

Returns a scoreboard identity that represents this entity.

Type: [*ScoreboardIdentity*](ScoreboardIdentity.md)

### **target**
`target: Entity;`

Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking.

Type: [*Entity*](Entity.md)

### **velocity**
`read-only velocity: Vector;`

Velocity of the entity.

Type: [*Vector*](Vector.md)

### **viewVector**
`read-only viewVector: Vector;`

Vector of the current view of the entity.

Type: [*Vector*](Vector.md)

## Methods
- [addEffect](#addeffect)
- [addTag](#addtag)
- [getBlockFromViewVector](#getblockfromviewvector)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getDynamicProperty](#getdynamicproperty)
- [getEffect](#geteffect)
- [getEntitiesFromViewVector](#getentitiesfromviewvector)
- [getTags](#gettags)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [kill](#kill)
- [removeDynamicProperty](#removedynamicproperty)
- [removeTag](#removetag)
- [runCommand](#runcommand)
- [runCommandAsync](#runcommandasync)
- [setDynamicProperty](#setdynamicproperty)
- [setRotation](#setrotation)
- [setVelocity](#setvelocity)
- [teleport](#teleport)
- [teleportFacing](#teleportfacing)
- [triggerEvent](#triggerevent)

### **addEffect**
`
addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void
`
Adds an effect, like poison, to the entity.

#### **Parameters**
- **effectType**: [*EffectType*](EffectType.md)
  
  Type of effect to add to the entity.
- **duration**: *number*
  
  Amount of time, in ticks, for the effect to apply.
- **amplifier**?: *number* = `0`
  
  Optional amplification of the effect to apply.
- **showParticles**?: *boolean* = `true`
> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *addEffect.js*
```javascript
const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
const villagerLoc = new BlockLocation(1, 2, 1);
const villager = test.spawn(villagerId, villagerLoc);
const duration = 20;
villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
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

### **addTag**
`
addTag(tag: string): boolean
`
Adds a specified tag to an entity.

#### **Parameters**
- **tag**: *string*
  
  Content of the tag to add.

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

### **getBlockFromViewVector**
`
getBlockFromViewVector(options?: BlockRaycastOptions): Block
`
Gets the first block that intersects with the vector of the view of this entity.

#### **Parameters**
- **options**?: [*BlockRaycastOptions*](BlockRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Block*](Block.md)
> [!WARNING]
> This function can throw errors.

### **getComponent**
`
getComponent(componentId: string): IEntityComponent
`
Gets a component (that represents additional capabilities) for an entity.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned.

#### **Returns** [*IEntityComponent*](IEntityComponent.md)

### **getComponents**
`
getComponents(): IEntityComponent[]
`
Returns all components that are both present on this entity and supported by the API.

#### **Returns** [*IEntityComponent*](IEntityComponent.md)[]

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string
`
Returns a property value.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean* | *number* | *string* - Returns the value for the property, or undefined if the property has not been set.
> [!WARNING]
> This function can throw errors.

### **getEffect**
`
getEffect(effectType: EffectType): Effect
`
Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.

#### **Parameters**
- **effectType**: [*EffectType*](EffectType.md)

#### **Returns** [*Effect*](Effect.md) - Effect object for the specified effect, or undefined if the effect is not present.
> [!WARNING]
> This function can throw errors.

### **getEntitiesFromViewVector**
`
getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]
`
Gets the first entity that intersects with the vector of the view of this entity.

#### **Parameters**
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Entity*](Entity.md)[]
> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`
Returns all tags associated with an entity.

#### **Returns** *string*[]
> [!WARNING]
> This function can throw errors.

### **hasComponent**
`
hasComponent(componentId: string): boolean
`
Returns true if the specified component is present on this entity.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.

#### **Returns** *boolean*

### **hasTag**
`
hasTag(tag: string): boolean
`
Tests whether an entity has a particular tag.

#### **Parameters**
- **tag**: *string*
  
  Identifier of the tag to test for.

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

### **kill**
`
kill(): void
`
Kills this entity. The entity will drop loot as normal.
> [!WARNING]
> This function can throw errors.

### **removeDynamicProperty**
`
removeDynamicProperty(identifier: string): boolean
`
Removes a specified property.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

### **removeTag**
`
removeTag(tag: string): boolean
`
Removes a specified tag from an entity.

#### **Parameters**
- **tag**: *string*
  
  Content of the tag to remove.

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

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
entity.runCommand("say You got a new high score!");
entity.runCommand("scoreboard players set @p score 10");
```

### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<CommandResult>
`
Runs a particular command asynchronously from the context of this entity. Where possible, running a command asynchronously is recommended, especially for long running operations.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

#### **Returns** Promise&lt;[*CommandResult*](CommandResult.md)&gt; - For commands that return data, returns a JSON structure with command response values.
> [!WARNING]
> This function can throw errors.

### **setDynamicProperty**
`
setDynamicProperty(identifier: string, value: boolean | number | string): void
`
Sets a specified property to a value.

#### **Parameters**
- **identifier**: *string*
- **value**: *boolean* | *number* | *string*
  
  Data value of the property to set.
> [!WARNING]
> This function can throw errors.

### **setRotation**
`
setRotation(degreesX: number, degreesY: number): void
`
Sets the main rotation of the entity.

#### **Parameters**
- **degreesX**: *number*
- **degreesY**: *number*
> [!WARNING]
> This function can throw errors.

### **setVelocity**
`
setVelocity(velocity: IVec3): void
`
Sets a velocity for the entity to move with.

#### **Parameters**
- **velocity**: [*IVec3*](IVec3.md)
  
  X/Y/Z components of the velocity.
> [!WARNING]
> This function can throw errors.

### **teleport**
`
teleport(location: IVec3, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void
`
Teleports the selected entity to a new location

#### **Parameters**
- **location**: [*IVec3*](IVec3.md)
  
  New location for the entity.
- **dimension**: [*Dimension*](Dimension.md)
  
  Dimension to move the selected entity to.
- **xRotation**: *number*
  
  X rotation of the entity after teleportation.
- **yRotation**: *number*
  
  Y rotation of the entity after teleportation.
- **keepVelocity**?: *boolean* = `false`
> [!WARNING]
> This function can throw errors.

### **teleportFacing**
`
teleportFacing(location: IVec3, dimension: Dimension, facingLocation: IVec3, keepVelocity?: boolean): void
`
Teleports the selected entity to a new location, and will have the entity facing a specified location.

#### **Parameters**
- **location**: [*IVec3*](IVec3.md)
  
  New location for the entity.
- **dimension**: [*Dimension*](Dimension.md)
  
  Dimension to move the selected entity to.
- **facingLocation**: [*IVec3*](IVec3.md)
  
  Location that this entity will be facing.
- **keepVelocity**?: *boolean* = `false`
> [!WARNING]
> This function can throw errors.

### **triggerEvent**
`
triggerEvent(eventName: string): void
`
Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.

#### **Parameters**
- **eventName**: *string*
  
  Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed.
> [!WARNING]
> This function can throw errors.
