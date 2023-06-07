---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.TripWireTripAfterEventSignal Class
description: Contents of the @minecraft/server.TripWireTripAfterEventSignal class.
---
# TripWireTripAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ITripWireTripAfterEventSignal*](ITripWireTripAfterEventSignal.md)

Manages callbacks that are connected to when a trip wire is tripped.

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
