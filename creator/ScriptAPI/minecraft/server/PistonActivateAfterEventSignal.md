---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PistonActivateAfterEventSignal Class
description: Contents of the @minecraft/server.PistonActivateAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PistonActivateAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to piston activations.

#### Examples
##### ***pistonAfterEvent.ts***
```typescript
import { world, system, PistonActivateAfterEvent } from '@minecraft/server';

world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    console.warn(
        `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,
    );
});
```

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*

#### **Returns** (arg: [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

#### Examples
##### ***pistonAfterEvent.ts***
```typescript
import { world, system, PistonActivateAfterEvent } from '@minecraft/server';

world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    console.warn(
        `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,
    );
});
```
