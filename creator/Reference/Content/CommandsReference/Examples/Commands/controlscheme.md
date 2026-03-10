---
author: mammerla
ms.author: mikeam
title: "controlscheme Command"
description: "Description and usage of the /controlscheme command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/controlscheme` Command

Sets or clears control schemes for the camera(s) of selected player(s).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**set**](#set)
- [**clear**](#clear)

## set

`/controlscheme <players: target> <set: cameracontrolschemeset> <control scheme: controlscheme>`

Sets the specified control scheme for the camera(s) of selected player(s).

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [target](../CommandTypes/type_selection.md) | Required | A target selector of player(s). |
| set | cameracontrolschemeset | Required |  |
| control scheme | controlscheme | Required | The control scheme to apply. |

## clear

`/controlscheme <players: target> <clear: cameracontrolschemeclear>`

Clears the current control scheme for the camera(s) of selected player(s), resetting it to the default.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [target](../CommandTypes/type_selection.md) | Required | A target selector of player(s). |
| clear | cameracontrolschemeclear | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| clear | cameracontrolschemeclear |  |
| control scheme | controlscheme | The control scheme to apply. |
| players | [target](../CommandTypes/type_selection.md) | A target selector of player(s). |
| set | cameracontrolschemeset |  |
