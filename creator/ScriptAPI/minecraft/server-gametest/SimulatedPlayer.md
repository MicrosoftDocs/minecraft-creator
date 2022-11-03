---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-gametest.SimulatedPlayer Class
description: Contents of the @minecraft/server-gametest.SimulatedPlayer class.
---
# SimulatedPlayer Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*@minecraft/server.Player*](../server/Player.md)

A simulated player can be used within GameTests to represent how a player moves throughout the world and to support testing of how entities and the environment will react to a player. This type derives much of its structure and methods from the [*@minecraft/server.Player*](../server/Player.md) type.

## Properties

### **dimension**
`read-only dimension: @minecraft/server.Dimension;`

Dimension that the simulated player is currently within.

Type: [*@minecraft/server.Dimension*](../server/Dimension.md)

### **headLocation**
`read-only headLocation: @minecraft/server.Location;`

Location of the center of the head component of the player.

Type: [*@minecraft/server.Location*](../server/Location.md)

### **headRotation**
`read-only headRotation: @minecraft/server.XYRotation;`

Rotation of the head across pitch and yaw angles.

Type: [*@minecraft/server.XYRotation*](../server/XYRotation.md)

### **id**
`read-only id: string;`

Unique identifier of the player. This identifier is intended to be consistent across loads of a world instance. No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it.

Type: *string*

### **isSneaking**
`isSneaking: boolean;`

True if the player is currently using a sneaking movement.

Type: *boolean*

### **location**
`read-only location: @minecraft/server.Vector3;`

Current location of the player.

Type: [*@minecraft/server.Vector3*](../server/Vector3.md)

### **name**
`read-only name: string;`

Name of the player.

Type: *string*

### **nameTag**
`nameTag: string;`

Optional name tag of the player.

Type: *string*

### **onScreenDisplay**
`read-only onScreenDisplay: @minecraft/server.ScreenDisplay;`

Contains methods for manipulating the on-screen display of a Player.

Type: [*@minecraft/server.ScreenDisplay*](../server/ScreenDisplay.md)

### **rotation**
`read-only rotation: @minecraft/server.XYRotation;`

Main rotation of the entity.

Type: [*@minecraft/server.XYRotation*](../server/XYRotation.md)

### **scoreboard**
`read-only scoreboard: @minecraft/server.ScoreboardIdentity;`

Returns a scoreboard identity that represents this entity.

Type: [*@minecraft/server.ScoreboardIdentity*](../server/ScoreboardIdentity.md)

### **selectedSlot**
`selectedSlot: number;`

Manages the selected slot in the player's hotbar.

Type: *number*

### **target**
`read-only target: @minecraft/server.Entity;`

Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking.

Type: [*@minecraft/server.Entity*](../server/Entity.md)

### **typeId**
`read-only typeId: string;`

Unique identifier of the type of the entity - for example, 'minecraft:player'.

Type: *string*

### **velocity**
`read-only velocity: @minecraft/server.Vector;`

Current speed of the player across X, Y, and Z dimensions.

Type: [*@minecraft/server.Vector*](../server/Vector.md)

### **viewVector**
`read-only viewVector: @minecraft/server.Vector;`

Vector of the current view of the player.

Type: [*@minecraft/server.Vector*](../server/Vector.md)

