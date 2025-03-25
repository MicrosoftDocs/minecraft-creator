---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.teleport_to_owner"
description: "Describes the minecraft:behavior.teleport_to_owner ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.teleport_to_owner

Allows an entity to teleport to its owner.


## Teleport To Owner Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 1 | Decimal number | The time in seconds that must pass for the entity to be able to try to teleport again. |  | 
| filters | *not set* | Minecraft filter | Conditions to be satisfied for the entity to teleport to its owner. | Cat: `{"all_of":[{"test":"owner_distance","operator":">","value":12},{"test":"is_panicking"}]}`, Wolf: `{"any_of":[{"all_of":[{"test":"owner_distance","operator":">","value":12},{"test":"is_panicking"}]},{"all_of":[{"test":"owner_distance","operator":">","value":24},{"test":"has_target"}]}]}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wolf: `1` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.teleport_to_owner": {
  "priority": 0,
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
  }
}
```

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:behavior.teleport_to_owner": {
  "priority": 1,
  "filters": {
    "any_of": [
      {
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
      {
        "all_of": [
          {
            "test": "owner_distance",
            "operator": ">",
            "value": 24
          },
          {
            "test": "has_target"
          }
        ]
      }
    ]
  }
}
```
