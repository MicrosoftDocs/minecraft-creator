---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.croak"
description: "Describes the minecraft:behavior.croak ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.croak

Allows the entity to croak at a random time interval with configurable conditions.


## Entity Croak Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| duration | {"max":4.5,"min":4.5} | [Duration](#legacy-floatrange) item | Random range in seconds after which the croaking stops. Can also be a constant. Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected | Frog: `{"min":4.5,"max":4.5}` | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions for the behavior to start and keep running. The interval between runs only starts after passing the filters. | Frog: `{"all_of":[{"test":"in_water","value":false},{"test":"in_lava","value":false}]}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| interval | {"max":20,"min":10} | [Interval](#legacy-floatrange) item | Random range in seconds between runs of this behavior. Can also be a constant. Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected | Frog: `{"min":10,"max":20}` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `9` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Legacy FloatRange

#### Legacy FloatRange Properties

**JSON path:** `duration`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Filters

#### Filters Properties

**JSON path:** `filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.croak": {
  "duration": {
    "min": 4.5,
    "max": 4.5
  },
  "filters": {
    "all_of": [
      {
        "test": "in_water",
        "value": false
      },
      {
        "test": "in_lava",
        "value": false
      }
    ]
  },
  "interval": {
    "min": 10,
    "max": 20
  },
  "priority": 9
}
```
