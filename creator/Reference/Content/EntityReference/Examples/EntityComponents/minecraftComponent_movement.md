---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement"
description: "Describes the minecraft:movement entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement

This component represents the foundational movement of an entity.


## Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number |  |  | 
| value | *not set* | Decimal number | The standard movement speed value. | Allay: `0.1`, Armadillo: `0.14`, Bee: `0.3` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:movement": {
  "value": 0.1
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)

At /minecraft:entity/component_groups/minecraft:unrolled/minecraft:movement/: 

```json
"minecraft:movement": {
  "value": 0.14
}
```

At /minecraft:entity/component_groups/minecraft:rolled_up/minecraft:movement/: 

```json
"minecraft:movement": {
  "value": 0
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:movement": {
  "value": 0.3
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:movement": {
  "value": 0.23
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:movement": {
  "value": 0.25
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:movement": {
  "value": 0.4
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:movement": {
  "value": 0.09
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:movement": {
  "value": 0.2
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:movement": {
  "value": 0.175
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)

At /minecraft:entity/component_groups/minecraft:enderman_angry/minecraft:movement/: 

```json
"minecraft:movement": {
  "value": 0.45
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:movement": {
  "value": 0.5
}
```
