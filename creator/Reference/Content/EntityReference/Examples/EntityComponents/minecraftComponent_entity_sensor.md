---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:entity_sensor"
description: "Describes the minecraft:entity_sensor entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:entity_sensor

A component that owns multiple subsensors, each one firing an event when a set of conditions are met by other entities within the defined range.


## Entity Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| find_players_only | false | Boolean true/false | Limits the search to Players only for all subsensors. |  | 
| relative_range | true | Boolean true/false | If true the subsensors' range is additive on top of the entity's size. |  | 
| subsensors | *not set* | Array of [Subsensors](#subsensors) items | The list of subsensors which sense for entities and emit events when all their conditions are met. | Parrot: `[{"range":[2,2],"event_filters":{"all_of":[{"test":"is_riding","subject":"self","operator":"equals","value":true},{"test":"has_component","subject":"self","operator":"equals","value":"minecraft:behavior.look_at_player"}]},"event":"minecraft:on_riding_player"}]`, `[{"range":[2,2],"event_filters":{"all_of":[{"test":"is_riding","subject":"self","operator":"equals","value":false},{"test":"has_component","subject":"self","operator":"not","value":"minecraft:behavior.look_at_player"}]},"event":"minecraft:on_not_riding_player"}]` | 

## Subsensors
The list of subsensors which sense for entities and emit events when all their conditions are met.


#### Subsensors Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | -1 | Decimal number | How many seconds should elapse before the subsensor can once again sense for entities. The cooldown is applied on top of the base 1 tick (0.05 seconds) delay. Negative values will result in no cooldown being used. |  | 
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the conditions are met. |  | 
| event_filters | *not set* | Minecraft filter | The set of conditions that must be satisfied to fire the event. |  | 
| maximum_count | -1 | Integer number | The maximum number of entities that must pass the filter conditions for the event to send. |  | 
| minimum_count | 1 | Integer number | The minimum number of entities that must pass the filter conditions for the event to send. |  | 
| range | [10, 10] | a, b coordinate array | The maximum horizontal and vertical distance another entity can be from this and have the filters checked against it. |  | 
| require_all | false | Boolean true/false | If true requires all nearby entities to pass the filter conditions for the events to send. |  | 
| y_offset | 0 | Decimal number | Vertical offset applied to the entity's position when computing the distance from other entities. |  | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)

At /minecraft:entity/component_groups/minecraft:parrot_not_riding_player/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2,
        2
      ],
      "event_filters": {
        "all_of": [
          {
            "test": "is_riding",
            "subject": "self",
            "operator": "equals",
            "value": true
          },
          {
            "test": "has_component",
            "subject": "self",
            "operator": "equals",
            "value": "minecraft:behavior.look_at_player"
          }
        ]
      },
      "event": "minecraft:on_riding_player"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:parrot_riding_player/minecraft:entity_sensor/: 

```json
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "range": [
        2,
        2
      ],
      "event_filters": {
        "all_of": [
          {
            "test": "is_riding",
            "subject": "self",
            "operator": "equals",
            "value": false
          },
          {
            "test": "has_component",
            "subject": "self",
            "operator": "not",
            "value": "minecraft:behavior.look_at_player"
          }
        ]
      },
      "event": "minecraft:on_not_riding_player"
    }
  ]
}
```
