---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_target_acquired"
description: "Describes the minecraft:on_target_acquired entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_target_acquired

Adds a trigger to call when this entity finds a target.


## Entity On Target Acquired Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event |  | String | The event to run when the conditions for this trigger are met. | Cave Spider: `"minecraft:become_angry"`, Drowned: `"minecraft:has_target"`, Llama: `"minecraft:mad_at_wolf"` | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | Llama: `{"all_of":[{"test":"is_family","subject":"target","value":"wolf"},{"test":"has_component","subject":"target","operator":"!=","value":"minecraft:is_tamed"}]}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| target | self | [Target](#target-choices) choices | The target of the event. | Drowned: `"self"` | 

### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


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

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

## Samples

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry"
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:has_target",
  "target": "self"
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:on_target_acquired": {
  "filters": {
    "all_of": [
      {
        "test": "is_family",
        "subject": "target",
        "value": "wolf"
      },
      {
        "test": "has_component",
        "subject": "target",
        "operator": "!=",
        "value": "minecraft:is_tamed"
      }
    ]
  },
  "event": "minecraft:mad_at_wolf",
  "target": "self"
}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_aggressive",
  "target": "self"
}
```

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)

At /minecraft:entity/component_groups/minecraft:baby_wild/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {
  "event": "minecraft:on_scared",
  "target": "self"
}
```

At /minecraft:entity/component_groups/minecraft:adult_wild/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {
  "event": "minecraft:on_anger",
  "target": "self"
}
```
