---
author: mammerla
ms.author: mikeam
title: "damage Command"
description: "Description and usage of the /damage command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/damage` Command

Apply damage to the specified entities. See more in the [Damage Command documentation](https://learn.microsoft.com/minecraft/creator/documents/commandsdamageintroduction).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/damage <target: target> <amount: int> [cause: damagecause]`

`/damage <target: target> <amount: int> <cause: damagecause> <origin: damageoriginactor> <damager: target>`

## Usage

### Damage with optional cause

`/damage <target: target> <amount: int> [cause: damagecause]`

Damage a target with an amount of damage. Optionally include a cause.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required | Required. The target to damage. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| amount | [int](../CommandTypes/type_int.md) | Required | Required. Default `0`. An `integer` that specifies the amount of damage. |
| cause | damagecause | Optional | Optional. Default `none`. An `enum` of the damage cause. |

### Damage with optional cause, entity, damager

`/damage <target: target> <amount: int> <cause: damagecause> <origin: damageoriginactor> <damager: target>`

Damage a target with an amount of damage. Optionally include a cause, entity, and damager.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required | Required. The target to damage. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| amount | [int](../CommandTypes/type_int.md) | Required | Required. Default `0`. An `integer` that specifies the amount of damage. |
| cause | damagecause | Required | Optional. Default `none`. An `enum` of the damage cause. |
| origin | damageoriginactor | Required |  |
| damager | [target](../CommandTypes/type_selection.md) | Required | A `selector` that specifies which entity will be treated as dealing the damage to the target. Should be one entity or player. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| amount | [int](../CommandTypes/type_int.md) | Required. Default `0`. An `integer` that specifies the amount of damage. |
| cause | damagecause | Optional. Default `none`. An `enum` of the damage cause. |
| damager | [target](../CommandTypes/type_selection.md) | A `selector` that specifies which entity will be treated as dealing the damage to the target. Should be one entity or player. |
| origin | damageoriginactor |  |
| target | [target](../CommandTypes/type_selection.md) | Required. The target to damage. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
