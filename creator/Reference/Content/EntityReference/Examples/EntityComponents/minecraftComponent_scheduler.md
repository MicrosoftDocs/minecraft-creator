---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:scheduler
description: "A reference document detailing the 'scheduler' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:scheduler

`minecraft:scheduler` initiates scheduled mob events during time of day events.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| scheduled_events| *not set*| List| The list of triggers that initiate when the conditions match the given filter criteria. If any filter criteria overlap, the first defined event will be picked. |
|min_delay_secs|0.0||Decimal| The minimum amount in seconds the scheduler will be delayed.|
|max_delay_secs|0.0||Decimal| The maximum amount in seconds the scheduler will be delayed.|

## Example

```json
"minecraft:scheduler":{
    "scheduled_events": [
        {
            "filters": [{"test": "has_damage", "value": false},
            {"test":"is_daytime", "value": false}],
            "event": "minecraft:sleepy_time"
        }
    ]
}
```

## Vanilla entities examples

### fox

```json
"minecraft:scheduler": {
    "min_delay_secs": 0,
    "max_delay_secs": 0,
    "scheduled_events": [
        {
        "filters": [
            { "test": "is_sleeping", "value": true }
        ],
        "event": "minecraft:ambient_sleep"
        },
        {
        "filters": {
            "all_of":[
            { "test" : "is_daytime", "value" : false },
            { "test": "distance_to_nearest_player", "operator": ">", "value": 16 }
            ]
        },
        "event": "minecraft:ambient_night"
        },
        {
        "filters": {
            "all_of":[
            { "test" : "is_sleeping", "value" : false },
            {
                "any_of":[
                { "test" : "is_daytime", "value" : true },
                { "test": "distance_to_nearest_player", "operator": "<=", "value": 16 }
                ]
            }
            ]
        },
        "event": "minecraft:ambient_normal"
        }
    ]
}
```

## Vanilla entities using `minecraft:scheduler`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
