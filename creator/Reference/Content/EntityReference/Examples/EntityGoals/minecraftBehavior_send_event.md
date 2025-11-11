---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.send_event"
description: "Describes the minecraft:behavior.send_event ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.send_event

Allows the mob to send an event to another mob.


## Send Event Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cast_duration | *not set* | Decimal number | Time in seconds for the entire event sending process |  | 
| event_choices | *not set* | Array of [Event Choices](#event-choices) items |  | Evocation Illager: `[{"min_activation_range":0,"max_activation_range":16,"cooldown_time":5,"cast_duration":3,"particle_color":"#FFB38033","weight":3,"filters":{"all_of":[{"test":"is_family","subject":"other","value":"sheep"},{"test":"is_color","subject":"other","value":"blue"}]},"start_sound_event":"cast.spell","sequence":[{"base_delay":2,"event":"wololo","sound_event":"prepare.wololo"}]}]` | 
| look_at_target | true | Boolean true/false | If true, the mob will face the entity it sends an event to |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `3` | 
| sequence | *not set* | Array of [Sequence](#sequence) items | List of events to send |  | 

## Event Choices

#### Event choices Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cast_duration | *not set* | Decimal number |  | Evocation Illager: `3` | 
| cooldown_time | *not set* | Decimal number |  | Evocation Illager: `5` | 
| filters | *not set* | String |  | Evocation Illager: `{"all_of":[{"test":"is_family","subject":"other","value":"sheep"},{"test":"is_color","subject":"other","value":"blue"}]}` | 
| max_activation_range | *not set* | Decimal number |  | Evocation Illager: `16` | 
| min_activation_range | *not set* | Decimal number |  | Evocation Illager: `0` | 
| particle_color | *not set* | String |  | Evocation Illager: `"#FFB38033"` | 
| sequence | *not set* | String |  | Evocation Illager: `[{"base_delay":2,"event":"wololo","sound_event":"prepare.wololo"}]` | 
| start_sound_event | *not set* | String |  | Evocation Illager: `"cast.spell"` | 
| weight | *not set* | Decimal number |  | Evocation Illager: `3` | 

## Sequence
List of events to send.


#### Sequence Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_delay | 0 | Decimal number | Amount of time in seconds before starting this step |  | 
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to send to the entity |  | 
| sound_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The sound event to play when this step happens |  | 

## Samples

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.send_event": {
  "priority": 3,
  "event_choices": [
    {
      "min_activation_range": 0,
      "max_activation_range": 16,
      "cooldown_time": 5,
      "cast_duration": 3,
      "particle_color": "#FFB38033",
      "weight": 3,
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "sheep"
          },
          {
            "test": "is_color",
            "subject": "other",
            "value": "blue"
          }
        ]
      },
      "start_sound_event": "cast.spell",
      "sequence": [
        {
          "base_delay": 2,
          "event": "wololo",
          "sound_event": "prepare.wololo"
        }
      ]
    }
  ]
}
```
