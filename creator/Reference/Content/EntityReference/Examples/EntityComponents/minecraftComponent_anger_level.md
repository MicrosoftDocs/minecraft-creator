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


## Entity Anger Level Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| anger_decrement_interval | 1 | Decimal number | Anger level will decay over time. Defines how often anger towards all nuisances will decrease by one. | Warden: `1` | 
| angry_boost | 20 | Integer number | Anger boost applied to angry threshold when mob gets angry. Value must be >= 0. | Warden: `20` | 
| angry_threshold | 80 | Integer number | Threshold that define when the mob is considered angry at a nuisance. Value must be >= 0. | Warden: `80` | 
| broadcast_anger | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry |  | 
| broadcast_anger_on_attack | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |  | 
| broadcast_filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| broadcast_range | 20 | Integer number | Distance in blocks within which other entities of the same entity type will become angry |  | 
| broadcast_targets | *not set* | Array of strings | A list of entity families to broadcast anger to |  | 
| calm_event | *not set* | String from a list of choices | Event to fire when this entity is calmed down |  | 
| default_annoyingness | 0 | Integer number | The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation. | Warden: `35` | 
| default_projectile_annoyingness | 0 | Integer number | The default amount of annoyingness for any given nuisance that is a projectile. Specifies how much to raise anger level on each provocation. | Warden: `10` | 
| duration | *not set* | Integer number | The amount of time in seconds that the entity will be angry. |  | 
| duration_delta | *not set* | Integer number | Variance in seconds added to the duration [-delta, delta]. |  | 
| filters | *not set* | Minecraft filter | Filter out mob types that it should not attack while angry (other Piglins) |  | 
| max_anger | 100 | Integer number | The maximum anger level that can be reached. Applies to any nuisance. Value must be >= 0. | Warden: `150` | 
| nuisance_filter (Nuisance Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Nuisance Filter](#nuisance-filter) item | Filter that is applied to determine if a mob can be a nuisance. | Warden: `{"all_of":[{"operator":"not","test":"is_family","subject":"other","value":"warden"},{"operator":"not","test":"is_family","subject":"other","value":"inanimate"}]}` | 
| nuisance_filter (Alternate 1) | *not set* | Object |  |  | 
| on_increase_sounds | [] | Array of [Increase Sounds](#entity-sounddefinition) items | Sounds to play when the entity is getting provoked. Evaluated in order. First matching condition wins | Warden: `[{"condition":"query.anger_level(this) >= 40","sound":"listening_angry"},{"condition":"query.anger_level(this) >= 0","sound":"listening"}]` | 
| remove_targets_below_angry_threshold | true | Boolean true/false | Defines if the mob should remove target if it falls below 'angry' threshold. | Warden: `true` | 
| sound_interval | *not set* | Range of integers | Anger boost applied to angry threshold when the entity gets angry. |  | 

### Nuisance Filter

#### Nuisance Filter Properties

**JSON path:** `nuisance_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Entity SoundDefinition

#### Entity SoundDefinition Properties

**JSON path:** `on_increase_sounds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| condition | *not set* | Keyed set of strings | A Molang expression describing under which conditions to play this sound, given that the entity was provoked. | 
| condition (as Named set of objects) | *not set* | Key/item pairs of [Condition (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| condition (as Decimal number) | *not set* | Decimal number |  | 
| sound | *not set* | String | The sound to play. | 

#### Legacy Molang Expression

##### Legacy Molang Expression Properties

**JSON path:** `on_increase_sounds > condition`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:anger_level": {
  "angry_threshold": 80,
  "angry_boost": 20,
  "anger_decrement_interval": 1,
  "default_annoyingness": 35,
  "default_projectile_annoyingness": 10,
  "max_anger": 150,
  "on_increase_sounds": [
    {
      "condition": "query.anger_level(this) >= 40",
      "sound": "listening_angry"
    },
    {
      "condition": "query.anger_level(this) >= 0",
      "sound": "listening"
    }
  ],
  "nuisance_filter": {
    "all_of": [
      {
        "operator": "not",
        "test": "is_family",
        "subject": "other",
        "value": "warden"
      },
      {
        "operator": "not",
        "test": "is_family",
        "subject": "other",
        "value": "inanimate"
      }
    ]
  },
  "remove_targets_below_angry_threshold": true
}
```
