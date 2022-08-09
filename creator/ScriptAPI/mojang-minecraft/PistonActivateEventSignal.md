---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.PistonActivateEventSignal Class
description: Contents of the mojang-minecraft.PistonActivateEventSignal class.
---
# PistonActivateEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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
  const pistonLoc = new mc.BlockLocation(
    Math.floor(targetLocation.x) + 1,
    Math.floor(targetLocation.y) + 2,
    Math.floor(targetLocation.z) + 1
  );
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
