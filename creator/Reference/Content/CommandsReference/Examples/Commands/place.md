---
author: mammerla
ms.author: mikeam
title: "place Command"
description: "Description and usage of the /place command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/place` Command

Places a jigsaw structure, feature, or feature rule in the world.

| | |
|:---|:---|
| **Permission Level** | Admin |
| **Requires Cheats** | Yes |

## Syntax Overview

`/place structure <structure: jigsawstructure> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: liquidsettings]`

`/place jigsaw <pool: pathcommand> <jigsawTarget: id> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: liquidsettings]`

`/place feature <feature: features> [position: x y z]`

`/place featurerule <featurerule: featurerules> [position: x y z]`

### With structure, pos, ignoreStartHeight, keepJigsaws, includeEntities, liquidSettings

`/place structure <structure: jigsawstructure> [pos: x y z] [ignoreStartHeight: Boolean] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: liquidsettings]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| structure | jigsawstructure | Required |  |
| pos | [Block Position](../CommandTypes/type_position.md) | Optional |  |
| ignoreStartHeight | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| keepJigsaws | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| liquidSettings | liquidsettings | Optional |  |

### With pool, jigsawTarget, maxDepth, pos, keepJigsaws, includeEntities, liquidSettings

`/place jigsaw <pool: pathcommand> <jigsawTarget: id> <maxDepth: int> [pos: x y z] [keepJigsaws: Boolean] [includeEntities: Boolean] [liquidSettings: liquidsettings]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| pool | [Function Path](../CommandTypes/type_pathcommand.md) | Required |  |
| jigsawTarget | [Identifier](../CommandTypes/type_id.md) | Required |  |
| maxDepth | [Integer](../CommandTypes/type_int.md) | Required |  |
| pos | [Block Position](../CommandTypes/type_position.md) | Optional |  |
| keepJigsaws | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| liquidSettings | liquidsettings | Optional |  |

### With feature, position

`/place feature <feature: features> [position: x y z]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| feature | features | Required |  |
| position | [Block Position](../CommandTypes/type_position.md) | Optional |  |

### With featurerule, position

`/place featurerule <featurerule: featurerules> [position: x y z]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| featurerule | featurerules | Required |  |
| position | [Block Position](../CommandTypes/type_position.md) | Optional |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| feature | features |  |
| featurerule | featurerules |  |
| ignoreStartHeight | [Boolean](../CommandTypes/type_boolean.md) |  |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) |  |
| jigsawTarget | [Identifier](../CommandTypes/type_id.md) |  |
| keepJigsaws | [Boolean](../CommandTypes/type_boolean.md) |  |
| liquidSettings | liquidsettings |  |
| maxDepth | [Integer](../CommandTypes/type_int.md) |  |
| pool | [Function Path](../CommandTypes/type_pathcommand.md) |  |
| pos | [Block Position](../CommandTypes/type_position.md) |  |
| position | [Block Position](../CommandTypes/type_position.md) |  |
| structure | jigsawstructure |  |
