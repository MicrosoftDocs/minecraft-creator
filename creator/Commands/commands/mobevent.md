---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: mobevent Command
description: Description and usage of the mobevent command
---
# `/mobevent` Command
Controls what mob events are allowed to run.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Mob event
`/mobevent <event: MobEvent> [value: Boolean]`

Call a `mob event` with an optional `Boolean` `value` to enable or disable the event.

## Arguments
- `event`: MobEvent
Required. An `enum` that specifies the events to control or query. Must be one of the following: `minecraft:ender_dragon_event`, `minecraft:pillager_patrols_event`, `minecraft:wandering_trader_event`, or `events_enabled`.
- `value`: [Boolean](../enums/Boolean.md)
Optional. A `Boolean` that enables events (`true`) or disables them (`false`).
Default: `false`.

## Enums
### `MobEvent`
Enum of Mob Events

#### Values
- `minecraft:pillager_patrols_event`
Pillager Patrols Event
- `minecraft:wandering_trader_event`
Wandering Trader Event
- `minecraft:ender_dragon_event`
Ender Dragon Event
- `events_enabled`
Events Enabled
