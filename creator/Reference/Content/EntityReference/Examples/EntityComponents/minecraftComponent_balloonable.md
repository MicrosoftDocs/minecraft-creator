---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:balloonable"
description: "Describes the minecraft:balloonable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:balloonable

Allows this entity to have a balloon attached and defines the conditions and events for this entity when is ballooned.


## Balloonable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| mass | 1 | Decimal number | Mass that this entity will have when computing balloon pull forces. |  | 
| max_distance | 10 | Decimal number | Distance in blocks at which the balloon breaks. |  | 
| on_balloon | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is ballooned. |  | 
| on_unballoon | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is unballooned. |  | 
| soft_distance | 2 | Decimal number | Distance in blocks at which the 'spring' effect that lifts it. |  | 