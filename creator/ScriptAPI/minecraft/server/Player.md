---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Player Class
description: Contents of the @minecraft/server.Player class.
---
# Player Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*Entity*](Entity.md)

## Classes that extend Player
- [*SimulatedPlayer*](../server-gametest/SimulatedPlayer.md)

Represents a player within the world.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Dimension that the entity is currently within.

Type: [*Dimension*](Dimension.md)

### **headLocation**
`read-only headLocation: Location;`

Location of the center of the head component of the player.

Type: [*Location*](Location.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.


### **id**
`read-only id: string;`

Unique identifier of the player. This identifier is intended to be consistent across loads of a world instance. No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it.

Type: *string*

### **isSneaking**
`isSneaking: boolean;`

True if the player is currently using a sneaking movement.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **location**
`read-only location: Vector3;`

Current location of the player.

Type: [*Vector3*](Vector3.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **name**
`read-only name: string;`

Name of the player.

Type: *string*

### **nameTag**
`nameTag: string;`

Optional name tag of the player.

Type: *string*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **onScreenDisplay**
`read-only onScreenDisplay: ScreenDisplay;`

Contains methods for manipulating the on-screen display of a Player.

Type: [*ScreenDisplay*](ScreenDisplay.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **rotation**
`read-only rotation: XYRotation;`

Main rotation of the entity.

Type: [*XYRotation*](XYRotation.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **scoreboard**
`read-only scoreboard: ScoreboardIdentity;`

Returns a scoreboard identity that represents this entity.

Type: [*ScoreboardIdentity*](ScoreboardIdentity.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **selectedSlot**
`selectedSlot: number;`

Manages the selected slot in the player's hotbar.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **target**
`read-only target: Entity;`

Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking. For players, which don't use any AI semantics, this property does not do anything.

Type: [*Entity*](Entity.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.


### **typeId**
`read-only typeId: string;`

Unique identifier of the type of the entity - for example, 'minecraft:player'.

Type: *string*

### **velocity**
`read-only velocity: Vector;`

Current speed of the player across X, Y, and Z dimensions.

Type: [*Vector*](Vector.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **viewVector**
`read-only viewVector: Vector;`

Vector of the current view of the player.

Type: [*Vector*](Vector.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [addEffect](#addeffect)
- [addTag](#addtag)
- [getBlockFromViewVector](#getblockfromviewvector)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getDynamicProperty](#getdynamicproperty)
- [getEffect](#geteffect)
- [getEntitiesFromViewVector](#getentitiesfromviewvector)
- [getItemCooldown](#getitemcooldown)
- [getTags](#gettags)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [isOp](#isop)
- [kill](#kill)
- [playSound](#playsound)
- [postClientMessage](#postclientmessage)
- [removeDynamicProperty](#removedynamicproperty)
- [removeTag](#removetag)
- [runCommandAsync](#runcommandasync)
- [setDynamicProperty](#setdynamicproperty)
- [setOp](#setop)
- [setRotation](#setrotation)
- [setVelocity](#setvelocity)
- [startItemCooldown](#startitemcooldown)
- [teleport](#teleport)
- [teleportFacing](#teleportfacing)
- [tell](#tell)
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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **addTag**
`
addTag(tag: string): boolean
`

Adds a specified tag to an entity.

#### **Parameters**
- **tag**: *string*
  
  Content of the tag to add.

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.



### **getComponents**
`
getComponents(): IEntityComponent[]
`

Returns all components that are both present on this entity and supported by the API.

#### **Returns** [*IEntityComponent*](IEntityComponent.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.



### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean* | *number* | *string* - Returns the value for the property, or undefined if the property has not been set.

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



### **getEntitiesFromViewVector**
`
getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]
`

Gets the first entity that intersects with the vector of the view of this entity.

#### **Parameters**
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Entity*](Entity.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **getItemCooldown**
`
getItemCooldown(itemCategory: string): number
`

Gets the current item cooldown time for a particular cooldown category.

#### **Parameters**
- **itemCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.

#### **Returns** *number*

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **isOp**
`
isOp(): boolean
`

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **kill**
`
kill(): void
`

Kills this entity. The entity will drop loot as normal.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **playSound**
`
playSound(soundID: string, soundOptions?: SoundOptions): void
`

Plays a sound that only this particular player can hear.

#### **Parameters**
- **soundID**: *string*
  
  Identifier of the sound to play.
- **soundOptions**?: [*SoundOptions*](SoundOptions.md) = `null`
  
  Additional optional options for the sound.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **postClientMessage**
`
postClientMessage(id: string, value: string): void
`

#### **Parameters**
- **id**: *string*
- **value**: *string*

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<CommandResult>
`

Runs a particular command asynchronously from the context of this entity.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

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



### **setOp**
`
setOp(isOp: boolean): void
`

#### **Parameters**
- **isOp**: *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **setVelocity**
`
setVelocity(velocity: Vector3): void
`

Sets a velocity for the entity to move with.

#### **Parameters**
- **velocity**: [*Vector3*](Vector3.md)
  
  X/Y/Z components of the velocity.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **startItemCooldown**
`
startItemCooldown(itemCategory: string, tickDuration: number): void
`

Sets the item cooldown time for a particular cooldown category.

#### **Parameters**
- **itemCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.
- **tickDuration**: *number*
  
  Duration in ticks of the item cooldown.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **teleport**
`
teleport(location: Vector3, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void
`

Teleports the selected player to a new location

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  New location for the player.
- **dimension**: [*Dimension*](Dimension.md)
  
  Dimension to move the selected player to.
- **xRotation**: *number*
  
  X rotation of the player after teleportation.
- **yRotation**: *number*
  
  Y rotation of the player after teleportation.
- **keepVelocity**?: *boolean* = `false`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **teleportFacing**
`
teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void
`

Teleports the selected player to a new location, and will have the player facing a specified location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  New location for the player.
- **dimension**: [*Dimension*](Dimension.md)
  
  Dimension to move the selected player to.
- **facingLocation**: [*Vector3*](Vector3.md)
  
  Location that this player will be facing.
- **keepVelocity**?: *boolean* = `false`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.



### **tell**
`
tell(message: IRawMessage | string): void
`

Sends a message that is displayed on the connected client for this player.

#### **Parameters**
- **message**: [*IRawMessage*](IRawMessage.md) | *string*

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
