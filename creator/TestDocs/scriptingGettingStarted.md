---
author: v-josjones
ms.author: v-josjones
title: Scripting - Getting Started with Gametest
ms.prod: Gaming
---

# Scripting - Getting Started with Gametest

The JavaScript-based Game Test Framework provides tools for developers of all skill levels to author tests that can be used to validate overall game health.  In its first incarnation, Game Test Framework will be used to improve automation for Bedrock edition, and also serve as a vehicle to bootstrap a growing, robust scripting API.

## Details of the Tech Components  

Every Game Test consists of three elements:

- **Structure** defined as an .mcstructure, which defines the physical environment for the test as well as any starting entities.  Test implementers should note that this Structure will be instantiated in a generally flat world; while they should design their tests for what happens within the structure, it will be possible for mobs, for example, to run around in the broader world.

- **Registration Code** is a code snippet written in JavaScript for registering a set of test functions.

- **Test Execution Code** is a code snippet written in JavaScript that sets up a test and then evaluates conditions at points during the test.

With this simple foundation, game tests can be created with as little as 3 lines of JavaScript code plus an MC Structure.

## Running tests within game

To run tests within a game,you’ll want to ensure GameTest Framework and Scripting v2 experiments are turned on.

[!IMPORTANT]
You’ll also want to Enable Cheats, select a Creative world and likely select a Flat World.  

To run tests, use the `/gametest` command.

To run a specific test, use `/gametest run <classname>:<testName>`, like:

`/gametest run minecarttests:turn`

To run all tests, use `/gametest runall`

To run just the scripted tests, use `/gametest runall suite:scripted.`

## Sample Tests

When building out your own tests, you will likely want to start your own Test Behavior Pack.  You can begin by copying out the default vanilla_gametest behavior pack as a start.  This vanilla_gametest folder will also contain some great starter examples that can give you ideas.

In a Windows build, these files will typically be located at `C:\Program Files\WindowsApps\Microsoft.MinecraftUWP_1.16.2100.0_x64__8wekyb3d8bbwe\data\behavior_packs\vanilla_gametest`

Some additional examples are available here.

## Game Test Registration

Script Game Tests are registered by placing a JavaScript files file within the gametests folder of a behavior pack. Note that in the initial release (circa Jan 2021), .MCStructures are also a part of the vanilla_gametest Behavior Pack, including being listed within that Behavior Pack’s content.json.

Each JavaScript file is loaded and executed at the start of Game Testing – when a world is loaded.  To see your changes to your JS as you author tests, you will need to exit out of your world and reload it.   If there are any script errors, you will see them printed as the world is loaded.

Each JavaScript file is executed within its own scope– in other words, one JavaScript file can’t refer to functions or state from another JavaScript file.

The key class for registration here is RegistrationBuilder.  It is structured as follows:

### RegistrationBuilder Class

The RegistrationBuilder can be used to register a specific test function. (in Java edition, this is done with @GameTest and @GameTestFactory annotations on Java classes, but JavaScript does not have similar functionality.)

#### Class Constructor

```javascript
RegistrationBuilder(testClassName, testName, testClass);
```

`string testClassName:` Name of the group of tests to be executed.

`string testName:` Name of the test that is executed.
  
`function testClass:` Pointer to the function that implements the test.

The combination of `testClassName` and `testName` should be unique amongst all other game tests, so `testClassName` needs to be a unique ‘namespace’ for a group of tests.

`testClassName` and `testName` are used for reporting the results of the test.  They need not directly correspond to the actual JavaScript class name.

#### Methods

Each of these methods is intended to be chained in the initial construction of the object.

