---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:hurt_on_condition"
description: "Describes the minecraft:hurt_on_condition entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:hurt_on_condition

Defines a set of conditions under which an entity should take damage.


## Hurt On Condition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_conditions | *not set* | Array of [Damage Conditions](#damage-conditions) items | List of damage conditions that when met can cause damage to the entity. | Allay: `[{"filters":{"test":"in_lava","subject":"self"},"cause":"lava","damage_per_tick":4}]` | 

## Damage Conditions
List of damage conditions that when met can cause damage to the entity.


#### Damage Conditions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cause | *not set* | String | The kind of damage that is caused to the entity. Various armors and spells use this to determine if the entity is immune. |  | 
| damage_per_tick | 1 | Integer number | The amount of damage done each tick that the conditions are met. |  | 
| filters | *not set* | Minecraft filter | The set of conditions that must be satisfied before the entity takes the defined damage. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "filters": {
        "test": "in_lava",
        "subject": "self"
      },
      "cause": "lava",
      "damage_per_tick": 4
    }
  ]
}
```

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "filters": {
        "test": "in_lava",
        "subject": "self",
        "operator": "==",
        "value": true
      },
      "cause": "lava",
      "damage_per_tick": 4
    }
  ]
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "filters": {
        "test": "in_contact_with_water"
      },
      "cause": "drowning",
      "damage_per_tick": 1
    }
  ]
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "filters": {
        "test": "in_lava"
      },
      "cause": "lava",
      "damage_per_tick": 4
    }
  ]
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "filters": {
        "test": "in_lava",
        "subject": "self"
      },
      "cause": "lava",
      "damage_per_tick": 4
    },
    {
      "filters": {
        "test": "in_contact_with_water"
      },
      "cause": "drowning",
      "damage_per_tick": 1
    }
  ]
}
```

#### [Snow Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snow_golem.json)


```json
"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "filters": {
        "test": "in_lava",
        "subject": "self",
        "operator": "==",
        "value": true
      },
      "cause": "lava",
      "damage_per_tick": 4
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_temperature_value",
            "operator": ">",
            "value": 1
          },
          {
            "test": "has_component",
            "subject": "self",
            "operator": "!=",
            "value": "minecraft:effect.fire_resistance"
          }
        ]
      },
      "cause": "temperature",
      "damage_per_tick": 1
    },
    {
      "filters": {
        "test": "in_contact_with_water",
        "operator": "==",
        "value": true
      },
      "cause": "drowning",
      "damage_per_tick": 1
    }
  ]
}
```
