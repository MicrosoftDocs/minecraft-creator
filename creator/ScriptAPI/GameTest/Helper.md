---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest.Helper Class
description: Contents of the GameTest.Helper class.
---
# Helper Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.



## Methods
- [assertBlockTypeNotPresent](#assertblocktypenotpresent)
- [assertBlockTypePresent](#assertblocktypepresent)
- [assertBlockState](#assertblockstate)
- [assert](#assert)
- [assertContainerContains](#assertcontainercontains)
- [assertContainerEmpty](#assertcontainerempty)
- [assertEntityData](#assertentitydata)
- [assertEntityHasArmor](#assertentityhasarmor)
- [assertEntityHasComponent](#assertentityhascomponent)
- [assertEntityInstancePresent](#assertentityinstancepresent)
- [assertEntityNotPresent](#assertentitynotpresent)
- [assertEntityNotPresentInArea](#assertentitynotpresentinarea)
- [assertEntityNotTouching](#assertentitynottouching)
- [assertEntityPresent](#assertentitypresent)
- [assertEntityPresentInArea](#assertentitypresentinarea)
- [assertEntityTouching](#assertentitytouching)
- [assertIsWaterlogged](#assertiswaterlogged)
- [assertItemEntityCountIs](#assertitementitycountis)
- [assertItemEntityNotPresent](#assertitementitynotpresent)
- [assertItemEntityPresent](#assertitementitypresent)
- [assertRedstonePower](#assertredstonepower)
- [fail](#fail)
- [failIf](#failif)
- [getBlock](#getblock)
- [killAllEntities](#killallentities)
- [pressButton](#pressbutton)
- [print](#print)
- [pullLever](#pulllever)
- [pulseRedstone](#pulseredstone)
- [relativeLocation](#relativelocation)
- [runAfterDelay](#runafterdelay)
- [runAtTickTime](#runatticktime)
- [setBlockPermutation](#setblockpermutation)
- [setBlockType](#setblocktype)
- [spawn](#spawn)
- [spawnItem](#spawnitem)
- [spawnWithoutBehaviors](#spawnwithoutbehaviors)
- [startSequence](#startsequence)
- [succeed](#succeed)
- [succeedIf](#succeedif)
- [succeedOnTick](#succeedontick)
- [succeedOnTickWhen](#succeedontickwhen)
- [succeedWhen](#succeedwhen)
- [succeedWhenBlockTypePresent](#succeedwhenblocktypepresent)
- [succeedWhenEntityHasComponent](#succeedwhenentityhascomponent)
- [succeedWhenEntityNotPresent](#succeedwhenentitynotpresent)
- [succeedWhenEntityPresent](#succeedwhenentitypresent)
- [walkTo](#walkto)
- [setTntFuse](#settntfuse)
- [worldLocation](#worldlocation)
  
### **assertBlockTypeNotPresent**
`
assertBlockTypeNotPresent(blockType: Minecraft.BlockType, location: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockType** | [*Minecraft.BlockType*](../Minecraft/BlockType.md) | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertBlockTypePresent**
`
assertBlockTypePresent(blockType: Minecraft.BlockType, location: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockType** | [*Minecraft.BlockType*](../Minecraft/BlockType.md) | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertBlockState**
`
assertBlockState(blockStateName: string, stateValue: number, location: Minecraft.BlockLocation): void
`

Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockStateName** | *string* | Name of the block state to test. |
| **stateValue** | *number* | Expected state value. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***testIfButtonNotPressed.js***
```javascript
test.assertBlockState("button_pressed_bit", 0, buttonPos);

```
### **assert**
`
assert(condition: boolean, message: string): void
`

Tests that the condition specified in _condition_ is true. If not, an error with the specified _message_ is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **condition** | *boolean* | Expression of the condition to evaluate. |
| **message** | *string* | Message that is passed if the _condition_ does not evaluate to true. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertContainerContains**
`
assertContainerContains(itemStack: Minecraft.ItemStack, location: Minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*Minecraft.ItemStack*](../Minecraft/ItemStack.md) | Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertContainerEmpty**
`
assertContainerEmpty(location: Minecraft.BlockLocation): void
`

Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityData**
`
assertEntityData(location: Minecraft.BlockLocation, entityIdentifier: string, callback: (arg0: Minecraft.Entity) => boolean): void
`

Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **entityIdentifier** | *string* | Identifier of the entity (e.g., 'minecraft:skeleton') to look for. Note if no namespace is specified, 'minecraft:' is assumed. |
| **callback** | (arg0: Minecraft.Entity) => boolean | Callback function where facets of the selected entity can be tested for. If this callback function returns false or no entity with the specified identifier is found, an exception is thrown. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***villagerEffectTest.js***
```javascript
test.assertEntityData(
  villagerPos,
  "minecraft:villager",
  (entity) => entity.getEffect(Effects.regeneration).getDuration() > 120
); // At least 6 seconds remaining in the villagers' effect

```
### **assertEntityHasArmor**
`
assertEntityHasArmor(entityIdentifier: string, armorSlot: number, armorName: string, armorData: number, location: Minecraft.BlockLocation, hasArmor: boolean): void
`

Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Identifier of the entity to match (e.g., 'minecraft:skeleton'). |
| **armorSlot** | *number* | Container slot index to test. |
| **armorName** | *string* | Name of the armor to look for. |
| **armorData** | *number* | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **hasArmor** | *boolean* | Whether or not the entity is expected to have the specified armor equipped. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***horseArmorTest.js***
```javascript
test.assertEntityHasArmor("minecraft:horse", armorSlotTorso, "diamond_horse_armor", 0, horseLocation, true);

```
### **assertEntityHasComponent**
`
assertEntityHasComponent(entityIdentifier: string, componentIdentifier: string, location: Minecraft.BlockLocation, hasComponent: boolean): void
`

Tests that an entity has a particular component. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Identifier of the specified entity (e.g., 'minecraft:skeleton'). If the namespace is not specified, 'minecraft:' is assumed. |
| **componentIdentifier** | *string* | Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **hasComponent** | *boolean* | Determines whether to test that the component exists, or does not. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***sheepShearedTest.js***
```javascript
test.assertEntityHasComponent("minecraft:sheep", "minecraft:is_sheared", entityLoc, false);

```
### **assertEntityInstancePresent**
`
assertEntityInstancePresent(entity: Minecraft.Entity): void
`

Tests that a particular entity is still present and alive within the GameTest area. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entity** | [*Minecraft.Entity*](../Minecraft/Entity.md) | Specific entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityNotPresent**
`
assertEntityNotPresent(entityIdentifier: string, location: Minecraft.BlockLocation): void
`

Tests that an entity of a specified type is not present at a specified location. If it is, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityNotPresentInArea**
`
assertEntityNotPresentInArea(entityIdentifier: string): void
`

Tests that an entity of a specified type is not present within the GameTest area. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityNotTouching**
`
assertEntityNotTouching(entityIdentifier: string, position: Minecraft.Location): void
`

Tests that an entity of a specified type is not touching or connected to another entity. If it is, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **position** | [*Minecraft.Location*](../Minecraft/Location.md) | Location of the entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityPresent**
`
assertEntityPresent(entityIdentifier: string, location: Minecraft.BlockLocation): void
`

Tests that an entity of a specified type is present at a particular location. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityPresentInArea**
`
assertEntityPresentInArea(entityIdentifier: string): void
`

Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertEntityTouching**
`
assertEntityTouching(entityIdentifier: string, position: Minecraft.Location): void
`

Tests that an entity of a specified type is touching or connected to another entity. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **position** | [*Minecraft.Location*](../Minecraft/Location.md) | Location of the entity to test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertIsWaterlogged**
`
assertIsWaterlogged(location: Minecraft.BlockLocation, isWaterlogged: boolean): void
`

Tests that a block at a location contains water in addition to another block type. If not, an error is thrown. Water blocks are not considered to be waterlogged.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **isWaterlogged** | *boolean* | Whether not not the block at _position_ is expected to be waterlogged. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertItemEntityCountIs**
`
assertItemEntityCountIs(itemType: Minecraft.ItemType, location: Minecraft.BlockLocation, searchDistance: number, count: number): void
`

Tests that items of a particular type and count are present within an area. If not, an error is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*Minecraft.ItemType*](../Minecraft/ItemType.md) | Type of item to look for. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_. |
| **count** | *number* | Number of items, at minimum, to look and test for. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***findFeathers.js***
```javascript
test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1);

```
### **assertItemEntityNotPresent**
`
assertItemEntityNotPresent(itemType: Minecraft.ItemType, location: Minecraft.BlockLocation, searchDistance: number): void
`

Tests that a particular item entity is not present at a particular location. If it is, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*Minecraft.ItemType*](../Minecraft/ItemType.md) | Type of item to test for. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | Radius in blocks to look for the item entity. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertItemEntityPresent**
`
assertItemEntityPresent(itemType: Minecraft.ItemType, location: Minecraft.BlockLocation, searchDistance: number): void
`

Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*Minecraft.ItemType*](../Minecraft/ItemType.md) | Type of item to test for. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **searchDistance** | *number* | Radius in blocks to look for the item entity. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **assertRedstonePower**
`
assertRedstonePower(location: Minecraft.BlockLocation, power: number): void
`

Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **power** | *number* | Expected power level. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **fail**
`
fail(errorMessage: string): void
`

Marks the current test as a failure case.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **errorMessage** | *string* | Error message summarizing the failure condition. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **failIf**
`
failIf(callback: () => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **getBlock**
`
getBlock(location: Minecraft.BlockLocation): Minecraft.Block
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.Block*](../Minecraft/Block.md)

> [!WARNING]
> This function can throw errors.

### **killAllEntities**
`
killAllEntities(): void
`

Kills all entities within the GameTest structure.

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **pressButton**
`
pressButton(location: Minecraft.BlockLocation): void
`

Presses a button at a block location.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> Will throw an error if a button is not present at the specified position.

### **print**
`
print(text: string): void
`

Displays the specified message to all players.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **text** | *string* | Message to display. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **pullLever**
`
pullLever(location: Minecraft.BlockLocation): void
`

Pulls a lever at a block location.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> Will throw an error if a lever is not present at the specified position.

### **pulseRedstone**
`
pulseRedstone(location: Minecraft.BlockLocation, duration: number): void
`

Sends a Redstone pulse at a particular location by creating a temporary Redstone block.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **duration** | *number* | Number of ticks to pulse Redstone. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **relativeLocation**
`
relativeLocation(worldLocation: Minecraft.BlockLocation): Minecraft.BlockLocation
`

From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **worldLocation** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Absolute location in the world to convert to a relative location. |

Returns [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) - A location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => undefined): void
`

Runs a specific callback after a specified delay of ticks
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Number of ticks to delay before running the specified callback. |
| **callback** | () => undefined | Callback function to execute. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **runAtTickTime**
`
runAtTickTime(tick: number, callback: () => undefined): void
`

Runs the given callback after a delay of _tick_ ticks from the start of the GameTest.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | Tick (after the start of the GameTest) to run the callback at. |
| **callback** | () => undefined | Callback function to execute. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **setBlockPermutation**
`
setBlockPermutation(blockData: Minecraft.BlockPermutation, location: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockData** | [*Minecraft.BlockPermutation*](../Minecraft/BlockPermutation.md) | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **setBlockType**
`
setBlockType(blockType: Minecraft.BlockType, location: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockType** | [*Minecraft.BlockType*](../Minecraft/BlockType.md) | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **spawn**
`
spawn(entityIdentifier: string, location: Minecraft.BlockLocation): Minecraft.Entity
`

Spawns an entity at a location.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>). |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.Entity*](../Minecraft/Entity.md) - The spawned entity. If the entity cannot be spawned, returns undefined.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***spawnAdultPig.js***
```javascript
test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new BlockLocation(1, 2, 1));

```
### **spawnItem**
`
spawnItem(itemStack: Minecraft.ItemStack, position: Minecraft.Location): Minecraft.Entity
`

Spawns an item entity at a specified location.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*Minecraft.ItemStack*](../Minecraft/ItemStack.md) | ItemStack that describes the item entity to create. |
| **position** | [*Minecraft.Location*](../Minecraft/Location.md) | Location to create the item entity at. |

Returns [*Minecraft.Entity*](../Minecraft/Entity.md)

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
spawnWithoutBehaviors(entityIdentifier: string, location: Minecraft.BlockLocation): Minecraft.Entity
`

Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns [*Minecraft.Entity*](../Minecraft/Entity.md)

> [!WARNING]
> This function can throw errors.

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

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedIf**
`
succeedIf(callback: () => undefined): void
`

Runs the given callback. If the callback does not throw an exception, the test is marked as a success.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | Callback function that runs. If the function runs successfully, the test is marked as a success. Typically, this function will have .assertXyz method calls within it. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedOnTick**
`
succeedOnTick(tick: number): void
`

Marks the test as a success at the specified tick.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | Tick after the start of the GameTest to mark the test as successful. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedOnTickWhen**
`
succeedOnTickWhen(tick: number, callback: () => undefined): void
`

Runs the given callback at _tick_ ticks after the start of the test. If the callback does not throw an exception, the test is marked as a failure.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tick** | *number* | Tick after the start of the GameTest to run the testing callback at. |
| **callback** | () => undefined | Callback function that runs. If the function runs successfully, the test is marked as a success. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhen**
`
succeedWhen(callback: () => undefined): void
`

Runs the given callback every tick. When the callback successfully executes, the test is marked as a success. Specifically, the test will succeed when the callback does not throw an exception.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | Testing callback function that runs. If the function runs successfully, the test is marked as a success. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenBlockTypePresent**
`
succeedWhenBlockTypePresent(blockType: Minecraft.BlockType, location: Minecraft.BlockLocation): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockType** | [*Minecraft.BlockType*](../Minecraft/BlockType.md) | - |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityIdentifier: string, componentIdentifier: string, location: Minecraft.BlockLocation, hasComponent: boolean): void
`

Tests for the presence of a component on every tick. When the specified component is found, the test is marked as a success.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to look for. If no namespace is specified, 'minecraft:' is assumed. |
| **componentIdentifier** | *string* | Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **hasComponent** | *boolean* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityNotPresent**
`
succeedWhenEntityNotPresent(entityIdentifier: string, location: Minecraft.BlockLocation): void
`

Tests every tick and marks the test as a success when a particular entity is not present at a particular location.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityIdentifier: string, location: Minecraft.BlockLocation): void
`

Tests for the presence of an entity on every tick. When an entity of the specified type is found, the test is marked as a success.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **entityIdentifier** | *string* | Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **walkTo**
`
walkTo(mob: Minecraft.Entity, location: Minecraft.BlockLocation, speedModifier: number): void
`

Forces an entity to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **mob** | [*Minecraft.Entity*](../Minecraft/Entity.md) | Mob entity to give orders to. |
| **location** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | - |
| **speedModifier** | *number* | Adjustable modifier to the mob's walking speed. |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **setTntFuse**
`
setTntFuse(actor: Minecraft.Entity, fuseLength: number): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **actor** | [*Minecraft.Entity*](../Minecraft/Entity.md) | - |
| **fuseLength** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **worldLocation**
`
worldLocation(relativeLocation: Minecraft.BlockLocation): Minecraft.BlockLocation
`

From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **relativeLocation** | [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) | Location relative to the GameTest command block. |

Returns [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md) - An absolute location relative to the GameTest command block.

> [!WARNING]
> This function can throw errors.

