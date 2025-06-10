---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.LeverActionAfterEventSignal Class
description: Contents of the @minecraft/server.LeverActionAfterEventSignal class.
---
# LeverActionAfterEventSignal Class

Manages callbacks that are connected to lever moves (activates or deactivates).

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void
`

Adds a callback that will be called when a lever is moved (activates or deactivates).

#### **Parameters**
- **callback**: (arg0: [*LeverActionAfterEvent*](LeverActionAfterEvent.md)) => *void*

**Returns** (arg0: [*LeverActionAfterEvent*](LeverActionAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void
`

Removes a callback from being called when a lever is moved (activates or deactivates).

#### **Parameters**
- **callback**: (arg0: [*LeverActionAfterEvent*](LeverActionAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

#### Examples

##### ***leverActionEvent.ts***

```typescript
import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a lever
  const cobblestone = targetLocation.dimension.getBlock(targetLocation);
  const lever = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (cobblestone === undefined || lever === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
  lever.setPermutation(
    BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState("lever_direction", "up_north_south")
  );

  world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
    const eventLoc = leverActionEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log("Lever activate event at tick " + system.currentTick);
    }
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/leverActionEvent.ts) code sandbox.
