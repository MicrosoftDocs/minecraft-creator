---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:entity_sensor
description: "A reference document detailing the 'entity_sensor' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:entity_sensor

`minecraft:entity_sensor` is a component that owns multiple subsensors, with each firing an event when a set of conditions are met by other entities within the defined range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| cooldown | -1| Decimal| How many seconds should elapse before the subsensor can once again sense for entities. The cooldown is applied on top of the base 1 tick (0.05 seconds) delay. Negative values will result in no cooldown being used. |
| [event_filters](../FilterList.md)| *not set*|Minecraft Filter | The set of conditions that must be satisfied to initiate the event.  |
| event| *not set*|String | Event to initiate when the conditions are met.|
| maximum_count| -1| Integer| The maximum number of entities that must pass the filter conditions for the event to send. |
| minimum_count| 1| Integer| The minimum number of entities that must pass the filter conditions for the event to send. |
| range| [10, 10]| Vector [a, b]| The maximum horizontal and vertical distance another entity can be from this and have the filters checked against it. |
| require_all| False| Boolean| If true, requires all nearby entities to pass the filter conditions for the event to send. |
| subsensors| --| List| The list of subsensors which sense for entities and emit events when all conditions are met. |

## Example

```json
"minecraft:entity_sensor": {
  "subsensors": [
      {
        "range": [10, 10],
        "cooldown": -1,
        "require_all": false,
        "event_filters": {
          "test": "has_trade_supply"
        },
        "event": "minecraft:offer_trade"
      }
  ]
}
```

## Vanilla entities examples

```json
"minecraft:entity_sensor": {
  "subsensors": [
      {
        "range": 2.5,
        "relative_range": false,
        "minimum_count": 1,
         "event_filters": {
             "any_of": [
                {
                  "test": "is_family",
                  "subject": "other",
                  "value": "mob"
                 },
                 {
                "all_of": [
                   {
                     "test": "is_family",
                     "subject": "other",
                      "value": "player"
                   },
                   {
                     "none_of": {
                        "test": "has_ability",
                        "subject": "other",
                        "value": "instabuild"
                      }
                  }
                ]
             }
         ]
       },
     "event": "minecraft:start_half_puff"
     }
  ]
}
```

## Vanilla entities using `minecraft:entity_sensor`

- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
