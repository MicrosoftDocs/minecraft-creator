---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:damage_absorption"
description: "Describes the minecraft:damage_absorption item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:damage_absorption

It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.


## Item Components Damage Absorption Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| absorbable_causes | *not set* | Array of strings | List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed. Value must have at least 1 items. |  | 