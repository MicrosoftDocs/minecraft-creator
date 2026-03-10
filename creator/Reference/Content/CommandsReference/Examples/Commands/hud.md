---
author: mammerla
ms.author: mikeam
title: "hud Command"
description: "Description and usage of the /hud command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/hud` Command

Configures whether elements of the on-screen display (alternately known as the 'heads up display', or 'HUD') are visible on the screen.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/hud <target: target> <visible: hudvisibility> [hud_element: hudelement]`

## Usage

`/hud <target: target> <visible: hudvisibility> [hud_element: hudelement]`

Configures HUD element visibility for a selection of players.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required | Selector of the player(s) to toggle visibility for. |
| visible | hudvisibility | Required | State to change the HUD element visibility to. |
| hud_element | hudelement | Optional | Specific HUD element to configure visibility for. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| hud_element | hudelement | Specific HUD element to configure visibility for. |
| target | [target](../CommandTypes/type_selection.md) | Selector of the player(s) to toggle visibility for. |
| visible | hudvisibility | State to change the HUD element visibility to. |
