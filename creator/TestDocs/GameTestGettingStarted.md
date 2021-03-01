---
author: v-josjones
ms.author: v-josjones
title: Getting Started with GameTest
ms.prod: Gaming
---

# Getting started with GameTest

With Minecraft as your world, you can express infinite forms of gameplay and variability in your content. With all of these creative possibilities, sometimes you need additional tools to help validate that your games and experiences are running just as you expect it as things change in the broader Minecraft environment, over time.  Enter the GameTest Framework - a system for establishing sets of tests to ensure everything works the way you intended.  

With GameTest Framework, you can create new Tests - miniature environments and scripts that set up conditions, let them play out, and then evaluate for expected results.  With theses tests, you can express and document your expectations for how things should work - both for your content and games, and for the Minecraft world.

When working or communicating with the Minecraft team, submitting GameTests can be a great way to establish the expected behavior you are looking for. In the future, submitting GameTests along with your Add-on content to the Minecraft Marketplace will help ensure that even as Minecraft changes, your content will continue to work just as you expect it.

The GameTest Framework provides tools for developers to author tests that can be used to validate facets of their Minecraft Creator content.

## What's in a GameTest?

A GameTest is a miniature environment along with a set of starting conditions - for example, a set of mobs or items.  After that environment plays out in the Minecraft world for a little while, you can run conditional code to evaluate that your expectations were met.  

For example, let's say that we want to validate that a minecart can make its way around curves and over a complex track. We can build a GameTest for this case by building out a track, placing a minecart at the start of the track, and then power the track by placing a block of Redstone.  We can then validate that the minecart reaches the end of its track within a reasonable timeframe.  If anything should change in the future - for example, how fast Minecarts can go when powered, your test would fail because your evaluation criteria don't get met.  This gives you an early warning that something may have changed to interrupt how your game works.

Building sets of GameTests requires building out your GameTests via a Behavior Pack, and writing some simple JavaScript code.

Specifically, every GameTest consists of four elements:

- **A structure** which defines the physical environment for the test as well as any starting entities.  Within Minecraft, you can create new structures by designing them out (typically in Creative Mode) and then placing a Structure Block to save out the results to disk. This creates an .mcstructure file which you can add to your test.  When a GameTest is created, your structure will be loaded and expanded into Minecraft. You should note that this Structure will be instantiated in a generally flat world, broader world, so you'll want to ensure that any mobs are penned into the structures you create.

GameTests then use some additional JavaScript to establish the test, including:

- **Test registration** - a small amount of code to establish a test in the environment.

- **Test setup** - additional code that sets up conditions within the Structure environment that has been created. Typically, this will be the creation of additional mobs.

- **Test validation** are additional code snippets written in JavaScript that evaluates when a test is complete.

With this simple foundation, GameTests can be created with a few lines of JavaScript code plus a Minecraft structure.

## Running tests within game

To run tests within a game, you’ll want to create a new world.  For this new world, you'll want to ensure that cheats are enabled and that the GameTest Framework experiment is turned on.  If you've created GameTest Framework behavior packs, you'll want to add those Behavior Packs in your world.

[!IMPORTANT]
You’ll also likely want to specify some additional changes in your environment:

- Selecting a Creative game mode
- Selecting a Flat world
- You'll probably also want to retain Normal difficulty (mobs work differently in completely Peaceful worlds)

Once the world is loaded, use the `/gametest` command to run tests.

To run a specific test, use `/gametest run <classname>:<testName>`, like:

`/gametest run minecarttests:turn`

To run the default set of tests, use `/gametest runset`

To run all tests, use `/gametest runset suite:all.`

## Start building your own tests

When building out your own tests, you will likely want to start your own Test Behavior Pack.  You can begin by copying out the default vanilla_gametest behavior pack that is included with Minecraft.  This vanilla_gametest folder will also contain some great starter examples that can give you ideas.

In a Windows build, these files will typically be located at `C:\Program Files\WindowsApps\Microsoft.MinecraftUWP_1.16.2100.0_x64__8wekyb3d8bbwe\data\behavior_packs\vanilla_gametest`

To get started, you'll want to begin with your own Behavior Pack.  To read more about creating behavior packs, see this topic: [Introduction To Behavior Packs](https://review.docs.microsoft.com/en-us/minecraft/creator/testdocs/behaviorpack?branch=main)

## GameTest Registration

Every GameTest needs a script file. To register this, you will want to place it within a scripts/ folder of your behavior pack, and register in in manifest.json:

 ```javascript
   "modules": [
        {
            "description": "GameTest initialization and validation",
            "type": "javascript",
            "uuid": "0b235875-a72a-4f8f-b1ad-50f4659a58aa",
            "version": [0, 0, 1],			
            "entry": "scripts/main.js"
        }
```

When a GameTest Framework-enabled world opens with this file registered, your GameTest function will execute. Here, the main role for your code is to register downstream GameTests.

Note that as you make changes to your scripts or structures as you author tests, you will need to exit out of your world and reload it. If there are any script errors, you will see them printed as the world is loaded.

To register your GameTest scripts, you'll want to use the RegistrationBuilder class. It is structured as follows:

### GameTest.register method

The GameTest.register method can be used to register a specific test function.  It works as a builder in script: you can specific base properties (the name and implementation of your function) with the .register call, and can then "chain" additional option methods and criteria for tests.

#### Method syntax

```javascript
GameTest.register(testSetName, testName, testFunction);
```

`testSetName`: String-typed name of the group of tests to be executed.

