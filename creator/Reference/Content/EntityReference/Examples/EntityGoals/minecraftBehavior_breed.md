---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.breed"
description: "Describes the minecraft:behavior.breed ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.breed

Allows this mob to breed with other mobs.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Breedable (minecraft:breedable)](../EntityComponents/minecraftComponent_breedable.md)
> 

## Breed Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Armadillo: `2`, Axolotl: `1`, Bee: `4` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Armadillo: `1`, Goat: `0.6` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.breed": {
  "priority": 2,
  "speed_multiplier": 1
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.breed": {
  "priority": 1,
  "speed_multiplier": 1
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.breed": {
  "priority": 4,
  "speed_multiplier": 1
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.breed": {
  "priority": 3,
  "speed_multiplier": 1
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.breed": {
  "priority": 4
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.breed": {
  "priority": 3,
  "speed_multiplier": 0.6
}
```
