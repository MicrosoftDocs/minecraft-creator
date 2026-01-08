---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.send_event"
description: "Describes the minecraft:behavior.send_event ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.send_event

Allows the mob to send an event to another mob.


## Send Event Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cast_duration | *not set* | Decimal number | Time in seconds for the entire event sending process |  | 
| event_choices | *not set* | Array of [Event Choices](#event-choices) items | List of possible events to send with conditions, weights, and targeting parameters. | Evocation Illager: `[{"min_activation_range":0,"max_activation_range":16,"cooldown_time":5,"cast_duration":3,"particle_color":"#FFB38033","weight":3,"filters":{"all_of":[{"test":"is_family","subject":"other","value":"sheep"},{"test":"is_color","subject":"other","value":"blue"}]},"start_sound_event":"cast.spell","sequence":[{"base_delay":2,"event":"wololo","sound_event":"prepare.wololo"}]}]` | 
| look_at_target | true | Boolean true/false | If true, the mob will face the entity it sends an event to |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `3` | 
| sequence | *not set* | Array of [Sequence](#sequence) items | List of events to send |  | 

## Event Choices

#### Event Choice Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cast_duration | *not set* | Decimal number | Time in seconds for the casting animation. |  | 
| cooldown_time | *not set* | Decimal number | Time in seconds before this choice can be used again. |  | 
| filters | *not set* | Object | Conditions that must be met for this event choice to be valid. |  | 
| max_activation_range | *not set* | Decimal number | Maximum distance from target to activate this event choice. |  | 
| min_activation_range | *not set* | Decimal number | Minimum distance from target to activate this event choice. |  | 
| particle_color | *not set* | String | Color of particles during casting, in hex format like '#RRGGBBAA'. |  | 
| sequence | *not set* | Array of [Sequence](#sequence) items | List of events to send in order with timing. |  | 
| start_sound_event | *not set* | String | Sound event to play when casting starts. |  | 
| weight | *not set* | Decimal number | Relative weight for random selection among event choices. |  | 

## Sequence

#### Sequence Step Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_delay | *not set* | Decimal number | Delay in seconds before this step executes. |  | 
| event | *not set* | String | Event to send to the target entity. |  | 
| sound_event | *not set* | String | Sound event to play when this step executes. |  | 

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
