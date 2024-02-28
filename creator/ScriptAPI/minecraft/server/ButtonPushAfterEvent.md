---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ButtonPushAfterEvent Class
description: Contents of the @minecraft/server.ButtonPushAfterEvent class.
---
# ButtonPushAfterEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a button push.

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

## Properties

### **source**
`read-only source: Entity;`

Optional source that triggered the button push.

Type: [*Entity*](Entity.md)

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
