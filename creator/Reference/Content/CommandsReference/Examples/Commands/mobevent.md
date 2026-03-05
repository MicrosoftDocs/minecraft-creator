---
author: mammerla
ms.author: mikeam
title: "mobevent Command"
description: "Description and usage of the /mobevent command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/mobevent` Command

Controls what mob events are allowed to run.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/mobevent <event: mobevent> [value: Boolean]`

## Usage

`/mobevent <event: mobevent> [value: Boolean]`

Call a `mob event` with an optional `Boolean` `value` to enable or disable the event.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| event | mobevent | Required | Required. An `enum` that specifies the events to control or query. Must be one of the following: `minecraft:ender_dragon_event`, `minecraft:pillager_patrols_event`, `minecraft:wandering_trader_event`, or `events_enabled`. |
| value | [Boolean](../CommandTypes/type_boolean.md) | Optional | Optional. A `Boolean` that enables events (`true`) or disables them (`false`). Default: `false`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| event | mobevent | Required. An `enum` that specifies the events to control or query. Must be one of the following: `minecraft:ender_dragon_event`, `minecraft:pillager_patrols_event`, `minecraft:wandering_trader_event`, or `events_enabled`. |
| value | [Boolean](../CommandTypes/type_boolean.md) | Optional. A `Boolean` that enables events (`true`) or disables them (`false`). Default: `false`. |
