---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.nap"
description: "Describes the minecraft:behavior.nap ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.nap

Allows mobs to occassionally stop and take a nap under certain conditions.


## Nap Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_nap_filters | *not set* | [Can Nap Filters](#can-nap-filters) item |  | Fox: `{"all_of":[{"test":"in_water","subject":"self","operator":"==","value":false},{"test":"on_ground","subject":"self","operator":"==","value":true},{"test":"is_underground","subject":"self","operator":"==","value":true},{"test":"weather_at_position","subject":"self","operator":"!=","value":"thunderstorm"}]}` | 
| cooldown_max | 0 | Decimal number | Maximum time in seconds the mob has to wait before using the goal again | Fox: `7` | 
| cooldown_min | 0 | Decimal number | Minimum time in seconds the mob has to wait before using the goal again | Fox: `2` | 
| mob_detect_dist | 6 | Decimal number | The block distance in x and z that will be checked for mobs that this mob detects | Fox: `12` | 
| mob_detect_height | 6 | Decimal number | The block distance in y that will be checked for mobs that this mob detects | Fox: `6` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Fox: `8` | 
| wake_mob_exceptions | *not set* | [Wake Mob Exceptions](#wake-mob-exceptions) item |  | Fox: `{"any_of":[{"test":"trusts","subject":"other","operator":"==","value":true},{"test":"is_family","subject":"other","operator":"==","value":"fox"},{"test":"is_sneaking","subject":"other","operator":"==","value":true}]}` | 

## Can Nap Filters

#### Can nap filters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all_of | *not set* | String |  | Fox: `[{"test":"in_water","subject":"self","operator":"==","value":false},{"test":"on_ground","subject":"self","operator":"==","value":true},{"test":"is_underground","subject":"self","operator":"==","value":true},{"test":"weather_at_position","subject":"self","operator":"!=","value":"thunderstorm"}]` | 

## Wake Mob Exceptions

#### Wake mob exceptions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| any_of | *not set* | String |  | Fox: `[{"test":"trusts","subject":"other","operator":"==","value":true},{"test":"is_family","subject":"other","operator":"==","value":"fox"},{"test":"is_sneaking","subject":"other","operator":"==","value":true}]` | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.nap": {
  "priority": 8,
  "cooldown_min": 2,
  "cooldown_max": 7,
  "mob_detect_dist": 12,
  "mob_detect_height": 6,
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
