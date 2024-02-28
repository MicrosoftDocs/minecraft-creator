---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ButtonPushAfterEventSignal Class
description: Contents of the @minecraft/server.ButtonPushAfterEventSignal class.
---
# ButtonPushAfterEventSignal Class

## Extends
- [*IButtonPushAfterEventSignal*](IButtonPushAfterEventSignal.md)

Manages callbacks that are connected to when a button is pushed.

#### Examples
##### ***buttonPushEvent.ts***
```typescript
import { world, ButtonPushAfterEvent, system } from '@minecraft/server';

world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const eventLoc = buttonPushEvent.block.location;

    world.sendMessage(
        `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,
    );
});
```

#### Examples
##### ***buttonPushEvent.ts***
```typescript
import { world, ButtonPushAfterEvent, system } from '@minecraft/server';

world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const eventLoc = buttonPushEvent.block.location;

    world.sendMessage(
        `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,
    );
});
```
