---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-gametest.Test Class
description: Contents of the @minecraft/server-gametest.Test class.
---
# Test Class

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
- [assertEntityInstancePresentInArea](#assertentityinstancepresentinarea)
- [assertEntityPresent](#assertentitypresent)
- [assertEntityPresentInArea](#assertentitypresentinarea)
- [assertEntityState](#assertentitystate)
- [assertEntityTouching](#assertentitytouching)
- [assertIsWaterlogged](#assertiswaterlogged)
- [assertItemEntityCountIs](#assertitementitycountis)
- [assertItemEntityPresent](#assertitementitypresent)
- [assertRedstonePower](#assertredstonepower)
- [destroyBlock](#destroyblock)
- [fail](#fail)
- [failIf](#failif)
- [getBlock](#getblock)
- [getDimension](#getdimension)
- [getFenceConnectivity](#getfenceconnectivity)
- [getSculkSpreader](#getsculkspreader)
- [getTestDirection](#gettestdirection)
- [idle](#idle)
- [killAllEntities](#killallentities)
- [onPlayerJump](#onplayerjump)
- [pressButton](#pressbutton)
- [print](#print)
- [pullLever](#pulllever)
- [pulseRedstone](#pulseredstone)
- [relativeBlockLocation](#relativeblocklocation)
- [relativeLocation](#relativelocation)
- [removeSimulatedPlayer](#removesimulatedplayer)
- [rotateDirection](#rotatedirection)
- [rotateVector](#rotatevector)
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
- [triggerInternalBlockEvent](#triggerinternalblockevent)
- [until](#until)
- [walkTo](#walkto)
- [walkToLocation](#walktolocation)
- [worldBlockLocation](#worldblocklocation)
- [worldLocation](#worldlocation)

### **assert**
`
assert(condition: boolean, message: string): void
`

Tests that the condition specified in _condition_ is true. If not, an error with the specified _message_ is thrown.

#### **Parameters**
- **condition**: *boolean*
  
  Expression of the condition to evaluate.
- **message**: *string*
  
  Message that is passed if the _condition_ does not evaluate to true.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertBlockPresent**
`
assertBlockPresent(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3, isPresent?: boolean): void
`

Tests that a block of the specified type is present at the specified location. If it is not, an exception is thrown.

#### **Parameters**
- **blockType**: [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string*
  
  Expected block type.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to test at.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether a block of the specified type is at the location. If false, tests that a block of the specified type is not present.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertBlockState**
`
assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean): void
`

Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to test at.
- **callback**: (arg: [*@minecraft/server.Block*](../../minecraft/server/Block.md)) => *boolean*
  
  Callback function that contains additional tests based on the block at the specified location.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertCanReachLocation**
`
assertCanReachLocation(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, canReach?: boolean): void
`

Tests that an entity can reach a particular location. Depending on the value of canReach, throws an exception if the condition is not met.

#### **Parameters**
- **mob**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Entity that you wish to test the location against.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Structure-relative location to test whether the specified mob can reach.
- **canReach**?: *boolean* = `true`
  
  If true, tests whether the mob can reach the location. If false, tests whether the mob is not able to reach the location.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertContainerContains**
`
assertContainerContains(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3): void
`

Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
  Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block with a container (for example, a chest) to test the contents of.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertContainerEmpty**
`
assertContainerEmpty(blockLocation: minecraftserver.Vector3): void
`

Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block with a container (for example, a chest) to test is empty of contents.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertEntityHasArmor**
`
assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: minecraftserver.Vector3, hasArmor?: boolean): void
`

Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Identifier of the entity to match (e.g., 'minecraft:skeleton').
- **armorSlot**: *number*
  
  Container slot index to test.
- **armorName**: *string*
  
  Name of the armor to look for.
- **armorData**: *number*
  
  Data value integer to look for.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the entity with armor to test for.
- **hasArmor**?: *boolean* = `true`
  
  Whether or not the entity is expected to have the specified armor equipped.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertEntityHasComponent**
`
assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: minecraftserver.Vector3, hasComponent?: boolean): void
`

Tests that an entity has a particular component. If not, an exception is thrown.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Identifier of the specified entity (e.g., 'minecraft:skeleton'). If the namespace is not specified, 'minecraft:' is assumed.
- **componentIdentifier**: *string*
  
  Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block with a container (for example, a chest.)
- **hasComponent**?: *boolean* = `true`
  
  Determines whether to test that the component exists, or does not.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertEntityInstancePresent**
`
assertEntityInstancePresent(entity: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, isPresent?: boolean): void
`

Depending on the value for isPresent, tests that a particular entity is present or not present at the specified location. Depending on the value of isPresent, if the entity is found or not found, an error is thrown.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Specific entity to test for.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the entity to test for.
- **isPresent**?: *boolean* = `true`
  
  Whether to test that an entity is present or not present at the specified location.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertEntityInstancePresentInArea**
`
assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void
`

Tests that an entity instance is present within the GameTest area. If not, an exception is thrown.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Entity instance to test for.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether the specified entity is present in the GameTest area. If false, tests that the specified entity is not present.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

#### Examples

##### ***simpleMobTest.ts***

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
        const attackerId = 'fox';
        const victimId = 'chicken';

        test.spawn(attackerId, { x: 5, y: 2, z: 5 });
        const victim = test.spawn(victimId, { x: 2, y: 2, z: 2 });

        test.assertEntityInstancePresentInArea(victim, true);

        test.succeedWhen(() => {
            test.assertEntityInstancePresentInArea(victim, false);
        });
    })
    .maxTicks(400)
    .structureName('gametests:mediumglass');
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleMobTest.ts) code sandbox.

### **assertEntityPresent**
`
assertEntityPresent(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3, searchDistance?: number, isPresent?: boolean): void
`

Depending on the value of isPresent, tests for the presence or non-presence of entity of a specified type at a particular location. If the condition is not met, an exception is thrown.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the entity to test for.
- **searchDistance**?: *number* = `0`
  
  The distance to search for the entity from the blockLocation.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertEntityPresentInArea**
`
assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void
`

Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether an entity of the specified type is present in the GameTest area. If false, tests that an entity of the specified type is not present.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

#### Examples

##### ***simpleMobTest.ts***

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
        const attackerId = 'fox';
        const victimId = 'chicken';

        test.spawn(attackerId, { x: 5, y: 2, z: 5 });
        test.spawn(victimId, { x: 2, y: 2, z: 2 });

        test.assertEntityPresentInArea(victimId, true);

        test.succeedWhen(() => {
            test.assertEntityPresentInArea(victimId, false);
        });
    })
    .maxTicks(400)
    .structureName('gametests:mediumglass');
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleMobTest.ts) code sandbox.

##### ***simpleMobGameTest.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function simpleMobGameTest(test: Test) {
  const attackerId = MinecraftEntityTypes.Fox;
  const victimId = MinecraftEntityTypes.Chicken;

  test.spawn(attackerId, { x: 5, y: 2, z: 5 });
  test.spawn(victimId, { x: 2, y: 2, z: 2 });

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
}
register("StarterTests", "simpleMobTest", simpleMobGameTest).maxTicks(400).structureName("gametests:mediumglass");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleMobGameTest.ts) code sandbox.

### **assertEntityState**
`
assertEntityState(blockLocation: minecraftserver.Vector3, entityTypeIdentifier: string, callback: (arg: minecraftserver.Entity) => boolean): void
`

Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data. If not, an error is thrown.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the entity to look for.
- **entityTypeIdentifier**: *string*
  
  Identifier of the entity (e.g., 'minecraft:skeleton') to look for. Note if no namespace is specified, 'minecraft:' is assumed.
- **callback**: (arg: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)) => *boolean*
  
  Callback function where facets of the selected entity can be tested for. If this callback function returns false or no entity with the specified identifier is found, an exception is thrown.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertEntityTouching**
`
assertEntityTouching(entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean): void
`

Depending on the value of isTouching, tests that an entity of a specified type is touching or connected to another entity. If the condition is not met, an exception is thrown.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the entity to test for.
- **isTouching**?: *boolean* = `true`
  
  If true, this function tests whether the entity is touching the specified location. If false, tests that an entity is not testing the specified location.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertIsWaterlogged**
`
assertIsWaterlogged(blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean): void
`

Depending on the value of isWaterlogged, tests that a block at a location contains water. If the condition is not met, an error is thrown. Pure water blocks are not considered to be waterlogged.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to test for.
- **isWaterlogged**?: *boolean* = `true`
  
  Whether to test that the block at _position_ is expected to be waterlogged.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertItemEntityCountIs**
`
assertItemEntityCountIs(itemType: minecraftserver.ItemType | string, blockLocation: minecraftserver.Vector3, searchDistance: number, count: number): void
`

Tests that items of a particular type and count are present within an area. If not, an error is thrown.

#### **Parameters**
- **itemType**: [*@minecraft/server.ItemType*](../../minecraft/server/ItemType.md) | *string*
  
  Type of item to look for.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to search around for the specified set of items.
- **searchDistance**: *number*
  
  Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_.
- **count**: *number*
  
  Number of items, at minimum, to look and test for.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertItemEntityPresent**
`
assertItemEntityPresent(itemType: minecraftserver.ItemType | string, blockLocation: minecraftserver.Vector3, searchDistance?: number, isPresent?: boolean): void
`

Depending on the value of isPresent, tests whether a particular item entity is present or not at a particular location. If the condition is not met, an exception is thrown.

#### **Parameters**
- **itemType**: [*@minecraft/server.ItemType*](../../minecraft/server/ItemType.md) | *string*
  
  Type of item to test for.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the item entity to test for.
- **searchDistance**?: *number* = `0`
  
  Radius in blocks to look for the item entity.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether an item entity of the specified type is present. If false, tests that an item entity of the specified type is not present.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **assertRedstonePower**
`
assertRedstonePower(blockLocation: minecraftserver.Vector3, power: number): void
`

Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to test.
- **power**: *number*
  
  Expected power level.
  
Notes:
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **destroyBlock**
`
destroyBlock(blockLocation: minecraftserver.Vector3, dropResources?: boolean): void
`

Destroys a block at a particular location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to destroy.
- **dropResources**?: *boolean* = `false`
  
  Whether to add resources exposed with a particular drop.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **fail**
`
fail(errorMessage: string): void
`

Marks the current test as a failure case.

#### **Parameters**
- **errorMessage**: *string*
  
  Error message summarizing the failure condition.
  
Notes:
- This function can throw errors.

### **failIf**
`
failIf(callback: () => void): void
`

Runs the given callback. If the callback does not throw an exception, the test is marked as a failure.

#### **Parameters**
- **callback**: () => *void*
  
  Callback function that runs. If the function runs successfully, the test is marked as a failure. Typically, this function will have .assertXyz method calls within it.
  
Notes:
- This function can throw errors.

### **getBlock**
`
getBlock(blockLocation: minecraftserver.Vector3): minecraftserver.Block
`

Gets a block at the specified block location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to retrieve.

**Returns** [*@minecraft/server.Block*](../../minecraft/server/Block.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **getDimension**
`
getDimension(): minecraftserver.Dimension
`

Gets the dimension of this test.

**Returns** [*@minecraft/server.Dimension*](../../minecraft/server/Dimension.md)
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **getFenceConnectivity**
`
getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity
`

If the block at the specified block location is a fence, this returns a helper object with details on how a fence is connected.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to retrieve.

**Returns** [*FenceConnectivity*](FenceConnectivity.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **getSculkSpreader**
`
getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined
`

Retrieves a sculk spreader object that can be used to control and manage how sculk grows from a block.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to retrieve a sculk spreader from.

**Returns** [*SculkSpreader*](SculkSpreader.md) | *undefined* - Returns the SculkSpreader or undefined if no SculkSpreader is present on the block.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **getTestDirection**
`
getTestDirection(): minecraftserver.Direction
`

Returns the direction of the current test - see the [*@minecraft/server.Direction*](../../minecraft/server/Direction.md) enum for more information on potential values (north, east, south, west - values 2-5).

**Returns** [*@minecraft/server.Direction*](../../minecraft/server/Direction.md)

### **idle**
`
idle(tickDelay: number): Promise<void>
`

This asynchronous function will wait for the specified time in ticks before continuing execution.

#### **Parameters**
- **tickDelay**: *number*
  
  Amount of time to wait, in ticks.

**Returns** Promise&lt;*void*&gt;
  
Notes:
- This function can't be called in read-only mode.

### **killAllEntities**
`
killAllEntities(): void
`

Kills all entities within the GameTest structure.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **onPlayerJump**
`
onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void
`

#### **Parameters**
- **mob**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
- **jumpAmount**: *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **pressButton**
`
pressButton(blockLocation: minecraftserver.Vector3): void
`

Presses a button at a block location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to push the button at.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **print**
`
print(text: string): void
`

Displays the specified message to all players.

#### **Parameters**
- **text**: *string*
  
  Message to display.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **pullLever**
`
pullLever(blockLocation: minecraftserver.Vector3): void
`

Pulls a lever at a block location.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to pull the lever at.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **pulseRedstone**
`
pulseRedstone(blockLocation: minecraftserver.Vector3, duration: number): void
`

Sends a Redstone pulse at a particular location by creating a temporary Redstone block.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to pulse Redstone at.
- **duration**: *number*
  
  Number of ticks to pulse Redstone.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **relativeBlockLocation**
`
relativeBlockLocation(worldBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3
`

From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.

#### **Parameters**
- **worldBlockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Absolute location in the world to convert to a relative location.

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) - A location relative to the GameTest command block.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **relativeLocation**
`
relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3
`

From a location, returns a new location with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.

#### **Parameters**
- **worldLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Absolute location in the world to convert to a relative location.

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) - A location relative to the GameTest command block.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **removeSimulatedPlayer**
`
removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void
`

Removes a simulated player from the world.

#### **Parameters**
- **simulatedPlayer**: [*SimulatedPlayer*](SimulatedPlayer.md)
  
  Simulated player to remove.
  
Notes:
- This function can't be called in read-only mode.

### **rotateDirection**
`
rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction
`

Returns a relative direction given the current rotation of the current test. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on.

#### **Parameters**
- **direction**: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md)
  
  Direction to translate into a direction relative to the GameTest facing. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on.

**Returns** [*@minecraft/server.Direction*](../../minecraft/server/Direction.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **rotateVector**
`
rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3
`

#### **Parameters**
- **vector**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **runAfterDelay**
`
runAfterDelay(delayTicks: number, callback: () => void): void
`

Runs a specific callback after a specified delay of ticks

#### **Parameters**
- **delayTicks**: *number*
  
  Number of ticks to delay before running the specified callback.
- **callback**: () => *void*
  
  Callback function to execute.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **runAtTickTime**
`
runAtTickTime(tick: number, callback: () => void): void
`

Runs the given callback after a delay of _tick_ ticks from the start of the GameTest.

#### **Parameters**
- **tick**: *number*
  
  Tick (after the start of the GameTest) to run the callback at.
- **callback**: () => *void*
  
  Callback function to execute.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setBlockPermutation**
`
setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void
`

Sets a block to a particular configuration (a BlockPermutation) at the specified block location.

#### **Parameters**
- **blockData**: [*@minecraft/server.BlockPermutation*](../../minecraft/server/BlockPermutation.md)
  
  Permutation that contains the configuration data for a block.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to set.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **setBlockType**
`
setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void
`

Sets a block to a particular type at the specified block location.

#### **Parameters**
- **blockType**: [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string*
  
  Type of block to set.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to set.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

#### Examples

##### ***minibiomes.ts***

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/minibiomes.ts) code sandbox.

### **setFluidContainer**
`
setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void
`

For blocks that are fluid containers - like a cauldron - changes the type of fluid within that container.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the fluid container block.
- **type**: [*@minecraft/server.FluidType*](../../minecraft/server/FluidType.md)
  
  Type of fluid to set. See [*@minecraft/server.FluidType*](../../minecraft/server/FluidType.md) for a list of values.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **setTntFuse**
`
setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void
`

Sets the fuse of an explodable entity.

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Entity that is explodable.
- **fuseLength**: *number*
  
  Length of time, in ticks, before the entity explodes.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **spawn**
`
spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity
`

Spawns an entity at a location.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>).
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

**Returns** [*@minecraft/server.Entity*](../../minecraft/server/Entity.md) - The spawned entity. If the entity cannot be spawned, returns undefined.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

#### Examples

##### ***simpleMobTest.ts***

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
        const attackerId = 'fox';
        const victimId = 'chicken';

        test.spawn(attackerId, { x: 5, y: 2, z: 5 });
        test.spawn(victimId, { x: 2, y: 2, z: 2 });

        test.assertEntityPresentInArea(victimId, true);

        test.succeedWhen(() => {
            test.assertEntityPresentInArea(victimId, false);
        });
    })
    .maxTicks(400)
    .structureName('gametests:mediumglass');
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleMobTest.ts) code sandbox.

##### ***simpleMobGameTest.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function simpleMobGameTest(test: Test) {
  const attackerId = MinecraftEntityTypes.Fox;
  const victimId = MinecraftEntityTypes.Chicken;

  test.spawn(attackerId, { x: 5, y: 2, z: 5 });
  test.spawn(victimId, { x: 2, y: 2, z: 2 });

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
}
register("StarterTests", "simpleMobTest", simpleMobGameTest).maxTicks(400).structureName("gametests:mediumglass");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleMobGameTest.ts) code sandbox.

##### ***phantomsShouldFlyFromCats.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/phantomsShouldFlyFromCats.ts) code sandbox.

##### ***minibiomes.ts***

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/minibiomes.ts) code sandbox.

### **spawnAtLocation**
`
spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity
`

Spawns an entity at a location.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>).
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

**Returns** [*@minecraft/server.Entity*](../../minecraft/server/Entity.md) - The spawned entity. If the entity cannot be spawned, returns undefined.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **spawnItem**
`
spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity
`

Spawns an item entity at a specified location.

#### **Parameters**
- **itemStack**: [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md)
  
  ItemStack that describes the item entity to create.
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location to create the item entity at.

**Returns** [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **spawnSimulatedPlayer**
`
spawnSimulatedPlayer(blockLocation: minecraftserver.Vector3, name?: string, gameMode?: minecraftserver.GameMode): SimulatedPlayer
`

Creates a new simulated player within the world.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location where to spawn the simulated player.
- **name**?: *string* = `"Simulated Player"`
  
  Name to give the new simulated player.
- **gameMode**?: [*@minecraft/server.GameMode*](../../minecraft/server/GameMode.md) = `0`

**Returns** [*SimulatedPlayer*](SimulatedPlayer.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **spawnWithoutBehaviors**
`
spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity
`

Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.

#### **Parameters**
- **entityTypeIdentifier**: *string*
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location where the entity should be spawned.

**Returns** [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **spawnWithoutBehaviorsAtLocation**
`
spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity
`

Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.

#### **Parameters**
- **entityTypeIdentifier**: *string*
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location where the entity should be spawned.

**Returns** [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **spreadFromFaceTowardDirection**
`
spreadFromFaceTowardDirection(blockLocation: minecraftserver.Vector3, fromFace: minecraftserver.Direction, direction: minecraftserver.Direction): void
`

Tests that a particular item entity is present at a particular location. If not, an exception is thrown.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  BlockLocation containing a multiface block.
- **fromFace**: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md)
  
  Face to spread from. This face must already be set.
- **direction**: [*@minecraft/server.Direction*](../../minecraft/server/Direction.md)
  
  Direction to spread. Use the Minecraft.Direction enum to specify a direction.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **startSequence**
`
startSequence(): GameTestSequence
`

Creates a new GameTestSequence - A set of steps that play out sequentially within a GameTest.

**Returns** [*GameTestSequence*](GameTestSequence.md) - A new GameTestSequence with chaining methods that facilitate creating a set of steps.
  
Notes:
- This function can't be called in read-only mode.

### **succeed**
`
succeed(): void
`

Marks the current test as a success case.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **succeedIf**
`
succeedIf(callback: () => void): void
`

Runs the given callback. If the callback does not throw an exception, the test is marked as a success.

#### **Parameters**
- **callback**: () => *void*
  
  Callback function that runs. If the function runs successfully, the test is marked as a success. Typically, this function will have .assertXyz method calls within it.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **succeedOnTick**
`
succeedOnTick(tick: number): void
`

Marks the test as a success at the specified tick.

#### **Parameters**
- **tick**: *number*
  
  Tick after the start of the GameTest to mark the test as successful.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **succeedOnTickWhen**
`
succeedOnTickWhen(tick: number, callback: () => void): void
`

Runs the given callback at _tick_ ticks after the start of the test. If the callback does not throw an exception, the test is marked as a failure.

#### **Parameters**
- **tick**: *number*
  
  Tick after the start of the GameTest to run the testing callback at.
- **callback**: () => *void*
  
  Callback function that runs. If the function runs successfully, the test is marked as a success.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **succeedWhen**
`
succeedWhen(callback: () => void): void
`

Runs the given callback every tick. When the callback successfully executes, the test is marked as a success. Specifically, the test will succeed when the callback does not throw an exception.

#### **Parameters**
- **callback**: () => *void*
  
  Testing callback function that runs. If the function runs successfully, the test is marked as a success.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***simpleMobGameTest.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function simpleMobGameTest(test: Test) {
  const attackerId = MinecraftEntityTypes.Fox;
  const victimId = MinecraftEntityTypes.Chicken;

  test.spawn(attackerId, { x: 5, y: 2, z: 5 });
  test.spawn(victimId, { x: 2, y: 2, z: 2 });

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
}
register("StarterTests", "simpleMobTest", simpleMobGameTest).maxTicks(400).structureName("gametests:mediumglass");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleMobGameTest.ts) code sandbox.

### **succeedWhenBlockPresent**
`
succeedWhenBlockPresent(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3, isPresent?: boolean): void
`

Depending on the condition of isPresent, tests for the presence of a block of a particular type on every tick. When the specified block of a type is found or not found (depending on isPresent), the test is marked as a success.

#### **Parameters**
- **blockType**: [*@minecraft/server.BlockType*](../../minecraft/server/BlockType.md) | *string*
  
  Type of block to test for.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the block to test at.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether a block of the specified type is present. If false, tests that a block of the specified type is not present.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **succeedWhenEntityHasComponent**
`
succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: minecraftserver.Vector3, hasComponent: boolean): void
`

Tests for the presence of a component on every tick. Depending on the value of hasComponent, when the specified component is found, the test is marked as a success.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to look for. If no namespace is specified, 'minecraft:' is assumed.
- **componentIdentifier**: *string*
  
  Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Block location of the entity to test.
- **hasComponent**: *boolean*
  
  If true, this function tests for the presence of a component. If false, this function tests for the lack of a component.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **succeedWhenEntityPresent**
`
succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3, isPresent?: boolean): void
`

Depending on the value of isPresent, tests for the presence of an entity on every tick. When an entity of the specified type is found or not found (depending on isPresent), the test is marked as a success.

#### **Parameters**
- **entityTypeIdentifier**: *string*
  
  Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location of the entity to test for.
- **isPresent**?: *boolean* = `true`
  
  If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***phantomsShouldFlyFromCats.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/phantomsShouldFlyFromCats.ts) code sandbox.

##### ***minibiomes.ts***

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/minibiomes.ts) code sandbox.

### **triggerInternalBlockEvent**
`
triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void
`

Triggers a block event from a fixed list of available block events.

#### **Parameters**
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **event**: *string*
  
  Event to trigger. Valid values include minecraft:drip, minecraft:grow_stalagtite, minecraft:grow_stalagmite, minecraft:grow_up, minecraft:grow_down and minecraft:grow_sideways.
- **eventParameters**?: *number*[] = `[]`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **until**
`
until(callback: () => void): Promise<void>
`

This asynchronous function will wait until the code in the specified callback successfully completes. until can be used in conjunction with .assert functions to evaluate that a condition is true.

#### **Parameters**
- **callback**: () => *void*
  
  Function with code to evaluate.

**Returns** Promise&lt;*void*&gt;
  
Notes:
- This function can't be called in read-only mode.

### **walkTo**
`
walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void
`

Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.

#### **Parameters**
- **mob**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Mob entity to give orders to.
- **blockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location where the entity should be walk to.
- **speedModifier**?: *number* = `1`
  
  Adjustable modifier to the mob's walking speed.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **walkToLocation**
`
walkToLocation(mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number): void
`

Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.

#### **Parameters**
- **mob**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
  
  Mob entity to give orders to.
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location where the entity should be walk to.
- **speedModifier**?: *number* = `1`
  
  Adjustable modifier to the mob's walking speed.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*GameTestError*](GameTestError.md)

### **worldBlockLocation**
`
worldBlockLocation(relativeBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3
`

From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.

#### **Parameters**
- **relativeBlockLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location relative to the GameTest command block.

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) - An absolute location relative to the GameTest command block.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)

### **worldLocation**
`
worldLocation(relativeLocation: minecraftserver.Vector3): minecraftserver.Vector3
`

From a location with coordinates relative to the GameTest structure block, returns a new location with coordinates relative to world. Rotation of the GameTest structure is also taken into account.

#### **Parameters**
- **relativeLocation**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Location relative to the GameTest command block.

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) - An absolute location relative to the GameTest command block.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/server.GameTestError*](../../minecraft/server/GameTestError.md)
