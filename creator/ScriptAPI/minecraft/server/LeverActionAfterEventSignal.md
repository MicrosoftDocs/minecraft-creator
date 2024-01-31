---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.LeverActionAfterEventSignal Class
description: Contents of the @minecraft/server.LeverActionAfterEventSignal class.
---
# LeverActionAfterEventSignal Class

## Extends
- [*ILeverActionAfterEventSignal*](ILeverActionAfterEventSignal.md)

Manages callbacks that are connected to lever moves (activates or deactivates).

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
