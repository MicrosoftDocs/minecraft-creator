---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_parent"
description: "Describes the minecraft:behavior.follow_parent ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_parent

Allows the mob to follow their parent around.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Is Baby (minecraft:is_baby)](../EntityComponents/minecraftComponent_is_baby.md)
> Requires the `minecraft:is_baby` component in order to have an adult mob tagged as a parent for the entity.

## Follow Parent Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Armadillo: `5`, Bee: `11`, Dolphin: `4` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Armadillo: `1.25`, Axolotl: `1.1`, Camel: `2.5` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 5,
  "speed_multiplier": 1.25
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 5,
  "speed_multiplier": 1.1
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 11,
  "speed_multiplier": 1.1
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 5,
  "speed_multiplier": 2.5
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 4,
  "speed_multiplier": 1.1
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 4,
  "speed_multiplier": 1
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 9,
  "speed_multiplier": 1.1
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 6,
  "speed_multiplier": 1
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 5,
  "speed_multiplier": 1
}
```

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 13,
  "speed_multiplier": 1.1
}
```

#### [Pig](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 6,
  "speed_multiplier": 1.1
}
```

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)


```json
"minecraft:behavior.follow_parent": {
  "priority": 4,
  "speed_multiplier": 1.25
}
```
