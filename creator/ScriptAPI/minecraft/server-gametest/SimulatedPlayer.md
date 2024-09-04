---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-gametest.SimulatedPlayer Class
description: Contents of the @minecraft/server-gametest.SimulatedPlayer class.
---
# SimulatedPlayer Class

## Extends
- [*@minecraft/server.Player*](../../minecraft/server/Player.md)

A simulated player can be used within GameTests to represent how a player moves throughout the world and to support testing of how entities and the environment will react to a player. This type derives much of its structure and methods from the [*@minecraft/server.Player*](../../minecraft/server/Player.md) type. Note that many types of events that may be available for entities more broadly, such as item use events, may not fire in the same capacity for simulated players.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **headRotation**
`read-only headRotation: minecraftserver.Vector2;`

Rotation of the head across pitch and yaw angles.

Type: [*@minecraft/server.Vector2*](../../minecraft/server/Vector2.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **isSprinting**
`isSprinting: boolean;`

Returns whether the simulated player is sprinting.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.
::: moniker-end

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [attack](#attack)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [attackEntity](#attackentity)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [breakBlock](#breakblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [chat](#chat)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [disconnect](#disconnect)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [dropSelectedItem](#dropselecteditem)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [fly](#fly)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [giveItem](#giveitem)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [glide](#glide)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [interact](#interact)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [interactWithBlock](#interactwithblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [interactWithEntity](#interactwithentity)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [jump](#jump)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [lookAtBlock](#lookatblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [lookAtEntity](#lookatentity)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [lookAtLocation](#lookatlocation)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [move](#move)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [moveRelative](#moverelative)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [moveToBlock](#movetoblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [moveToLocation](#movetolocation)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [navigateToBlock](#navigatetoblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [navigateToEntity](#navigatetoentity)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [navigateToLocation](#navigatetolocation)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [navigateToLocations](#navigatetolocations)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [respawn](#respawn)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [rotateBody](#rotatebody)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [setBodyRotation](#setbodyrotation)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [setItem](#setitem)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [startBuild](#startbuild)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopBreakingBlock](#stopbreakingblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopBuild](#stopbuild)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopFlying](#stopflying)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopGliding](#stopgliding)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopInteracting](#stopinteracting)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopMoving](#stopmoving)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopSwimming](#stopswimming)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [stopUsingItem](#stopusingitem)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [swim](#swim)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [useItem](#useitem)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [useItemInSlot](#useiteminslot)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [useItemInSlotOnBlock](#useiteminslotonblock)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [useItemOnBlock](#useitemonblock)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **attack**
`
attack(): boolean
`

Causes the simulated player to make an attack 'swipe'. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. Target selection is performed by raycasting from the player's head.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **attackEntity**
`
attackEntity(entity: minecraftserver.Entity): boolean
`

Causes the simulated player to attack the provided target. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. The attack can be performed at any distance and does not require line of sight to the target entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **breakBlock**
`
breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean
`

Destroys the block at blockLocation, respecting the rules of the server player's game mode. The block will be hit until broken, an item is used or stopBreakingBlock is called. Returns true if the block at blockLocation is solid.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to interact with.
- **direction**?: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md) = `1`
  
  Direction to place the specified item within.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **chat**
`
chat(message: string): void
`

#### **Parameters**
- **message**: *string*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **disconnect**
`
disconnect(): void
`

Simulates and performs a disconnection of the simulated player from the world.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **dropSelectedItem**
`
dropSelectedItem(): boolean
`

Drops the simulated player's selected item

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **fly**
`
fly(): void
`

Causes the simulated player to start flying as though they were flying in creative mode. For flying with Elytra, see function glide.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **giveItem**
`
giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean
`

Gives the simulated player a particular item stack.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
  Item to give.
- **selectSlot**?: *boolean* = `false`
  
  Whether to set the selected slot once given.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **glide**
`
glide(): boolean
`

Causes the simulated player to start gliding. Elytra must be equipped and the player must be in the air.

**Returns** *boolean* - Returns true if the simulated player begins to glide. Returns false if the player is already gliding, or the player does not have Elytra equipped, is in water or is on the ground.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **interact**
`
interact(): boolean
`

Performs a raycast from the player's head and interacts with the first intersected block or entity. Returns true if the interaction was successful. Maximum range is 6 blocks.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **interactWithBlock**
`
interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean
`

Causes the simulated player to interact with a block. The block at the specified block location must be solid. Returns true if the interaction was performed.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to interact with.
- **direction**?: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md) = `1`
  
  Direction to place the specified item within.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **interactWithEntity**
`
interactWithEntity(entity: minecraftserver.Entity): boolean
`

Causes the simulated player to interact with a mob. Returns true if the interaction was performed.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Entity to interact with.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **jump**
`
jump(): boolean
`

Causes the simulated player to jump.

**Returns** *boolean* - True if a jump was performed.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **lookAtBlock**
`
lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void
`

Rotates the simulated player's head/body to look at the given block location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **duration**?: [*LookDuration*](LookDuration.md) = `2`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **lookAtEntity**
`
lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void
`

