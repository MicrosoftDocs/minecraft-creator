---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:kinetic_weapon"
description: "Describes the minecraft:kinetic_weapon item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:kinetic_weapon

Allows an item to deal kinetic damage and its effects. This happens every tick while in use, in a straight line along the user's view vector, with damage computed based on both the user's and the target's velocity projected onto the view vector (via a dot product). The more the user and target move toward each other, and the more this movement is aligned with the user's view vector, the higher the damage. After "damage_multiplier" and "damage_modifier" are applied, the resulting damage is floored to the nearest lower integer.


## Item Components Kinetic Weapon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| creative_reach | *not set* | [Creative Reach](#item-components-floatrange) item | Defines the reach used when the user is in Creative Mode. Defaults to "reach" if unspecified. |  | 
| damage_conditions | *not set* | [Damage Conditions](#item-components-kinetic-weapon-kinetic-effect-conditions) item | Conditions that need to be satisfied for damage to be applied. If not specified, damage is not applied. |  | 
| damage_modifier | 0 | Decimal number | Value added to the the scaled dot product (after applying "damage_multiplier"). |  | 
| damage_multiplier | 1 | Decimal number | Value multiplied to sum of the dot products of the user and target's velocity vectors projected onto the view vector. |  | 
| delay | 0 | Integer number | Time, in ticks, after which kinetic damage and its effects start being applied. |  | 
| dismount_conditions | *not set* | [Dismount Conditions](#item-components-kinetic-weapon-kinetic-effect-conditions) item | Conditions that need to be satisfied for riders to be dismounted. If not specified, riders cannot be dismounted. |  | 
| hitbox_margin | 0 | Decimal number | Added tolerance to the view vector raycast for detecting entity collisions. |  | 
| knockback_conditions | *not set* | [Knockback Conditions](#item-components-kinetic-weapon-kinetic-effect-conditions) item | Conditions that need to be satisfied for knockback to be applied. If not specified, knockback is not applied. |  | 
| reach | {"max":3,"min":0} | [Reach](#item-components-floatrange) item | Defines the range (in blocks) along the user's view vector where entities can be hit. Only targets within this distance are considered. Block collisions between the user and target block damage and its effects. |  | 

## Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 0 | Decimal number |  |  | 
| min | 0 | Decimal number |  |  | 

## Item Components Kinetic Weapon Kinetic Effect Conditions
Conditions that need to be satisfied for a specific effect of a kinetic weapon to be applied.


#### Item Components Kinetic Weapon Kinetic Effect Conditions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_duration | -1 | Integer number | Time, in ticks, during which the effect can be applied after "delay" elapses. If negative, the effect is applied indefinitely. |  | 
| min_relative_speed | 0 | Decimal number | Minimum relative speed of the user with respect to the target (projected onto the view vector via a dot product) required for the effect to be applied. |  | 
| min_speed | 0 | Decimal number | Minimum user's speed (projected onto the view vector via a dot product) required for the effect to be applied. |  | 