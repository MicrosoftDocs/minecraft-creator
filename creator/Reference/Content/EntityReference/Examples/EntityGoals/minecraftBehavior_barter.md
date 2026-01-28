---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.barter"
description: "Describes the minecraft:behavior.barter ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.barter

Enables the mob to barter for items that have been configured as barter currency. Must be used in combination with the barter component.

> [!Note]
> Requires the `minecraft:barter` component and `barter_table` loot table in order to work properly.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Barter (minecraft:barter)](../EntityComponents/minecraftComponent_barter.md)
> 

## Barter Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples
