---
author: mammerla
ms.author: mikeam
title: "enchant Command"
description: "Description and usage of the /enchant command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/enchant` Command

Adds an enchantment to a player's selected item.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**enchantmentName**](#enchantmentname) — An enum for the enchantment that is applied.
- [**enchantmentId**](#enchantmentid) — An integer ID for the enchantment that is applied.

## enchantmentName

An enum for the enchantment that is applied.

`/enchant <player: target> <enchantmentName: enchant> [level: int]`

Enchant a target player using and `enchantmentName` from the `enum`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| enchantmentName | [enchant](../CommandTypes/type_enchant.md) | Required | An enum for the enchantment that is applied. |
| level | [int](../CommandTypes/type_int.md) | Optional | Optional. An `integer` that specifies the enchantment level. |

## enchantmentId

An integer ID for the enchantment that is applied.

`/enchant <player: target> <enchantmentId: int> [level: int]`

Enchant a target player using `enchantmentId`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| enchantmentId | [int](../CommandTypes/type_int.md) | Required | An integer ID for the enchantment that is applied. |
| level | [int](../CommandTypes/type_int.md) | Optional | Optional. An `integer` that specifies the enchantment level. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| enchantmentId | [int](../CommandTypes/type_int.md) | An integer ID for the enchantment that is applied. |
| enchantmentName | [enchant](../CommandTypes/type_enchant.md) | An enum for the enchantment that is applied. |
| level | [int](../CommandTypes/type_int.md) | Optional. An `integer` that specifies the enchantment level. |
| player | [target](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
