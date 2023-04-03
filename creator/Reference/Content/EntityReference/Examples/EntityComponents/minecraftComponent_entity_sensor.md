---
author: mammerla
ms.author: v-jimseaman
title: Entity Documentation - minecraft:entity_sensor
ms.prod: gaming
---

# Entity Documentation - minecraft:entity_sensor

`minecraft:entity_sensor` is a component that initiates an event when a set of conditions are met by other entities within the defined range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| [event_filters](../FilterList.md)| *not set*|Minecraft Filter | The set of conditions that must be satisfied to initiate the event.  |
| event| *not set*|String | Event to initiate when the conditions are met.|
| maximum_count| -1| Integer| The maximum number of entities that must pass the filter conditions for the event to send. |
| minimum_count| 1| Integer| The minimum number of entities that must pass the filter conditions for the event to send. |
| relative_range| True| Boolean| If true, the sensor range is additive on top of the entity's size. |
| require_all| False| Boolean| If true, requires all nearby entities to pass the filter conditions for the event to send. |
| sensor_range| 10| Decimal| The maximum distance another entity can be from this and have the filters checked against it. |

## Example

```json
"minecraft:entity_sensor":{
    "maximum_count": -1,
    "minimum_count": 1,
    "relative_range": true,
    "require_all": false,
    "sensor_range": 10,
    "event_filters": {"test": "has_trade_supply"},
    "event": "minecraft:offer_trade"
}
```

## Vanilla entities examples

### pufferfish

```json
"minecraft:entity_sensor": {
          "sensor_range": 2.5,
          "relative_range": false,
          "minimum_count": 1,
          "event_filters": {
            "any_of": [
              { "test": "is_family", "subject": "other", "value": "mob" },
              { "all_of": [
                { "test": "is_family", "subject": "other", "value": "player" },
                { "none_of": 
                  { "test": "has_ability", "subject": "other", "value": "instabuild" } 
                }
              ]}
            ]
          },
          "event": "minecraft:start_half_puff"
        }
```

## Vanilla entities using `minecraft:entity_sensor`

- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
