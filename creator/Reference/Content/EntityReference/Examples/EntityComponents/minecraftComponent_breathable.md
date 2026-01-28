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
| breathes_air | true | Boolean true/false | If set, this entity can breathe in air. |  | 
| breathes_lava | true | Boolean true/false | If set, this entity can breathe in lava. |  | 
| breathes_solids | false | Boolean true/false | If set, this entity can breathe in solid blocks. |  | 
| breathes_water | false | Boolean true/false | If set, this entity can breathe in water. | Bogged: `true` | 
| generates_bubbles | true | Boolean true/false | If set, this entity will have visible bubbles while in water. |  | 
| inhale_time | 0 | Decimal number | Time in seconds to recover breath to maximum. |  | 
| non_breathe_blocks | *not set* | Array of strings | List of blocks this entity cannot breathe in, in addition to the selected items above. |  | 
| suffocate_time | -20 | Integer number | Time in seconds between suffocation damage. |  | 
| suffocateTime | *not set* | Decimal number |  |  | 
| total_supply | 15 | Integer number | Time in seconds the entity can hold its breath. | Bat: `15` | 
| totalSupply | *not set* | Decimal number |  | Allay: `15` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:breathable": {
  "totalSupply": 15,
  "suffocateTime": 0
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:breathable": {
  "total_supply": 15,
  "suffocate_time": 0
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
