---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PistonActivateAfterEvent Class
description: Contents of the @minecraft/server.PistonActivateAfterEvent class.
---
# PistonActivateAfterEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a piston expanding or retracting.

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

## Properties

### **isExpanding**
`read-only isExpanding: boolean;`

True if the piston is the process of expanding.

Type: *boolean*

### **piston**
`read-only piston: BlockPistonComponent;`

Contains additional properties and details of the piston.

Type: [*BlockPistonComponent*](BlockPistonComponent.md)

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
