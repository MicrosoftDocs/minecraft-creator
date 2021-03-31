---
author: v-josjones
ms.author: v-josjones
title: Getting Started with GameTest
ms.prod: Gaming
---

# Building your first GameTest

## What's in a GameTest?

A GameTest is a miniature environment along with a set of starting conditions; such as a set of mobs or items.  After that environment plays out in the Minecraft world for a little while, you can run conditional code to evaluate that your expectations were met.  

Building sets of GameTests requires building out your GameTests via a Behavior Pack, and writing some simple JavaScript code.

>[!IMPORTANT]
>GameTest Framework is still experimental. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.  Check the Minecraft Changelog for details on any changes to GameTest Framework.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

> [!div class="checklist"]
> - [Introduction To Behavior Packs](https://review.docs.microsoft.com/en-us/minecraft/creator/testdocs/behaviorpack?branch=main)

### GameTest Elements

Within a Behavior Pack, every GameTest consists of a few elements:

- **A structure** which defines the physical environment for the test as well as any starting entities.  Within Minecraft, you can create new structures by designing them out (typically in Creative Mode) and then placing a Structure Block. You can then use the Structure Block to save out the results to disk.

This creates an .mcstructure file which you can add to your test.  When GameTests are run in Minecraft, your structure will be loaded and expanded into Minecraft. You should note that this Structure will be instantiated in a generally flat world, broader world, so you'll want to ensure that any mobs are penned into the structures you create.

GameTests then use JavaScript code to define the test, including:

- **Test registration** - a small amount of code to establish a test in the environment.

- **Test setup** - additional code that sets up conditions within the Structure environment that has been created. Typically, this will be the creation of additional mobs.

- **Test validation** are additional code snippets written in JavaScript that evaluates when a test is complete.

With this simple foundation, GameTests can be created with a few lines of JavaScript code plus a Minecraft structure.

## Start building your own tests

To get started, you'll want to begin with your own Behavior Pack.  Create a new folder in the `development_behavior_packs` folder, and a subfolder within that called `startertests`.

Within the `startertests` folder, you'll also want to include two subfolders:

- `structures` for holding MCStructure files
- `scripts` for holding JavaScript files

### Update your manifest

A behavior pack manifest needs to have additional elements to support GameTests.  The `modules` section needs one module that registers your JavaScript code entry point as follows:

``` JSON
    "modules": [
        {
            "description": "Script that implements basic starter tests.",
            "type": "javascript",
            "uuid": "1A1B53FC-5653-4A75-91B7-9CDF027674AE",
            "version": [0, 0, 1],
            "entry": "scripts/StarterTests.js"
        }
    ]
```

Note several facets of this `module`:

- This module is of type `javascript`.  
- The `uuid` needs to be unique and generated for your project.  See the Introduction to Behavior packs topic for tools for generating new UUIDs.
- The `entry` attribute points to a JavaScript file that contains your GameTest code.

In addition, you will need to establish dependencies on Minecraft APIs and GameTest Framework.  You can do this with additional dependencies, below:

``` JSON
 "dependencies": [
      {
        "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
        "version": [ 0, 1, 0 ]
      },
      {
        "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
        "version": [ 0, 1, 0 ]
      }
    ]
```
>[!WARNING]
>Note that here `uuid` refer to core Minecraft components. You should **not** change these values.

>[!IMPORTANT]
>As you can see, GameTest Framework tests dependent on versions "0.1.0" of Minecraft APIs and GameTest Framework.  Version 0 indicates that these features are still **experimental**. As with all experiments, we are improving their capabilities over time, and API signatures may change build over build without advanced notice.  Check the Minecraft Changelog for more changes over time.



A full manifest file for a Behavior Pack with a GameTest looks like:

``` JSON
{
    "format_version": 2,
    "header": {
        "description": "Introductory tests for Minecraft GameTest Framework.",
        "name": "Starter Hello World Tests",
        "uuid": "1A2F42BD-98D4-4E0D-8E3F-934AB8A0C05E",
        "version": [0, 0, 1],
        "min_engine_version": [ 1, 14, 0 ]
    },
    "modules": [
        {
            "description": "Script that implements basic starter tests.",
            "type": "javascript",
            "uuid": "1A1B53FC-5653-4A75-91B7-9CDF027674AE",
            "version": [0, 0, 1],
            "entry": "scripts/StarterTests.js"
        }
    ],
    "dependencies": [
      {
        "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
        "version": [ 0, 1, 0 ]
      },
      {
        "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
        "version": [ 0, 1, 0 ]
      }
    ]
}
```

### GameTest Registration

Every GameTest needs a script file. As you saw in the previous section, we added a module with an `entry` attribute that points at a JavaScript file:

```json
        "entry": "scripts/StarterTests.js"
```

When a GameTest Framework-enabled world opens with this file registered, your GameTest JavaScript file will load and execute. Here, the main role for your code is to register downstream GameTests.

Note that as you make changes to your scripts or structures as you author tests, you will need to exit out of your world and reload it. If there are any script errors, you will see them printed as the world is loaded.

To register your GameTest scripts, you'll want to use the RegistrationBuilder class. You can see more information on the Registration Builder class at [Registration Builder](../TestAPI/GameTest/RegistrationBuilder.md).

An example line of JavaScript that uses RegistrationBuilder looks like:

```javascript
// Registration Code for our test
GameTest.register("StarterTests", "simpleMobTest", simpleMobTest)
        .maxTicks(410)
        .structureName("StarterTests:mediumglass");   
        /* use the mediumglass.mcstructure file */
```

This line of code establishes a new test called `simpleMobTest` within the `StarterTests` test group.
It adds an additional parameter (`maxTicks`) that expresses this test may take 410 ticks (20.5 seconds) to run.
Finally, the GameTest specifies a MCStructure (`Startertests:mediumglass`).  By convention, this causes Minecraft to use an MCStructure file at `/structures/StarterTests/mediumglass.mcstructure` within your behavior pack folder.

The rest of the JavaScript uses the GameTest Helper class to actually express the test within a `simpleMobTest` function.

### Test Functions

Test functions are where the actual execution of a test happens.  The test function both sets up initial conditions for a test to run, and returns an additional test function where criteria is evaluated.

Sample Test:

```javascript
import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
        
function simpleMobTest(test) 
{  
        const attackerType = "fox";
        const victimType = "chicken";
        
        test.spawn(attackerType, new BlockLocation(5, 2, 5));
        test.spawn(victimType, new BlockLocation(2, 2, 2));
        
        // wait 20 seconds, then check whether the victim still exists
        test.runAtTickTime(400, () =>{
                        assertEntityNotInArea(test, victimType, 1, 1, 1, 10, 9, 10);
                        test.succeed();
        });
}

/// Helper Function that will throw an error and stop further execution if it finds a mob
/// in an area.
function assertEntityNotInArea(test, entityType, xFrom, yFrom, zFrom, xTo, yTo, zTo)
{
        for (let i=xFrom; i<=xTo; i++)
        {
                for (let j=yFrom; j<=yTo; j++)
                {
                        for (let k=zFrom; k<=zTo; k++)
                        {
                                test.assertEntityNotPresent(entityType, new BlockLocation(i, j, k));
                        }
                }
        }
}
```

Some things to observe in this test function:

- You can use the `spawn` method to create new Mobs in your test
- Note that coordinates are relative to within your .MCStructure
- `assert` functions cause code execution to stop if the conditions described in the method are not true.  Here, utilizing a helper function, this code asserts that a chicken entity is no longer in the structure. If one is found within any of the blocks in the structure, that `assert` code will throw an error.  But if no chicken is found, we make our way to the test.succeed line of code, and the test passes.

The full JavaScript StarterTests.js file looks like:

```javascript
import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
        
function simpleMobTest(test) 
{  
        const attackerType = "fox";
        const victimType = "chicken";
        
        test.spawn(attackerType, new BlockLocation(5, 2, 5));
        test.spawn(victimType, new BlockLocation(2, 2, 2));
        
        // wait 20 seconds, then check whether the victim still exists
        test.runAtTickTime(400, () =>{
                        assertEntityNotInArea(test, victimType, 1, 1, 1, 10, 9, 10);
                        test.succeed();
        });
}

/// Helper Function that will throw an error and stop further execution if it finds a mob
/// in an area.
function assertEntityNotInArea(test, entityType, xFrom, yFrom, zFrom, xTo, yTo, zTo)
{
        for (let i=xFrom; i<=xTo; i++)
        {
                for (let j=yFrom; j<=yTo; j++)
                {
                        for (let k=zFrom; k<=zTo; k++)
                        {
                                test.assertEntityNotPresent(entityType, new BlockLocation(i, j, k));
                        }
                }
        }
}

/// Registration Code for our test
GameTest.register("StarterTests", "simpleMobTest", simpleMobTest)
        .maxTicks(410)
        .structureName("StarterTests:mediumglass");   /* use the mediumglass.mcstructure file */
```

## Running your tests within the game

Once you have completed your GameTest behavior pack, you'll want to try it out within Minecraft. To do this, create a new Minecraft world. For this new world, you'll want to ensure that cheats are enabled and that the GameTest Framework experiment is turned on. You'll want to add the GameTeset Behavior Packs in your world.

<Add Image>

>[!IMPORTANT]
>You’ll also likely want to specify some additional changes in your environment:
>- Selecting a Flat world
>- You'll probably also want to retain Normal difficulty (mobs work differently in completely Peaceful worlds)

Once the world is loaded, use the `/gametest` command to run tests.

To run a specific test, use `/gametest run <classname>:<testName>`, like:

`/gametest run startertests:simpleMobTest`

## What's Next

You've created your first GameTest Framework test. GameTests allow you as a Creator to stretch your content, exercise your entities, and validate your gameplay mechanics. You can view the GameTest API below to learn more about what is included in the GameTest Framework.

> [!div class="nextstepaction"]
> [GameTest API](TestAPI/gametest.md)