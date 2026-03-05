---
author: mammerla
ms.author: mikeam
title: "recipe Command"
description: "Description and usage of the /recipe command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/recipe` Command

Supports unlocking of built-in (vanilla) recipes that a particular player can craft with.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/recipe <give: give> <player: target> <recipe: unlockablerecipevalues>`

`/recipe <take: take> <player: target> <recipe: unlockablerecipevalues>`

## Usage

### Gives a player a particular vanilla item that they are allowed to craft via recipe.

`/recipe <give: give> <player: target> <recipe: unlockablerecipevalues>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| give | give | Required |  |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required |  |
| recipe | unlockablerecipevalues | Required |  |

### Removes a particular vanilla item that a player can craft via a recipe.

`/recipe <take: take> <player: target> <recipe: unlockablerecipevalues>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| take | take | Required |  |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required |  |
| recipe | unlockablerecipevalues | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| give | give |  |
| player | [Entity Selector](../CommandTypes/type_selection.md) |  |
| recipe | unlockablerecipevalues |  |
| take | take |  |
