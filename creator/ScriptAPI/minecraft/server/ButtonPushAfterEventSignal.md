---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ButtonPushAfterEventSignal Class
description: Contents of the @minecraft/server.ButtonPushAfterEventSignal class.
---
# ButtonPushAfterEventSignal Class

## Extends
- [*IButtonPushAfterEventSignal*](IButtonPushAfterEventSignal.md)

Manages callbacks that are connected to when a button is pushed.

#### Examples
##### ***buttonPushEvent.ts***
```typescript
  // set up a button on cobblestone
  let cobblestone = overworld.getBlock(targetLocation);
  let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });

  if (cobblestone === undefined || button === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(mc.BlockPermutation.resolve("cobblestone"));
  button.setPermutation(mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1 /* up */));

  mc.world.afterEvents.buttonPush.subscribe((buttonPushEvent: mc.ButtonPushAfterEvent) => {
    let eventLoc = buttonPushEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log("Button push event at tick " + mc.system.currentTick + " Power:" + buttonPushEvent.block.getRedstonePower());
    }
  });
```
