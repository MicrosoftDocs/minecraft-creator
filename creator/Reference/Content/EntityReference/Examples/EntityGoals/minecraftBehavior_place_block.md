---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.place_block"
description: "Describes the minecraft:behavior.place_block ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.place_block


## Place Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| affected_by_griefing_rule | *not set* | Boolean true/false | If true, whether the goal is affected by the mob griefing game rule. |  | 
| can_place | *not set* | Minecraft filter | Filters for if the entity should try to place its block. Self and Target are set. | Copper Golem: `{"test":"bool_property","domain":"minecraft:is_becoming_statue","value":false}` | 
| chance | *not set* | Decimal number | Chance each tick for the entity to try and place a block. | Copper Golem: `0.0058`, Enderman: `0.0005` | 
| on_place | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Trigger ran if the entity does place its block. Self, Target, and Block are set. | Copper Golem: `{"event":"minecraft:become_statue","target":"self"}` | 
| placeable_carried_blocks | *not set* | Array of strings | Block descriptors for which blocks are valid to be placed from the entity's carried item, if empty all blocks are valid. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Copper Golem: `1`, Enderman: `10` | 
| randomly_placeable_blocks | *not set* | Array of strings | Weighted block descriptors for which blocks should be randomly placed, if empty the entity will try to place its carried block from placeable_carried_blocks. | Copper Golem: `[{"block":{"name":"minecraft:oxidized_copper_golem_statue","states":{"minecraft:cardinal_direction":"north"}},"filter":{"any_of":[{"all_of":[{"test":"y_rotation","operator":">=","value":135},{"test":"y_rotation","operator":"<","value":180}]},{"all_of":[{"test":"y_rotation","operator":">=","value":-180},{"test":"y_rotation","operator":"<","value":-135}]}]}},{"block":{"name":"minecraft:oxidized_copper_golem_statue","states":{"minecraft:cardinal_direction":"east"}},"filter":{"all_of":[{"test":"y_rotation","operator":">=","value":-135},{"test":"y_rotation","operator":"<","value":-45}]}},{"block":{"name":"minecraft:oxidized_copper_golem_statue","states":{"minecraft:cardinal_direction":"south"}},"filter":{"all_of":[{"test":"y_rotation","operator":">=","value":-45},{"test":"y_rotation","operator":"<","value":45}]}},{"block":{"name":"minecraft:oxidized_copper_golem_statue","states":{"minecraft:cardinal_direction":"west"}},"filter":{"all_of":[{"test":"y_rotation","operator":">=","value":45},{"test":"y_rotation","operator":"<","value":135}]}}]` | 
| xz_range | *not set* | Range of integers | XZ range from which the entity will try and place blocks in. | Enderman: `[-1,1]` | 
| y_range | *not set* | Range of integers | Y range from which the entity will try and place blocks in. | Enderman: `[0,2]` | 

## Samples

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:behavior.place_block": {
  "priority": 1,
  "xz_range": 0,
  "y_range": 0,
  "chance": 0.0058,
  "can_place": {
    "test": "bool_property",
    "domain": "minecraft:is_becoming_statue",
    "value": false
  },
  "randomly_placeable_blocks": [
    {
      "block": {
        "name": "minecraft:oxidized_copper_golem_statue",
        "states": {
          "minecraft:cardinal_direction": "north"
        }
      },
      "filter": {
        "any_of": [
          {
            "all_of": [
              {
                "test": "y_rotation",
                "operator": ">=",
                "value": 135
              },
              {
                "test": "y_rotation",
                "operator": "<",
                "value": 180
              }
            ]
          },
          {
            "all_of": [
              {
                "test": "y_rotation",
                "operator": ">=",
                "value": -180
              },
              {
                "test": "y_rotation",
                "operator": "<",
                "value": -135
              }
            ]
          }
        ]
      }
    },
    {
      "block": {
        "name": "minecraft:oxidized_copper_golem_statue",
        "states": {
          "minecraft:cardinal_direction": "east"
        }
      },
      "filter": {
        "all_of": [
          {
            "test": "y_rotation",
            "operator": ">=",
            "value": -135
          },
          {
            "test": "y_rotation",
            "operator": "<",
            "value": -45
          }
        ]
      }
    },
    {
      "block": {
        "name": "minecraft:oxidized_copper_golem_statue",
        "states": {
          "minecraft:cardinal_direction": "south"
        }
      },
      "filter": {
        "all_of": [
          {
            "test": "y_rotation",
            "operator": ">=",
            "value": -45
          },
          {
            "test": "y_rotation",
            "operator": "<",
            "value": 45
          }
        ]
      }
    },
    {
      "block": {
        "name": "minecraft:oxidized_copper_golem_statue",
        "states": {
          "minecraft:cardinal_direction": "west"
        }
      },
      "filter": {
        "all_of": [
          {
            "test": "y_rotation",
            "operator": ">=",
            "value": 45
          },
          {
            "test": "y_rotation",
            "operator": "<",
            "value": 135
          }
        ]
      }
    }
  ],
  "affected_by_griefing_rule": false,
  "on_place": {
    "event": "minecraft:become_statue",
    "target": "self"
  }
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:behavior.place_block": {
  "priority": 10,
  "xz_range": [
    -1,
    1
  ],
  "y_range": [
    0,
    2
  ],
  "chance": 0.0005
}
```
