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
| entity_types | *not set* | [Entity Types](#entity-types-item-type) item |  | Iron Golem: `{"filters":{"any_of":[{"test":"is_family","subject":"other","value":"mob"},{"test":"is_family","subject":"other","value":"player"}]}}` | 
| must_reach | *not set* | String |  | Iron Golem: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `1` | 

## Entity Types item type

#### Entity_types Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | String |  | Iron Golem: `{"any_of":[{"test":"is_family","subject":"other","value":"mob"},{"test":"is_family","subject":"other","value":"player"}]}` | 

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
