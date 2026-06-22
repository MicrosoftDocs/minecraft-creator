---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:support"
description: "Describes the minecraft:support block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:support

Defines the support shape of the block. Currently only allows for blocks to have the same shape as a Vanilla fence and Vanilla stair. To work with custom stairs, requires the use of "minecraft:vertical_half" and "minecraft:cardinal_direction" or "minecraft:facing_direction" which can be set through the "minecraft:placement_direction" block trait. Custom blocks without this component will default to unit cube support. The type of support shape for this block. Currently, the options are: "fence" and "stair".

> [!Note]
> Defines how this block provides structural support. Currently accepts shape `fence` or `stair`. Pair with the `minecraft:placement_direction` trait (and `minecraft:vertical_half`) for custom stair-shaped supports.

> [!Note]
> Available without the Upcoming Creator Features experimental toggle for block format versions 1.26.0 or higher.

> [!Note]
> This item requires a format version of at least 1.21.130.


## Block Support Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| shape | *not set* | [Shape](#shape-choices) choices | Required field. The type of support shape for this block. | 

### Shape choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| fence | Fence | |
| stair | Stair | |