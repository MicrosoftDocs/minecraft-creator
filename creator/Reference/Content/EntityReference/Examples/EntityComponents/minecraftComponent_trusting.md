---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:trusting"
description: "Describes the minecraft:trusting entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:trusting

Defines the rules for a mob to trust players.


## Trusting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| probability | 1 | Decimal number | The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%. |  | 
| trust_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when this entity becomes trusting. |  | 
| trust_items | *not set* | Array of strings | The list of items that can be used to get the entity to trust players. |  | 

## Samples
