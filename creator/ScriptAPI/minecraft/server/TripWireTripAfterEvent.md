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
import { Vector3, world, BlockPermutation, TripWireTripAfterEvent, system } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const targetLocation: Vector3 = { x: 0, y: 0, z: 0 };

// set up a tripwire
const redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
const tripwire = overworld.getBlock(targetLocation);

if (redstone === undefined || tripwire === undefined) {
    console.warn('Could not find block at location.');
} else {

redstone.setPermutation(BlockPermutation.resolve('redstone_block'));
tripwire.setPermutation(BlockPermutation.resolve('tripwire'));

world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
    const eventLoc = tripWireTripEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
        console.warn(
            'Tripwire trip event at tick ' +
                system.currentTick +
                (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : ''),
        );
    }
});
}
```

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
import { Vector3, world, BlockPermutation, TripWireTripAfterEvent, system } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const targetLocation: Vector3 = { x: 0, y: 0, z: 0 };

// set up a tripwire
const redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
const tripwire = overworld.getBlock(targetLocation);

if (redstone === undefined || tripwire === undefined) {
    console.warn('Could not find block at location.');
} else {

redstone.setPermutation(BlockPermutation.resolve('redstone_block'));
tripwire.setPermutation(BlockPermutation.resolve('tripwire'));

world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
    const eventLoc = tripWireTripEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
        console.warn(
            'Tripwire trip event at tick ' +
                system.currentTick +
                (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : ''),
        );
    }
});
}
```
