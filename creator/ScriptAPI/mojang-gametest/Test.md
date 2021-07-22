---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.Test Class
description: Contents of the mojang-gametest.Test class.
---
# Test Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.



## Methods
- [assert](#assert)
- [assertBlockPresent](#assertblockpresent)
- [assertBlockState](#assertblockstate)
- [assertCanReachLocation](#assertcanreachlocation)
- [assertContainerContains](#assertcontainercontains)
- [assertContainerEmpty](#assertcontainerempty)
- [assertEntityHasArmor](#assertentityhasarmor)
- [assertEntityHasComponent](#assertentityhascomponent)
- [assertEntityInstancePresent](#assertentityinstancepresent)
- [assertEntityPresent](#assertentitypresent)
- [assertEntityPresentInArea](#assertentitypresentinarea)
- [assertEntityState](#assertentitystate)
- [assertEntityTouching](#assertentitytouching)
- [assertIsWaterlogged](#assertiswaterlogged)
- [assertItemEntityCountIs](#assertitementitycountis)
- [assertItemEntityPresent](#assertitementitypresent)
- [assertRedstonePower](#assertredstonepower)
- [fail](#fail)
- [failIf](#failif)
- [getBlock](#getblock)
- [getFenceConnectivity](#getfenceconnectivity)
- [getTestDirection](#gettestdirection)
- [killAllEntities](#killallentities)
- [pressButton](#pressbutton)
- [print](#print)
- [pullLever](#pulllever)
- [pulseRedstone](#pulseredstone)
- [relativeBlockLocation](#relativeblocklocation)
- [relativeLocation](#relativelocation)
- [rotateDirection](#rotatedirection)
- [runAfterDelay](#runafterdelay)
- [runAtTickTime](#runatticktime)
- [setBlockPermutation](#setblockpermutation)
- [setBlockType](#setblocktype)
- [setTntFuse](#settntfuse)
- [spawn](#spawn)
- [spawnAtLocation](#spawnatlocation)
- [spawnItem](#spawnitem)
- [spawnWithoutBehaviors](#spawnwithoutbehaviors)
- [spawnWithoutBehaviorsAtLocation](#spawnwithoutbehaviorsatlocation)
- [spreadFromFaceTowardDirection](#spreadfromfacetowarddirection)
- [startSequence](#startsequence)
- [succeed](#succeed)
- [succeedIf](#succeedif)
- [succeedOnTick](#succeedontick)
- [succeedOnTickWhen](#succeedontickwhen)
- [succeedWhen](#succeedwhen)
- [succeedWhenBlockTypePresent](#succeedwhenblocktypepresent)
- [succeedWhenEntityHasComponent](#succeedwhenentityhascomponent)
- [succeedWhenEntityPresent](#succeedwhenentitypresent)
- [walkTo](#walkto)
- [walkToLocation](#walktolocation)
- [worldBlockLocation](#worldblocklocation)
- [worldLocation](#worldlocation)
  
### **assert**
`
assert(condition: boolean, message: string): void
`

Tests that the condition specified in _condition_ is true. If not, an error with the specified _message_ is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **condition** | *boolean* | n/a | Expression of the condition to evaluate. |
| **message** | *string* | n/a | Message that is passed if the _condition_ does not evaluate to true. |


> [!WARNING]
> This function can throw errors.

### **assertBlockPresent**
`
assertBlockPresent(blockType: mojang-minecraft.BlockType, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **isPresent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertBlockState**
`
assertBlockState(blockLocation: mojang-minecraft.BlockLocation, callback: (arg: mojang-minecraft.Block) => boolean): void
`

Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **callback** | (arg: mojang-minecraft.Block) => boolean | n/a | - |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***testIfButtonNotPressed.js***
```javascript
test.assertBlockState("button_pressed_bit", 0, buttonPos);

```
### **assertCanReachLocation**
`
assertCanReachLocation(mob: mojang-minecraft.Entity, blockLocation: mojang-minecraft.BlockLocation, canReach: boolean): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **mob** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **canReach** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertContainerContains**
`
assertContainerContains(itemStack: mojang-minecraft.ItemStack, blockLocation: mojang-minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md) | n/a | Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertContainerEmpty**
`
assertContainerEmpty(blockLocation: mojang-minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertEntityHasArmor**
`
assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojang-minecraft.BlockLocation, hasArmor: boolean): void
`

Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **armorSlot** | *number* | n/a | Container slot index to test. |
| **armorName** | *string* | n/a | Name of the armor to look for. |
| **armorData** | *number* | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **hasArmor** | *boolean* | n/a | Whether or not the entity is expected to have the specified armor equipped. |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***horseArmorTest.js***
```javascript
test.assertEntityHasArmor("minecraft:horse", armorSlotTorso, "diamond_horse_armor", 0, horseLocation, true);

```
### **assertEntityHasComponent**
`
assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, hasComponent: boolean): void
`

Tests that an entity has a particular component. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **componentIdentifier** | *string* | n/a | Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **hasComponent** | *boolean* | n/a | Determines whether to test that the component exists, or does not. |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***sheepShearedTest.js***
```javascript
test.assertEntityHasComponent("minecraft:sheep", "minecraft:is_sheared", entityLoc, false);

```
### **assertEntityInstancePresent**
`
assertEntityInstancePresent(entity: mojang-minecraft.Entity, blockLocation: mojang-minecraft.BlockLocation): void
`

Tests that a particular entity is still present and alive within the GameTest area. If not, an error is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Specific entity to test for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertEntityPresent**
`
assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Tests that an entity of a specified type is present at a particular location. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **isPresent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertEntityPresentInArea**
`
assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean): void
`

Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **isPresent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertEntityState**
`
assertEntityState(blockLocation: mojang-minecraft.BlockLocation, entityTypeIdentifier: string, callback: (arg: mojang-minecraft.Entity) => boolean): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **entityTypeIdentifier** | *string* | n/a | - |
| **callback** | (arg: mojang-minecraft.Entity) => boolean | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertEntityTouching**
`
assertEntityTouching(entityTypeIdentifier: string, location: mojang-minecraft.Location, isTouching: boolean): void
`

Tests that an entity of a specified type is touching or connected to another entity. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |
| **isTouching** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertIsWaterlogged**
`
assertIsWaterlogged(blockLocation: mojang-minecraft.BlockLocation, isWaterlogged: boolean): void
`

Tests that a block at a location contains water in addition to another block type. If not, an error is thrown. Water blocks are not considered to be waterlogged.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **isWaterlogged** | *boolean* | n/a | Whether not not the block at _position_ is expected to be waterlogged. |


> [!WARNING]
> This function can throw errors.

### **assertItemEntityCountIs**
`
assertItemEntityCountIs(itemType: mojang-minecraft.ItemType, blockLocation: mojang-minecraft.BlockLocation, searchDistance: number, count: number): void
`

Tests that items of a particular type and count are present within an area. If not, an error is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*mojang-minecraft.ItemType*](../mojang-minecraft/ItemType.md) | n/a | Type of item to look for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **searchDistance** | *number* | n/a | Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_. |
| **count** | *number* | n/a | Number of items, at minimum, to look and test for. |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***findFeathers.js***
```javascript
test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1);

```
### **assertItemEntityPresent**
`
assertItemEntityPresent(itemType: mojang-minecraft.ItemType, blockLocation: mojang-minecraft.BlockLocation, searchDistance: number, isPresent: boolean): void
`

Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*mojang-minecraft.ItemType*](../mojang-minecraft/ItemType.md) | n/a | Type of item to test for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **searchDistance** | *number* | n/a | Radius in blocks to look for the item entity. |
| **isPresent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **assertRedstonePower**
`
assertRedstonePower(blockLocation: mojang-minecraft.BlockLocation, power: number): void
`

Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **power** | *number* | n/a | Expected power level. |


> [!WARNING]
> This function can throw errors.

### **fail**
`
fail(errorMessage: string): void
`

Marks the current test as a failure case.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **errorMessage** | *string* | n/a | Error message summarizing the failure condition. |


> [!WARNING]
> This function can throw errors.

### **failIf**
`
failIf(callback: () => undefined): void
`

Runs the given callback. If the callback does not throw an exception, the test is marked as a failure.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | () => undefined | n/a | Callback function that runs. If the function runs successfully, the test is marked as a failure. Typically, this function will have .assertXyz method calls within it. |


> [!WARNING]
> This function can throw errors.

### **getBlock**
`
getBlock(blockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.Block
`

Gets a block at the specified block location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |

Returns [*mojang-minecraft.Block*](../mojang-minecraft/Block.md)

> [!WARNING]
> This function can throw errors.

### **getFenceConnectivity**
`
getFenceConnectivity(blockLocation: mojang-minecraft.BlockLocation): FenceConnectivity
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |

Returns [*FenceConnectivity*](FenceConnectivity.md)

> [!WARNING]
> This function can throw errors.

### **getTestDirection**
`
getTestDirection(): number
`


Returns *number*


### **killAllEntities**
`
killAllEntities(): void
`

Kills all entities within the GameTest structure.


> [!WARNING]
> This function can throw errors.

### **pressButton**
`
pressButton(blockLocation: mojang-minecraft.BlockLocation): void
`

Presses a button at a block location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> Will throw an error if a button is not present at the specified position.

### **print**
`
print(text: string): void
`

Displays the specified message to all players.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **text** | *string* | n/a | Message to display. |


> [!WARNING]
> This function can throw errors.

### **pullLever**
`
pullLever(blockLocation: mojang-minecraft.BlockLocation): void
`

Pulls a lever at a block location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> Will throw an error if a lever is not present at the specified position.

### **pulseRedstone**
`
pulseRedstone(blockLocation: mojang-minecraft.BlockLocation, duration: number): void
`

Sends a Redstone pulse at a particular location by creating a temporary Redstone block.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **duration** | *number* | n/a | Number of ticks to pulse Redstone. |


> [!WARNING]
> This function can throw errors.

### **relativeBlockLocation**
`
relativeBlockLocation(worldBlockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.BlockLocation
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **worldBlockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |

Returns [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md)

> [!WARNING]
> This function can throw errors.

### **relativeLocation**
`
relativeLocation(worldLocation: mojang-minecraft.Location): mojang-minecraft.Location
`

From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **worldLocation** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Absolute location in the world to convert to a relative location. |

Returns [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) - A location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.

### **rotateDirection**
`
rotateDirection(direction: number): number
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **direction** | *number* | n/a | - |

Returns *number*

> [!WARNING]
> This function can throw errors.

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => undefined): void
`

Runs a specific callback after a specified delay of ticks
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **delayTicks** | *number* | n/a | Number of ticks to delay before running the specified callback. |
| **callback** | () => undefined | n/a | Callback function to execute. |


> [!WARNING]
> This function can throw errors.

### **runAtTickTime**
`
runAtTickTime(tick: number, callback: () => undefined): void
`

Runs the given callback after a delay of _tick_ ticks from the start of the GameTest.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **tick** | *number* | n/a | Tick (after the start of the GameTest) to run the callback at. |
| **callback** | () => undefined | n/a | Callback function to execute. |


> [!WARNING]
> This function can throw errors.

### **setBlockPermutation**
`
setBlockPermutation(blockData: mojang-minecraft.BlockPermutation, blockLocation: mojang-minecraft.BlockLocation): void
`

Sets a block to a particular configuration (a BlockPermutation) at the specified block location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockData** | [*mojang-minecraft.BlockPermutation*](../mojang-minecraft/BlockPermutation.md) | n/a | Permutation that contains the configuration data for a block. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **setBlockType**
`
setBlockType(blockType: mojang-minecraft.BlockType, blockLocation: mojang-minecraft.BlockLocation): void
`

Sets a block to a particular type at the specified block location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **setTntFuse**
`
setTntFuse(entity: mojang-minecraft.Entity, fuseLength: number): void
`

Sets the fuse of an explodable entity.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | - |
| **fuseLength** | *number* | n/a | Length of time, in ticks, before the entity explodes. |


> [!WARNING]
> This function can throw errors.

### **spawn**
`
spawn(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.Entity
`

Spawns an entity at a location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) - The spawned entity. If the entity cannot be spawned, returns undefined.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spawnAdultPig.js***
```javascript
test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new BlockLocation(1, 2, 1));

```
### **spawnAtLocation**
`
spawnAtLocation(entityTypeIdentifier: string, location: mojang-minecraft.Location): mojang-minecraft.Entity
`

Spawns an entity at a location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location where the entity should be spawned. |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) - The spawned entity. If the entity cannot be spawned, returns undefined.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spawnAdultPig.js***
```javascript
test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new Location(1.5, 2, 1.5));
```
### **spawnItem**
`
spawnItem(itemStack: mojang-minecraft.ItemStack, location: mojang-minecraft.Location): mojang-minecraft.Entity
`

Spawns an item entity at a specified location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md) | n/a | ItemStack that describes the item entity to create. |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spawnEmeralds.js***
```javascript
const oneEmerald = new ItemStack(Items.emerald, 1, 0);
const fiveEmeralds = new ItemStack(Items.emerald, 5, 0);

test.spawnItem(oneEmerald, new Location(3.5, 3, 1.5));
test.spawnItem(fiveEmeralds, new Location(1.5, 3, 1.5));

```
### **spawnWithoutBehaviors**
`
spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.Entity
`

Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **spawnWithoutBehaviorsAtLocation**
`
spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojang-minecraft.Location): mojang-minecraft.Entity
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **spreadFromFaceTowardDirection**
`
spreadFromFaceTowardDirection(blockLocation: mojang-minecraft.BlockLocation, fromFace: number, direction: number): void
`

Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **fromFace** | *number* | n/a | Face to spread from. This face must already be set. |
| **direction** | *number* | n/a | Direction to spread. Use the Minecraft.Direction enum to specify a direction. |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spreadFromFaceTowardDirection.js***
```javascript
test.spreadFromFaceTowardDirection(new BlockLocation(1, 2, 1), Direction.south, Direction.down);
```
### **startSequence**
`
startSequence(): GameTestSequence
`

Creates a new GameTestSequence - A set of steps that play out sequentially within a GameTest.

Returns [*GameTestSequence*](GameTestSequence.md) - A new GameTestSequence with chaining methods that facilitate creating a set of steps.


### **succeed**
`
succeed(): void
`

Marks the current test as a success case.


> [!WARNING]
> This function can throw errors.

### **succeedIf**
`
succeedIf(callback: () => undefined): void
`

Runs the given callback. If the callback does not throw an exception, the test is marked as a success.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | () => undefined | n/a | Callback function that runs. If the function runs successfully, the test is marked as a success. Typically, this function will have .assertXyz method calls within it. |


> [!WARNING]
> This function can throw errors.

### **succeedOnTick**
`
succeedOnTick(tick: number): void
`

Marks the test as a success at the specified tick.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **tick** | *number* | n/a | Tick after the start of the GameTest to mark the test as successful. |


> [!WARNING]
> This function can throw errors.

### **succeedOnTickWhen**
`
succeedOnTickWhen(tick: number, callback: () => undefined): void
`

Runs the given callback at _tick_ ticks after the start of the test. If the callback does not throw an exception, the test is marked as a failure.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **tick** | *number* | n/a | Tick after the start of the GameTest to run the testing callback at. |
| **callback** | () => undefined | n/a | Callback function that runs. If the function runs successfully, the test is marked as a success. |


> [!WARNING]
> This function can throw errors.

### **succeedWhen**
`
succeedWhen(callback: () => undefined): void
`

Runs the given callback every tick. When the callback successfully executes, the test is marked as a success. Specifically, the test will succeed when the callback does not throw an exception.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | () => undefined | n/a | Testing callback function that runs. If the function runs successfully, the test is marked as a success. |


> [!WARNING]
> This function can throw errors.

### **succeedWhenBlockTypePresent**
`
succeedWhenBlockTypePresent(blockType: mojang-minecraft.BlockType, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Tests for the presence of a block of a particular type on every tick. When the specified block of a type is found, the test is marked as a success.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **isPresent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, hasComponent: boolean): void
`

Tests for the presence of a component on every tick. When the specified component is found, the test is marked as a success.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **componentIdentifier** | *string* | n/a | Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **hasComponent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Tests for the presence of an entity on every tick. When an entity of the specified type is found, the test is marked as a success.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **isPresent** | *boolean* | n/a | - |


> [!WARNING]
> This function can throw errors.

### **walkTo**
`
walkTo(mob: mojang-minecraft.Entity, blockLocation: mojang-minecraft.BlockLocation, speedModifier: number): void
`

Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **mob** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Mob entity to give orders to. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |
| **speedModifier** | *number* | n/a | Adjustable modifier to the mob's walking speed. |


> [!WARNING]
> This function can throw errors.

### **walkToLocation**
`
walkToLocation(mob: mojang-minecraft.Entity, location: mojang-minecraft.Location, speedModifier: number): void
`

Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **mob** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Mob entity to give orders to. |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location where the entity should be walk to. |
| **speedModifier** | *number* | n/a | Adjustable modifier to the mob's walking speed. |


> [!WARNING]
> This function can throw errors.

### **worldBlockLocation**
`
worldBlockLocation(relativeBlockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.BlockLocation
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **relativeBlockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | - |

Returns [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md)

> [!WARNING]
> This function can throw errors.

### **worldLocation**
`
worldLocation(relativeLocation: mojang-minecraft.Location): mojang-minecraft.Location
`

From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **relativeLocation** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location relative to the GameTest command block. |

Returns [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) - An absolute location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.


