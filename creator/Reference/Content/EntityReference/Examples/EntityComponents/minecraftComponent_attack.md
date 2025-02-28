---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:attack"
description: "Describes the minecraft:attack entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:attack

Allows an entity to define an entity's melee attack and any additional effects on it's attack.


## Attack Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage | *not set* | Range of floats | Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it. | Axolotl: `2`, Blaze: `6`, Bogged: `3` | 
| effect_duration | 0 | Decimal number | Duration in seconds of the status ailment applied to the damaged entity. | Bee: `10`, `18`, Cave Spider: `7`, `15` | 
| effect_name | *not set* | String | Identifier of the status ailment to apply to an entity attacked by this entity's melee attack. | Bee: `"poison"`, Husk: `"hunger"`, Stray: `"slowness"` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:attack": {
  "damage": 2
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/normal_attack/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": 2,
  "effect_name": "poison",
  "effect_duration": 10
}
```

At /minecraft:entity/component_groups/hard_attack/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": 2,
  "effect_name": "poison",
  "effect_duration": 18
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:attack": {
  "damage": 6
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:attack": {
  "damage": 3
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_poison_easy/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": 2,
  "effect_name": "poison",
  "effect_duration": 0
}
```

At /minecraft:entity/component_groups/minecraft:spider_poison_normal/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": 2,
  "effect_name": "poison",
  "effect_duration": 7
}
```

At /minecraft:entity/component_groups/minecraft:spider_poison_hard/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": 2,
  "effect_name": "poison",
  "effect_duration": 15
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:attack": {
  "damage": 5
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:attack": {
  "damage": 7
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)

At /minecraft:entity/component_groups/goat_baby/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": 1
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)

At /minecraft:entity/component_groups/minecraft:hoglin_adult/minecraft:attack/: 

```json
"minecraft:attack": {
  "damage": [
    3,
    9
  ]
}
```
