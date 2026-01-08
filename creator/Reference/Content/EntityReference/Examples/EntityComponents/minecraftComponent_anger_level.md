---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:anger_level"
description: "Describes the minecraft:anger_level entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:anger_level

Compels the entity to track anger towards a set of nuisances.


## Anger Level Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| anger_decrement_interval | 1 | String | Anger level will decay over time. Defines how often anger towards all nuisances will decrease by on. | Warden: `1` | 
| angry_boost | 20 | Integer number | Anger boost applied to angry threshold when mob gets angry Value must be >= 0. | Warden: `20` | 
| angry_threshold | 80 | Integer number | Threshold that define when the mob is considered angry at a nuisance Value must be >= 0. | Warden: `80` | 
| broadcast_anger | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry |  | 
| broadcast_anger_on_attack | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |  | 
| broadcast_filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| broadcast_range | 20 | Integer number | Distance in blocks within which other entities of the same entity type will become angry |  | 
| broadcast_targets | *not set* | Array of strings | A list of entity families to broadcast anger to |  | 
| calm_event | *not set* | String from a list of choices | Event to fire when this entity is calmed down |  | 
| default_annoyingness | 0 | String | The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation | Warden: `35` | 
| default_projectile_annoyingness | *not set* | Decimal number |  | Warden: `10` | 
| duration | *not set* | Integer number | The amount of time in seconds that the entity will be angry. |  | 
| duration_delta | *not set* | Integer number | Variance in seconds added to the duration [-delta, delta]. |  | 
| filters | *not set* | Minecraft filter | Filter out mob types that it should not attack while angry (other Piglins) |  | 
| max_anger | 100 | Integer number | The maximum anger level that can be reached. Applies to any nuisance Value must be >= 0. | Warden: `150` | 
| nuisance_filter | *not set* | Minecraft filter | Filter that is applied to determine if a mob can be a nuisance | Warden: `{"all_of":[{"test":"is_family","subject":"other","operator":"not","value":"warden"},{"test":"is_family","subject":"other","operator":"not","value":"inanimate"}]}` | 
| on_increase_sounds | *not set* | Array of [Increase Sounds](#increase-sounds) items | Sounds to play when the entity is getting provoked. Evaluated in order. First matching condition wins | Warden: `[{"sound":"listening_angry","condition":"query.anger_level(this) >= 40"},{"sound":"listening","condition":"query.anger_level(this) >= 0"}]` | 
| remove_targets_below_angry_threshold | true | Boolean true/false | Defines if the mob should remove target if it falls below 'angry' threshold | Warden: `true` | 
| sound_interval | *not set* | Range of integers | Anger boost applied to angry threshold when the entity gets angry. |  | 

## Increase Sounds
Sounds to play when the entity is getting provoked. Evaluated in order. First matching condition wins.


#### Increase Sounds Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| condition | *not set* | String | A Molang expression describing under which conditions to play this sound, given that the entity was provoked |  | 
| sound | *not set* | String | The sound to play |  | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:anger_level": {
  "max_anger": 150,
  "angry_threshold": 80,
  "remove_targets_below_angry_threshold": true,
  "angry_boost": 20,
  "anger_decrement_interval": 1,
  "default_annoyingness": 35,
  "default_projectile_annoyingness": 10,
  "on_increase_sounds": [
    {
      "sound": "listening_angry",
      "condition": "query.anger_level(this) >= 40"
    },
    {
      "sound": "listening",
      "condition": "query.anger_level(this) >= 0"
    }
  ],
  "nuisance_filter": {
    "all_of": [
      {
        "test": "is_family",
        "subject": "other",
        "operator": "not",
        "value": "warden"
      },
      {
        "test": "is_family",
        "subject": "other",
        "operator": "not",
        "value": "inanimate"
      }
    ]
  }
}
```
