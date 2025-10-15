---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:kinetic_weapon"
description: "Describes the minecraft:kinetic_weapon item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:kinetic_weapon

Allows an item to deal kinetic damage and its effects. This happens every tick while in use, in a straight line along the user's view vector, with damage computed based on both the user's and the target's velocity projected onto the view vector (via a dot product). The more the user and target move toward each other, and the more this movement is aligned with the user's view vector, the higher the damage. After "damage_multiplier" and "damage_modifier" are applied, the resulting damage is floored to the nearest lower integer.


## Item Components Kinetic Weapon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_conditions | *not set* | [Damage Conditions (Item Components Kinetic Weapon Kinetic Effect Conditions)](#item-components-kinetic-weapon-kinetic-effect-conditions) item | Conditions that need to be satisfied for damage to be applied. If not specified, damage is not applied. |  | 
| damage_modifier | *not set* | Decimal number | Value added to the the scaled dot product (after applying "damage_multiplier"). Default value: 0. |  | 
| damage_multiplier | *not set* | Decimal number | Value multiplied to sum of the dot products of the user and target's velocity vectors projected onto the view vector. Default value: 1. |  | 
| delay | *not set* | Integer number | Time, in ticks, after which kinetic damage and its effects start being applied. Default value: 0. |  | 
| dismount_conditions | *not set* | [Dismount Conditions (Item Components Kinetic Weapon Kinetic Effect Conditions)](#item-components-kinetic-weapon-kinetic-effect-conditions) item | Conditions that need to be satisfied for riders to be dismounted. If not specified, riders cannot be dismounted. |  | 
| hitbox_margin | *not set* | Decimal number | Added tolerance to the view vector raycast for detecting entity collisions. Default value: 0. |  | 
| knockback_conditions | *not set* | [Knockback Conditions (Item Components Kinetic Weapon Kinetic Effect Conditions)](#item-components-kinetic-weapon-kinetic-effect-conditions) item | Conditions that need to be satisfied for knockback to be applied. If not specified, knockback is not applied. |  | 
| reach | *not set* | [Reach (Item Components FloatRange)](#item-components-floatrange) item | Defines the range (in blocks) along the user's view vector where entities can be hit. Only targets within this distance are considered. Block collisions between the user and target block damage and its effects. Default value: [0, 3]. |  | 

## Item Components Kinetic Weapon Kinetic Effect Conditions
Conditions that need to be satisfied for a specific effect of a kinetic weapon to be applied.


#### Item Components Kinetic Weapon Kinetic Effect Conditions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_duration | *not set* | Integer number | Time, in ticks, during which the effect can be applied after "delay" elapses. If negative, the effect is applied indefinitely. Default value: -1. |  | 
| min_relative_speed | *not set* | Decimal number | Minimum relative speed of the user with respect to the target (projected onto the view vector via a dot product) required for the effect to be applied. Default value: 0. |  | 
| min_speed | *not set* | Decimal number | Minimum user's speed (projected onto the view vector via a dot product) required for the effect to be applied. Default value: 0. |  | 

## Item Components FloatRange

#### Item Components FloatRange Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number |  |  | 
| min | *not set* | Decimal number |  |  | 