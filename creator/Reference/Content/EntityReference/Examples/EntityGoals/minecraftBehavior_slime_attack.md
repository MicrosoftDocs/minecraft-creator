---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.slime_attack"
description: "Describes the minecraft:behavior.slime_attack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.slime_attack

Causes the entity to grow tired every once in a while, while attacking.

> [!Note]
> In order to attack, the entity must have a `runtime_identifier` set to `minecraft:slime` and a `variant` component with a value greater than 1. Otherwise it will still path towards a target, but it will not cause damage.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)
> [!Note]
> Requires the following components in order to work properly:
> 
> * [Attack (minecraft:attack)](../EntityComponents/minecraftComponent_attack.md)
> * [Variant (minecraft:variant)](../EntityComponents/minecraftComponent_variant.md)
> 
> [!Note]
> Can only be used on the following types of entity:
> 
> * Slime (minecraft:slime)
> * Magma Cube (minecraft:magma_cube)
> 

## Slime Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Magma Cube: `3` | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| speed_multiplier | 1 | Decimal number | During attack behavior, this multiplier modifies the entity's speed when moving toward the target. |  | 
| x_max_rotation | 10 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| y_max_rotation | 10 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate while trying to look at the target. |  | 

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:behavior.slime_attack": {
  "priority": 3
}
```
