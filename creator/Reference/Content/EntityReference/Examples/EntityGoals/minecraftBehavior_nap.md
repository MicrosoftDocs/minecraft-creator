---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.nap
description: "A reference document detailing the 'behavior.nap' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.nap

`minecraft:behavior.nap` compels a mob to occasionally stop and take a nap under certain conditions.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_max| 0.0| Decimal|  Maximum time in seconds the mob has to wait before using the goal again. |
|cooldown_min| 0.0| Decimal|  Minimum time in seconds the mob has to wait before using the goal again. |
|mob_detect_dist| 6.0| Decimal|  The block distance in x and z that will be checked for mobs that this mob detects. |
|mob_detect_height| 6.0| Decimal|  The block distance in y that will be checked for mobs that this mob detects. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.nap":{
    "priority": 7,
    "cooldown_min": 2.5,
    "cooldown_max": 5.0,
    "mob_detect_dist": 16.0,
    "mob_detect_height": 10.0
}
```

## Vanilla entities examples

### fox

```json
"minecraft:behavior.nap": {
          "priority": 8,
          "cooldown_min": 2.0,
          "cooldown_max": 7.0,
          "mob_detect_dist": 12.0,
          "mob_detect_height": 6.0,
          "can_nap_filters": {
            "all_of": [
              {
                "test": "in_water",
                "subject": "self",
                "operator": "==",
                "value": false
              },
              {
                "test": "on_ground",
                "subject": "self",
                "operator": "==",
                "value": true
              },
              {
                "test": "is_underground",
                "subject": "self",
                "operator": "==",
                "value": true
              },
              {
                "test": "weather_at_position",
                "subject": "self",
                "operator": "!=",
                "value": "thunderstorm"
              }
            ]
          },
          "wake_mob_exceptions": {
            "any_of": [
              {
                "test": "trusts",
                "subject": "other",
                "operator": "==",
                "value": true
              },
              {
                "test": "is_family",
                "subject": "other",
                "operator": "==",
                "value": "fox"
              },
              {
                "test": "is_sneaking",
                "subject": "other",
                "operator": "==",
                "value": true
              }
            ]
          }
        }
```

## Vanilla entities using `minecraft:behavior.nap`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
