---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PistonActivateEventSignal Class
description: Contents of the @minecraft/server.PistonActivateEventSignal class.
---
# PistonActivateEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to piston activations.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void
`

Adds a callback that will be called when a piston expands or retracts.

#### **Parameters**
- **callback**: (arg: [*PistonActivateEvent*](PistonActivateEvent.md)) => *void*

#### **Returns** (arg: [*PistonActivateEvent*](PistonActivateEvent.md)) => *void*

#### **Examples**
##### *pistonEvent.ts*
```javascript
let canceled = false;
const pistonLoc: mc.Vector3 = {
  x: Math.floor(targetLocation.x) + 1,
  y: Math.floor(targetLocation.y) + 2,
  z: Math.floor(targetLocation.z) + 1,
};
const pistonCallback = mc.world.events.beforePistonActivate.subscribe((pistonEvent: mc.BeforePistonActivateEvent) => {
  if (pistonEvent.piston.location.equals(pistonLoc)) {
    log("Cancelling piston event");
    pistonEvent.cancel = true;
    canceled = true;
  }
});
```

### **unsubscribe**
`
unsubscribe(callback: (arg: PistonActivateEvent) => void): void
`

Removes a callback from being called when a piston expands or retracts.

#### **Parameters**
- **callback**: (arg: [*PistonActivateEvent*](PistonActivateEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
