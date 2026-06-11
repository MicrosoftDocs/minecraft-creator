---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_friendly_anger"
description: "Describes the minecraft:on_friendly_anger entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_friendly_anger

Adds a trigger that will run when a nearby entity of the same type as this entity becomes Angry.


## Entity On Friendly Anger Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event |  | String | The event to run when the conditions for this trigger are met. | Polar Bear: `"minecraft:on_anger"`, Trader Llama: `"minecraft:defend_wandering_trader"` | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. |  | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| target | self | [Target](#target-choices) choices | The target of the event. | Polar Bear: `"self"` | 

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

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)


```json
"minecraft:on_friendly_anger": {
  "event": "minecraft:on_anger",
  "target": "self"
}
```

#### [Trader Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json)


```json
"minecraft:on_friendly_anger": {
  "event": "minecraft:defend_wandering_trader",
  "target": "self"
}
```
