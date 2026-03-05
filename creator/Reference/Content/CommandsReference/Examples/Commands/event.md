---
author: mammerla
ms.author: mikeam
title: "event Command"
description: "Description and usage of the /event command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/event` Command

Triggers an event for the specified entity or entities.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/event entity <target: target> <eventName: entityevents>`

## Usage

`/event entity <target: target> <eventName: entityevents>`

Trigger an event of type `eventName` for a `target`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [Entity Selector](../CommandTypes/type_selection.md) | Required | Required. A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which entity the event is happening to. |
| eventName | entityevents | Required | Required. A `string` that specifies the in-game event. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| eventName | entityevents | Required. A `string` that specifies the in-game event. |
| target | [Entity Selector](../CommandTypes/type_selection.md) | Required. A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which entity the event is happening to. |
