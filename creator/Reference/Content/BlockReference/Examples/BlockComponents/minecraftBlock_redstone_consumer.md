---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:redstone_consumer"
description: "Describes the minecraft:redstone_consumer block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:redstone_consumer

A component describing how a block can consume and potentially propogate a redstone signal. This component is not available for block permutations.
Experimental toggles required: Upcoming Creator Features (in format versions before 1.26.0).


## Redstone Consumer Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| min_power | 0 | Integer number | Optional minimum value for incoming signal strength. | 
| propagates_power | false | Boolean true/false | Optional Boolean to control whether a signal can pass through this block or not, defaults to false. | 

### min_power

Optional minimum value for incoming signal strength. If signal strength is greater than or equal to this value then the 'onRedstoneUpdate' event is sent to Scripts. Defaults to 0 meaning event is always emitted.
