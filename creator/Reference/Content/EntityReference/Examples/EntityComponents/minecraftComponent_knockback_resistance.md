---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:knockback_resistance"
description: "Describes the minecraft:knockback_resistance entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:knockback_resistance

Determines an entity's resistance to knockback from melee attacks. A value of 0.0 means no resistance, while 1.0 provides full immunity to knockback (like iron golems).

## Alternate Simple Representations

This item can also be represented as a `Decimal number`.


## Knockback Resistance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number | Maximum potential knockback resistance for this entity. | Ender Dragon: `100` | 
| value | *not set* | Decimal number | The amount of knockback resistance, from 0.0 (none) to 1.0 (full immunity). | Armor Stand: `1`, Ender Dragon: `100`, Sulfur Cube: `-2`, `-1`, `0.7`, `0.5`, `0.8` | 

## Samples

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:knockback_resistance": {
  "value": 1
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:knockback_resistance": {
  "value": 0
}
```

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:knockback_resistance": {
  "max": 100,
  "value": 100
}
```

#### [Sulfur Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json)

At /minecraft:entity/component_groups/minecraft:sulfur_cube_bouncy/minecraft:knockback_resistance/: 

```json
"minecraft:knockback_resistance": {
  "value": -2
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_regular/minecraft:knockback_resistance/: 

```json
"minecraft:knockback_resistance": {
  "value": -1
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_slow_flat/minecraft:knockback_resistance/: 

```json
"minecraft:knockback_resistance": {
  "value": 0.7
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_fast_sliding/minecraft:knockback_resistance/: 

```json
"minecraft:knockback_resistance": {
  "value": 0.5
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_slow_sliding/minecraft:knockback_resistance/: 

```json
"minecraft:knockback_resistance": {
  "value": 0.8
}
```
