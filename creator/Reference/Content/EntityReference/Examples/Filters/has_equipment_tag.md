---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_equipment_tag"
description: "Describes the minecraft:has_equipment_tag entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_equipment_tag

Tests for the presence of an item with the named tag in the designated slot of the subject entity.


## Has Equipment Tag Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | any | [Domain](#domain-choices) choices | (Optional) The equipment location to test | Sulfur Cube: `"main_hand"` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Sulfur Cube: `"other"` | 
| test | *not set* | String |  | Sulfur Cube: `"has_equipment_tag"` | 
| value | *not set* | String | (Required) The item name to look for | Sulfur Cube: `"minecraft:sulfur_cube_archetype_bouncy"`, `"minecraft:sulfur_cube_archetype_regular"`, `"minecraft:sulfur_cube_archetype_slow_flat"`, `"minecraft:sulfur_cube_archetype_fast_flat"`, `"minecraft:sulfur_cube_archetype_light"`, `"minecraft:sulfur_cube_archetype_fast_sliding"`, `"minecraft:sulfur_cube_archetype_slow_sliding"`, `"minecraft:sulfur_cube_archetype_sticky"`, `"minecraft:sulfur_cube_archetype_high_resistance"` | 

### Domain choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| any | Any | |
| armor | Armor | |
| body | Body | |
| feet | Feet | |
| hand | Hand | |
| head | Head | |
| inventory | Inventory | |
| leg | Leg | |
| main_hand | Main Hand | |
| torso | Torso | |

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
{ "test": "has_equipment_tag", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }
```

At Short (using Defaults)..: 

```json
{ "test": "has_equipment_tag", "value": "dirt" }
```

#### [Sulfur Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json)

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[0]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_bouncy"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[1]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_regular"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[2]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_flat"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[3]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_flat"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[4]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_light"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[5]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_sliding"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[6]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_sliding"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[7]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_sticky"
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[8]/: 

```json
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_high_resistance"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[1]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_bouncy"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[2]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_regular"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[3]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_flat"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[4]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_flat"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[5]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_light"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[6]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_sliding"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[7]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_sliding"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[8]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_sticky"
}
```

At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[9]/filters/: 

```json
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_high_resistance"
}
```
