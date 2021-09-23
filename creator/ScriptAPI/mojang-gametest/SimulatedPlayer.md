---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.SimulatedPlayer Class
description: Contents of the mojang-gametest.SimulatedPlayer class.
---
# SimulatedPlayer Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


A simulated player can be used within GameTests to represent how a player moves throughout the world and to support testing of how entities and the environment will react to a player. This type derives much of its structure and methods from the [*mojang-minecraft.Player*](../mojang-minecraft/Player.md) type.

## Properties
### **bodyRotation**
`read-only bodyRotation: number;`

Rotation of the body in degrees. Range is between -180 and 180 degrees.

Type: *number*


### **headRotation**
`read-only headRotation: mojang-minecraft.ScriptPlayerHeadRotation;`

Rotation of the head across pitch and yaw angles.

Type: [*mojang-minecraft.ScriptPlayerHeadRotation*](../mojang-minecraft/ScriptPlayerHeadRotation.md)


### **id**
`read-only id: string;`

Identifier for the player.

Type: *string*


### **isSneaking**
`isSneaking: boolean;`

True if the player is currently using a sneaking movement.

Type: *boolean*


### **location**
`read-only location: mojang-minecraft.Location;`

Current location of the player.

Type: [*mojang-minecraft.Location*](../mojang-minecraft/Location.md)


### **name**
`read-only name: string;`

Name of the player.

Type: *string*


### **nameTag**
`nameTag: string;`

Optional name tag of the player.

Type: *string*


### **velocity**
`read-only velocity: mojang-minecraft.Location;`

Current speed of the player across X, Y, and Z dimensions.

Type: [*mojang-minecraft.Location*](../mojang-minecraft/Location.md)



