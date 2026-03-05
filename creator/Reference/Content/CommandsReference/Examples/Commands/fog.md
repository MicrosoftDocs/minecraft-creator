---
author: mammerla
ms.author: mikeam
title: "fog Command"
description: "Description and usage of the /fog command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/fog` Command

Add or remove fog settings file.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/fog <victim: target> <mode: add> <fogId: id> <userProvidedId: id>`

`/fog <victim: target> <mode: add> <userProvidedId: id>`

## Usage

### Add fog

`/fog <victim: target> <mode: add> <fogId: id> <userProvidedId: id>`

Add fog setting file to a particular player victim with a `fogId` or `userProvidedId` to specify the fog.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [Entity Selector](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player perceives the fog. |
| mode | add | Required | Delete mode |
| fogId | [Identifier](../CommandTypes/type_id.md) | Required | A `string` that specifies the fog. |
| userProvidedId | [Identifier](../CommandTypes/type_id.md) | Required | Required. A `string` that identifies the fog to use. |

### Remove fog

`/fog <victim: target> <mode: add> <userProvidedId: id>`

Remove fog setting file to a particular player victim with a `userProvidedId` to specify the fog.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [Entity Selector](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player perceives the fog. |
| mode | add | Required | Delete mode |
| userProvidedId | [Identifier](../CommandTypes/type_id.md) | Required | Required. A `string` that identifies the fog to use. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| fogId | [Identifier](../CommandTypes/type_id.md) | A `string` that specifies the fog. |
| mode | add | Delete mode |
| userProvidedId | [Identifier](../CommandTypes/type_id.md) | Required. A `string` that identifies the fog to use. |
| victim | [Entity Selector](../CommandTypes/type_selection.md) | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player perceives the fog. |
