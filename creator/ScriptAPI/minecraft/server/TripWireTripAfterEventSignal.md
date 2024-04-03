---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.TripWireTripAfterEventSignal Class
description: Contents of the @minecraft/server.TripWireTripAfterEventSignal class.
---
# TripWireTripAfterEventSignal Class

Manages callbacks that are connected to when a trip wire is tripped.

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

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void
`

Adds a callback that will be called when a trip wire is tripped.

#### **Parameters**
- **callback**: (arg: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

**Returns** (arg: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void
`

Removes a callback from being called when a trip wire is tripped.

#### **Parameters**
- **callback**: (arg: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

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