## Methods
- [addEffect](#addeffect)
- [attack](#attack)
- [attackEntity](#attackentity)
- [destroyBlock](#destroyblock)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getEffect](#geteffect)
- [hasComponent](#hascomponent)
- [interact](#interact)
- [interactWithBlock](#interactwithblock)
- [interactWithEntity](#interactwithentity)
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
- [rotateBody](#rotatebody)
- [selectSlot](#selectslot)
- [setBodyRotation](#setbodyrotation)
- [stopDestroyingBlock](#stopdestroyingblock)
- [stopInteracting](#stopinteracting)
- [stopMoving](#stopmoving)
- [stopUsingItem](#stopusingitem)
- [triggerEvent](#triggerevent)
- [useItem](#useitem)
- [useItemInSlot](#useiteminslot)
- [useItemInSlotOnBlock](#useiteminslotonblock)
- [useItemOnBlock](#useitemonblock)
  
### **addEffect**
`
addEffect(effectType: mojang-minecraft.EffectType, duration: number, amplifier: number): void
`

Adds an effect, like poison, to the entity.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **effectType** | [*mojang-minecraft.EffectType*](../mojang-minecraft/EffectType.md) | n/a | Type of effect to add to the entity. |
| **duration** | *number* | n/a | Amount of time, in seconds, for the effect to apply. |
| **amplifier** | *number* | n/a | Optional amplification of the effect to apply. |


> [!WARNING]
> This function can throw errors.

### **attack**
`
attack(): boolean
`

Causes the simulated player to make an attack 'swipe'. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. Target selection is performed by raycasting from the player's head.

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **attackEntity**
`
attackEntity(entity: mojang-minecraft.Entity): boolean
`

Causes the simulated player to attack the provided target. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. The attack can be performed at any distance and does not require line of sight to the target entity.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | - |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **destroyBlock**
`
destroyBlock(blockLocation: mojang-minecraft.BlockLocation, direction: number): boolean
`

Destroys the block at blockLocation, respecting the rules of the server player's game mode. The block will be hit until broken, an item is used or stopDestroyBlock is called. Returns true if the block at blockLocation is solid.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to interact with. |
| **direction** | *number* | n/a | Direction to place the specified item within. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **getComponent**
`
getComponent(componentId: string): any
`

Gets a component (that represents additional capabilities) for an entity.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **componentId** | *string* | n/a | The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned. |

Returns *any*


### **getComponents**
`
getComponents(): any[]
`

Returns all components that are both present on this entity and supported by the API.

Returns *any*[]


### **getEffect**
`
getEffect(effectType: mojang-minecraft.EffectType): mojang-minecraft.Effect
`

Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **effectType** | [*mojang-minecraft.EffectType*](../mojang-minecraft/EffectType.md) | n/a | - |

Returns [*mojang-minecraft.Effect*](../mojang-minecraft/Effect.md) - Effect object for the specified effect, or undefined if the effect is not present.

> [!WARNING]
> This function can throw errors.

### **hasComponent**
`
hasComponent(componentId: string): boolean
`

Returns true if the specified component is present on this entity.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **componentId** | *string* | n/a | The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. |

Returns *boolean*


### **interact**
`
interact(): boolean
`

Performs a raycast from the player’s head and interacts with the first intersected block or entity. Returns true if the interaction was successful. Maximum range is 6 blocks.

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **interactWithBlock**
`
interactWithBlock(blockLocation: mojang-minecraft.BlockLocation, direction: number): boolean
`

Causes the simulated player to interact with a block. The block at the specified block location must be solid. Returns true if the interaction was performed.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to interact with. |
| **direction** | *number* | n/a | Direction to place the specified item within. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **interactWithEntity**
`
interactWithEntity(entity: mojang-minecraft.Entity): boolean
`

Causes the simulated player to interact with a mob. Returns true if the interaction was performed.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Entity to interact with. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **jump**
`
jump(): boolean
`

Causes the simulated player to jump.

Returns *boolean* - True if a jump was performed.

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
lookAtBlock(blockLocation: mojang-minecraft.BlockLocation): void
`

Rotates the simulated player's head/body to look at the given block location.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **lookAtEntity**
`
lookAtEntity(entity: mojang-minecraft.Entity): void
`

Rotates the simulated player's head/body to look at the given entity.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **lookAtLocation**
`
lookAtLocation(location: mojang-minecraft.Location): void
`

Rotates the simulated player's head/body to look at the given location.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **move**
`
move(westEast: number, northSouth: number, speed: number): void
`

Orders the simulated player to walk in the given direction relative to the GameTest.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **westEast** | *number* | n/a | - |
| **northSouth** | *number* | n/a | - |
| **speed** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **moveRelative**
`
moveRelative(leftRight: number, backwardForward: number, speed: number): void
`

Orders the simulated player to walk in the given direction relative to the player's current rotation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **leftRight** | *number* | n/a | - |
| **backwardForward** | *number* | n/a | - |
| **speed** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **moveToBlock**
`
moveToBlock(blockLocation: mojang-minecraft.BlockLocation, speed: number): void
`

Orders the simulated player to move to the given block location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **speed** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **moveToLocation**
`
moveToLocation(location: mojang-minecraft.Location, speed: number): void
`

Orders the simulated player to move to the given location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |
| **speed** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **navigateToBlock**
`
navigateToBlock(blockLocation: mojang-minecraft.BlockLocation, speed: number): mojang-minecraft.ScriptNavigationResult
`

Orders the simulated player to move to a specific block location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **speed** | *number* | n/a | - |

Returns [*mojang-minecraft.ScriptNavigationResult*](../mojang-minecraft/ScriptNavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToEntity**
`
navigateToEntity(entity: mojang-minecraft.Entity, speed: number): mojang-minecraft.ScriptNavigationResult
`

Will use navigation to follow the selected entity to within a one block radius. If a move or navigation is already playing, this will override the last move/navigation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | - |
| **speed** | *number* | n/a | - |

Returns [*mojang-minecraft.ScriptNavigationResult*](../mojang-minecraft/ScriptNavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToLocation**
`
navigateToLocation(location: mojang-minecraft.Location, speed: number): mojang-minecraft.ScriptNavigationResult
`

Orders the simulated player to move to a specific location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |
| **speed** | *number* | n/a | - |

Returns [*mojang-minecraft.ScriptNavigationResult*](../mojang-minecraft/ScriptNavigationResult.md)

> [!WARNING]
> This function can throw errors.

### **navigateToLocations**
`
navigateToLocations(locations: mojang-minecraft.Location[], speed: number): void
`

Use navigation to follow the route provided via the locations parameter. If a move or navigation is already playing, this will override the last move/navigation. 
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **locations** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md)[] | n/a | A list of locations to use for routing. |
| **speed** | *number* | n/a | Net speed to use for doing the navigation. |


> [!WARNING]
> This function can throw errors.

### **rotateBody**
`
rotateBody(angleInDegrees: number): void
`

Causes the simulated player to turn by the provided angle, relative to the player's current rotation.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **angleInDegrees** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **selectSlot**
`
selectSlot(slot: number): void
`

Selects the provided slot in the player's hotbar.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **slot** | *number* | n/a | Index of the hotbar slot, ranging from 0 through 8. |


> [!WARNING]
> This function can throw errors.

### **setBodyRotation**
`
setBodyRotation(angleInDegrees: number): void
`

Causes the simulated player to turn to face the provided angle, relative to the GameTest.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **angleInDegrees** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **stopDestroyingBlock**
`
stopDestroyingBlock(): void
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

### **triggerEvent**
`
triggerEvent(eventName: string): void
`

Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **eventName** | *string* | n/a | Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed. |


> [!WARNING]
> This function can throw errors.

### **useItem**
`
useItem(itemStack: mojang-minecraft.ItemStack): boolean
`

Causes the simulated player to use an item. Does not consume the item. Returns false if the item is on cooldown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md) | n/a | Item to use. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **useItemInSlot**
`
useItemInSlot(slot: number): boolean
`

Causes the simulated player to hold and use an item in their inventory.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **slot** | *number* | n/a | Index of the inventory slot. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **useItemInSlotOnBlock**
`
useItemInSlotOnBlock(slot: number, blockLocation: mojang-minecraft.BlockLocation, direction: number, faceLocationX: number, faceLocationY: number): boolean
`

Causes the simulated player to use an item in their inventory on a block. The block at the specified block location must be solid. Returns true if the item was used.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **slot** | *number* | n/a | Index of the slot to use. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to use the item upon. |
| **direction** | *number* | n/a | Direction to place the specified item within. |
| **faceLocationX** | *number* | n/a | Block-face-relative X position where to place the item. |
| **faceLocationY** | *number* | n/a | Block-face-relative Y position where to place the item. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **useItemOnBlock**
`
useItemOnBlock(itemStack: mojang-minecraft.ItemStack, blockLocation: mojang-minecraft.BlockLocation, direction: number, faceLocationX: number, faceLocationY: number): boolean
`

Causes the simulated player to use an item on a block. The block at the specified block location must be solid. Returns true if the item was used.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md) | n/a | Item to use. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to use the item upon. |
| **direction** | *number* | n/a | Direction to place the specified item within. |
| **faceLocationX** | *number* | n/a | Block-face-relative X position where to place the item. |
| **faceLocationY** | *number* | n/a | Block-face-relative Y position where to place the item. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.


