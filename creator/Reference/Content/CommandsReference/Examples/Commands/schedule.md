---
author: mammerla
ms.author: mikeam
title: "schedule Command"
description: "Description and usage of the /schedule command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/schedule` Command

Schedules an action to be executed once an area is loaded, or after a certain amount of time.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

`/schedule delay clear <function: pathcommand>`

`/schedule clear <function: pathcommand>`

`/schedule onarealoaded add <from: x y z> <to: x y z> <function: pathcommand>`

`/schedule onarealoaded add <type: circlearea> <center: x y z> <radius: int> <function: pathcommand>`

`/schedule onarealoaded add <type: circlearea> <name: id> <function: pathcommand>`

`/schedule onarealoaded clear <cleartype: tickingareaname> <name: id> [function: pathcommand]`

`/schedule onarealoaded clear <cleartype: tickingareaname> <function: pathcommand>`

## Usage

### With condition

#### Schedule function call, delay time ticks

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

Schedule a function call with a delay using a time in game ticks.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |
| time | [int](../CommandTypes/type_int.md) | Required | Time integer |
| DelayMode | delaymode | Optional | An `enum` of either `append` to allow multiple schedules or `replace` to replace the default schedule. |

#### Schedule function call, delay time ticks

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

Schedule a function call with a delay using a time in game ticks.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |
| time | [int](../CommandTypes/type_int.md) | Required | Time integer |
| DelayMode | delaymode | Optional | An `enum` of either `append` to allow multiple schedules or `replace` to replace the default schedule. |

#### Schedule function call, delay time seconds

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

Schedule a function call with a delay using a time in seconds.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |
| time | [int](../CommandTypes/type_int.md) | Required | Time integer |
| DelayMode | delaymode | Optional | An `enum` of either `append` to allow multiple schedules or `replace` to replace the default schedule. |

#### Schedule function call, delay time days

`/schedule delay add <function: pathcommand> <time: int> [DelayMode: delaymode]`

Schedule a function call with a delay using a time in game days.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |
| time | [int](../CommandTypes/type_int.md) | Required | Time integer |
| DelayMode | delaymode | Optional | An `enum` of either `append` to allow multiple schedules or `replace` to replace the default schedule. |

#### Clear Scheduled delay functions

`/schedule delay clear <function: pathcommand>`

Clear previously scheduled delay functions by name.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |

#### Schedule function call when area loaded, location

`/schedule onarealoaded add <from: x y z> <to: x y z> <function: pathcommand>`

Schedule a function when an area is loaded from a location to another location.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| from | [x y z](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that specifies the rectangular area to load, along with `to`. |
| to | [x y z](../CommandTypes/type_position.md) | Required | A vector [x y z] that specifies the rectangular area to load, along with `from`. |
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |

#### Schedule function call when area loaded, radius

`/schedule onarealoaded add <type: circlearea> <center: x y z> <radius: int> <function: pathcommand>`

Schedule a function when an area is loaded in a radius.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| type | circlearea | Required |  |
| center | [x y z](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that specifies the center of a defined loaded area. |
| radius | [int](../CommandTypes/type_int.md) | Required | An `integer` that specifies the area as the number of chunks loaded in. Default: `0`. |
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |

#### Schedule function call when area loaded, ticking area

`/schedule onarealoaded add <type: circlearea> <name: id> <function: pathcommand>`

Schedule a function when an area is loaded in a ticking area.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| type | circlearea | Required |  |
| name | [id](../CommandTypes/type_id.md) | Required | A `string` that defines the `tickingarea` where the command is added. |
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |

#### Clear scheduled area loaded functions, ticking area name

`/schedule onarealoaded clear <cleartype: tickingareaname> <name: id> [function: pathcommand]`

Clear previously scheduled area loaded functions by ticking area name and optionally also by function name.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| cleartype | tickingareaname | Required |  |
| name | [id](../CommandTypes/type_id.md) | Required | A `string` that defines the `tickingarea` where the command is added. |
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Optional | Required. The function to run. |

#### Clear scheduled area loaded functions, function name

`/schedule onarealoaded clear <cleartype: tickingareaname> <function: pathcommand>`

Clear previously scheduled area loaded functions by function name.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| cleartype | tickingareaname | Required |  |
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |

### Other variants

#### Clear Scheduled functions

`/schedule clear <function: pathcommand>`

Clear previously scheduled functions by name.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required | Required. The function to run. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| center | [x y z](../CommandTypes/type_position.md) | A `vector` [x y z] that specifies the center of a defined loaded area. |
| cleartype | tickingareaname |  |
| DelayMode | delaymode | An `enum` of either `append` to allow multiple schedules or `replace` to replace the default schedule. |
| from | [x y z](../CommandTypes/type_position.md) | A `vector` [x y z] that specifies the rectangular area to load, along with `to`. |
| function | [pathcommand](../CommandTypes/type_pathcommand.md) | Required. The function to run. |
| name | [id](../CommandTypes/type_id.md) | A `string` that defines the `tickingarea` where the command is added. |
| radius | [int](../CommandTypes/type_int.md) | An `integer` that specifies the area as the number of chunks loaded in. Default: `0`. |
| time | [int](../CommandTypes/type_int.md) | Time integer |
| to | [x y z](../CommandTypes/type_position.md) | A vector [x y z] that specifies the rectangular area to load, along with `from`. |
| type | circlearea |  |
