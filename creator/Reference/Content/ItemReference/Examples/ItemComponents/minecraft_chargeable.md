---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:chargeable"
description: "Describes the minecraft:chargeable item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:chargeable

> [!IMPORTANT]
> This type is now deprecated, and no longer in use in the latest versions of Minecraft.

Event trigger for when the item has completed its use duration.

> [!Note]
> Released without an experimental toggle in 1.20.30; renamed to `minecraft:use_modifiers` in 1.20.50.

> [!Note]
> This item no longer works after format versions of at least 1.20.50.

> This item requires a format version of at least 1.20.30.


## Chargeable Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| movement_modifier | *not set* | Decimal number | Modifier value to scale the players movement speed when item is in use. | 
| on_complete | *not set* | Object | Event trigger for when the item has completed its use duration. | 