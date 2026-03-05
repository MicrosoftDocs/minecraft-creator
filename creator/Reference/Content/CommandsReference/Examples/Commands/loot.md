---
author: mammerla
ms.author: mikeam
title: "loot Command"
description: "Description and usage of the /loot command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/loot` Command

Drops the given loot table into the specified inventory or into the world.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <players: target> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <players: target> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <players: target> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

### Spawn loot into hand

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Spawn `loot` from a `position` using a `loot table` and a `hand` to spawn into.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Spawn loot from position, kill entity with tool

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Spawn `loot` from a `position` using the `loot table` from killing an `entity` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Give loot to player, looting with tool

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

Give `loot` to `player` using a `loot table` while `looting` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

### Give loot to player, killing entity using tool

`/loot <target: targetspawn> <players: target> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Give `loot` to `player` using the `loot table` from `killing` an `entity` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `player` or `players` to give loot to. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Give loot to player, mining a block using tool

`/loot <target: targetspawn> <players: target> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Give `loot` to `player` using the `loot table` from `mining` a block at `position` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `player` or `players` to give loot to. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Insert loot from position, looting with tool

`/loot <target: targetspawn> <players: target> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

Insert `loot` from a `position` using the `loot table` from `looting` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `player` or `players` to give loot to. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

### Insert loot from position, killing entity with tool

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Insert `loot` from a `position` using a `loot table` from `killing` an `entity` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Insert loot from position, mining a block with tool

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Insert `loot` from a `position` using a `loot table` from `mining` a block at `position` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, count, looting with tool

`/loot <target: targetspawn> <position: x y z> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

Replace `loot` for a `player` in a `slot` with a `count` while `looting` from a `loot table` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, looting with tool

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Replace `loot` for a `player` in a `slot` while `looting` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| count | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that defines the number of slots to fill. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, count, killing entity with tool

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Replace `loot` for a `player` in a `slot` with a `count` from `killing` an `entity` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, killing entity with tool

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Replace `loot` for a `player` in a `slot` from `killing` an `entity` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| count | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that defines the number of slots to fill. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, count, mining a block with tool

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Replace `loot` for a `player` in a `slot` with a `count` from `mining` a block at `position` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, mining a block with tool

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

Replace `loot` for a `player` in a `slot` from `mining` a block at `position` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| count | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that defines the number of slots to fill. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, count, looting with a tool

`/loot <target: targetspawn> <entity: target> <entity: target> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

Replace `loot` with a specified `int` amount of loot from a `block` at a `position` into a `slotId`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot, slot, looting with `tool` 

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Replace `loot` from a `block` at a `position` into a `slot` from looting with a tool.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| block | targetblock | Required |  |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| count | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that defines the number of slots to fill. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot slot, count, killing `entity` with a tool

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <loot_table: id> [<tool>|mainhand|offhand: tool]`

Replace `loot` from a `block` at a `position` into a `slotID` in a specified amount, from killing an `entity` with a tool.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| block | targetblock | Required |  |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| source | sourceloot | Required |  |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Required | Path to the loot table |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot from block, killing `entity` with tool

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Replace `loot` from a `block` at a `position` from `killing` an `entity` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| block | targetblock | Required |  |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| count | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that defines the number of slots to fill. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot slot, count, mining a block with a tool

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <entity: target> [<tool>|mainhand|offhand: tool]`

Replace `loot` from a `block` at a `position` into a `slotID` in a specified amount, from `mining` a block at `position` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| block | targetblock | Required |  |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| source | sourceloot | Required |  |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | Specifies the `entity` that will be the source of the loot |
| <tool>|mainhand|offhand | tool | Optional |  |

### Replace loot from block, mining a block with tool.

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <count: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

Replace `loot` from a `block` at a `position` from `mining` a block at `position` using a `tool`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| block | targetblock | Required |  |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| count | [Integer](../CommandTypes/type_int.md) | Required | An `integer` that defines the number of slots to fill. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

### With target, block, position, slotType, slotId, source, TargetBlockPosition, <tool>|mainhand|offhand

`/loot <target: targetspawn> <block: targetblock> <position: x y z> <slotType: entityequipmentslot> <slotId: int> <source: sourceloot> <TargetBlockPosition: x y z> [<tool>|mainhand|offhand: tool]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | targetspawn | Required | Specifies the `entity` that will be the source of the loot |
| block | targetblock | Required |  |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| slotType | entityequipmentslot | Required | Entity equipment slot |
| slotId | [Integer](../CommandTypes/type_int.md) | Required | An `integer` to specify the slot. |
| source | sourceloot | Required |  |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A `vector` made up of x y z coordinates with `float` numbers. |
| <tool>|mainhand|offhand | tool | Optional |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| <tool>|mainhand|offhand | tool |  |
| block | targetblock |  |
| count | [Integer](../CommandTypes/type_int.md) | An `integer` that defines the number of slots to fill. |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Specifies the `entity` that will be the source of the loot |
| loot_table | [Identifier](../CommandTypes/type_id.md) | Path to the loot table |
| players | [Entity Selector](../CommandTypes/type_selection.md) | Specifies the `player` or `players` to give loot to. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | A `vector` made up of x y z coordinates with `float` numbers. |
| slotId | [Integer](../CommandTypes/type_int.md) | An `integer` to specify the slot. |
| slotType | entityequipmentslot | Entity equipment slot |
| source | sourceloot |  |
| target | targetspawn | Specifies the `entity` that will be the source of the loot |
| TargetBlockPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | A `vector` made up of x y z coordinates with `float` numbers. |