|Methods|Description|
|:-------|----------|
|`batch(string batchName)`| **Optional.** Sets the name of the batch of tests that this test belongs to.  Ordinarily this a string that is used to bucket the broader set of tests to run within. For example, there may be a set of tests that assume “night” time, and another set of tests that assume “day” time.  As part of execution you may want to therefore have two batches of tests, that have different governing world expectations.|
|`required(bool required)`|Whether the test is deemed to be required to pass.|
|`requiredSuccessfulAttempts(int requiredSuccessfulAttempts)`|The number of required successes this test must have in a broader run of tests. See also maxAttempts.|
|`maxAttempts(int maxAttempts)`|Maximum number of attempts of the test to run in a test run.|
|`maxTicks(int maxTicks)`| The maximum amount of time that a test should be allowed to run. There are 20 in-game ticks per second.|
|`setupTicks(int setupTicks)`|This specifies the delay before the JavaScript function is executed, which can provide time for the test to “settle down” – e.g., for mobs to run routes, etc. (20 ticks per second.)|
|`structureName(string structureName)`|Name of a .mcstructure file within the structures folder of the behavior to use.  If this is not specified, an MC Structure of the name `classname:testName` is used.|

#### RegistrationBuilder Example

This is a pseudo-code example of Registration Builder at work:

Here, it can execute some test registration code, as follows (the following is pseudo-code):

```javascript
import * as gameTest from ‘GameTest’ 

 

function fourVillagersOneDoor(test) 
{ 
    // my test code goes here. 
    // note that this function needs to be declared before the actual  
    // registration code, within the same JS file. 
} 
 
function createMyAwesomeTests() 
{ 
   gameTest.register(“villager”, “super_four_villagers_one_door”, fourVillagersOneDoor) 
      .required(true) 
      .maxTicks(100) // 5 seconds 
      .structure(“MyTests:four_villagers_one_door”); // some naming assumptions we’ll want to work out 
} 

createMyAwesomeTests(); 
```

This is a simple example, but imagine that you could have registration functions that act as Game Test factories – that is, they take in multiple parameters that can vary the tests at scale (e.g., four cows, one door; four creepers, one door).

## Test Functions

Test functions are where the actual execution of a test happens.  The test function both sets up initial conditions for a test to run, and returns an additional test function where criteria is evaluated.

Sample Test:

```javascript
var EntityIds =  

{ 

villager = "minecraft:villager_v2" 

} // we should probably include vanilla EntityIds as part of Scripting Framework 

 

fourVillagersOneDoor(test)  

{ 

// set up the test  

test.spawn(EntityIds.villager, 5, 2, 4); 

test.spawn(EntityIds.villager, 4, 2, 5); 

test.spawn(EntityIds.villager, 2, 2, 5); 

test.spawn(EntityIds.villager, 1, 2, 4); 

 

// add a success criteria 

test.succeedWhen( () => { 

test.assertEntityPresent(EntityIds.villager, 5, 2, 2); 

test.assertEntityPresent(EntityIds.villager, 5, 2, 1); 

test.assertEntityPresent(EntityIds.villager, 1, 2, 2); 

test.assertEntityPresent(EntityIds.villager, 1, 2, 1); 

}); 

} 
```

### GameTest Class

The GameTest class provides a full set of APIs for both setting up state within a test, as well as evaluating conditions for a test.

Assertions are used within functions (that is, succeed *and fail* functions) to confirm whether test criteria is correct.  If the assertion is not true, the function will not continue to evaluate (but the test will not be marked as failed.)  In this way, assertions can be commonly used in `succeedIf/succeedWhen`-style functions.  

|Test Evaluation Methods|Description|
|:-------|----------|
|`assertEntityPresent(entityIdentifier, x, y, z)`|`string entityIdentifier`: Identifier of the type of entity to test for. `int x, y, z`: Structure-relative x,y,z coordinates for the entity to test at.
|`assertEntityNotPresentInArea(entityIdentifier, x, y, z)`|`string entityIdentifier`: Identifier of the type of entity to test for.`int x, y, z`: Structure-relative X, Y, Z coordinate for the entity to test at.
|`assertBlockPresent(block, x, y, z)`|`Block block`: Identifier of the type of block to look for.`int x,y,z`: Structure-relative X,Y,Z coordinate of the block to test at.|
|`assertBlockNotPresent(block, x, y, z)`|

