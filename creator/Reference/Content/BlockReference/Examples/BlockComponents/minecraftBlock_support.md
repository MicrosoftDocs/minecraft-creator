---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:support"
description: "Describes the minecraft:support block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:support

Defines the support shape of the block. Currently only allows for blocks to have the same shape as a Vanilla fence and Vanilla stair. To work with custom stairs, requires the use of `minecraft:vertical_half` and `minecraft:cardinal_direction` or `minecraft:facing_direction` which can be set through the `minecraft:placement_direction` block trait. Custom blocks without this component will default to unit cube support.
Experimental toggles required: Upcoming Creator Features (in format versions before 1.26.0).


## Support Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| shape | *not set* | String | Required field. The type of support shape for this block. Currently, the options are: `fence` and `stair`. |  | 