---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:piercing_weapon"
description: "Describes the minecraft:piercing_weapon item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:piercing_weapon

Allows an item to deal damage to all entities detected in a straight line along the user's view vector. Items with this component cannot destroy blocks, as the attack action always takes priority, regardless of what the user is looking at.

> [!Note]
> This item requires a format version of at least 1.21.130.


## Item Piercing Weapon Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| creative_reach | *not set* | [Creative Reach](#item-floatrange) item | Defines the reach used when the user is in Creative Mode. Defaults to "reach" if unspecified. | 
| hitbox_margin | 0 | Decimal number | Added tolerance to the view vector raycast for detecting entity collisions. | 
| reach | {"max":3,"min":0} | [Reach](#item-floatrange) item | Defines the range (in blocks) along the user's view vector where entities can be hit. | 

### reach

Defines the range (in blocks) along the user's view vector where entities can be hit. Only targets within this distance are considered. Block collisions between the user and target block damage and its effects.


### Item FloatRange
Specifies a numeric range between minimum and maximum values for randomized item properties. Used for variable durability, damage ranges, or timing intervals. The game picks a random value within the range when the property is evaluated, adding natural variation to item behavior.


#### Item FloatRange Properties

**JSON path:** `creative_reach`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples
