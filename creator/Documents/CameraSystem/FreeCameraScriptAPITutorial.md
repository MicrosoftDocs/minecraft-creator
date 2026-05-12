---
author: chipotle
ms.author: mikeam
title: Animating with the Free Camera Script API
description: "How to use the camera scripting API with the free camera preset, including flyover animation with camera splines."
ms.service: minecraft-bedrock-edition
ms.date: 05/01/2026
---

# Animating with the Free Camera Script API

In this tutorial, you'll learn how to use the camera scripting API to move the camera away from players and other entities, showing more of the environment and even performing swooping flyovers. Among other features, you'll learn how to:

> [!div class="checklist"]
>
> - Set up a free camera with the script API
> - Animate the camera's motion along spline-based paths
> - Use easing functions

## Prerequisites

You should be familiar with the following before starting this tutorial:

- [The Camera System](./CameraCommandIntroduction.md)
- [Introduction to Scripting in Minecraft](../scripting/introduction.md)
- [Scripting with TypeScript](../scripting/next-steps.md)

## Set up your workspace

We're going to start by using the TypeScript starter project that's available as a template in Minecraft Creator Tools. This is also available in the Minecraft Scripting Samples GitHub repository (<https://github.com/microsoft/minecraft-scripting-samples/>), but for this tutorial, we'll start at the Creator Tools website.

1. Open <https://mctools.dev> in your browser.

2. Scroll down to **Start From a Template** and find **Code Starter (TypeScript)**. Click **Create New**.

3. In the dialog box, enter a title like "CameraAnimation" and your creator name.

4. Open the **Advanced Options** and give the project a folder name and a description.

5. Select **Save to My Computer** and choose an empty folder to save to. (We created one named **mc_camera** for the tutorial.)

    :::image type="content" source="./Media/mctools-create-project.png" alt-text="The mctools.dev TypeScript Starter creation dialog box, with the fields filled out.":::

6. Click **Create Project**.

    After Creator Tools finishes, it'll show you the dashboard for your project, and the files will be saved in the folder you selected in step 5.

7. In Windows Terminal or PowerShell, change to the directory you created in Step 5, and install the required Node tools and libraries:

    ```powershell
    npm i
    ```
 
> [!TIP]
>
> You can edit your files directly in Minecraft Creator Tools, or edit them in Visual Studio Code (or another text editor).
>
> You can also download the TypeScript Code Starter sample pack from the [Scripting Samples repository](https://github.com/microsoft/minecraft-scripting-samples/), either by downloading a Zip file or cloning the repository with Git. If you take this approach, you should copy the **ts-starter** folder to a new work directory (like **mc_camera** in the example above).

## Build the flyover script

Open **scripts/main.ts** in your editor, and replace its code with the following setup:

```typescript
import { world, system, BlockPermutation, Player, CatmullRomSpline, EasingType } from "@minecraft/server";

const FLYOVER_DURATION = 20; // fly over for 20 seconds
const INIT_RETRY_TICKS = 40; // retry every two seconds
const MAX_INIT_RETRIES = 15; // try to spawn for about 30 sec

let ticksSinceLoad = 0;
let initRetries = 0;

// -- Startup Tick --
function mainTick() {
  ticksSinceLoad++;

  if (ticksSinceLoad === 100) {
    world.sendMessage("Welcome to the flyover!");
    initialize();
  }

  system.run(mainTick);
}

// -- start the mainTick loop --
system.run(mainTick);
```

You've seen code like this before: a main loop driven by counting ticks, whose main purpose is to wait 100 ticks and then call the `initialize()` function. Now, let's work on that function.

```typescript
// -- place the button --
function initialize() {
  const overworld = world.getDimension("overworld");
  const buttonLocation = setButtonLocation();

  if (buttonLocation === undefined) {
    if (initRetries < MAX_INIT_RETRIES) {
      initRetries++;
      world.sendMessage(
        "Waiting for chunks to load near spawn (attempt " + initRetries + " of " + MAX_INIT_RETRIES + ")"
      );
      system.runTimeout(() => initialize(), INIT_RETRY_TICKS);
    } else {
      world.sendMessage("Could not find a valid location for the button. Try moving closer to spawn and /reload!");
    }
    return;
  }

  // we have the button location, so let's try and spawn it
  const cobblestone = overworld.getBlock(buttonLocation);
  const button = overworld.getBlock({
    x: buttonLocation.x,
    y: buttonLocation.y + 1,
    z: buttonLocation.z,
  });

  if (button === undefined || cobblestone === undefined) {
    if (initRetries < MAX_INIT_RETRIES) {
      initRetries++;
      system.runTimeout(() => initialize(), INIT_RETRY_TICKS);
    } else {
      world.sendMessage("Could not place the switch.");
    }
    return;
  }

  // all systems go!
  cobblestone.setPermutation(BlockPermutation.resolve("cobblestone"));
  button.setPermutation(BlockPermutation.resolve("spruce_button", { facing_direction: 1 }));
  world.afterEvents.buttonPush.subscribe(onButtonPush);

  world.sendMessage(
    "Press the button at X:" + buttonLocation.x + " Y:" + buttonLocation.y + " Z:" + buttonLocation.z + " to start!"
  );
}

function setButtonLocation(): { x: number; y: number; z: number } | undefined {
  const spawnLoc = world.getDefaultSpawnLocation();
  const x = spawnLoc.x - 5;
  const z = spawnLoc.z - 5;
  const y = findTopmostBlock(x, z);
  if (y === undefined) return undefined;
  return { x, y, z };
}

function findTopmostBlock(x: number, z: number): number | undefined {
  const overworld = world.getDimension("overworld");
  const players = world.getPlayers();
  if (players.length === 0) return undefined;
  const startY = Math.floor(Math.max(players[0].location.y, -62));

  // Check if the chunk is loaded at this position
  let block = overworld.getBlock({ x, y: startY, z });
  if (block === undefined) return undefined;

  // if we're in air, go down to find the topmost solid block
  if (block.permutation.matches("minecraft:air")) {
    let y = startY;
    while (y >= -62) {
      block = overworld.getBlock({ x, y, z });
      if (block === undefined) return undefined;
      if (!block.permutation.matches("minecraft:air")) {
        return y + 1; // first air block above ground
      }
      y--;
    }
    return undefined; // no solid ground found
  } else {
    // We're underground; go up to find the first air block
    let y = startY;
    while (y <= 320) {
      block = overworld.getBlock({ x, y, z });
      if (block === undefined) return undefined;
      if (block.permutation.matches("minecraft:air")) {
        return y;
      }
      y++;
    }
    return undefined; // no air found (shouldn't happen)
  }
}
```

That's a big chunk. Going through it in order, here's what it does:

- Gets what should be a viable location for the button by calling `setButtonLocation()`, trying up to `MAX_INIT_RETRIES` to find a valid spot
- Tries to get a block at that location
- Sets that block to be our button
- Sets the button's event handler to `onButtonPush()`, which we haven't written yet
- Sends a message with the button's location to the player

We also define two helper functions, `setButtonLocation()` and `findTopmostBlock()`, that are needed for placing the button.

The button's event handler is simple: it just calls yet another function for each player, `startFlyover()`.

```typescript
// -- fire off flyover when button is pushed --
function onButtonPush() {
  system.run(() => {
    const players = world.getPlayers();
    for (const player of players) {
      startFlyover(player);
    }
  });
}
```

Last but not least, `startFlyover()` is the actual animation player function.

```typescript
// -- run the flyover --
function startFlyover(player: Player) {
  const playerLoc = player.location;
  const flyoverHeight = Math.min(playerLoc.y + 200, 320) - playerLoc.y;

  // build a CatmullRom spline that arcs over the player
  const flyover = new CatmullRomSpline();
  flyover.controlPoints = [
    { x: playerLoc.x, y: playerLoc.y + 1, z: playerLoc.z },
    { x: playerLoc.x - 100, y: playerLoc.y + flyoverHeight * 0.5, z: playerLoc.z - 100 },
    { x: playerLoc.x + 100, y: playerLoc.y + flyoverHeight, z: playerLoc.z - 100 },
    { x: playerLoc.x + 100, y: playerLoc.y + flyoverHeight, z: playerLoc.z + 100 },
    { x: playerLoc.x - 100, y: playerLoc.y + flyoverHeight * 0.66, z: playerLoc.z + 100 },
    { x: playerLoc.x, y: playerLoc.y + 1, z: playerLoc.z },
  ];

  // set camera to free mode
  try {
    player.camera.setCamera("minecraft:free", {
      location: { x: playerLoc.x, y: playerLoc.y + 1, z: playerLoc.z },
      rotation: { x: 0, y: 0 },
    });
  } catch (e) {
    world.sendMessage("Error setting free camera: " + e);
  }

  // play the animation
  system.runTimeout(() => {
    try {
      player.camera.playAnimation(flyover, {
        animation: {
          progressKeyFrames: [
            { timeSeconds: 0, alpha: 0, easingFunc: EasingType.InOutCubic },
            { timeSeconds: FLYOVER_DURATION, alpha: 1, easingFunc: EasingType.InOutCubic },
          ],
          rotationKeyFrames: [
            {
              timeSeconds: 0,
              rotation: { x: -20, y: 180, z: 0 },
              easingFunc: EasingType.InOutSine,
            },
            {
              timeSeconds: FLYOVER_DURATION * 0.5,
              rotation: { x: -55, y: 0, z: 0 },
              easingFunc: EasingType.InOutSine,
            },
            {
              timeSeconds: FLYOVER_DURATION,
              rotation: { x: -20, y: 270, z: 0 },
              easingFunc: EasingType.InOutSine,
            },
          ],
        },
        totalTimeSeconds: FLYOVER_DURATION,
      });
    } catch (e) {
      world.sendMessage("Error playing animation: " + e);
    }
  }, 2); // 2-tick delay for free camera to take effect

  // clear camera after tour
  system.runTimeout(
    () => {
      player.camera.clear();
    },
    FLYOVER_DURATION * 20 + 1
  );
}
```

The flyover is defined as a Catmull-Rom [spline](https://en.wikipedia.org/wiki/Spline_(mathematics)), which constructs a smooth, curved path defined by a handful of control points. You set the control points, and Minecraft uses the Catmull-Rom spline formula to plot a curve that passes through all of them. In the code above, we use five control points that describe a square around the player's location when they press the button, rising into the air and then descending again as it finishes by moving directly over the player. The curve that the spline function creates from these control points will be a counter-clockwise spiral.

> [!NOTE]
>
> Where did the name "Catmull-Rom" come from, you wonder? [Edwin Catmull](https://en.wikipedia.org/wiki/Edwin_Catmull) was its co-inventor&mdash;and also the co-founder of Pixar.

After that, we set up a [free camera](./CameraPresetFree.md), which we start over the player. Then we start the main event: the `playAnimation()` function, which takes the spline we've defined as its first parameter, then a few options in a key/value object:

- `animation.progressKeyFrames` defines an [easing function](https://easings.net/) and alpha value at the start and end of the animation
- `animation.rotationKeyFrames` defines rotation values and easing functions at the start, halfway point, and end of the animation, so the camera rotates to different facings throughout the flyover
- `totalTimeSeconds` is set to the total time of the animation

Finally, we execute `player.camera.clear()` at the end of the tour to return the player's camera to normal.

## Test the add-on

Now we're ready to give it a whirl! In your PowerShell or terminal window, make sure you're in the top-level directory for your add-on (like **mc_camera**) and type:

```powershell
npx just local-deploy
```

This copies the files over to Minecraft: Bedrock Edition's resource and behavior pack add-on directories for you.

Now, launch Bedrock Edition and create a new world. Use the **Creative** game mode. Turn on **Cheats**, and in Experiments, turn on **Experimental Creator Camera Features**.

In **Resource packs**, activate the resource pack for the flyover.

:::image type="content" source="./Media/flyover-activate-rp.png" alt-text="Minecraft: Bedrock Edition Create World screen, showing the resource pack activation tab":::

> [!TIP]
>
> If your resource pack still has the default name of "My Resource Pack," you can edit that in **behavior_packs/camera/manifest.json**.

Now, create the world!

When the world launches, you'll be shown a message with the button's coordinates. You can find it on your own, or teleport to it.

:::image type="content" source="./Media/flyover-start-message.png" alt-text="The message sent at game startup with the coordinates of the flyover start button":::

Then, find the button and press it with a right click...

:::image type="content" source="./Media/flyover-start-button.jpg" alt-text="The button as it appears in Minecraft":::

...and you'll be off and soaring! At the end of the tour, the camera should return to where you are, and switch back to first-person view.

:::image type="content" source="./Media/flyover-in-flight.jpg" alt-text="An overhead view of the world, seen from the flyover tour.":::

## Using the Bedrock Editor to create splines

While you can define spline control points the way we did in this example, there's an alternative which can be easier, especially the more control points you have. The [Camera Tool](../BedrockEditor/EditorCameraTool.md) offers a GUI-based, interactive way to define the control points for splines. After you define the spline to make the moves you want, you can export the code from the Editor to use in your own add-on.

## Attach the camera to an entity

While the flyover doesn't demonstrate the ability to attach a camera to an entity, you can find an example of that in the [1.26.10 Update Video](https://www.youtube.com/watch?v=IRKOm9zRj_E), which features a similar flyover script that gives you a "tour" of a zoo. After the tour, it lets you look through the eyes of a sheepomelon for three seconds.

This code excerpt uses the `player` object as defined in our flyover ( a single player `Entity`), and assumes we've got a sheepomelon `Entity` assigned to `sheepomelon`.

```typescript
// assume we have a player entity object and a sheepomelon entity object
world.sendMessage("Seeing through a sheepomelon's eyes...");
player.camera.attachToEntity({ entity: sheepomelon, locator: EntityAttachPoint.Eyes });

// return control to the player after three seconds!
system.runTimeout(() => {
  player.camera.clear();
}, 60);
```

(If you don't execute `player.camera.clear()` at the end, the player will have to use the `/camera` command to do it on their own when they get bored.)

You can use this to attach the camera to any non-player entity, giving you a lot of new power in creating cutscenes and movies!

## Go further

There are enhancements and improvements you can make to this script on your own. You might want to change the path or timing of the flyover, or even use a [fade transition](../../ScriptAPI/minecraft/server/Camera.md#fade) at its start or end (or both).
