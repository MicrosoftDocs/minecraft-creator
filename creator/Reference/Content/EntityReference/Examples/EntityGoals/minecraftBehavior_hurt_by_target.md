---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.hurt_by_target"
description: "Describes the minecraft:behavior.hurt_by_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.hurt_by_target

Allows the mob to target another mob that hurts them.


## Hurt By Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| alert_same_type | false | Boolean true/false | If true, nearby mobs of the same type will be alerted about the damage | Silverfish: `true` | 
| entity_types | *not set* | Array of [Entity Types](#entity-types-item-type) items | List of entity types that this mob can target when hurt by them | Bogged: `[{"filters":{"test":"is_family","subject":"other","operator":"!=","value":"breeze"}}]`, Breeze: `[{"filters":{"all_of":[{"test":"is_family","subject":"other","operator":"!=","value":"skeleton"},{"test":"is_family","subject":"other","operator":"!=","value":"stray"},{"test":"is_family","subject":"other","operator":"!=","value":"zombie"},{"test":"is_family","subject":"other","operator":"!=","value":"husk"},{"test":"is_family","subject":"other","operator":"!=","value":"spider"},{"test":"is_family","subject":"other","operator":"!=","value":"cavespider"},{"test":"is_family","subject":"other","operator":"!=","value":"slime"}]}}]` | 
| hurt_owner | false | Boolean true/false | If true, the mob will hurt its owner and other mobs with the same owner as itself |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Entity Types item type
List of entity types that this mob can target when hurt by them.


#### Entity Types Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again |  | 
| filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice |  | 
| must_see | false | Boolean true/false | If true, the mob has to be visible to be a valid choice |  | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |  | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. |  | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the running speed. A value of 1.0 means the speed is unchanged |  | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |  | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "operator": "!=",
        "value": "breeze"
      }
    }
  ]
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 4,
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "skeleton"
          },
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "stray"
          },
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "zombie"
          },
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "husk"
          },
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "spider"
          },
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "cavespider"
          },
          {
            "test": "is_family",
            "subject": "other",
            "operator": "!=",
            "value": "slime"
          }
        ]
      }
    }
  ]
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 2
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 3
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1,
  "entity_types": {
    "filters": {
      "test": "is_family",
      "subject": "other",
      "operator": "!=",
      "value": "illager"
    },
    "max_dist": 64
  }
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1,
  "hurt_owner": true
}
```

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 2,
  "entity_types": {
    "filters": {
      "test": "is_family",
      "subject": "other",
      "operator": "!=",
      "value": "illager"
    },
    "max_dist": 64
  }
}
```

#### [Shulker](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 2,
  "entity_types": {
    "filters": {
      "test": "is_family",
      "subject": "other",
      "operator": "!=",
      "value": "shulker"
    }
  }
}
```

#### [Silverfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1,
  "alert_same_type": true
}
```

#### [Trader Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 1,
  "hurt_owner": true,
  "entity_types": {
    "filters": {
      "test": "is_family",
      "subject": "other",
      "operator": "!=",
      "value": "trader_llama"
    }
  }
}
```

#### [Axe Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/axe_turret.behavior.json)


```json
"minecraft:behavior.hurt_by_target": {
  "priority": 3,
  "entity_types": {
    "filters": {
      "test": "is_family",
      "subject": "other",
      "value": "monster"
    },
    "max_dist": 16
  }
}
```