`testName`: String-typed name of the test that is executed.
  
`testFunction`: A function that implements the test.

The combination of `testSetName` and `testName` should be unique amongst all other GameTests, so `testSetName` needs to be a unique namespace for your group of tests. To run this test in game, you will run the command /gametest run testClassName:testName

`testSetName` and `testName` are also used for reporting the results of the test.  Note that they need not directly correspond to the actual JavaScript class name.

This method returns a RegistrationBuilder class, where you can add optional criteria to your class.

### RegistrationBuilder class

#### Methods

Each of these methods is intended to be chained in the initial construction of the object, and returns back a RegistrationBuilder object.

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
function phantomsShouldFlyFromCows(test) {
    ... 
}

GameTest.register("CreatorContentTests", "phantoms_should_fly_from_cows", phantomsShouldFlyFromCows)
        .maxTicks(200)
        .structureName("CreatorContentTests:glass_columns"); 

```

This is a simple registration example.  Note that you can also create different variants of one test that potentially take different mobs as parameters - for example, a pathfinding test that uses villagers or Zombies.

## Test Functions

Test functions are where the actual execution of a test happens.  The test function both sets up initial conditions for a test to run, and returns an additional test function where criteria is evaluated.

Sample Test:

```javascript
function phantomsShouldFlyFromCows(test) {
  const cowActorType = "cow";
  const phantomActorType = "phantom";

  test.spawn(cowActorType, new BlockLocation(4, 3, 3));
  test.spawn(phantomActorType, new BlockLocation(4, 3, 3));

  test.succeedWhenActorPresent(phantomActorType, new BlockLocation(4, 6, 3)); // has the phantom flown up in their column?
}
```

### GameTest Class

The GameTest class provides a full set of APIs for both setting up state within a test, as well as evaluating conditions for a test.

Assertions are used within functions (that is, succeed *and fail* functions) to confirm whether test criteria is correct.  If the assertion is not true, the function will not continue to evaluate (but the test will not be marked as failed.)  In this way, assertions can be commonly used in `succeedIf/succeedWhen`-style functions.  

|Test Evaluation Methods|Arguments|Description|
|:----------------------|---------|-----------|
|`assertEntityPresent(entityIdentifier, blockLocation)`|`string entityIdentifier`: Identifier of the type of entity to test for. `blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will stop further execution of the inner-most scope of code unless an entity is at the position indicated.|
|`assertEntityNotPresentInArea(entityIdentifier, blockLocation)`|`string entityIdentifier`: Identifier of the type of entity to test for.`blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will stop further execution of the inner-most scope of code if an entity is present within the test structure.|
|`assertBlockPresent(block, blockLocation)`|`Block block`: Identifier of the type of block to look for. `blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will stop further execution of the inner-most scope of code unless a block is at the position indicated|
|`assertBlockNotPresent(block, blockLocation)`|`Block block`: Identifier of the type of block to look for. `blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will stop further execution of the inner-most scope of code unless a block is at the position indicated.|
|`assertItemEntityPresent(itemType, blockLocation, searchDistance)`|`string itemType`: Identifier of the item to assert for.`blockLocation`: An object that contains the x,y,z coordinates for the entity to test at. `float searchDistance`: Radius in blocks to consider the item within.|Will stop further execution of the inner-most scope of code unless an item is found within the `searchDistance` of the position indicated.|
|`assertItemEntityNotPresent(itemType, blockLocation, searchDistance)`|`string itemType`: Identifier of the item to assert for. `blockLocation`: An object that contains the x,y,z coordinates for the entity to test at. `float searchDistance`: Radius in blocks to consider the item within.|Will stop further execution of the inner-most scope of code if an item is found within the searchDistance of the position indicated.|
|`succeed()`|**n/a**|When run, marks the test as successful.|
|`succeedIf(fn)`|`function fn`:  The set of code to execute for this condition.|Provides a single function, that if returns true, will mark the test as success.  This function is evaluated every tick.|
|`succeedWhen(fn)`|`function fn`: The set of code to execute for this condition.|Provides a function that is evaluated every tick – and if the function completes, the test will complete.  Typically, the succeedWhen functions are used in combination with multiple assert calls that will prevent completion of the function until all assertion criteria is met.|
|`succeedWhenEntityPresent(entityIdentifier, blockLocation)`|`string entityIdentifier`: Identifier of the type of entity to test for.`blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will mark the test as an immediate success if an entity is at a particular location.|
|`succeedWhenEntityNotPresent(entityIdentifier, blockLocation)`|`string entityIdentifier`: Identifier of the type of entity to test for.`blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will mark the test as an immediate success if an entity is NOT at a particular location.|
|`succeedWhenBlockPresent(block, blockLocation)`|`Block block`: Identifier of the type of block to look for.`blockLocation`: An object that contains the x,y,z coordinates for the entity to test at.|Will mark the test an immediate success when a block is located at the indicated position.|
|`fail(error)`|`string error`: Error message used to explain within test results what specifically went wrong.|Calling fail will immediately mark a test as failed – with error providing a description of the failed condition so that test managers know what to investigate.|
|`failIf(function fn)`|`function fn`:  A function of code to execute.|Fails a test if the passed in function returns a boolean true value.|
|`runAtTickTime(tickTime, fn)`|`int ticktime`: The time, in ticks, that the function should be run at.`function fn`:  The function of code to be executed.|Provides a function that will run at a specified time within the test.|
|`runAfterDelay`|**n/a**|Runs the specified function after a delay in time, in ticks.|
