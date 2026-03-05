---
author: mammerla
ms.author: mikeam
title: "playanimation Command"
description: "Description and usage of the /playanimation command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/playanimation` Command

Makes one or more entities play a one-off animation.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/playanimation <entity: target> <animation: id> [next_state: id] [blend_out_time: float] [stop_expression: id] [controller: id]`

## Usage

`/playanimation <entity: target> <animation: id> [next_state: id] [blend_out_time: float] [stop_expression: id] [controller: id]`

Play an animation with an entity and animation chosen, and optional next state, blend out time, stop expression, and controller.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Required. A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the entity. |
| animation | [Identifier](../CommandTypes/type_id.md) | Required | Required. A `string` that is a single word or quoted `string` that refers to an animation name or an animation JSON file in a resource pack. |
| next_state | [Identifier](../CommandTypes/type_id.md) | Optional |  |
| blend_out_time | [Value](../CommandTypes/type_val.md) | Optional |  |
| stop_expression | [Identifier](../CommandTypes/type_id.md) | Optional |  |
| controller | [Identifier](../CommandTypes/type_id.md) | Optional | Optional. A `string` that is an animation controller name or a new file defined in a resource pack. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| animation | [Identifier](../CommandTypes/type_id.md) | Required. A `string` that is a single word or quoted `string` that refers to an animation name or an animation JSON file in a resource pack. |
| blend_out_time | [Value](../CommandTypes/type_val.md) |  |
| controller | [Identifier](../CommandTypes/type_id.md) | Optional. A `string` that is an animation controller name or a new file defined in a resource pack. |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required. A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the entity. |
| next_state | [Identifier](../CommandTypes/type_id.md) |  |
| stop_expression | [Identifier](../CommandTypes/type_id.md) |  |
