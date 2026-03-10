---
author: mammerla
ms.author: mikeam
title: "summon Command"
description: "Description and usage of the /summon command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/summon` Command

Summons an entity.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/summon <entityType: entitytype> [spawnPos: x y z] [yRot: rotation] [xRot: rotation] [spawnEvent: entityevents] [nameTag: id]`

`/summon <entityType: entitytype> <nameTag: id> [spawnPos: x y z]`

`/summon <entityType: entitytype> [spawnPos: x y z] <facing: teleportfacing> <lookAtPosition: x y z> [spawnEvent: entityevents] [nameTag: id]`

`/summon <entityType: entitytype> [spawnPos: x y z] <facing: teleportfacing> <lookAtEntity: target> [spawnEvent: entityevents] [nameTag: id]`

## Usage

### Summon entity with nametag

`/summon <entityType: entitytype> [spawnPos: x y z] [yRot: rotation] [xRot: rotation] [spawnEvent: entityevents] [nameTag: id]`

Summon an `entity` with a `nametag` into an optional `spawn position`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entityType | [entitytype](../CommandTypes/type_entitytype.md) | Required | An `enum` of the entity to be summoned. |
| spawnPos | [x y z](../CommandTypes/type_position_float.md) | Optional | A `vector` of `float` numbers for the position of the summoned entity. |
| yRot | [rotation](../CommandTypes/type_rval.md) | Optional | The `float` degrees `y` to rotate a player when teleporting. |
| xRot | [rotation](../CommandTypes/type_rval.md) | Optional | The `float` degrees `x` to rotate a player when teleporting. |
| spawnEvent | entityevents | Optional | A `string` of the in-game event for the entity. |
| nameTag | [id](../CommandTypes/type_id.md) | Optional | A `string` of the entity name tag. |

### With entityType, nameTag, spawnPos

`/summon <entityType: entitytype> <nameTag: id> [spawnPos: x y z]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entityType | [entitytype](../CommandTypes/type_entitytype.md) | Required | An `enum` of the entity to be summoned. |
| nameTag | [id](../CommandTypes/type_id.md) | Required | A `string` of the entity name tag. |
| spawnPos | [x y z](../CommandTypes/type_position_float.md) | Optional | A `vector` of `float` numbers for the position of the summoned entity. |

### With entityType, spawnPos, facing, lookAtPosition, spawnEvent, nameTag

`/summon <entityType: entitytype> [spawnPos: x y z] <facing: teleportfacing> <lookAtPosition: x y z> [spawnEvent: entityevents] [nameTag: id]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entityType | [entitytype](../CommandTypes/type_entitytype.md) | Required | An `enum` of the entity to be summoned. |
| spawnPos | [x y z](../CommandTypes/type_position_float.md) | Optional | A `vector` of `float` numbers for the position of the summoned entity. |
| facing | teleportfacing | Required |  |
| lookAtPosition | [x y z](../CommandTypes/type_position_float.md) | Required |  |
| spawnEvent | entityevents | Optional | A `string` of the in-game event for the entity. |
| nameTag | [id](../CommandTypes/type_id.md) | Optional | A `string` of the entity name tag. |

### With entityType, spawnPos, facing, spawnEvent, nameTag

`/summon <entityType: entitytype> [spawnPos: x y z] <facing: teleportfacing> <lookAtEntity: target> [spawnEvent: entityevents] [nameTag: id]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entityType | [entitytype](../CommandTypes/type_entitytype.md) | Required | An `enum` of the entity to be summoned. |
| spawnPos | [x y z](../CommandTypes/type_position_float.md) | Optional | A `vector` of `float` numbers for the position of the summoned entity. |
| facing | teleportfacing | Required |  |
| lookAtEntity | [target](../CommandTypes/type_selection.md) | Required |  |
| spawnEvent | entityevents | Optional | A `string` of the in-game event for the entity. |
| nameTag | [id](../CommandTypes/type_id.md) | Optional | A `string` of the entity name tag. |

## Examples

### Summon a pig at your position

```
/summon pig ~ ~ ~
```

### Summon a creeper at specific coordinates

```
/summon creeper 100 64 200
```

### Summon a farmer villager 2 blocks above you

```
/summon villager ~ ~2 ~ minecraft:spawn_farmer
```

### Summon an armor stand facing you

```
/summon armor_stand ~ ~ ~ facing @s
```

### Summon a named iron golem

```
/summon iron_golem ~ ~ ~ "Iron Guardian"
```

### Summon a zombie and trigger a drowned conversion event

```
/summon zombie ~ ~ ~ ~ ~ minecraft:become_drowned
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| entityType | [entitytype](../CommandTypes/type_entitytype.md) | An `enum` of the entity to be summoned. |
| facing | teleportfacing |  |
| lookAtEntity | [target](../CommandTypes/type_selection.md) |  |
| lookAtPosition | [x y z](../CommandTypes/type_position_float.md) |  |
| nameTag | [id](../CommandTypes/type_id.md) | A `string` of the entity name tag. |
| spawnEvent | entityevents | A `string` of the in-game event for the entity. |
| spawnPos | [x y z](../CommandTypes/type_position_float.md) | A `vector` of `float` numbers for the position of the summoned entity. |
| xRot | [rotation](../CommandTypes/type_rval.md) | The `float` degrees `x` to rotate a player when teleporting. |
| yRot | [rotation](../CommandTypes/type_rval.md) | The `float` degrees `y` to rotate a player when teleporting. |
