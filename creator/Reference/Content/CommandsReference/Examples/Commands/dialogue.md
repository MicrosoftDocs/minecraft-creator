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

## Syntax Overview

`/dialogue open <npc: target> <player: target> [sceneName: id]`

`/dialogue change <npc: target> <sceneName: id> [players: target]`

## Usage

### Dialogue with NPC and player, optional sceneName

`/dialogue open <npc: target> <player: target> [sceneName: id]`

Open a specific scene with an `npc` and `player` using an optional `sceneName`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| npc | [Entity Selector](../CommandTypes/type_selection.md) | Required | Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| sceneName | [Identifier](../CommandTypes/type_id.md) | Optional | A `string` that specifies the scene file to run from the behavior pack. |

### Dialogue with NPC and sceneName, optional player

`/dialogue change <npc: target> <sceneName: id> [players: target]`

Change the dialogue `npc` and `sceneName`, with an optional `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| npc | [Entity Selector](../CommandTypes/type_selection.md) | Required | Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC. |
| sceneName | [Identifier](../CommandTypes/type_id.md) | Required | A `string` that specifies the scene file to run from the behavior pack. |
| players | [Entity Selector](../CommandTypes/type_selection.md) | Optional | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| npc | [Entity Selector](../CommandTypes/type_selection.md) | Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| players | [Entity Selector](../CommandTypes/type_selection.md) | Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| sceneName | [Identifier](../CommandTypes/type_id.md) | A `string` that specifies the scene file to run from the behavior pack. |
