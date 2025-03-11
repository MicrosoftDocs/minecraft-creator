---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_brightness"
description: "Describes the minecraft:is_brightness entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_brightness

Tests the current brightness against a provided value in the range (0.0f, 1.0f).


## Is Brightness Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Cave Spider: `"<"`, `">"` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Cave Spider: `"is_brightness"` | 
| value | *not set* | Decimal number | (Required) The brightness value to compare with. | Cave Spider: `0.49` | 

### Operator choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| != | != | Test for inequality.|
| < | < | Test for less-than the value.|
| <= | <= | Test for less-than or equal to the value.|
| <> | <> | Test for inequality.|
| = | = | Test for equality.|
| == | == | Test for equality.|
| > | > | Test for greater-than the value.|
| >= | >= | Test for greater-than or equal to the value.|
| equals | Equals | Test for equality.|
| not | Not | Test for inequality.|

### Subject choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| block | Block | The block involved with the interaction.|
| damager | Damager | The damaging actor involved with the interaction.|
| other | Other | The other member of an interaction, not the caller.|
| parent | Parent | The caller's current parent.|
| player | Player | The player involved with the interaction.|
| self | Self | The entity or object calling the test|
| target | Target | The caller's current target.|

## Samples

At Full..: 

```json
{ "test": "is_brightness", "subject": "self", "operator": "equals", "value": "0.50" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_brightness", "value": "0.50" }
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_neutral/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_brightness",
  "operator": "<",
  "value": 0.49
}
```

At /minecraft:entity/component_groups/minecraft:spider_hostile/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_brightness",
  "operator": ">",
  "value": 0.49
}
```
