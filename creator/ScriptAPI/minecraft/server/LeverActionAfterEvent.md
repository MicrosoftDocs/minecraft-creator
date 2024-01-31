---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.LeverActionAfterEvent Class
description: Contents of the @minecraft/server.LeverActionAfterEvent class.
---
# LeverActionAfterEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a lever activating or deactivating.

#### Examples
##### ***leverActionEvent.ts***
```typescript
import { world, system, LeverActionAfterEvent } from '@minecraft/server';

world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
    console.warn(
        `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,
    );
});

```

## Properties

### **isPowered**
`read-only isPowered: boolean;`

True if the lever is activated (that is, transmitting power).

Type: *boolean*

### **player**
`read-only player: Player;`

Optional player that triggered the lever activation.

Type: [*Player*](Player.md)

#### Examples
##### ***leverActionEvent.ts***
```typescript
import { world, system, LeverActionAfterEvent } from '@minecraft/server';

world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
    console.warn(
        `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,
    );
});

```
