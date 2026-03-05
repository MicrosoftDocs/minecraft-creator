---
author: mammerla
ms.author: mikeam
title: "testforblock Command"
description: "Description and usage of the /testforblock command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/testforblock` Command

Tests whether a certain block is in a specific location.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/testforblock <position: x y z> <tileName: Block> [blockStates: block_state_array]`

## Usage

`/testforblock <position: x y z> <tileName: Block> [blockStates: block_state_array]`

Test for a `block name` in a `vector` position with optional `block states`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [Block Position](../CommandTypes/type_position.md) | Required | Required. A `vector` of the location the block to test. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required | Required. An `enum` of the block to test for. |
| blockStates | block_state_array | Optional | Optional. The `block states` to match when testing. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| blockStates | block_state_array | Optional. The `block states` to match when testing. |
| position | [Block Position](../CommandTypes/type_position.md) | Required. A `vector` of the location the block to test. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required. An `enum` of the block to test for. |