Block block: Identifier of the type of block to look for. 
	int x: Structure-relative X coordinate of the block to test at 
	int y: Structure-relative Y coordinate of the block to test at 
	int z: Structure-relative Z coordinate of the block to test at 

Will stop further execution of the inner-most scope of code unless a block is at the position indicated. 

 

assertItemEntityPresent(itemType, x, y, z, searchDistance)	 

string itemType: Identifier of the item to assert for. 
int x: Structure-relative X coordinate of the center of the item search to test at 
int y: Structure-relative Y coordinate of the center of the item search to test at 
int z: Structure-relative Z coordinate of the center of the item search to test at 
float searchDistance: Radius in blocks to consider the item within. 

Will stop further execution of the inner-most scope of code unless an item is found within the searchDistance of the position indicated. 

 

assertItemEntityNotPresent 

string itemType: Identifier of the item to assert for. 
int x: Structure-relative X coordinate of the center of the item search to test at 
int y: Structure-relative Y coordinate of the center of the item search to test at 
int z: Structure-relative Z coordinate of the center of the item search to test at 
float searchDistance: Radius in blocks to consider the item within. 

Will stop further execution of the inner-most scope of code if an item is found within the searchDistance of the position indicated. 

succeed() 

When run, marks the test as successful.  

succeedIf(fn) 

function fn.  The set of code to execute for this condition. 

Provides a single function, that if returns true, will mark the test as success.  This function is evaluated every tick. 

succeedWhen(fn) 

function fn.  The set of code to execute for this condition. 

Provides a function that is evaluated every tick – and if the function completes, the test will complete.  Typically, the succeedWhen functions are used in combination with multiple assert calls that will prevent completion of the function until all assertion criteria is met. 

 

succeedWhenEntityPresent(entityIdentifier, x, y, z) 

string entityIdentifier: Identifier of the type of entity to test for. 
		int x: Structure-relative X coordinate for the entity to test at 
		int y: Structure-relative Y coordinate for the entity to test at 
		int z: Structure-relative Z coordinate for the entity to test at 

For more information on coordinates, see this section. 

Will mark the test as an immediate success if an entity is at a particular location. 

 

succeedWhenEntityNotPresent(entityIdentifier, x, y, z) 

string entityIdentifier: Identifier of the type of entity to test for. 

Will mark the test as an immediate success if an entity is NOT at a particular location. 

 

succeedWhenBlockPresent(block, x, y, z) 

string block: Identifier of the type of block to look for. 
		int x: Structure-relative X coordinate of the block to test at 
		int y: Structure-relative Y coordinate of the block to test at 
		int z: Structure-relative Z coordinate of the block to test at 

Will mark the test an immediate success when a block is located at the indicated position. (does no further execution of the script happen if success happens?) 

 
	fail(error) 

string error.  Error message used to explain within test results what specifically went wrong. 

Calling fail will immediately mark a test as failed – with error providing a description of the failed condition so that test managers know what to investigate. 

 

failIf(function fn) 

function fn.  A function of code to execute. 

Fails a test if the passed in function returns a boolean true value. 

runAtTickTime(tickTime, fn) 

int ticktime. The time, in ticks, that the function should be run at. 

function fn.  A function of code to execute. 

Provides a function that will run at a specified time within the test. I imagine it’ll be popular.   

runAfterDelay 

Runs the specified function after a delay in time, in ticks. 

 

World state manipulation methods 

In the fullness of time, we’ll add a full script model that will add many different ways of interacting with the world.  To start with, however, we will provide some additional utility methods that are required to manipulate items in a Structure Block/Test relative way. 

 

setBlock(Block block, x, y, z) 

Block  

int x: X coordinate of where to set the block 
		int y: Y coordinate of the button to push 
		int z: Z coordinate of the button to push 

 

pressButton(x, y, z) 

