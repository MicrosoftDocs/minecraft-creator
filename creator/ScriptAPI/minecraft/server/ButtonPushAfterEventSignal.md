---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ButtonPushAfterEventSignal Class
description: Contents of the @minecraft/server.ButtonPushAfterEventSignal class.
---
# ButtonPushAfterEventSignal Class

Manages callbacks that are connected to when a button is pushed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void
`

Adds a callback that will be called when a button is pushed.

#### **Parameters**
- **callback**: (arg0: [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)) => *void*

**Returns** (arg0: [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void
`

Removes a callback from being called when a button is pushed.

#### **Parameters**
- **callback**: (arg0: [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

#### Examples

##### ***buttonPushEvent.ts***

```typescript
import { world, system, BlockPermutation, ButtonPushAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function buttonPushEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a button on cobblestone
  const cobblestone = targetLocation.dimension.getBlock(targetLocation);
  const button = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (cobblestone === undefined || button === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
  button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState("facing_direction", 1));

  world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const eventLoc = buttonPushEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log("Button push event at tick " + system.currentTick);
    }
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/buttonPushEvent.ts) code sandbox.
