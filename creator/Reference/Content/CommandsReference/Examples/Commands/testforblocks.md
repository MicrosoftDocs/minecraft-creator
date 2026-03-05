---
author: mammerla
ms.author: mikeam
title: "testforblocks Command"
description: "Description and usage of the /testforblocks command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/testforblocks` Command

Tests whether the blocks in two regions match.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [mode: testforblocksmode]`

## Usage

`/testforblocks <begin: x y z> <end: x y z> <destination: x y z> [mode: testforblocksmode]`

Test whether the blocks in one area defined by `begin` and `end` match the blocks in a `destination` with an optional `test for blocks mode`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| begin | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that along with `end` of two opposite corners of a rectangular region to test for. |
| end | [Block Position](../CommandTypes/type_position.md) | Required | Required. A `vector` [x y z] that along with `begin` of two opposite corners of a rectangular region to test for. |
| destination | [Block Position](../CommandTypes/type_position.md) | Required | Required. A `vector` [x y z] of the lower northwest corner to test for. |
| mode | testforblocksmode | Optional | Optional. Either `masked` where air blocks will match any destination, or default `all` which matches all blocks including air. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| begin | [Block Position](../CommandTypes/type_position.md) | A `vector` [x y z] that along with `end` of two opposite corners of a rectangular region to test for. |
| destination | [Block Position](../CommandTypes/type_position.md) | Required. A `vector` [x y z] of the lower northwest corner to test for. |
| end | [Block Position](../CommandTypes/type_position.md) | Required. A `vector` [x y z] that along with `begin` of two opposite corners of a rectangular region to test for. |
| mode | testforblocksmode | Optional. Either `masked` where air blocks will match any destination, or default `all` which matches all blocks including air. |
