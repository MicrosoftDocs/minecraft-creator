---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.TripWireTripAfterEvent Class
description: Contents of the @minecraft/server.TripWireTripAfterEvent class.
---
# TripWireTripAfterEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a trip wire trip.

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

## Properties

### **isPowered**
`read-only isPowered: boolean;`

Whether or not the block has redstone power.

Type: *boolean*

### **sources**
`read-only sources: Entity[];`

The sources that triggered the trip wire to trip.

Type: [*Entity*](Entity.md)[]

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