int x: X coordinate of the button to push 
		int y: Y coordinate of the button to push 
		int z: Z coordinate of the button to push 

Pushes a button-type object.  (does this apply to things like pressure plates, etc.?  does a button need to actually be at the XYZ, or does it just create a “button effect” at that location?) 

(should we throw an exception/mark test as failed if there isn’t a button-y thing at the position? 

 

pullLever(x, y, z) 

int x: X coordinate of the button to push 
		int y: Y coordinate of the button to push 
		int z: Z coordinate of the button to push 

Throws a lever-type object.  (does this toggle it?  Should we have methods for explicitly setting it to on or off?) 

(should we throw an exception/mark test as failed if there isn’t a lever thing at the position?) 

 
killAllEntities() 

Eliminates all item entities within a Test structure. 

 
spawn(entityIdentifier, x, y, z) 

string entityIdentifier: Identifier of the entity to spawn 
		int x: X coordinate of the spawned entity 
		int y: Y coordinate of the spawned entity 
		int z: Z coordinate of the spawned entity 

For more information on coordinates, see this section. 

 

Methods we should look to add 

spawnWithNoFreeWill(identifier, x, y, z) 

string entityIdentifier: Identifier of the type of entity to spawn 
	int x: Structure-relative X coordinate for the entity to spawn 
	int y: Structure-relative Y coordinate for the entity to spawn 
	int z: Structure-relative Z coordinate for the entity to spawn 

In a number of tests, this is used to create Mobs without any AI guidance. 

Returns a pointer to a (Entity?) 

walkTo(entity, x, y, z, Speed) 

Entity entity: The mob that we are looking to have move to a location 
int x: Structure-relative X coordinate for the destination 
int y: Structure-relative Y coordinate for the destination 
int z: Structure-relative Z coordinate for the destination 
Speed speed: An enumeration of different speeds and priorities for walking. 

This is used in conjunction with spawnWithNoFreeWill to force mobs to reach a destination (for testing things like pathfinding) 

 

assertEntityData(x, y, z, entityType, propertyName, value) 

int x: Structure-relative X coordinate for the destination 
int y: Structure-relative Y coordinate for the destination 
int z: Structure-relative Z coordinate for the destination 
int entityType: Identifier of the type of identity to look for. (we should provide an enum for these.) 
int propertyName: Name of the property to query for. (we should provide enums for these.) 
object value: Value to test the assert for. 

 

 

 

succeedEntityData 

assertEntityTouching 

assertEntityCountIs 

assertBlockProperty 

useBlock 

 

APIs to discuss 

Full Script API: Entity/Mob/Block objects. 

“Synthetic Player API”:  A way to simulate a player and interactions within a Structure/Test in a consistent fashion. 

Methods Java has: 

pulseRedstone.  This temporarily places a Redstone Block down and then removes it X ticks later.  Probably punt? 

makeAboutToDrown.  Again, this seems like a helper that just is a way to set properties on an object. 

setNight.  Do we want tests to change global state like this? 

setDayTime 

‘forEveryBlockInStructure’ – we probably do not want to introduce this one?  It’s only used in one test – to replace all dirt with air (?) 

 

World Position 

Unless otherwise noted, all coordinates are within scope of the structure. 

The Y coordinate refers to the “height” of the structure, and is relative to the bottom of the structure.  

The Z coordinate refers to the “depth” of the structure, and is relative to the “front” of the structure. 

All coordinates are 0 based. 

If coordinates are specified that go outside of the scope of the Test Structure, we should throw an TestError exception and fail the test. 

 

 

 

Page Break
 

Design 

GameTest Style Guidelines 

Where possible, coalesce all settings and configuration for a set of tests in one place: the JavaScript file. 

For this reason, there isn’t a separate .JSON config file for tests; indeed, some configuration is done inline in JavaScript code like setting up Required state and provisioning mobs. 

For example, generate things like mobs within script (rather than the structure) so it is easier to track in one place.   This also lets Structure files be re-used in potentially many different tests. 