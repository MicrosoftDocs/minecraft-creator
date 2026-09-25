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

> [!Note]
> From 1.21.130, each entry in `items` accepts an optional `result_item` field. On a successful heal, the consumed item is replaced in the player's inventory with the specified item.


## Entity Healable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | The filter group that defines the conditions for using this item to heal the entity. | Parrot: `{"operator":"!=","test":"is_riding","value":true}` | 
| filters (as Object) | *not set* | Object |  |  | 
| force_use | false | Boolean true/false | Determines if item can be used regardless of entity being at full health. | Parrot: `true` | 
| items | [] | Array of [Items](#entity-healablecomponentfeeditem) items | The array of items that can be used to heal this entity. | Llama: `[{"item":"wheat","heal_amount":2},{"item":"hay_block","heal_amount":10}]`, Parrot: `[{"effects":[{"amplifier":0,"chance":1,"duration":1000,"name":"fatal_poison"}],"heal_amount":0,"item":"cookie"}]` | 

### Filters

#### Filters Properties

**JSON path:** `filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Entity HealableComponentFeedItem

#### Entity HealableComponentFeedItem Properties

**JSON path:** `items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| effects | [] | Array of [Effects](#entity-healablecomponenteffect) items | The effects to apply when this item is used to heal the entity. | 
| heal_amount | 1 | Integer number | The amount of health this entity gains when fed this item. | 
| item | {} | String | Item identifier that can be used to heal this entity. | 
| item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| result_item | {} | String | The feed item used will transform to this item upon successful interaction. | 
| result_item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Entity HealableComponentEffect

##### Entity HealableComponentEffect Properties

**JSON path:** `items > effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| amplifier | 1 | Integer number | The amplifier of the effect. | 
| chance | 1 | Decimal number | The chance that the effect is applied. | 
| duration | 0 | Object | The duration of the effect in seconds, or "infinite". | 
| name |  | String | The name of the effect to apply. | 

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
  "filters": {
    "operator": "!=",
    "test": "is_riding",
    "value": true
  },
  "force_use": true,
  "items": [
    {
      "effects": [
        {
          "amplifier": 0,
          "chance": 1,
          "duration": 1000,
          "name": "fatal_poison"
        }
      ],
      "heal_amount": 0,
      "item": "cookie"
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