Rotates the simulated player's head/body to look at the given entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
- **duration**?: [*LookDuration*](LookDuration.md) = `2`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **lookAtLocation**
`
lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void
`

Rotates the simulated player's head/body to look at the given location.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **duration**?: [*LookDuration*](LookDuration.md) = `2`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **move**
`
move(westEast: number, northSouth: number, speed?: number): void
`

Orders the simulated player to walk in the given direction relative to the GameTest.

#### **Parameters**
- **westEast**: *number*
- **northSouth**: *number*
- **speed**?: *number* = `1`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **moveRelative**
`
moveRelative(leftRight: number, backwardForward: number, speed?: number): void
`

Orders the simulated player to walk in the given direction relative to the player's current rotation.

#### **Parameters**
- **leftRight**: *number*
- **backwardForward**: *number*
- **speed**?: *number* = `1`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **moveToBlock**
`
moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void
`

Orders the simulated player to move to the given block location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **options**?: [*MoveToOptions*](MoveToOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **moveToLocation**
`
moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void
`

Orders the simulated player to move to the given location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **options**?: [*MoveToOptions*](MoveToOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **navigateToBlock**
`
navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult
`

Orders the simulated player to move to a specific block location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **speed**?: *number* = `1`

**Returns** [*NavigationResult*](NavigationResult.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **navigateToEntity**
`
navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult
`

Will use navigation to follow the selected entity to within a one block radius. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
- **speed**?: *number* = `1`

**Returns** [*NavigationResult*](NavigationResult.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **navigateToLocation**
`
navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult
`

Orders the simulated player to move to a specific location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **speed**?: *number* = `1`

**Returns** [*NavigationResult*](NavigationResult.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **navigateToLocations**
`
navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void
`

Use navigation to follow the route provided via the locations parameter. If a move or navigation is already playing, this will override the last move/navigation. 

#### **Parameters**
- **locations**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)[]
  
  A list of locations to use for routing.
- **speed**?: *number* = `1`
  
  Net speed to use for doing the navigation.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **respawn**
`
respawn(): boolean
`

Respawns the particular simulated player.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **rotateBody**
`
rotateBody(angleInDegrees: number): void
`

Causes the simulated player to turn by the provided angle, relative to the player's current rotation.

#### **Parameters**
- **angleInDegrees**: *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **setBodyRotation**
`
setBodyRotation(angleInDegrees: number): void
`

Causes the simulated player to turn to face the provided angle, relative to the GameTest.

#### **Parameters**
- **angleInDegrees**: *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **setItem**
`
setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean
`

Sets a particular item for the simulated player.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
  Item to set.
- **slot**: *number*
  
  Slot to place the given item in.
- **selectSlot**?: *boolean* = `false`
  
  Whether to set the selected slot once set.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **startBuild**
`
startBuild(slot?: number): void
`

#### **Parameters**
- **slot**?: *number* = `0`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopBreakingBlock**
`
stopBreakingBlock(): void
`

Stops destroying the block that is currently being hit.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopBuild**
`
stopBuild(): void
`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopFlying**
`
stopFlying(): void
`

Causes the simulated player to stop flying.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopGliding**
`
stopGliding(): void
`

Causes the simulated player to stop gliding.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopInteracting**
`
stopInteracting(): void
`

Stops interacting with entities or blocks.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopMoving**
`
stopMoving(): void
`

Stops moving/walking/following if the simulated player is moving.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopSwimming**
`
stopSwimming(): void
`

Causes the simulated player to stop swimming.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **stopUsingItem**
`
stopUsingItem(): minecraftserver.ItemStack | undefined
`

Stops using the currently active item.

**Returns** [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md) | *undefined* - Returns the item that was in use. Undefined if no item was in use.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **swim**
`
swim(): void
`

Causes the simulated player to start swimming.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **useItem**
`
useItem(itemStack: minecraftserver.ItemStack): boolean
`

Causes the simulated player to use an item. Does not consume the item. Returns false if the item is on cooldown.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
  Item to use.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **useItemInSlot**
`
useItemInSlot(slot: number): boolean
`

Causes the simulated player to hold and use an item in their inventory.

#### **Parameters**
- **slot**: *number*
  
  Index of the inventory slot.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **useItemInSlotOnBlock**
`
useItemInSlotOnBlock(slot: number, blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction, faceLocation?: minecraftserver.Vector3): boolean
`

Causes the simulated player to use an item in their inventory on a block. The block at the specified block location must be solid. Returns true if the item was used.

#### **Parameters**
- **slot**: *number*
  
  Index of the slot to use.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to use the item upon.
- **direction**?: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md) = `1`
  
  Direction to place the specified item within.
- **faceLocation**?: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) = `null`
  
  Location relative to the bottom north-west corner of the block where the item is placed.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **useItemOnBlock**
`
useItemOnBlock(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction, faceLocation?: minecraftserver.Vector3): boolean
`

Causes the simulated player to use an item on a block. The block at the specified block location must be solid. Returns true if the item was used.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
  Item to use.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to use the item upon.
- **direction**?: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md) = `1`
  
  Direction to place the specified item within.
- **faceLocation**?: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) = `null`
  
  Location relative to the bottom north-west corner of the block where the item is placed.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end
