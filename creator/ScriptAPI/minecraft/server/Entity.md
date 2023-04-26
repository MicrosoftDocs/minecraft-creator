---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Entity Class
description: Contents of the @minecraft/server.Entity class.
---
# Entity Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
## Classes that extend Entity
- [*Player*](Player.md)
- [*Player*](Player.md)
- [*Player*](Player.md)

Represents the state of an entity (a mob, the player, or other moving objects like minecarts) in the world.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Dimension that the entity is currently within.

Type: [*Dimension*](Dimension.md)

### **id**
`read-only id: string;`

Unique identifier of the entity. This identifier is intended to be consistent across loads of a world instance. No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it.

Type: *string*

### **isSneaking**
`isSneaking: boolean;`

Whether the entity is sneaking - that is, moving more slowly and more quietly.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **lifetimeState**
`read-only lifetimeState: EntityLifetimeState;`

Whether the entity reference that you have is valid or not.  For example, an entity may be unloaded if it moves into a chunk that is unloaded, but may be reactivated if the chunk it is within gets reloaded.

Type: [*EntityLifetimeState*](EntityLifetimeState.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **location**
`read-only location: Vector3;`

Current location of the entity.

Type: [*Vector3*](Vector3.md)

### **nameTag**
`nameTag: string;`

Given name of the entity.

Type: *string*

### **scoreboardIdentity**
`read-only scoreboardIdentity?: ScoreboardIdentity;`

Returns a scoreboard identity that represents this entity.

Type: [*ScoreboardIdentity*](ScoreboardIdentity.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **target**
`read-only target: Entity;`

Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking.

Type: [*Entity*](Entity.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **typeId**
`read-only typeId: string;`

Unique identifier of the type of the entity - for example, 'minecraft:skeleton'.

Type: *string*

## Methods
- [addEffect](#addeffect)
- [addTag](#addtag)
- [applyDamage](#applydamage)
- [applyImpulse](#applyimpulse)
- [applyKnockback](#applyknockback)
- [clearVelocity](#clearvelocity)
- [extinguishFire](#extinguishfire)
- [getBlockFromViewDirection](#getblockfromviewdirection)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getDynamicProperty](#getdynamicproperty)
- [getEffect](#geteffect)
- [getEffects](#geteffects)
- [getEntitiesFromViewDirection](#getentitiesfromviewdirection)
- [getHeadLocation](#getheadlocation)
- [getRotation](#getrotation)
- [getTags](#gettags)
- [getVelocity](#getvelocity)
- [getViewDirection](#getviewdirection)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [kill](#kill)
- [playAnimation](#playanimation)
- [removeDynamicProperty](#removedynamicproperty)
- [removeTag](#removetag)
- [runCommand](#runcommand)
- [runCommandAsync](#runcommandasync)
- [setDynamicProperty](#setdynamicproperty)
- [setOnFire](#setonfire)
- [setRotation](#setrotation)
- [teleport](#teleport)
- [triggerEvent](#triggerevent)
- [tryTeleport](#tryteleport)

### **addEffect**
`
addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void
`

#### **Parameters**
- **effectType**: [*EffectType*](EffectType.md)
- **duration**: *number*
- **amplifier**?: *number* = `0`
- **showParticles**?: *boolean* = `true`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *addEffect.js*
```javascript
const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
const villager = test.spawn(villagerId, villagerLoc);
const duration = 20;
villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
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

### **applyDamage**
`
applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean
`

Applies a set of damage to an entity.

#### **Parameters**
- **amount**: *number*
  
  Amount of damage to apply.
- **options**?: [*EntityApplyDamageByProjectileOptions*](EntityApplyDamageByProjectileOptions.md) | [*EntityApplyDamageOptions*](EntityApplyDamageOptions.md) = `null`
  
  Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **applyImpulse**
`
applyImpulse(vector: Vector3): void
`

Applies impulse vector to the current velocity of the entity.

#### **Parameters**
- **vector**: [*Vector3*](Vector3.md)
  
  Impulse vector.

> [!WARNING]
> This function can throw errors.

### **applyKnockback**
`
applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void
`

Applies impulse vector to the current velocity of the entity.

#### **Parameters**
- **directionX**: *number*
  
  X direction in horizontal plane.
- **directionZ**: *number*
  
  Z direction in horizontal plane.
- **horizontalStrength**: *number*
  
  Knockback strength for the horizontal vector.
- **verticalStrength**: *number*
  
  Knockback strength for the vertical vector.

> [!WARNING]
> This function can throw errors.

### **clearVelocity**
`
clearVelocity(): void
`

Sets the current velocity of the Entity to zero. Note that this method may not have an impact on Players.

> [!WARNING]
> This function can throw errors.

### **extinguishFire**
`
extinguishFire(useEffects?: boolean): boolean
`

Extinguishes the fire if the entity is on fire. Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire.

#### **Parameters**
- **useEffects**?: *boolean* = `null`
  
  Whether to show any visual effects connected to the extinguishing.

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getBlockFromViewDirection**
`
getBlockFromViewDirection(options?: BlockRaycastOptions): Block
`

Returns the first intersecting block from the direction that this entity is looking at.

#### **Parameters**
- **options**?: [*BlockRaycastOptions*](BlockRaycastOptions.md) = `null`

#### **Returns** [*Block*](Block.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getComponent**
`
getComponent(componentId: string): EntityComponent
`

Gets a component (that represents additional capabilities) for an entity.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned.

#### **Returns** [*EntityComponent*](EntityComponent.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getComponents**
`
getComponents(): EntityComponent[]
`

Returns all components that are both present on this entity and supported by the API.

#### **Returns** [*EntityComponent*](EntityComponent.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean* | *number* | *string* | *undefined* - Returns the value for the property, or undefined if the property has not been set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getEffects**
`
getEffects(): Effect[]
`

Returns a set of effects applied to this item.

#### **Returns** [*Effect*](Effect.md)[] - List of effects.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getEntitiesFromViewDirection**
`
getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[]
`

Returns a potential set of entities from the direction that this entity is looking at.

#### **Parameters**
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`

#### **Returns** [*Entity*](Entity.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getHeadLocation**
`
getHeadLocation(): Vector3
`

Returns the current location of the head component of this entity.

#### **Returns** [*Vector3*](Vector3.md)

> [!WARNING]
> This function can throw errors.

### **getRotation**
`
getRotation(): Vector2
`

Returns the current rotation component of this entity.

#### **Returns** [*Vector2*](Vector2.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

### **getVelocity**
`
getVelocity(): Vector3
`

Returns the current velocity vector of the entity.

#### **Returns** [*Vector3*](Vector3.md)

> [!WARNING]
> This function can throw errors.

### **getViewDirection**
`
getViewDirection(): Vector3
`

Returns the current view direction of the entity.

#### **Returns** [*Vector3*](Vector3.md)

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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
kill(): boolean
`

Kills this entity. The entity will drop loot as normal.

#### **Returns** *boolean* - Returns true if entity can be killed (even if it is already dead), otherwise it returns false.

> [!WARNING]
> This function can throw errors.

### **playAnimation**
`
playAnimation(animationName: string, options?: PlayAnimationOptions): void
`

#### **Parameters**
- **animationName**: *string*
- **options**?: [*PlayAnimationOptions*](PlayAnimationOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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
runCommand(commandString: string): CommandResult
`

Runs a synchronous command on the entity.

#### **Parameters**
- **commandString**: *string*

#### **Returns** [*CommandResult*](CommandResult.md)

> [!WARNING]
> This function can throw errors.

### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<CommandResult>
`

Runs a particular command asynchronously from the context of this entity. Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **setOnFire**
`
setOnFire(seconds: number, useEffects?: boolean): boolean
`

Sets an entity on fire (if it is not in water or rain). Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire.

#### **Parameters**
- **seconds**: *number*
  
  Length of time to set the entity on fire.
- **useEffects**?: *boolean* = `null`

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **setRotation**
`
setRotation(rotation: Vector2): void
`

Sets the main rotation of the entity.

#### **Parameters**
- **rotation**: [*Vector2*](Vector2.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **teleport**
`
teleport(location: Vector3, teleportOptions?: TeleportOptions): void
`

Teleports the selected entity to a new location

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  New location for the entity.
- **teleportOptions**?: [*TeleportOptions*](TeleportOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **tryTeleport**
`
tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean
`

Attempts to try a teleport, but may not complete the teleport operation (for example, if there are blocks at the destination.)

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  Location to teleport the entity to.
- **teleportOptions**?: [*TeleportOptions*](TeleportOptions.md) = `null`
  
  Options regarding the teleport operation.

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
