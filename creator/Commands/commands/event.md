---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: event Command
description: Description and usage of the event command
---
# `/event` Command
Triggers an event for the specified entity or entities.

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
### Event triggered for target
`/event entity <target: target> <eventName: EntityEvents>`

Trigger an event of type `eventName` for a `target`.

## Arguments
- `eventName`: [EntityEvents](../enums/EntityEvents.md)
Required. A `string` that specifies the in-game event.
- `target`: target
Required. A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which entity the event is happening to.
