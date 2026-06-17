---
author: chipotle
ms.author: mikeam
title: Working With Events
description: "A deeper dive into using world and system events in Minecraft: Bedrock Edition."
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 06/02/2026
---

# Working With Events

Many of the scripts you'll write for Minecraft: Bedrock Edition will be triggered by events in the world, from players joining to items being used to projectiles hitting targets. Others need to take action right after the world initializes: for example, registering custom components.

To respond to these, you'll need to write **event listeners** that "subscribe" to specific kinds of events, asking to be called immediately before an event happens or immediately after it happens. The listener receives information about the event, and takes actions based on that information&mdash;for instance, preventing players from breaking blocks, logging an event for debugging purposes, or even canceling an event before it happens.

There are four kinds of events you can subscribe to; the events are grouped into sets defined in specific classes:

- [`WorldBeforeEvents`](../../ScriptAPI/minecraft/server/WorldBeforeEvents.md) are events triggered _before_ an action related to the world occurs, such as an entity picking up an item, a player breaking a block, or a player leaving the game.
- [`WorldAfterEvents`](../../ScriptAPI/minecraft/server/WorldAfterEvents.md) are events triggered _after_ an action related to the world occurs, such as a container being opened or closed, a button being pushed, or an entity dying.
- [`SystemBeforeEvents`](../../ScriptAPI/minecraft/server/SystemBeforeEvents.md) are events triggered before the game starts ([`startup`](../../ScriptAPI/minecraft/server/StartupBeforeEventSignal.md) or shuts down ([`shutdown`](../../ScriptAPI/minecraft/server/ShutdownBeforeEventSignal.md)).
- [`SystemAfterEvents`](../../ScriptAPI/minecraft/server/SystemAfterEvents.md) are events triggered by the [`/scriptevent`](../../Reference/Content/CommandsReference/Examples/Commands/scriptevent.md) command.

> [!CAUTION]
>
> You can't use any APIs that modify gameplay state in listeners triggered by `WorldBeforeEvents` or `SystemBeforeEvents`.

## Event listeners and subscribing

An event listener is a function you register with a specific kind of event, so your code receives notifications when that event occurs. Listeners are typically registered by calling the `subscribe` (or similarly named) method on an event object exposed by the [`world`](../../ScriptAPI/minecraft/server/World.md) or [`system`](../../ScriptAPI/minecraft/server/System.md) APIs.

When you subscribe, your listener function receives an event object specific to that event type, such as [`BlockComponentBlockBreakEvent`](../../ScriptAPI/minecraft/server/BlockComponentBlockBreakEvent.md) or [`ButtonPushAfterEvent`](../../ScriptAPI/minecraft/server/ButtonPushAfterEvent.md). The event object contains details such as which entity was involved, which block changed, and/or which command was executed.

Here's a script snippet which cancels any chat event if the message being sent contains the string "cancel":

```typescript
import { world } from '@minecraft/server';

// Listen for a before-chat event and cancel messages that contain 'cancel'
world.beforeEvents.chatSend.subscribe((eventData) => {
  if (eventData.message.includes('cancel')) {
	eventData.cancel = true;
  }
});
```

> [!TIP]
>
> For a more complete implementation of this script, see the example in the documentation for [`ChatSendBeforeEventSignal`](../../ScriptAPI/minecraft/server/ChatSendBeforeEventSignal.md).

## World events

World events are raised for gameplay actions and state changes in the game world. They are grouped under the `world` event API and cover things like entities, blocks, players, and other world-level changes.

Common world-event use-cases and examples:

- Entity lifecycle: spawn, despawn, hurt, death. For example, a `before` entity-spawn event can be used to block spawning of certain entity types, while an `after` entity-death event can run clean-up logic or award points.
- Block changes: placement, destruction, and interaction. A `before` block-break event can be used to cancel a player from breaking protected blocks; an `after` block-place event can trigger a structure validation routine.
- Player actions: item use, inventory changes, movement-related events. `before` item-use handlers can alter or cancel the use, while `after` handlers can grant achievements or trigger dialogue.

Here's an example of subscribing to the `playerBreakBlock` event to drop an item in front of a player when a specific kind of custom block (in this case, `custom:slab`) is broken:

```typescript
import { system, world, GameMode } from "@minecraft/server";

world.beforeEvents.playerBreakBlock.subscribe(eventData => {
  const { block, player } = eventData;
  const blockId = block.typeId;
  if (block.hasTag('custom:slab') && player.getGameMode() === GameMode.Survival) {
    // the dropItem function needs
  	system.run(() => dropItem(player, block, blockId));
  }
});

function dropItem(player, block, item, amount = 1, ) {
  player.dimension.spawnItem(new ItemStack(item, amount), {x: block.x, y: block.y, z: block.z});
}
```

## System events

System events relate to the scripting runtime, messaging, and global lifecycle features exposed by the Bedrock engine. These events are grouped under a `system` event API.

Here are some examples of system events:

- `tick` events for running periodic logic on a fixed cadence.
- Initialization or shutdown events for bootstrapping script state.
- [Script messaging events](#script-events) used to send custom payloads between add-ons or runtime contexts.

### Registering components

One of the most common uses for `system.beforeEvents` is adding custom components to items and entities. This example gives the player night vision for 10 minutes when a specific item is consumed:

```typescript
import { ItemComponentConsumeEvent, system } from "@minecraft/server";

system.beforeEvents.startup.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent('starter:add_night_vision_on_consume', {
    onConsume(arg: ItemComponentConsumeEvent) {
      arg.source.addEffect('minecraft:night_vision', 600);
    }
  });
});
```

For more details on component registration (and the complete working example for a strawberry that gives the player night vision), read [Building with Custom Components](./custom-components.md).

### Script events

While all events are handled by scripts, `scriptEventReceive` lets listeners respond to the [`/scriptevent` command](../../Commands/commands/scriptevent.md) and the [`sendScriptEvent` method](../../ScriptAPI/minecraft/server/System.md#sendscriptevent). This command could be invoked by a player, another script, an NPC, or a command block.

The `/scriptevent` command looks like this:

```text
/scriptevent <messageId> <message>
```

The `sendScriptEvent()` method is similar:

```typescript
system.sendScriptEvent(id: <messageId>, message: <message>): void
```

The `messageId` and `message` values are both strings, and they're both passed to the event listener in the [event object](../../ScriptAPI/minecraft/server/ScriptEventCommandMessageAfterEvent.md), along with information about whatever triggered the command. The event object has these properties:

- `id`: the `messageId` from the `/scriptevent` command.
- `message`: the `message` from the `/scriptevent` command.
- `initiator`: if the command was fired by a NPC in dialogue, this is the `Entity` that initiated the NPC dialogue (generally a player); if an NPC did not fire it, this is `undefined`.
- `sourceBlock`: the `Block` if the command was triggered via a command block, otherwise `undefined`.
- `sourceEntity`: the `Entity` that ran the command if it was triggered by an NPC, otherwise `undefined`.
- `sourceType`: a `ScriptEventSource` enum describing what triggered the event: possible values are `Block`, `Entity`, `NPCDialogue`, or `Server`. (`Server` indicates the script event came from the server console, or the [`runCommand` API](../../ScriptAPI/minecraft/server/Dimension.md#runcommand).

Script events can be used as a simple mechanism for add-ons to exchange structured messages, as well as for players to trigger programs directly. They're useful for custom messages that are not covered by existing world or system events---for example, a gameplay subsystem broadcasting score updates or a remote tool sending control commands to the add-on.

```js
// Listen for incoming script events (delivered to the runtime)
system.afterEvents.scriptEventReceive.subscribe((ev) => {
	const { message, sender } = ev;
	// Handle the message payload
});
```


These sections provide an overview of the event model and common usage patterns. For concrete event names and the exact event properties available in your target runtime version, consult the API reference and sample code included with the platform (for example, the Minecraft Samples repositories). The precise event class and property names can vary between engine versions, so prefer the runtime's in-repo samples and generated API docs for implementation details.
