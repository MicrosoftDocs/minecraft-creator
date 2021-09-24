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
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Main class for GameTest functions, with helpers and data for manipulating the respective test. Note that all methods of this class expect BlockLocations and Locations relative to the GameTest structure block.


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
- [removeSimulatedPlayer](#removesimulatedplayer)
- [rotateDirection](#rotatedirection)
- [runAfterDelay](#runafterdelay)
- [runAtTickTime](#runatticktime)
- [setBlockPermutation](#setblockpermutation)
- [setBlockType](#setblocktype)
- [setFluidContainer](#setfluidcontainer)
- [setTntFuse](#settntfuse)
- [spawn](#spawn)
- [spawnAtLocation](#spawnatlocation)
- [spawnItem](#spawnitem)
- [spawnSimulatedPlayer](#spawnsimulatedplayer)
- [spawnWithoutBehaviors](#spawnwithoutbehaviors)
- [spawnWithoutBehaviorsAtLocation](#spawnwithoutbehaviorsatlocation)
- [spreadFromFaceTowardDirection](#spreadfromfacetowarddirection)
- [startSequence](#startsequence)
- [succeed](#succeed)
- [succeedIf](#succeedif)
- [succeedOnTick](#succeedontick)
- [succeedOnTickWhen](#succeedontickwhen)
- [succeedWhen](#succeedwhen)
- [succeedWhenBlockPresent](#succeedwhenblockpresent)
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **condition** | *boolean* | n/a | Expression of the condition to evaluate. |
| **message** | *string* | n/a | Message that is passed if the _condition_ does not evaluate to true. |


> [!WARNING]
> This function can throw errors.

### **assertBlockPresent**
`
assertBlockPresent(blockType: mojang-minecraft.BlockType, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Tests that a block of the specified type is present at the specified location. If it is not, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) | n/a | Expected block type. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to test at. |
| **isPresent** | *boolean* | n/a | If true, this function tests whether a block of the specified type is at the location. If false, tests that a block of the specified type is not present. |


> [!WARNING]
> This function can throw errors.

### **assertBlockState**
`
assertBlockState(blockLocation: mojang-minecraft.BlockLocation, callback: (arg: mojang-minecraft.Block) => boolean): void
`

Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to test at. |
| **callback** | (arg: mojang-minecraft.Block) => boolean | n/a | Callback function that contains additional tests based on the block at the specified location. |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***testIfButtonNotPressed.js***
```javascript
test.assertBlockState(buttonPos, (block) => {
return block.getBlockData().getProperty("button_pressed_bit") == 0;
});
```
### **assertCanReachLocation**
`
assertCanReachLocation(mob: mojang-minecraft.Entity, blockLocation: mojang-minecraft.BlockLocation, canReach: boolean): void
`

Tests that an entity can reach a particular location. Depending on the value of canReach, throws an exception if the condition is not met.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **mob** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Entity that you wish to test the location against. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Structure-relative location to test whether the specified mob can reach. |
| **canReach** | *boolean* | n/a | If true, tests whether the mob can reach the location. If false, tests whether the mob is not able to reach the location. |


> [!WARNING]
> This function can throw errors.

### **assertContainerContains**
`
assertContainerContains(itemStack: mojang-minecraft.ItemStack, blockLocation: mojang-minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md) | n/a | Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block with a container (for example, a chest) to test the contents of. |


> [!WARNING]
> This function can throw errors.

### **assertContainerEmpty**
`
assertContainerEmpty(blockLocation: mojang-minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block with a container (for example, a chest) to test is empty of contents. |


> [!WARNING]
> This function can throw errors.

### **assertEntityHasArmor**
`
assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojang-minecraft.BlockLocation, hasArmor: boolean): void
`

Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Identifier of the entity to match (e.g., 'minecraft:skeleton'). |
| **armorSlot** | *number* | n/a | Container slot index to test. |
| **armorName** | *string* | n/a | Name of the armor to look for. |
| **armorData** | *number* | n/a | Data value integer to look for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the entity with armor to test for. |
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Identifier of the specified entity (e.g., 'minecraft:skeleton'). If the namespace is not specified, 'minecraft:' is assumed. |
| **componentIdentifier** | *string* | n/a | Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block with a container (for example, a chest.) |
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
assertEntityInstancePresent(entity: mojang-minecraft.Entity, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Depending on the value for isPresent, tests that a particular entity is present or not present at the specified location. Depending on the value of isPresent, if the entity is found or not found, an error is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Specific entity to test for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the entity to test for. |
| **isPresent** | *boolean* | n/a | Whether to test that an entity is present or not present at the specified location. |


> [!WARNING]
> This function can throw errors.

### **assertEntityPresent**
`
assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Depending on the value of isPresent, tests for the presence or non-presence of entity of a specified type at a particular location. If the condition is not met, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the entity to test for. |
| **isPresent** | *boolean* | n/a | If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present. |


> [!WARNING]
> This function can throw errors.

### **assertEntityPresentInArea**
`
assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean): void
`

Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **isPresent** | *boolean* | n/a | If true, this function tests whether an entity of the specified type is present in the GameTest area. If false, tests that an entity of the specified type is not present. |


> [!WARNING]
> This function can throw errors.

### **assertEntityState**
`
assertEntityState(blockLocation: mojang-minecraft.BlockLocation, entityTypeIdentifier: string, callback: (arg: mojang-minecraft.Entity) => boolean): void
`

Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data. If not, an error is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the entity to look for. |
| **entityTypeIdentifier** | *string* | n/a | Identifier of the entity (e.g., 'minecraft:skeleton') to look for. Note if no namespace is specified, 'minecraft:' is assumed. |
| **callback** | (arg: mojang-minecraft.Entity) => boolean | n/a | Callback function where facets of the selected entity can be tested for. If this callback function returns false or no entity with the specified identifier is found, an exception is thrown. |


> [!WARNING]
> This function can throw errors.

#### Examples
##### ***villagerEffectTest.js***
```javascript
test.assertEntityState(
villagerPos,
"minecraft:villager_v2",
(entity) => entity.getEffect(MinecraftEffectTypes.regeneration).duration > 120
); // At least 6 seconds remaining in the villagers' effect
```
### **assertEntityTouching**
`
assertEntityTouching(entityTypeIdentifier: string, location: mojang-minecraft.Location, isTouching: boolean): void
`

Depending on the value of isTouching, tests that an entity of a specified type is touching or connected to another entity. If the condition is not met, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location of the entity to test for. |
| **isTouching** | *boolean* | n/a | If true, this function tests whether the entity is touching the specified location. If false, tests that an entity is not testing the specified location. |


> [!WARNING]
> This function can throw errors.

### **assertIsWaterlogged**
`
assertIsWaterlogged(blockLocation: mojang-minecraft.BlockLocation, isWaterlogged: boolean): void
`

Depending on the value of isWaterlogged, tests that a block at a location contains water. If the condition is not met, an error is thrown. Pure water blocks are not considered to be waterlogged.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to test for. |
| **isWaterlogged** | *boolean* | n/a | Whether to test that the block at _position_ is expected to be waterlogged. |


> [!WARNING]
> This function can throw errors.

### **assertItemEntityCountIs**
`
assertItemEntityCountIs(itemType: mojang-minecraft.ItemType, blockLocation: mojang-minecraft.BlockLocation, searchDistance: number, count: number): void
`

Tests that items of a particular type and count are present within an area. If not, an error is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*mojang-minecraft.ItemType*](../mojang-minecraft/ItemType.md) | n/a | Type of item to look for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to search around for the specified set of items. |
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

Depending on the value of isPresent, tests whether a particular item entity is present or not at a particular location. If the condition is not met, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*mojang-minecraft.ItemType*](../mojang-minecraft/ItemType.md) | n/a | Type of item to test for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the item entity to test for. |
| **searchDistance** | *number* | n/a | Radius in blocks to look for the item entity. |
| **isPresent** | *boolean* | n/a | If true, this function tests whether an item entity of the specified type is present. If false, tests that an item entity of the specified type is not present. |


> [!WARNING]
> This function can throw errors.

### **assertRedstonePower**
`
assertRedstonePower(blockLocation: mojang-minecraft.BlockLocation, power: number): void
`

Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to test. |
| **power** | *number* | n/a | Expected power level. |


> [!WARNING]
> This function can throw errors.

### **fail**
`
fail(errorMessage: string): void
`

Marks the current test as a failure case.
#### Arguments
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to retrieve. |

Returns [*mojang-minecraft.Block*](../mojang-minecraft/Block.md)

> [!WARNING]
> This function can throw errors.

### **getFenceConnectivity**
`
getFenceConnectivity(blockLocation: mojang-minecraft.BlockLocation): FenceConnectivity
`

If the block at the specified block location is a fence, this returns a helper object with details on how a fence is connected.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to retrieve. |

Returns [*FenceConnectivity*](FenceConnectivity.md)

> [!WARNING]
> This function can throw errors.

### **getTestDirection**
`
getTestDirection(): number
`

Returns the direction of the current test - see the [*mojang-minecraft.Direction*](../mojang-minecraft/Direction.md) enum for more information on potential values (north, east, south, west - values 2-5).

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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to push the button at. |


> [!WARNING]
> Will throw an error if a button is not present at the specified position.

### **print**
`
print(text: string): void
`

Displays the specified message to all players.
#### Arguments
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to pull the lever at. |


> [!WARNING]
> Will throw an error if a lever is not present at the specified position.

### **pulseRedstone**
`
pulseRedstone(blockLocation: mojang-minecraft.BlockLocation, duration: number): void
`

Sends a Redstone pulse at a particular location by creating a temporary Redstone block.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location to pulse Redstone at. |
| **duration** | *number* | n/a | Number of ticks to pulse Redstone. |


> [!WARNING]
> This function can throw errors.

### **relativeBlockLocation**
`
relativeBlockLocation(worldBlockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.BlockLocation
`

From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **worldBlockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Absolute location in the world to convert to a relative location. |

Returns [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) - A location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.

### **relativeLocation**
`
relativeLocation(worldLocation: mojang-minecraft.Location): mojang-minecraft.Location
`

From a location, returns a new location with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **worldLocation** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Absolute location in the world to convert to a relative location. |

Returns [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) - A location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.

### **removeSimulatedPlayer**
`
removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void
`

Removes a simulated player from the world.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **simulatedPlayer** | [*SimulatedPlayer*](SimulatedPlayer.md) | n/a | Simulated player to remove. |



### **rotateDirection**
`
rotateDirection(direction: number): number
`

Returns a relative direction given the current rotation of the current test. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **direction** | *number* | n/a | Direction to translate into a direction relative to the GameTest facing. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on. |

Returns *number*

> [!WARNING]
> This function can throw errors.

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => undefined): void
`

Runs a specific callback after a specified delay of ticks
#### Arguments
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockData** | [*mojang-minecraft.BlockPermutation*](../mojang-minecraft/BlockPermutation.md) | n/a | Permutation that contains the configuration data for a block. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to set. |


> [!WARNING]
> This function can throw errors.

### **setBlockType**
`
setBlockType(blockType: mojang-minecraft.BlockType, blockLocation: mojang-minecraft.BlockLocation): void
`

Sets a block to a particular type at the specified block location.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) | n/a | Type of block to set. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to set. |


> [!WARNING]
> This function can throw errors.

### **setFluidContainer**
`
setFluidContainer(location: mojang-minecraft.BlockLocation, type: number): void
`

For blocks that are fluid containers - like a cauldron - changes the type of fluid within that container.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **location** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the fluid container block. |
| **type** | *number* | n/a | Type of fluid to set. See [*mojang-gametest*](../mojang-gametest/mojang-gametest.md).FluidType for a list of values. |


> [!WARNING]
> This function can throw errors.

### **setTntFuse**
`
setTntFuse(entity: mojang-minecraft.Entity, fuseLength: number): void
`

Sets the fuse of an explodable entity.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entity** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Entity that is explodable. |
| **fuseLength** | *number* | n/a | Length of time, in ticks, before the entity explodes. |


> [!WARNING]
> This function can throw errors.

### **spawn**
`
spawn(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.Entity
`

Spawns an entity at a location.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>). |
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>). |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | - |

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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md) | n/a | ItemStack that describes the item entity to create. |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location to create the item entity at. |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spawnEmeralds.js***
```javascript
const oneEmerald = new ItemStack(MinecraftItemTypes.emerald, 1, 0);
const fiveEmeralds = new ItemStack(MinecraftItemTypes.emerald, 5, 0);
test.spawnItem(oneEmerald, new Location(3.5, 3, 1.5));
test.spawnItem(fiveEmeralds, new Location(1.5, 3, 1.5));
```
### **spawnSimulatedPlayer**
`
spawnSimulatedPlayer(blockLocation: mojang-minecraft.BlockLocation, name: string): SimulatedPlayer
`

Creates a new simulated player within the world.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location where to spawn the simulated player. |
| **name** | *string* | n/a | Name to give the new simulated player. |

Returns [*SimulatedPlayer*](SimulatedPlayer.md)

> [!WARNING]
> This function can throw errors.

### **spawnWithoutBehaviors**
`
spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation): mojang-minecraft.Entity
`

Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location where the entity should be spawned. |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **spawnWithoutBehaviorsAtLocation**
`
spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojang-minecraft.Location): mojang-minecraft.Entity
`

Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | - |
| **location** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location where the entity should be spawned. |

Returns [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

### **spreadFromFaceTowardDirection**
`
spreadFromFaceTowardDirection(blockLocation: mojang-minecraft.BlockLocation, fromFace: number, direction: number): void
`

Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | BlockLocation containing a multiface block. |
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
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
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
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **callback** | () => undefined | n/a | Testing callback function that runs. If the function runs successfully, the test is marked as a success. |


> [!WARNING]
> This function can throw errors.

### **succeedWhenBlockPresent**
`
succeedWhenBlockPresent(blockType: mojang-minecraft.BlockType, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Depending on the condition of isPresent, tests for the presence of a block of a particular type on every tick. When the specified block of a type is found or not found (depending on isPresent), the test is marked as a success.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **blockType** | [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) | n/a | Type of block to test for. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the block to test at. |
| **isPresent** | *boolean* | n/a | If true, this function tests whether a block of the specified type is present. If false, tests that a block of the specified type is not present. |


> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, hasComponent: boolean): void
`

Tests for the presence of a component on every tick. Depending on the value of hasComponent, when the specified component is found, the test is marked as a success.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to look for. If no namespace is specified, 'minecraft:' is assumed. |
| **componentIdentifier** | *string* | n/a | Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Block location of the entity to test. |
| **hasComponent** | *boolean* | n/a | If true, this function tests for the presence of a component. If false, this function tests for the lack of a component. |


> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojang-minecraft.BlockLocation, isPresent: boolean): void
`

Depending on the value of isPresent, tests for the presence of an entity on every tick. When an entity of the specified type is found or not found (depending on isPresent), the test is marked as a success.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **entityTypeIdentifier** | *string* | n/a | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location of the entity to test for. |
| **isPresent** | *boolean* | n/a | If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present. |


> [!WARNING]
> This function can throw errors.

### **walkTo**
`
walkTo(mob: mojang-minecraft.Entity, blockLocation: mojang-minecraft.BlockLocation, speedModifier: number): void
`

Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **mob** | [*mojang-minecraft.Entity*](../mojang-minecraft/Entity.md) | n/a | Mob entity to give orders to. |
| **blockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location where the entity should be walk to. |
| **speedModifier** | *number* | n/a | Adjustable modifier to the mob's walking speed. |


> [!WARNING]
> This function can throw errors.

### **walkToLocation**
`
walkToLocation(mob: mojang-minecraft.Entity, location: mojang-minecraft.Location, speedModifier: number): void
`

Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
#### Arguments
| Parameter | Type | Default Value | Description |
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

From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **relativeBlockLocation** | [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) | n/a | Location relative to the GameTest command block. |

Returns [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md) - An absolute location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.

### **worldLocation**
`
worldLocation(relativeLocation: mojang-minecraft.Location): mojang-minecraft.Location
`

From a location with coordinates relative to the GameTest structure block, returns a new location with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **relativeLocation** | [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) | n/a | Location relative to the GameTest command block. |

Returns [*mojang-minecraft.Location*](../mojang-minecraft/Location.md) - An absolute location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.


