---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:giveable"
description: "Describes the minecraft:giveable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:giveable

Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.


## Giveable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | An optional cool down in seconds to prevent spamming interactions. |  | 
| items | *not set* | Array of strings | The list of items that can be given to the entity to place in their inventory. |  | 
| on_give | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the correct item is given. |  | 

## Samples
