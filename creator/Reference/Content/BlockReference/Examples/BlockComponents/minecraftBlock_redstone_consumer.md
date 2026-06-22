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

A component describing how a block can consume and potentially propagate a redstone signal. This component is not available for block permutations.

> [!Note]
> Lets a custom block consume and optionally propagate a redstone signal. Pairs with the `BlockComponentRedstoneUpdateEvent` script API for custom redstone behavior. Not available on block permutations.

> [!Note]
> Available without the Upcoming Creator Features experimental toggle for block format versions 1.26.0 or higher. In 1.26.0 the field was renamed from the original `propogates_power` spelling to `propagates_power`.

> [!Note]
> This item requires a format version of at least 1.21.130.


## Block Redstone Consumer Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| min_power | 0 | Integer number | Optional minimum value for incoming signal strength. | 
| propagates_power | false | Boolean true/false | Optional Boolean to control whether a signal can pass through this block or not, defaults to false. | 

### min_power

Optional minimum value for incoming signal strength. If signal strength is greater than or equal to this value then the 'onRedstoneUpdate' event is sent to Scripts. Defaults to 0 meaning event is always emitted. Value must be <= 15.


## Samples
