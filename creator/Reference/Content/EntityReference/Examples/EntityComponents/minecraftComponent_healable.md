---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:healable"
description: "Describes the minecraft:healable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:healable

How entities heal.


## Healable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | The filter group that defines the conditions for using this item to heal the entity. | Parrot: `{"test":"is_riding","operator":"!=","value":true}` | 
| force_use | false | Boolean true/false | Determines if item can be used regardless of entity being at full health. | Parrot: `true` | 
| items | *not set* | Array of [Items](#items) items | The array of items that can be used to heal this entity. | Llama: `[{"item":"wheat","heal_amount":2},{"item":"hay_block","heal_amount":10}]`, Parrot: `[{"item":"cookie","heal_amount":0,"effects":[{"name":"fatal_poison","chance":1,"duration":1000,"amplifier":0}]}]` | 

## Items
The array of items that can be used to heal this entity.


#### Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| effects | *not set* | Array of [Effects](#effects) items |  |  | 
| heal_amount | 1 | Integer number | The amount of health this entity gains when fed this item. |  | 
| item | *not set* | String | Item identifier that can be used to heal this entity. |  | 

## Effects

#### Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amplifier | *not set* | Decimal number |  | Parrot: `0` | 
| chance | *not set* | Decimal number |  | Parrot: `1` | 
| duration | *not set* | Decimal number |  | Parrot: `1000` | 
| name | *not set* | String |  | Parrot: `"fatal_poison"` | 

## Samples

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "wheat",
      "heal_amount": 2
    },
    {
      "item": "hay_block",
      "heal_amount": 10
    }
  ]
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:healable": {
  "force_use": true,
  "filters": {
    "test": "is_riding",
    "operator": "!=",
    "value": true
  },
  "items": [
    {
      "item": "cookie",
      "heal_amount": 0,
      "effects": [
        {
          "name": "fatal_poison",
          "chance": 1,
          "duration": 1000,
          "amplifier": 0
        }
      ]
    }
  ]
}
```

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "torchflower_seeds",
      "heal_amount": 2
    }
  ]
}
```
