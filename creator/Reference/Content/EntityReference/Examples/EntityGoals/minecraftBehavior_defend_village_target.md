---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.defend_village_target"
description: "Describes the minecraft:behavior.defend_village_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.defend_village_target

Allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village this goal will cause the entity to attack the player regardless of filter conditions.


## Defend Village Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_chance | 0.05 | Decimal number | The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%. | Iron Golem: `0.05` | 
| attack_owner | false | Boolean true/false | If true, this entity can attack its owner. |  | 
| entity_types | *not set* | Minecraft filter | Filters which types of targets are valid for this entity. | Iron Golem: `{"filters":{"any_of":[{"test":"is_family","subject":"other","value":"mob"},{"test":"is_family","subject":"other","value":"player"}]}}` | 
| must_reach | false | Boolean true/false | If true, this entity requires a path to the target. | Iron Golem: `true` | 
| must_see | false | Boolean true/false | Determines if target-validity requires this entity to be in range only, or both in range and in sight. |  | 
| must_see_forget_duration | 3 | Decimal number | Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true. |  | 
| persist_time | 0 | Decimal number | Time (in seconds) this entity can continue attacking the target after the target is no longer valid. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `1` | 
| within_radius | 0 | Decimal number | Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range". |  | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.defend_village_target": {
  "priority": 1,
  "must_reach": true,
  "attack_chance": 0.05,
  "entity_types": {
    "filters": {
      "any_of": [
        {
          "test": "is_family",
          "subject": "other",
          "value": "mob"
        },
        {
          "test": "is_family",
          "subject": "other",
          "value": "player"
        }
      ]
    }
  }
}
```
