---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:piercing_weapon"
description: "Describes the minecraft:piercing_weapon item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:piercing_weapon

Allows an item to deal damage to all entities detected in a straight line along the user's view vector. Items with this component cannot destroy blocks, as the attack action always takes priority, regardless of what the user is looking at.


## Item Components Piercing Weapon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| hitbox_margin | 0 | Decimal number | Added tolerance to the view vector raycast for detecting entity collisions. |  | 
| reach | {"max":3,"min":0} | [Reach](#item-components-floatrange) item | Defines the range (in blocks) along the user's view vector where entities can be hit. Only targets within this distance are considered. Block collisions between the user and target block damage and its effects. |  | 

## Item Components FloatRange

#### Item Components FloatRange Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number |  |  | 
| min | *not set* | Decimal number |  |  | 