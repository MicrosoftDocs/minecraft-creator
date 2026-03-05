---
author: mammerla
ms.author: mikeam
title: "gametest Command"
description: "Description and usage of the /gametest command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/gametest` Command

[Requires the Beta APIs experiment].  Configures various parameters for managing built-in or custom gametest framework tests.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/gametest <mode: gametestmoderunthis>`

`/gametest <mode: gametestmoderunthis> <testName: gametestname> [rotationSteps: int]`

`/gametest <mode: gametestmoderunthis> <testName: gametestname> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]`

`/gametest <mode: gametestmoderunthis> [tag: gametesttag] [rotationSteps: int]`

`/gametest <mode: gametestmoderunthis> [tag: gametesttag] [rotationSteps: int]`

`/gametest <mode: gametestmoderunthis>`

`/gametest <mode: gametestmoderunthis>`

`/gametest <mode: gametestmoderunthis> <testName: gametestname> [width: int] [height: int] [depth: int]`

`/gametest <mode: gametestmoderunthis>`

`/gametest <mode: gametestmoderunthis>`

### Run block test

`/gametest <mode: gametestmoderunthis>`

Internal command variant that is used to run the command associated with a command block.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |

### Run gametest

`/gametest <mode: gametestmoderunthis> <testName: gametestname> [rotationSteps: int]`

Runs a particular gametest with a particular number of rotation steps.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |
| testName | gametestname | Required |  |
| rotationSteps | [Integer](../CommandTypes/type_int.md) | Optional |  |

### Run gametest with custom stop

`/gametest <mode: gametestmoderunthis> <testName: gametestname> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]`

Runs a gametest with additional controls on stop behavior, repeat count, and rotation steps.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |
| testName | gametestname | Required |  |
| stopOnFailure | [Boolean](../CommandTypes/type_boolean.md) | Required |  |
| repeatCount | [Integer](../CommandTypes/type_int.md) | Required |  |
| rotationSteps | [Integer](../CommandTypes/type_int.md) | Optional |  |

### Run gametest with a tag

`/gametest <mode: gametestmoderunthis> [tag: gametesttag] [rotationSteps: int]`

Runs a set of gametests with a particular tag.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |
| tag | gametesttag | Optional |  |
| rotationSteps | [Integer](../CommandTypes/type_int.md) | Optional |  |

### Run gametest until failure

`/gametest <mode: gametestmoderunthis> [tag: gametesttag] [rotationSteps: int]`

Runs a set of gametests until a failure is detected, using a particular tag.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |
| tag | gametesttag | Optional |  |
| rotationSteps | [Integer](../CommandTypes/type_int.md) | Optional |  |

### Clear all tests

`/gametest <mode: gametestmoderunthis>`

Clears out existing gametests and potentially any side effects.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |

### Show gametest origin

`/gametest <mode: gametestmoderunthis>`

Shows the relative position of the origin of a gametest in the world.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |

### Creates a new gametest

`/gametest <mode: gametestmoderunthis> <testName: gametestname> [width: int] [height: int] [depth: int]`

Creates a new gametest with the specified name, width, height, and depth.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |
| testName | gametestname | Required |  |
| width | [Integer](../CommandTypes/type_int.md) | Optional |  |
| height | [Integer](../CommandTypes/type_int.md) | Optional |  |
| depth | [Integer](../CommandTypes/type_int.md) | Optional |  |

### Run nearby tests

`/gametest <mode: gametestmoderunthis>`

Runs nearby tests.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |

### Stop all tests

`/gametest <mode: gametestmoderunthis>`

Stops all currently-running gametests.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | gametestmoderunthis | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| depth | [Integer](../CommandTypes/type_int.md) |  |
| height | [Integer](../CommandTypes/type_int.md) |  |
| mode | gametestmoderunthis |  |
| repeatCount | [Integer](../CommandTypes/type_int.md) |  |
| rotationSteps | [Integer](../CommandTypes/type_int.md) |  |
| stopOnFailure | [Boolean](../CommandTypes/type_boolean.md) |  |
| tag | gametesttag |  |
| testName | gametestname |  |
| width | [Integer](../CommandTypes/type_int.md) |  |
