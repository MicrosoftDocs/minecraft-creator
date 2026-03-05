---
author: mammerla
ms.author: mikeam
title: "ride Command"
description: "Description and usage of the /ride command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/ride` Command

Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/ride <riders: target> <mode: ridemodestart> <ride: target> [teleportRules: teleportrules] [howToFill: filltype]`

`/ride <riders: target> <mode: ridemodestart>`

`/ride <rides: target> <mode: ridemodestart>`

`/ride <rides: target> <mode: ridemodestart> <entityType: entitytype> [spawnEvent: id] [nameTag: id]`

`/ride <riders: target> <mode: ridemodestart> <entityType: entitytype> [rideRules: riderules] [spawnEvent: id] [nameTag: id]`

### Start ride

`/ride <riders: target> <mode: ridemodestart> <ride: target> [teleportRules: teleportrules] [howToFill: filltype]`

Start `ride` with `riders`, something to `ride`, and optional `teleport rules` and `fill type`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| riders | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies riders using player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors)s. |
| mode | ridemodestart | Required |  |
| ride | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the entity to ride on. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| teleportRules | teleportrules | Optional | Either `teleport_ride` or `teleport_rider` (default). |
| howToFill | filltype | Optional | One of `if_group_fits` to check whether riders can ride and only makes them ride if possible. Or `until_full` which makes them ride until rides is full. Default: `until_full`. |

### Stop riding

`/ride <riders: target> <mode: ridemodestart>`

Stop `riders` from riding.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| riders | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies riders using player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors)s. |
| mode | ridemodestart | Required |  |

### Evict rider

`/ride <rides: target> <mode: ridemodestart>`

Evict riders from ride.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| rides | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the ridden entities. Must be a player name or entity selector. |
| mode | ridemodestart | Required |  |

### Summon ride, optional spawn event

`/ride <rides: target> <mode: ridemodestart> <entityType: entitytype> [spawnEvent: id] [nameTag: id]`

Summon an `entity` to ride with optional `spawn event` and `nametag`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| rides | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the ridden entities. Must be a player name or entity selector. |
| mode | ridemodestart | Required |  |
| entityType | [Entity Type](../CommandTypes/type_entitytype.md) | Required | Specifies entities to summon. Must be the name`ID`of something that can be summoned. |
| spawnEvent | [Identifier](../CommandTypes/type_id.md) | Optional | Specifies the in-game event to call the summoned entities. Must be a spawn event in behavior pack. |
| nameTag | [Identifier](../CommandTypes/type_id.md) | Optional | Specifies the name of summoned entities. |

### Summon rider, optional ride rules, spawn event

`/ride <riders: target> <mode: ridemodestart> <entityType: entitytype> [rideRules: riderules] [spawnEvent: id] [nameTag: id]`

Summon a ride of `entity` type with optional `ride rules`, `spawn event`, and `nametag`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| riders | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies riders using player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors)s. |
| mode | ridemodestart | Required |  |
| entityType | [Entity Type](../CommandTypes/type_entitytype.md) | Required | Specifies entities to summon. Must be the name`ID`of something that can be summoned. |
| rideRules | riderules | Optional | Ride rules |
| spawnEvent | [Identifier](../CommandTypes/type_id.md) | Optional | Specifies the in-game event to call the summoned entities. Must be a spawn event in behavior pack. |
| nameTag | [Identifier](../CommandTypes/type_id.md) | Optional | Specifies the name of summoned entities. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| entityType | [Entity Type](../CommandTypes/type_entitytype.md) | Specifies entities to summon. Must be the name`ID`of something that can be summoned. |
| howToFill | filltype | One of `if_group_fits` to check whether riders can ride and only makes them ride if possible. Or `until_full` which makes them ride until rides is full. Default: `until_full`. |
| mode | ridemodestart |  |
| nameTag | [Identifier](../CommandTypes/type_id.md) | Specifies the name of summoned entities. |
| ride | [Entity Selector](../CommandTypes/type_selection.md) | Specifies the entity to ride on. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| riders | [Entity Selector](../CommandTypes/type_selection.md) | Specifies riders using player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors)s. |
| rideRules | riderules | Ride rules |
| rides | [Entity Selector](../CommandTypes/type_selection.md) | Specifies the ridden entities. Must be a player name or entity selector. |
| spawnEvent | [Identifier](../CommandTypes/type_id.md) | Specifies the in-game event to call the summoned entities. Must be a spawn event in behavior pack. |
| teleportRules | teleportrules | Either `teleport_ride` or `teleport_rider` (default). |
