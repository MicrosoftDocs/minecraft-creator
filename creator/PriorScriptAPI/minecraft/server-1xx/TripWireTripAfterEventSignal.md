---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.TripWireTripAfterEventSignal Class
description: Contents of the @minecraft/server.TripWireTripAfterEventSignal class (Version 1.x.x).
---
# TripWireTripAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/TripWireTripAfterEventSignal.md).

Manages callbacks that are connected to when a trip wire is tripped.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void
`

Adds a callback that will be called when a trip wire is tripped.

#### **Parameters**
- **callback**: (arg0: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

**Returns** (arg0: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void
`

Removes a callback from being called when a trip wire is tripped.

#### **Parameters**
- **callback**: (arg0: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

#### Examples

##### ***tripWireTripEvent.ts***

```typescript
import { world, system, BlockPermutation, TripWireTripAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function tripWireTripEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a tripwire
  const redstone = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y - 1,
    z: targetLocation.z,
  });
  const tripwire = targetLocation.dimension.getBlock(targetLocation);

  if (redstone === undefined || tripwire === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  redstone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.RedstoneBlock));
  tripwire.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.TripWire));

  world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
    const eventLoc = tripWireTripEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        "Tripwire trip event at tick " +
          system.currentTick +
          (tripWireTripEvent.sources.length > 0 ? " by entity " + tripWireTripEvent.sources[0].id : "")
      );
    }
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/tripWireTripEvent.ts) code sandbox.
