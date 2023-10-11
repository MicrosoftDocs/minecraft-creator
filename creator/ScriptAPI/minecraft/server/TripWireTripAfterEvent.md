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
  // set up a tripwire
  let redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
  let tripwire = overworld.getBlock(targetLocation);

  if (redstone === undefined || tripwire === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  redstone.setPermutation(mc.BlockPermutation.resolve("redstone_block"));
  tripwire.setPermutation(mc.BlockPermutation.resolve("tripwire"));

  mc.world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: mc.TripWireTripAfterEvent) => {
    let eventLoc = tripWireTripEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        "Tripwire trip event at tick " +
          mc.system.currentTick +
          (tripWireTripEvent.sources.length > 0 ? " by entity " + tripWireTripEvent.sources[0].id : "")
      );
    }
  });
```
