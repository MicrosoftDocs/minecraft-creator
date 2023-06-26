---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.LeverActionAfterEvent Class
description: Contents of the @minecraft/server.LeverActionAfterEvent class.
---
# LeverActionAfterEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a lever activating or deactivating.

## Properties

### **isPowered**
`read-only isPowered: boolean;`

True if the lever is activated (that is, transmitting power).

Type: *boolean*

### **player**
`read-only player: Player;`

Optional player that triggered the lever activation.

Type: [*Player*](Player.md)

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
