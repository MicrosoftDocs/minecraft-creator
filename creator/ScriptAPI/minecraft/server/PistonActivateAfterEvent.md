---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PistonActivateAfterEvent Class
description: Contents of the @minecraft/server.PistonActivateAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PistonActivateAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a piston expanding or retracting.

## Properties

### **isExpanding**
`read-only isExpanding: boolean;`

True if the piston is the process of expanding.

Type: *boolean*

### **piston**
`read-only piston: BlockPistonComponent;`

Contains additional properties and details of the piston.

Type: [*BlockPistonComponent*](BlockPistonComponent.md)

#### Examples
##### ***pistonAfterEvent.ts***
```typescript
// set up a couple of piston blocks
let piston = overworld.getBlock(targetLocation);
let button = overworld.getBlock({
  x: targetLocation.x,
  y: targetLocation.y + 1,
  z: targetLocation.z,
});

if (piston === undefined || button === undefined) {
  log("Could not find block at location.");
  return -1;
}

piston.setPermutation(
  mc.BlockPermutation.resolve("piston").withState("facing_direction", 3)
);
button.setPermutation(
  mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1)
);

mc.world.afterEvents.pistonActivate.subscribe(
  (pistonEvent: mc.PistonActivateAfterEvent) => {
    let eventLoc = pistonEvent.piston.block.location;

    if (
      eventLoc.x === targetLocation.x &&
      eventLoc.y === targetLocation.y &&
      eventLoc.z === targetLocation.z
    ) {
      log(
        "Piston event at " +
          mc.system.currentTick +
          (pistonEvent.piston.isMoving ? " Moving" : "") +
          " State: " +
          pistonEvent.piston.state
      );
    }
  }
);
```
