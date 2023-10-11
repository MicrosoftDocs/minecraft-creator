---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.LeverActionAfterEventSignal Class
description: Contents of the @minecraft/server.LeverActionAfterEventSignal class.
---
# LeverActionAfterEventSignal Class

## Extends
- [*ILeverActionAfterEventSignal*](ILeverActionAfterEventSignal.md)

Manages callbacks that are connected to lever moves (activates or deactivates).

#### Examples
##### ***leverActivateEvent.ts***
```typescript
  // set up a lever
  let cobblestone = overworld.getBlock(targetLocation);
  let lever = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });

  if (cobblestone === undefined || lever === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(mc.BlockPermutation.resolve("cobblestone"));
  lever.setPermutation(mc.BlockPermutation.resolve("lever").withState("lever_direction", "up_north_south" /* up */));

  mc.world.afterEvents.leverActivate.subscribe((leverActivateEvent: mc.LeverActionAfterEvent) => {
    let eventLoc = leverActivateEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log(
        "Lever activate event at tick " +
          mc.system.currentTick +
          " Power:" +
          leverActivateEvent.block.getRedstonePower()
      );
    }
  });
```
