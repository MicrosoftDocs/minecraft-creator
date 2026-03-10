---
author: mammerla
ms.author: mikeam
title: "teleport Command"
description: "Description and usage of the /teleport command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/teleport` Command

Teleports entities  to specific locations. Can also be written as `/tp`.

**Aliases:** `/tp`

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**destination**](#destination) — The `vector` [x y z] position to teleport entities to.
- [**default**](#default)
- [**checkForBlocks**](#checkforblocks) — A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`.

## destination

The `vector` [x y z] position to teleport entities to.

**Syntax variants:**

`/teleport <destination: x y z> [checkForBlocks: Boolean]`

`/teleport <destination: x y z> [yRot: rotation] [xRot: rotation] [checkForBlocks: Boolean]`

`/teleport <destination: x y z> <facing: teleportfacing> <lookAtPosition: x y z> [checkForBlocks: Boolean]`

`/teleport <destination: x y z> <facing: teleportfacing> <lookAtEntity: target> [checkForBlocks: Boolean]`

`/teleport <victim: target> <destination: x y z> [yRot: rotation] [xRot: rotation] [checkForBlocks: Boolean]`

`/teleport <victim: target> <destination: x y z> [checkForBlocks: Boolean]`

`/teleport <victim: target> <destination: x y z> <facing: teleportfacing> <lookAtPosition: x y z> [checkForBlocks: Boolean]`

`/teleport <victim: target> <destination: x y z> <facing: teleportfacing> <lookAtEntity: target> [checkForBlocks: Boolean]`

### Teleport self

`/teleport <destination: x y z> [checkForBlocks: Boolean]`

`Teleport` yourself to a `vector` destination with optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport self, x y rotation

`/teleport <destination: x y z> [yRot: rotation] [xRot: rotation] [checkForBlocks: Boolean]`

`Teleport` yourself to a `vector` destination with optional `y rotation`, `x rotation`, and `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| yRot | [rotation](../CommandTypes/type_rval.md) | Optional | The `float` degrees `y` to rotate a player when teleporting. |
| xRot | [rotation](../CommandTypes/type_rval.md) | Optional | The `float` degrees `x` to rotate a player when teleporting. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport self, facing position

`/teleport <destination: x y z> <facing: teleportfacing> <lookAtPosition: x y z> [checkForBlocks: Boolean]`

`Teleport` yourself to a `vector` destination facing a `vector` position with an optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| facing | teleportfacing | Required |  |
| lookAtPosition | [x y z](../CommandTypes/type_position_float.md) | Required | A `vector` [x y z] of where teleported entities should face. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport self, facing entity

`/teleport <destination: x y z> <facing: teleportfacing> <lookAtEntity: target> [checkForBlocks: Boolean]`

`Teleport` yourself  to a `vector` destination facing an `entity` with an optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| facing | teleportfacing | Required |  |
| lookAtEntity | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which `entity` teleported entities should face. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport player, x y rotation

`/teleport <victim: target> <destination: x y z> [yRot: rotation] [xRot: rotation] [checkForBlocks: Boolean]`

`Teleport` a target `player`  to a `vector` destination with optional `y rotation`, `x rotation`, and `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported. |
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| yRot | [rotation](../CommandTypes/type_rval.md) | Optional | The `float` degrees `y` to rotate a player when teleporting. |
| xRot | [rotation](../CommandTypes/type_rval.md) | Optional | The `float` degrees `x` to rotate a player when teleporting. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport player

`/teleport <victim: target> <destination: x y z> [checkForBlocks: Boolean]`

`Teleport` a target `player` to a `vector` destination with optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported. |
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport player, facing position

`/teleport <victim: target> <destination: x y z> <facing: teleportfacing> <lookAtPosition: x y z> [checkForBlocks: Boolean]`

`Teleport` a target `player` to a `vector` destination facing a `vector` position with an optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported. |
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| facing | teleportfacing | Required |  |
| lookAtPosition | [x y z](../CommandTypes/type_position_float.md) | Required | A `vector` [x y z] of where teleported entities should face. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

### Teleport player, facing entity

`/teleport <victim: target> <destination: x y z> <facing: teleportfacing> <lookAtEntity: target> [checkForBlocks: Boolean]`

`Teleport` player to a `vector` destination facing a `entity` with an optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported. |
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| facing | teleportfacing | Required |  |
| lookAtEntity | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which `entity` teleported entities should face. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

## default

`/teleport <destination: x y z>`

`Teleport` a target `player` to an entity's destination with an optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |

## checkForBlocks

A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`.

`/teleport <victim: target> <destination: x y z> [checkForBlocks: Boolean]`

`Teleport` a target `player` to a `vector` destination with an optional `check for blocks`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| victim | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported. |
| destination | [x y z](../CommandTypes/type_position_float.md) | Required | The `vector` [x y z] position to teleport entities to. |
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |

## Examples

### Teleport yourself to coordinates (100, 64, 200)

```
/teleport @s 100 64 200
```

### Teleport all players to your location

```
/tp @a @s
```

### Teleport all pigs 10 blocks up from their current position

```
/tp @e[type=pig] ~ ~10 ~
```

### Teleport yourself and face a specific direction (yaw 0, pitch 45)

```
/teleport @s 100 64 200 0 45
```

### Teleport yourself facing a specific position

```
/tp @s 100 64 200 facing 0 80 0
```

### Teleport nearest player to the nearest villager

```
/tp @p @e[type=villager,c=1]
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| checkForBlocks | [Boolean](../CommandTypes/type_boolean.md) | A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`. Default: `false`. |
| destination | [x y z](../CommandTypes/type_position_float.md) | The `vector` [x y z] position to teleport entities to. |
| facing | teleportfacing |  |
| lookAtEntity | [target](../CommandTypes/type_selection.md) | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which `entity` teleported entities should face. |
| lookAtPosition | [x y z](../CommandTypes/type_position_float.md) | A `vector` [x y z] of where teleported entities should face. |
| victim | [target](../CommandTypes/type_selection.md) | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported. |
| xRot | [rotation](../CommandTypes/type_rval.md) | The `float` degrees `x` to rotate a player when teleporting. |
| yRot | [rotation](../CommandTypes/type_rval.md) | The `float` degrees `y` to rotate a player when teleporting. |
