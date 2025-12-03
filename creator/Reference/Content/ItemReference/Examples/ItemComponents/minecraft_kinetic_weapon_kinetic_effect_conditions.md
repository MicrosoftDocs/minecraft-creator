---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:kinetic_weapon_kinetic_effect_conditions"
description: "Describes the minecraft:kinetic_weapon_kinetic_effect_conditions item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:kinetic_weapon_kinetic_effect_conditions

Conditions that need to be satisfied for a specific effect of a kinetic weapon to be applied.


## Item Components Kinetic Weapon Kinetic Effect Conditions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_duration | -1 | Integer number | Time, in ticks, during which the effect can be applied after "delay" elapses. If negative, the effect is applied indefinitely. |  | 
| min_relative_speed | 0 | Decimal number | Minimum relative speed of the user with respect to the target (projected onto the view vector via a dot product) required for the effect to be applied. |  | 
| min_speed | 0 | Decimal number | Minimum user's speed (projected onto the view vector via a dot product) required for the effect to be applied. |  | 