## Methods
- [addEffect](#addeffect)
- [addExperience](#addexperience)
- [addTag](#addtag)
- [attack](#attack)
- [attackEntity](#attackentity)
- [breakBlock](#breakblock)
- [getBlockFromViewVector](#getblockfromviewvector)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getDynamicProperty](#getdynamicproperty)
- [getEffect](#geteffect)
- [getEntitiesFromViewVector](#getentitiesfromviewvector)
- [getItemCooldown](#getitemcooldown)
- [getTags](#gettags)
- [giveItem](#giveitem)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [interact](#interact)
- [interactWithBlock](#interactwithblock)
- [interactWithEntity](#interactwithentity)
- [isOp](#isop)
- [jump](#jump)
- [kill](#kill)
- [lookAtBlock](#lookatblock)
- [lookAtEntity](#lookatentity)
- [lookAtLocation](#lookatlocation)
- [move](#move)
- [moveRelative](#moverelative)
- [moveToBlock](#movetoblock)
- [moveToLocation](#movetolocation)
- [navigateToBlock](#navigatetoblock)
- [navigateToEntity](#navigatetoentity)
- [navigateToLocation](#navigatetolocation)
- [navigateToLocations](#navigatetolocations)
- [playSound](#playsound)
- [postClientMessage](#postclientmessage)
- [removeDynamicProperty](#removedynamicproperty)
- [removeTag](#removetag)
- [rotateBody](#rotatebody)
- [runCommandAsync](#runcommandasync)
- [sendTestSkin](#sendtestskin)
- [setBodyRotation](#setbodyrotation)
- [setDynamicProperty](#setdynamicproperty)
- [setGameMode](#setgamemode)
- [setItem](#setitem)
- [setOp](#setop)
- [setRotation](#setrotation)
- [setVelocity](#setvelocity)
- [startItemCooldown](#startitemcooldown)
- [stopBreakingBlock](#stopbreakingblock)
- [stopInteracting](#stopinteracting)
- [stopMoving](#stopmoving)
- [stopUsingItem](#stopusingitem)
- [teleport](#teleport)
- [teleportFacing](#teleportfacing)
- [tell](#tell)
- [triggerEvent](#triggerevent)
- [useItem](#useitem)
- [useItemInSlot](#useiteminslot)
- [useItemInSlotOnBlock](#useiteminslotonblock)
- [useItemOnBlock](#useitemonblock)

### **addEffect**
`
addEffect(effectType: @minecraft/server.EffectType, duration: number, amplifier?: number, showParticles?: boolean): void
`

Adds an effect, like poison, to the entity.

#### **Parameters**
- **effectType**: [*@minecraft/server.EffectType*](../server/EffectType.md)
  
  Type of effect to add to the entity.
- **duration**: *number*
  
  Amount of time, in ticks, for the effect to apply.
- **amplifier**?: *number* = `0`
  
  Optional amplification of the effect to apply.
- **showParticles**?: *boolean* = `true`

> [!WARNING]
> This function can throw errors.

### **addExperience**
`
addExperience(amount: number): boolean
`

#### **Parameters**
- **amount**: *number*

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **addTag**
`
addTag(tag: string): boolean
`

Adds a specified tag to a simulated player.

#### **Parameters**
- **tag**: *string*
  
  Content of the tag to add.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **attack**
`
attack(): boolean
`

Causes the simulated player to make an attack 'swipe'. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. Target selection is performed by raycasting from the player's head.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **attackEntity**
`
attackEntity(entity: @minecraft/server.Entity): boolean
`

Causes the simulated player to attack the provided target. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. The attack can be performed at any distance and does not require line of sight to the target entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../server/Entity.md)

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **breakBlock**
`
breakBlock(blockLocation: @minecraft/server.BlockLocation, direction?: @minecraft/server.Direction): boolean
`

Destroys the block at blockLocation, respecting the rules of the server player's game mode. The block will be hit until broken, an item is used or stopBreakingBlock is called. Returns true if the block at blockLocation is solid.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
  
  Location of the block to interact with.
- **direction**?: [*@minecraft/server.Direction*](../server/Direction.md) = `1`
  
  Direction to place the specified item within.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **getBlockFromViewVector**
`
getBlockFromViewVector(options?: @minecraft/server.BlockRaycastOptions): @minecraft/server.Block
`

Gets the first block that intersects with the vector of the view of this entity.

#### **Parameters**
- **options**?: [*@minecraft/server.BlockRaycastOptions*](../server/BlockRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*@minecraft/server.Block*](../server/Block.md)

> [!WARNING]
> This function can throw errors.

### **getComponent**
`
getComponent(componentId: string): @minecraft/server.IEntityComponent
`

Gets a component (that represents additional capabilities) for an entity.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned.

#### **Returns** [*@minecraft/server.IEntityComponent*](../server/IEntityComponent.md)

### **getComponents**
`
getComponents(): @minecraft/server.IEntityComponent[]
`

Returns all components that are both present on this entity and supported by the API.

#### **Returns** [*@minecraft/server.IEntityComponent*](../server/IEntityComponent.md)[]

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
getEffect(effectType: @minecraft/server.EffectType): @minecraft/server.Effect
`

Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.

#### **Parameters**
- **effectType**: [*@minecraft/server.EffectType*](../server/EffectType.md)

#### **Returns** [*@minecraft/server.Effect*](../server/Effect.md) - Effect object for the specified effect, or undefined if the effect is not present.

> [!WARNING]
> This function can throw errors.

### **getEntitiesFromViewVector**
`
getEntitiesFromViewVector(options?: @minecraft/server.EntityRaycastOptions): @minecraft/server.Entity[]
`

Gets the first entity that intersects with the vector of the view of this entity.

#### **Parameters**
- **options**?: [*@minecraft/server.EntityRaycastOptions*](../server/EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*@minecraft/server.Entity*](../server/Entity.md)[]

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

> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`

Returns all tags associated with this simulated player.

#### **Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **giveItem**
`
giveItem(itemStack: @minecraft/server.ItemStack, selectSlot?: boolean): boolean
`

Gives the simulated player a particular item stack.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../server/ItemStack.md)
  
  Item to give.
- **selectSlot**?: *boolean* = `false`
  
  Whether to set the selected slot once given.

#### **Returns** *boolean*

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

Tests whether a simulated player has a particular tag.

#### **Parameters**
- **tag**: *string*
  
  Identifier of the tag to test for.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **interact**
`
interact(): boolean
`

Performs a raycast from the player's head and interacts with the first intersected block or entity. Returns true if the interaction was successful. Maximum range is 6 blocks.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **interactWithBlock**
`
interactWithBlock(blockLocation: @minecraft/server.BlockLocation, direction?: @minecraft/server.Direction): boolean
`

Causes the simulated player to interact with a block. The block at the specified block location must be solid. Returns true if the interaction was performed.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
  
  Location of the block to interact with.
- **direction**?: [*@minecraft/server.Direction*](../server/Direction.md) = `1`
  
  Direction to place the specified item within.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **interactWithEntity**
`
interactWithEntity(entity: @minecraft/server.Entity): boolean
`

Causes the simulated player to interact with a mob. Returns true if the interaction was performed.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../server/Entity.md)
  
  Entity to interact with.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **isOp**
`
isOp(): boolean
`

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **jump**
`
jump(): boolean
`

Causes the simulated player to jump.

#### **Returns** *boolean* - True if a jump was performed.

> [!WARNING]
> This function can throw errors.

### **kill**
`
kill(): void
`

Kills this entity. The entity will drop loot as normal.

> [!WARNING]
> This function can throw errors.

### **lookAtBlock**
`
lookAtBlock(blockLocation: @minecraft/server.BlockLocation): void
`

Rotates the simulated player's head/body to look at the given block location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)

> [!WARNING]
> This function can throw errors.

### **lookAtEntity**
`
lookAtEntity(entity: @minecraft/server.Entity): void
`

Rotates the simulated player's head/body to look at the given entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../server/Entity.md)

> [!WARNING]
> This function can throw errors.

### **lookAtLocation**
`
lookAtLocation(location: @minecraft/server.Location): void
`

Rotates the simulated player's head/body to look at the given location.

#### **Parameters**
- **location**: [*@minecraft/server.Location*](../server/Location.md)

> [!WARNING]
> This function can throw errors.

### **move**
`
move(westEast: number, northSouth: number, speed?: number): void
`

Orders the simulated player to walk in the given direction relative to the GameTest.

#### **Parameters**
- **westEast**: *number*
- **northSouth**: *number*
- **speed**?: *number* = `1`

> [!WARNING]
> This function can throw errors.

### **moveRelative**
`
moveRelative(leftRight: number, backwardForward: number, speed?: number): void
`

Orders the simulated player to walk in the given direction relative to the player's current rotation.

#### **Parameters**
- **leftRight**: *number*
- **backwardForward**: *number*
- **speed**?: *number* = `1`

> [!WARNING]
> This function can throw errors.

### **moveToBlock**
`
moveToBlock(blockLocation: @minecraft/server.BlockLocation, speed?: number): void
`

Orders the simulated player to move to the given block location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
- **speed**?: *number* = `1`

> [!WARNING]
> This function can throw errors.

### **moveToLocation**
`
moveToLocation(location: @minecraft/server.Location, speed?: number): void
`

Orders the simulated player to move to the given location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **location**: [*@minecraft/server.Location*](../server/Location.md)
- **speed**?: *number* = `1`

> [!WARNING]
> This function can throw errors.

### **navigateToBlock**
`
navigateToBlock(blockLocation: @minecraft/server.BlockLocation, speed?: number): @minecraft/server.NavigationResult
`

Orders the simulated player to move to a specific block location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
- **speed**?: *number* = `1`

#### **Returns** [*@minecraft/server.NavigationResult*](../server/NavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToEntity**
`
navigateToEntity(entity: @minecraft/server.Entity, speed?: number): @minecraft/server.NavigationResult
`

Will use navigation to follow the selected entity to within a one block radius. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../server/Entity.md)
- **speed**?: *number* = `1`

#### **Returns** [*@minecraft/server.NavigationResult*](../server/NavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToLocation**
`
navigateToLocation(location: @minecraft/server.Location, speed?: number): @minecraft/server.NavigationResult
`

Orders the simulated player to move to a specific location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.

#### **Parameters**
- **location**: [*@minecraft/server.Location*](../server/Location.md)
- **speed**?: *number* = `1`

#### **Returns** [*@minecraft/server.NavigationResult*](../server/NavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToLocations**
`
navigateToLocations(locations: @minecraft/server.Location[], speed?: number): void
`

Use navigation to follow the route provided via the locations parameter. If a move or navigation is already playing, this will override the last move/navigation. 

#### **Parameters**
- **locations**: [*@minecraft/server.Location*](../server/Location.md)[]
  
  A list of locations to use for routing.
- **speed**?: *number* = `1`
  
  Net speed to use for doing the navigation.

> [!WARNING]
> This function can throw errors.

### **playSound**
`
playSound(soundID: string, soundOptions?: @minecraft/server.SoundOptions): void
`

This method is inherited from Player, but is inoperative in the case of a SimulatedPlayer.

#### **Parameters**
- **soundID**: *string*
  
  Identifier of the sound to play.
- **soundOptions**?: [*@minecraft/server.SoundOptions*](../server/SoundOptions.md) = `null`
  
  Additional optional options for the sound.

> [!WARNING]
> This function can throw errors.

### **postClientMessage**
`
postClientMessage(id: string, value: string): void
`

#### **Parameters**
- **id**: *string*
- **value**: *string*

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

Removes a specified tag from a simulated player.

#### **Parameters**
- **tag**: *string*
  
  Content of the tag to remove.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **rotateBody**
`
rotateBody(angleInDegrees: number): void
`

Causes the simulated player to turn by the provided angle, relative to the player's current rotation.

#### **Parameters**
- **angleInDegrees**: *number*

> [!WARNING]
> This function can throw errors.

### **runCommandAsync**
`
runCommandAsync(commandString: string): Promise<@minecraft/server.CommandResult>
`

Runs a particular command asynchronously from the context of this entity. Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

#### **Returns** Promise&lt;[*@minecraft/server.CommandResult*](../server/CommandResult.md)&gt; - For commands that return data, returns a JSON structure with command response values.

> [!WARNING]
> This function can throw errors.

### **sendTestSkin**
`
sendTestSkin(geoData: string, base64ImageData: string, skinResourcePatch: string): void
`

#### **Parameters**
- **geoData**: *string*
- **base64ImageData**: *string*
- **skinResourcePatch**: *string*

> [!WARNING]
> This function can throw errors.

### **setBodyRotation**
`
setBodyRotation(angleInDegrees: number): void
`

Causes the simulated player to turn to face the provided angle, relative to the GameTest.

#### **Parameters**
- **angleInDegrees**: *number*

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

### **setGameMode**
`
setGameMode(gameMode: @minecraft/server.GameMode): void
`

Sets the game mode that the simulated player is operating under.

#### **Parameters**
- **gameMode**: [*@minecraft/server.GameMode*](../server/GameMode.md)
  
  Game mode to set.

> [!WARNING]
> This function can throw errors.

### **setItem**
`
setItem(itemStack: @minecraft/server.ItemStack, slot: number, selectSlot?: boolean): boolean
`

Sets a particular item for the simulated player.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../server/ItemStack.md)
  
  Item to set.
- **slot**: *number*
  
  Slot to place the given item in.
- **selectSlot**?: *boolean* = `false`
  
  Whether to set the selected slot once set.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **setOp**
`
setOp(isOp: boolean): void
`

#### **Parameters**
- **isOp**: *boolean*

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
setVelocity(velocity: @minecraft/server.Vector3): void
`

Sets a velocity for the entity to move with.

#### **Parameters**
- **velocity**: [*@minecraft/server.Vector3*](../server/Vector3.md)
  
  X/Y/Z components of the velocity.

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

> [!WARNING]
> This function can throw errors.

### **stopBreakingBlock**
`
stopBreakingBlock(): void
`

Stops destroying the block that is currently being hit.

> [!WARNING]
> This function can throw errors.

### **stopInteracting**
`
stopInteracting(): void
`

Stops interacting with entities or blocks.

> [!WARNING]
> This function can throw errors.

### **stopMoving**
`
stopMoving(): void
`

Stops moving/walking/following if the simulated player is moving.

> [!WARNING]
> This function can throw errors.

### **stopUsingItem**
`
stopUsingItem(): void
`

Stops using the currently active item.

> [!WARNING]
> This function can throw errors.

### **teleport**
`
teleport(location: @minecraft/server.Vector3, dimension: @minecraft/server.Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void
`

Teleports the selected player to a new location

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../server/Vector3.md)
  
  New location for the player.
- **dimension**: [*@minecraft/server.Dimension*](../server/Dimension.md)
  
  Dimension to move the selected player to.
- **xRotation**: *number*
  
  X rotation of the player after teleportation.
- **yRotation**: *number*
  
  Y rotation of the player after teleportation.
- **keepVelocity**?: *boolean* = `false`

> [!WARNING]
> This function can throw errors.

### **teleportFacing**
`
teleportFacing(location: @minecraft/server.Vector3, dimension: @minecraft/server.Dimension, facingLocation: @minecraft/server.Vector3, keepVelocity?: boolean): void
`

Teleports the selected player to a new location, and will have the player facing a specified location.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../server/Vector3.md)
  
  New location for the player.
- **dimension**: [*@minecraft/server.Dimension*](../server/Dimension.md)
  
  Dimension to move the selected player to.
- **facingLocation**: [*@minecraft/server.Vector3*](../server/Vector3.md)
  
  Location that this player will be facing.
- **keepVelocity**?: *boolean* = `false`

> [!WARNING]
> This function can throw errors.

### **tell**
`
tell(message: @minecraft/server.IRawMessage | string): void
`

For simulated players, this API is effectively a no-op as simulated players do not have a connected client.

#### **Parameters**
- **message**: [*@minecraft/server.IRawMessage*](../server/IRawMessage.md) | *string*

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

### **useItem**
`
useItem(itemStack: @minecraft/server.ItemStack): boolean
`

Causes the simulated player to use an item. Does not consume the item. Returns false if the item is on cooldown.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../server/ItemStack.md)
  
  Item to use.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **useItemInSlot**
`
useItemInSlot(slot: number): boolean
`

Causes the simulated player to hold and use an item in their inventory.

#### **Parameters**
- **slot**: *number*
  
  Index of the inventory slot.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **useItemInSlotOnBlock**
`
useItemInSlotOnBlock(slot: number, blockLocation: @minecraft/server.BlockLocation, direction?: @minecraft/server.Direction, faceLocationX?: number, faceLocationY?: number): boolean
`

Causes the simulated player to use an item in their inventory on a block. The block at the specified block location must be solid. Returns true if the item was used.

#### **Parameters**
- **slot**: *number*
  
  Index of the slot to use.
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
  
  Location to use the item upon.
- **direction**?: [*@minecraft/server.Direction*](../server/Direction.md) = `1`
  
  Direction to place the specified item within.
- **faceLocationX**?: *number* = `0.5`
  
  Block-face-relative X position where to place the item.
- **faceLocationY**?: *number* = `0.5`
  
  Block-face-relative Y position where to place the item.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **useItemOnBlock**
`
useItemOnBlock(itemStack: @minecraft/server.ItemStack, blockLocation: @minecraft/server.BlockLocation, direction?: @minecraft/server.Direction, faceLocationX?: number, faceLocationY?: number): boolean
`

Causes the simulated player to use an item on a block. The block at the specified block location must be solid. Returns true if the item was used.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../server/ItemStack.md)
  
  Item to use.
- **blockLocation**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
  
  Location to use the item upon.
- **direction**?: [*@minecraft/server.Direction*](../server/Direction.md) = `1`
  
  Direction to place the specified item within.
- **faceLocationX**?: *number* = `0.5`
  
  Block-face-relative X position where to place the item.
- **faceLocationY**?: *number* = `0.5`
  
  Block-face-relative Y position where to place the item.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.
