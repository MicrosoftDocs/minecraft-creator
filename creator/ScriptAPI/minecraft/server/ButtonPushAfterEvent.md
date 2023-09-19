---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.ButtonPushAfterEvent Class
description: Contents of the @minecraft/server.ButtonPushAfterEvent class.
ms.service: minecraft-bedrock-edition
---
# ButtonPushAfterEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a button push.

## Properties

### **source**
`read-only source: Entity;`

Optional source that triggered the button push.

Type: [*Entity*](Entity.md)

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
