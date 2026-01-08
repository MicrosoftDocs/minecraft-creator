---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:breathable"
description: "Describes the minecraft:breathable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:breathable

Defines what blocks this entity can breathe in and gives them the ability to suffocate.


## Breathable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| breathe_blocks | *not set* | Array of strings | List of blocks this entity can breathe in, in addition to the selected items above. |  | 
| breathes_air | true | Boolean true/false | If set, this entity can breathe in air. | Axolotl: `true` | 
| breathes_lava | true | Boolean true/false | If set, this entity can breathe in lava. | Magma Cube: `true` | 
| breathes_solids | false | Boolean true/false | If set, this entity can breathe in solid blocks. |  | 
| breathes_water | false | Boolean true/false | If set, this entity can breathe in water. | Axolotl: `true` | 
| can_dehydrate | *not set* | String |  | Nautilus: `true` | 
| generates_bubbles | true | Boolean true/false | If set, this entity will have visible bubbles while in water. |  | 
| inhale_time | 0 | Decimal number | Time in seconds to recover breath to maximum. | Player: `3.75` | 
| non_breathe_blocks | *not set* | Array of strings | List of blocks this entity cannot breathe in, in addition to the selected items above. |  | 
| suffocate_time | -20 | Integer number | Time in seconds between suffocation damage. | Player: `-1` | 
| suffocateTime | *not set* | Decimal number |  | Bee: `-1` | 
| total_supply | 15 | Integer number | Time in seconds the entity can hold its breath. | Armadillo: `15`, Dolphin: `240`, Happy Ghast: `5` | 
| totalSupply | *not set* | Decimal number |  | Allay: `15` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:breathable": {
  "totalSupply": 15,
  "suffocateTime": 0
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0,
  "breathes_water": true,
  "breathes_air": true,
  "generates_bubbles": false
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:breathable": {
  "totalSupply": 0,
  "suffocateTime": -1
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0,
  "breathes_water": true
}
```

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0,
  "breathes_air": true,
  "breathes_water": true
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:breathable": {
  "total_supply": 240,
  "suffocate_time": 0,
  "breathes_air": true,
  "breathes_water": false,
  "generates_bubbles": false
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:breathable": {
  "breathes_water": true
}
```

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0,
  "breathes_air": false,
  "breathes_water": true
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/component_groups/minecraft:baby/minecraft:breathable/: 

```json
"minecraft:breathable": {
  "total_supply": 5,
  "suffocate_time": 0,
  "breathes_air": true,
  "breathes_water": true
}
```

At /minecraft:entity/component_groups/minecraft:adult/minecraft:breathable/: 

```json
"minecraft:breathable": {
  "total_supply": 5,
  "suffocate_time": 0,
  "breathes_air": true,
  "breathes_water": false
}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0,
  "breathes_lava": true
}
```
