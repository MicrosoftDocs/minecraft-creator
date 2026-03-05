---
author: mammerla
ms.author: mikeam
title: "tickingarea Command"
description: "Description and usage of the /tickingarea command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/tickingarea` Command

Add, remove, or list ticking areas. See more information in the [Ticking Area documentation](https://learn.microsoft.com/minecraft/creator/documents/tickingareacommand).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/tickingarea <mode: tickingareamodeadd> <from: x y z> <to: x y z> [name: id] [preload: Boolean]`

`/tickingarea <mode: tickingareamodeadd> <circle: addtickingareatype> <center: x y z> <radius: int> [name: id] [preload: Boolean]`

`/tickingarea <mode: tickingareamodeadd> <position: x y z>`

`/tickingarea <mode: tickingareamodeadd> <name: id>`

`/tickingarea <mode: tickingareamodeadd>`

`/tickingarea <mode: tickingareamodeadd> [all-dimensions: alldimensions]`

`/tickingarea <mode: tickingareamodeadd> <position: x y z> [preload: Boolean]`

`/tickingarea <mode: tickingareamodeadd> <name: id> [preload: Boolean]`

### Add ticking area, rectangle

`/tickingarea <mode: tickingareamodeadd> <from: x y z> <to: x y z> [name: id] [preload: Boolean]`

`Add` a `ticking area` `from` one vector `to` another with an optional `name` and `preload` value.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| from | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that along with `to` of two opposite corners of a rectangular region to test for. |
| to | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that along with `from` of two opposite corners of a rectangular region to test for. |
| name | [Identifier](../CommandTypes/type_id.md) | Optional | An optional `string` to specify the name of a ticking area. |
| preload | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that queries the preload value. Default: `false`. |

### Add ticking area, circle

`/tickingarea <mode: tickingareamodeadd> <circle: addtickingareatype> <center: x y z> <radius: int> [name: id] [preload: Boolean]`

`Add` a `circle` `ticking area` with a vector `center` and `radius`, as well as an optional `preload`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| circle | addtickingareatype | Required |  |
| center | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that specifies the center of a defined loaded area. |
| radius | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that specifies the area as the number of chunks loaded in. Between 0 and 4. |
| name | [Identifier](../CommandTypes/type_id.md) | Optional | An optional `string` to specify the name of a ticking area. |
| preload | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that queries the preload value. Default: `false`. |

### Remove ticking area, vector

`/tickingarea <mode: tickingareamodeadd> <position: x y z>`

`Remove` a `ticking area` from a vector `position`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| position | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` [x y z] of a point within the ticking area. |

### Remove ticking area, named

`/tickingarea <mode: tickingareamodeadd> <name: id>`

`Remove` a `ticking area` with a given `name`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| name | [Identifier](../CommandTypes/type_id.md) | Required | An optional `string` to specify the name of a ticking area. |

### Remove all ticking areas

`/tickingarea <mode: tickingareamodeadd>`

`Remove` all `ticking areas`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |

### List all ticking areas

`/tickingarea <mode: tickingareamodeadd> [all-dimensions: alldimensions]`

`List` all `ticking areas` with optional `all dimensions`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| all-dimensions | alldimensions | Optional | Specify `all-dimensions` to determine whether ticking areas in other dimensions are listed. |

### Preload ticking area, position

`/tickingarea <mode: tickingareamodeadd> <position: x y z> [preload: Boolean]`

`Preload` a `ticking area` of `position` vector with optional `preload`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| position | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` [x y z] of a point within the ticking area. |
| preload | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that queries the preload value. Default: `false`. |

### Preload ticking area, named

`/tickingarea <mode: tickingareamodeadd> <name: id> [preload: Boolean]`

`Preload` a `ticking area` of `name` with optional `preload`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | tickingareamodeadd | Required |  |
| name | [Identifier](../CommandTypes/type_id.md) | Required | An optional `string` to specify the name of a ticking area. |
| preload | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that queries the preload value. Default: `false`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| all-dimensions | alldimensions | Specify `all-dimensions` to determine whether ticking areas in other dimensions are listed. |
| center | [Block Position](../CommandTypes/type_position.md) | A `vector` [x y z] that specifies the center of a defined loaded area. |
| circle | addtickingareatype |  |
| from | [Block Position](../CommandTypes/type_position.md) | A `vector` [x y z] that along with `to` of two opposite corners of a rectangular region to test for. |
| mode | tickingareamodeadd |  |
| name | [Identifier](../CommandTypes/type_id.md) | An optional `string` to specify the name of a ticking area. |
| position | [Block Position](../CommandTypes/type_position.md) | A `vector` [x y z] of a point within the ticking area. |
| preload | [Boolean](../CommandTypes/type_boolean.md) | A `Boolean` that queries the preload value. Default: `false`. |
| radius | [Integer](../CommandTypes/type_int.md) | An `integer` that specifies the area as the number of chunks loaded in. Between 0 and 4. |
| to | [Block Position](../CommandTypes/type_position.md) | A `vector` [x y z] that along with `from` of two opposite corners of a rectangular region to test for. |
