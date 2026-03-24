---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.teleport_to_owner"
description: "Describes the minecraft:behavior.teleport_to_owner ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.teleport_to_owner

Allows an entity to teleport to its owner.


## Entity Teleport To Owner Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| cooldown | 1 | Decimal number | The time in seconds that must pass for the entity to be able to try to teleport again. |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions to be satisfied for the entity to teleport to its owner. | Parrot: `{"all_of":[{"test":"owner_distance","operator":">","value":12},{"test":"is_panicking"}]}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

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

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.teleport_to_owner": {
  "filters": {
    "all_of": [
      {
        "test": "owner_distance",
        "operator": ">",
        "value": 12
      },
      {
        "test": "is_panicking"
      }
    ]
  },
  "priority": 0
}
```
