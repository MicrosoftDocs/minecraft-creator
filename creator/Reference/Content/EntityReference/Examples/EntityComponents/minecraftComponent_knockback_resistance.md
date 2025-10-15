---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:knockback_resistance"
description: "Describes the minecraft:knockback_resistance entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:knockback_resistance

Compels an entity to resist being knocked backwards by a melee attack.

## Alternate Simple Representations

This item can also be represented as a `Decimal number`.


## Knockback Resistance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number | Maximum potential knockback resistence that this has. | Ender Dragon: `100` | 
| value | *not set* | Decimal number | The amount of knockback resistance that an entity has. | Armor Stand: `1`, Ender Dragon: `100`, Hoglin: `0.6` | 

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
  "value": 100,
  "max": 100
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:knockback_resistance": {
  "value": 0.6
}
```

#### [Nautilus](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/nautilus.json)


```json
"minecraft:knockback_resistance": {
  "value": 0.3
}
```

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:knockback_resistance": {
  "value": 0.75
}
```
