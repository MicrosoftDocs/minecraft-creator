---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:conditional_bandwidth_optimization"
description: "Describes the minecraft:conditional_bandwidth_optimization entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:conditional_bandwidth_optimization

Defines the Conditional Spatial Update Bandwidth Optimizations of this entity.


## Conditional Bandwidth Optimization Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| conditional_values | *not set* | Array of [Conditional Values](#conditional-values) items | The object containing the conditional bandwidth optimization values. | Boat: `[{"max_optimized_distance":0,"max_dropped_ticks":0,"use_motion_prediction_hints":true,"conditional_values":[{"test":"is_moving","subject":"self"}]}]` | 
| default_values | *not set* | Array of [Default Values](#default-values) items | The object containing the default bandwidth optimization values. |  | 

## Conditional Values
The object containing the conditional bandwidth optimization values.


#### Conditional Values Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| conditional_values | *not set* | Minecraft filter | Conditions that must be met for these optimization values to be used. |  | 
| max_dropped_ticks | 10 | Integer number | In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent. Value must be >= 0. |  | 
| max_optimized_distance | 80 | Decimal number | The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization. |  | 
| use_motion_prediction_hints | false | Boolean true/false | When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities. |  | 

## Default Values
The object containing the default bandwidth optimization values.


#### Default Values Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_dropped_ticks | 10 | Integer number | In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent. Value must be >= 0. |  | 
| max_optimized_distance | 80 | Decimal number | The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization. |  | 
| use_motion_prediction_hints | false | Boolean true/false | When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:conditional_bandwidth_optimization": {}
```

#### [Arrow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json)


```json
"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_optimized_distance": 80,
    "max_dropped_ticks": 7,
    "use_motion_prediction_hints": true
  }
}
```

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_optimized_distance": 60,
    "max_dropped_ticks": 20,
    "use_motion_prediction_hints": true
  },
  "conditional_values": [
    {
      "max_optimized_distance": 0,
      "max_dropped_ticks": 0,
      "use_motion_prediction_hints": true,
      "conditional_values": [
        {
          "test": "is_moving",
          "subject": "self"
        }
      ]
    }
  ]
}
```

#### [Chest Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_minecart.json)


```json
"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_optimized_distance": 60,
    "max_dropped_ticks": 20,
    "use_motion_prediction_hints": true
  },
  "conditional_values": [
    {
      "max_optimized_distance": 0,
      "max_dropped_ticks": 0,
      "conditional_values": [
        {
          "test": "is_moving",
          "subject": "self",
          "operator": "==",
          "value": true
        }
      ]
    }
  ]
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_optimized_distance": 80,
    "max_dropped_ticks": 10,
    "use_motion_prediction_hints": true
  }
}
```

#### [Lingering Potion](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/lingering_potion.json)


```json
"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_optimized_distance": 80,
    "max_dropped_ticks": 5,
    "use_motion_prediction_hints": true
  }
}
```

#### [Snowball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snowball.json)


```json
"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_optimized_distance": 100,
    "max_dropped_ticks": 7,
    "use_motion_prediction_hints": true
  }
}
```
