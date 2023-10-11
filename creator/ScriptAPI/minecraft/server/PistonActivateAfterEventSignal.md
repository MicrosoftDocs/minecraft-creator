---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PistonActivateAfterEventSignal Class
description: Contents of the @minecraft/server.PistonActivateAfterEventSignal class.
---
# PistonActivateAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to piston activations.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void
`

Adds a callback that will be called when a piston expands or retracts.

#### **Parameters**
- **callback**: (arg: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*

#### **Returns** (arg: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

#### Examples
##### ***pistonAfterEvent.ts***
```typescript
  // set up a couple of piston blocks
  let piston = overworld.getBlock(targetLocation);
  let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });

  if (piston === undefined || button === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  piston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3));
  button.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1));

  mc.world.afterEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateAfterEvent) => {
    let eventLoc = pistonEvent.piston.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        "Piston event at " +
          mc.system.currentTick +
          (pistonEvent.piston.isMoving ? " Moving" : "") +
          (pistonEvent.piston.isExpanding ? " Expanding" : "") +
          (pistonEvent.piston.isExpanded ? " Expanded" : "") +
          (pistonEvent.piston.isRetracting ? " Retracting" : "") +
          (pistonEvent.piston.isRetracted ? " Retracted" : "")
      );
    }
  });
```
##### ***pistonEvent.ts***
```typescript
let canceled = false;

const pistonLoc: mc.Vector3 = {
  x: Math.floor(targetLocation.x) + 1,
  y: Math.floor(targetLocation.y) + 2,
  z: Math.floor(targetLocation.z) + 1,
};

const pistonCallback = mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => {
  if (pistonEvent.piston.location.equals(pistonLoc)) {
    log("Cancelling piston event");
    pistonEvent.cancel = true;
    canceled = true;
  }
});

```

### **unsubscribe**
`
unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void
`

Removes a callback from being called when a piston expands or retracts.

#### **Parameters**
- **callback**: (arg: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
