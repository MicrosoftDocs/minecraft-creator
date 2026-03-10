---
author: mammerla
ms.author: mikeam
title: "dialogue Command"
description: "Description and usage of the /dialogue command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/dialogue` Command

Opens NPC dialogue for a player. See the page on the [Dialogue documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/npcdialogue#dialogue-command) for more information.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**open**](#open)
- [**change**](#change)

## open

`/dialogue open <npc: target> <player: target> [sceneName: id]`

Open a specific scene with an `npc` and `player` using an optional `sceneName`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| npc | [target](../CommandTypes/type_selection.md) | Required | Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC. |
| player | [target](../CommandTypes/type_selection.md) | Required | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| sceneName | [id](../CommandTypes/type_id.md) | Optional | A `string` that specifies the scene file to run from the behavior pack. |

## change

`/dialogue change <npc: target> <sceneName: id> [players: target]`

Change the dialogue `npc` and `sceneName`, with an optional `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| npc | [target](../CommandTypes/type_selection.md) | Required | Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC. |
| sceneName | [id](../CommandTypes/type_id.md) | Required | A `string` that specifies the scene file to run from the behavior pack. |
| players | [target](../CommandTypes/type_selection.md) | Optional | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| npc | [target](../CommandTypes/type_selection.md) | Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC. |
| player | [target](../CommandTypes/type_selection.md) | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| players | [target](../CommandTypes/type_selection.md) | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| sceneName | [id](../CommandTypes/type_id.md) | A `string` that specifies the scene file to run from the behavior pack. |
