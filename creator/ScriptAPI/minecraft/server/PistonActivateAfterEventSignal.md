---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PistonActivateAfterEventSignal Class
description: Contents of the @minecraft/server.PistonActivateAfterEventSignal class.
---
# PistonActivateAfterEventSignal Class

Manages callbacks that are connected to piston activations.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*

**Returns** (arg0: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

#### Examples

##### ***pistonAfterEvent.ts***

```typescript
import { world, system, BlockPermutation, BlockPistonState, PistonActivateAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function pistonAfterEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a couple of piston blocks
  const piston = targetLocation.dimension.getBlock(targetLocation);
  const button = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (piston === undefined || button === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  piston.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston).withState("facing_direction", 3));
  button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState("facing_direction", 1));

  world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    const eventLoc = pistonEvent.piston.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        "Piston event at " +
          system.currentTick +
          (pistonEvent.piston.isMoving ? " Moving" : "") +
          (pistonEvent.piston.state === BlockPistonState.Expanding ? " Expanding" : "") +
          (pistonEvent.piston.state === BlockPistonState.Expanded ? " Expanded" : "") +
          (pistonEvent.piston.state === BlockPistonState.Retracting ? " Retracting" : "") +
          (pistonEvent.piston.state === BlockPistonState.Retracted ? " Retracted" : "")
      );
    }
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/pistonAfterEvent.ts) code sandbox.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void
`

Removes a callback from being called when a piston expands or retracts.

#### **Parameters**
- **callback**: (arg0: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
