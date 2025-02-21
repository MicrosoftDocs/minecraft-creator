---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldBeforeEvents Class
description: Contents of the @minecraft/server.WorldBeforeEvents class.
---
# WorldBeforeEvents Class

A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., dimension.spawnEntity) 

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **chatSend**
`read-only chatSend: ChatSendBeforeEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatSendBeforeEventSignal*](ChatSendBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can be read in early-execution mode.

#### Examples

##### ***customCommand.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function customCommand(targetLocation: DimensionLocation) {
  const chatCallback = world.beforeEvents.chatSend.subscribe((eventData) => {
    if (eventData.message.includes("cancel")) {
      // Cancel event if the message contains "cancel"
      eventData.cancel = true;
    } else {
      const args = eventData.message.split(" ");

      if (args.length > 0) {
        switch (args[0].toLowerCase()) {
          case "echo":
            // Send a modified version of chat message
            world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
            break;
          case "help":
            world.sendMessage(`Available commands: echo <message>`);
            break;
        }
      }
    }
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/customCommand.ts) code sandbox.
::: moniker-end

### **effectAdd**
`read-only effectAdd: EffectAddBeforeEventSignal;`

This event is triggered after an event has been added to an entity.

Type: [*EffectAddBeforeEventSignal*](EffectAddBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityRemove**
`read-only entityRemove: EntityRemoveBeforeEventSignal;`

Fires before an entity is removed from the world (for example, unloaded or removed after being killed.)

Type: [*EntityRemoveBeforeEventSignal*](EntityRemoveBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **explosion**
`read-only explosion: ExplosionBeforeEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionBeforeEventSignal*](ExplosionBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemUse**
`read-only itemUse: ItemUseBeforeEventSignal;`

This event fires when an item is successfully used by a player.

Type: [*ItemUseBeforeEventSignal*](ItemUseBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemUseOn**
`read-only itemUseOn: ItemUseOnBeforeEventSignal;`

This event fires when an item is used on a block by a player.

Type: [*ItemUseOnBeforeEventSignal*](ItemUseOnBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerBreakBlock**
`read-only playerBreakBlock: PlayerBreakBlockBeforeEventSignal;`

This event fires before a block is broken by a player.

Type: [*PlayerBreakBlockBeforeEventSignal*](PlayerBreakBlockBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerGameModeChange**
`read-only playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;`

Type: [*PlayerGameModeChangeBeforeEventSignal*](PlayerGameModeChangeBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerInteractWithBlock**
`read-only playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;`

Fires before a player interacts with a block.

Type: [*PlayerInteractWithBlockBeforeEventSignal*](PlayerInteractWithBlockBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerInteractWithEntity**
`read-only playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;`

Fires before a player interacts with an entity.

Type: [*PlayerInteractWithEntityBeforeEventSignal*](PlayerInteractWithEntityBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerLeave**
`read-only playerLeave: PlayerLeaveBeforeEventSignal;`

Fires when a player leaves the game.

Type: [*PlayerLeaveBeforeEventSignal*](PlayerLeaveBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

::: moniker range="=minecraft-bedrock-experimental"
### **playerPlaceBlock**
`read-only playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;`

This event fires before a block is placed by a player.

Type: [*PlayerPlaceBlockBeforeEventSignal*](PlayerPlaceBlockBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can be read in early-execution mode.
::: moniker-end

### **weatherChange**
`read-only weatherChange: WeatherChangeBeforeEventSignal;`

Type: [*WeatherChangeBeforeEventSignal*](WeatherChangeBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.
