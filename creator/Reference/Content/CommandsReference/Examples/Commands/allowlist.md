---
author: mammerla
ms.author: mikeam
title: "allowlist Command"
description: "Description and usage of the /allowlist command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/allowlist` Command

Manages the server allowlist.

**Aliases:** `/whitelist`

| | |
|:---|:---|
| **Permission Level** | Owner |
| **Requires Cheats** | Yes |

## Syntax Overview

`/allowlist add <name: id>`

`/allowlist remove <name: id>`

`/allowlist list`

`/allowlist reload`

## Usage

### Add player

`/allowlist add <name: id>`

Adds a player to the server allowlist.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [id](../CommandTypes/type_id.md) | Required | The player name to add to or remove from the allowlist. |

### Remove player

`/allowlist remove <name: id>`

Removes a player from the server allowlist.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [id](../CommandTypes/type_id.md) | Required | The player name to add to or remove from the allowlist. |

### List players

`/allowlist list`

Lists all players on the server allowlist.

### Reload allowlist

`/allowlist reload`

Reloads the allowlist from the file on disk.

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| name | [id](../CommandTypes/type_id.md) | The player name to add to or remove from the allowlist. |
