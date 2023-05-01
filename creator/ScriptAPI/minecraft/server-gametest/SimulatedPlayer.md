---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
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
- [*@minecraft/server.Player*](../../minecraft/server/Player.md)

A simulated player can be used within GameTests to represent how a player moves throughout the world and to support testing of how entities and the environment will react to a player. This type derives much of its structure and methods from the [*@minecraft/server.Player*](../../minecraft/server/Player.md) type.

## Properties

### **headRotation**
`read-only headRotation: minecraftserver.Vector2;`

Rotation of the head across pitch and yaw angles.

Type: [*@minecraft/server.Vector2*](../../minecraft/server/Vector2.md)

### **isSprinting**
`isSprinting: boolean;`

Type: *boolean*

## Methods
- [attack](#attack)
- [attackEntity](#attackentity)
- [breakBlock](#breakblock)
- [disconnect](#disconnect)
- [giveItem](#giveitem)
- [interact](#interact)
- [interactWithBlock](#interactwithblock)
- [interactWithEntity](#interactwithentity)
- [jump](#jump)
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
- [respawn](#respawn)
- [rotateBody](#rotatebody)
- [setBodyRotation](#setbodyrotation)
- [setGameMode](#setgamemode)
- [setItem](#setitem)
- [stopBreakingBlock](#stopbreakingblock)
- [stopInteracting](#stopinteracting)
- [stopMoving](#stopmoving)
- [stopUsingItem](#stopusingitem)
- [useItem](#useitem)
- [useItemInSlot](#useiteminslot)
- [useItemInSlotOnBlock](#useiteminslotonblock)
- [useItemOnBlock](#useitemonblock)

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
attackEntity(entity: minecraftserver.Entity): boolean
`

Causes the simulated player to attack the provided target. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. The attack can be performed at any distance and does not require line of sight to the target entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

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

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **disconnect**
`
disconnect(): void
`

Simulates and performs a disconnection of the simulated player from the world.

> [!WARNING]
> This function can throw errors.

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

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **interact**
`
interact(): boolean
`

Performs a raycast from the player’s head and interacts with the first intersected block or entity. Returns true if the interaction was successful. Maximum range is 6 blocks.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

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

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **interactWithEntity**
`
interactWithEntity(entity: minecraftserver.Entity): boolean
`

Causes the simulated player to interact with a mob. Returns true if the interaction was performed.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Entity to interact with.

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

### **lookAtBlock**
`
lookAtBlock(blockLocation: minecraftserver.Vector3): void
`

Rotates the simulated player's head/body to look at the given block location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

> [!WARNING]
> This function can throw errors.

### **lookAtEntity**
`
lookAtEntity(entity: minecraftserver.Entity): void
`

Rotates the simulated player's head/body to look at the given entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)

> [!WARNING]
> This function can throw errors.

### **lookAtLocation**
`
lookAtLocation(location: minecraftserver.Vector3): void
`

Rotates the simulated player's head/body to look at the given location.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

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
moveToBlock(blockLocation: minecraftserver.Vector3, speed?: number): void
`

Orders the simulated player to move to the given block location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **speed**?: *number* = `1`

> [!WARNING]
> This function can throw errors.

### **moveToLocation**
`
moveToLocation(location: minecraftserver.Vector3, speed?: number): void
`

Orders the simulated player to move to the given location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **speed**?: *number* = `1`

> [!WARNING]
> This function can throw errors.

### **navigateToBlock**
`
navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): minecraftserver.NavigationResult
`

Orders the simulated player to move to a specific block location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **speed**?: *number* = `1`

#### **Returns** [*@minecraft/server.NavigationResult*](../../minecraft/server/NavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToEntity**
`
navigateToEntity(entity: minecraftserver.Entity, speed?: number): minecraftserver.NavigationResult
`

Will use navigation to follow the selected entity to within a one block radius. If a move or navigation is already playing, this will override the last move/navigation.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
- **speed**?: *number* = `1`

#### **Returns** [*@minecraft/server.NavigationResult*](../../minecraft/server/NavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToLocation**
`
navigateToLocation(location: minecraftserver.Vector3, speed?: number): minecraftserver.NavigationResult
`

Orders the simulated player to move to a specific location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **speed**?: *number* = `1`

#### **Returns** [*@minecraft/server.NavigationResult*](../../minecraft/server/NavigationResult.md)

> [!WARNING]
> This function can throw errors.

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

> [!WARNING]
> This function can throw errors.

### **respawn**
`
respawn(): boolean
`

Respawns the particular simulated player.

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

### **setBodyRotation**
`
setBodyRotation(angleInDegrees: number): void
`

Causes the simulated player to turn to face the provided angle, relative to the GameTest.

#### **Parameters**
- **angleInDegrees**: *number*

> [!WARNING]
> This function can throw errors.

### **setGameMode**
`
setGameMode(gameMode: minecraftserver.GameMode): void
`

Sets the game mode that the simulated player is operating under.

#### **Parameters**
- **gameMode**: [*@minecraft/server.GameMode*](../../minecraft/server/GameMode.md)
  
  Game mode to set.

> [!WARNING]
> This function can throw errors.

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

#### **Returns** *boolean*

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

### **useItem**
`
useItem(itemStack: minecraftserver.ItemStack): boolean
`

Causes the simulated player to use an item. Does not consume the item. Returns false if the item is on cooldown.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
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

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

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

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.
