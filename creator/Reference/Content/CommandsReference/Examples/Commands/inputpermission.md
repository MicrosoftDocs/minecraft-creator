---
author: mammerla
ms.author: mikeam
title: "inputpermission Command"
description: "Description and usage of the /inputpermission command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/inputpermission` Command

Optionally enables or disables input permissions for a player.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/inputpermission <option: option_set> <targets: target> <permission: permission> <state: state>`

`/inputpermission <option: option_set> <targets: target> <permission: permission> [state: state]`

## Usage

### Set input permission

`/inputpermission <option: option_set> <targets: target> <permission: permission> <state: state>`

Sets the input permission for the selection to a state.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| option | option_set | Required |  |
| targets | [Entity Selector](../CommandTypes/type_selection.md) | Required |  |
| permission | permission | Required |  |
| state | state | Required |  |

### Query input permission

`/inputpermission <option: option_set> <targets: target> <permission: permission> [state: state]`

Retrieves the permissions of entities that match the selection.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| option | option_set | Required |  |
| targets | [Entity Selector](../CommandTypes/type_selection.md) | Required |  |
| permission | permission | Required |  |
| state | state | Optional |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| option | option_set |  |
| permission | permission |  |
| state | state |  |
| targets | [Entity Selector](../CommandTypes/type_selection.md) |  |
