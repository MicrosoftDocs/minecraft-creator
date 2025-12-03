---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:leashable"
description: "Describes the minecraft:leashable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:leashable

Describes how this mob can be leashed to other items.


## Leashable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_be_cut | true | Boolean true/false | If true, players can cut both incoming and outgoing leashes by using shears on the entity. |  | 
| can_be_stolen | false | Boolean true/false | If true, players can leash this entity even if it is already leashed to another entity. | Frost Moose: `true` | 
| hard_distance | 6 | Integer number | Distance in blocks at which the leash stiffens, restricting movement. |  | 
| max_distance | 0 | Integer number | Distance in blocks it which the leash breaks. |  | 
| on_leash | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is leashed. | Llama: `{"event":"minecraft:on_leash","target":"self"}` | 
| on_unleash | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is unleashed. | Happy Ghast: `{"event":"minecraft:on_unleashed","target":"self"}`, Llama: `{"event":"minecraft:on_unleash","target":"self"}` | 
| on_unleash_interact_only | false | Boolean true/false | When set to true, "on_unleash" does not trigger when the entity gets unleashed for reasons other than the player directly interacting with it. |  | 
| presets | *not set* | Array of [Presets](#presets) items | Defines how this entity behaves when leashed to another entity. The first preset which "filter" conditions are met will be applied; if none match, a default configuration is used instead. | Boat: `[{"filter":{"test":"is_family","subject":"other","value":"happy_ghast"},"spring_type":"quad_dampened","rotation_adjustment":90},{"rotation_adjustment":90,"soft_distance":2,"hard_distance":4}]` | 
| soft_distance | 4 | Integer number | Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it. |  | 

## Presets
Defines how this entity behaves when leashed to another entity. The first preset which "filter" conditions are met will be applied; if none match, a default configuration is used instead.


#### Presets Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filter | *not set* | Minecraft filter | Conditions that must be met for this preset to be applied. |  | 
| hard_distance | 7 | Decimal number | Distance (in blocks) over which the entity starts being pulled towards the leash holder with a spring-like force. Entities can enter and stay in vehicles if the leash is stretched under this distance, but will dismount once it exceeds it. |  | 
| max_distance | 12 | Decimal number | Distance in blocks at which the leash breaks. |  | 
| rotation_adjustment | 0 | Decimal number | Adjusts the rotation at which the entity reaches equilibrium, when "spring_type" is set to "dampened" or "quad_dampened". |  | 
| soft_distance | 4 | Decimal number | Distance (in blocks) over which the entity starts pathfinding toward the leash holder, if able. |  | 
| spring_type | dampened | String | Defines the type of spring-like force that pulls the entity towards its leash holder:<br>- "bouncy": Simulates a highly elastic spring that never reaches an equilibrium if the leashed entity is suspended mid-air.<br>- "dampened": Simulates a dampened spring attached to the front of the leashed entity's collision. It reaches an equilibrium if the entity is suspended mid-air and aligns with the movement direction.<br>- "quad_dampened": Simulates four dampened springs connected to the center of each side of the entities' collisions. It reaches an equilibrium if the entity is suspended mid-air and gradually aligns with the leash holder over time. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:leashable": {}
```

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:leashable": {
  "presets": [
    {
      "filter": {
        "test": "is_family",
        "subject": "other",
        "value": "happy_ghast"
      },
      "spring_type": "quad_dampened",
      "rotation_adjustment": 90
    },
    {
      "rotation_adjustment": 90,
      "soft_distance": 2,
      "hard_distance": 4
    }
  ]
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:leashable": {
  "presets": [
    {
      "filter": {
        "test": "is_family",
        "subject": "other",
        "value": "happy_ghast"
      },
      "spring_type": "quad_dampened"
    }
  ]
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:leashable": {
  "presets": [
    {
      "soft_distance": 4,
      "hard_distance": 6,
      "max_distance": 10
    }
  ]
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:leashable": {
  "on_unleash": {
    "event": "minecraft:on_unleashed",
    "target": "self"
  },
  "presets": [
    {
      "hard_distance": 10,
      "max_distance": 14
    }
  ]
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:leashable": {
  "on_leash": {
    "event": "minecraft:on_leash",
    "target": "self"
  },
  "on_unleash": {
    "event": "minecraft:on_unleash",
    "target": "self"
  }
}
```

#### [Zombie Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_horse.json)


```json
"minecraft:leashable": {
  "on_unleash": {
    "event": "minecraft:on_unleashed",
    "target": "self"
  },
  "presets": [
    {
      "filter": {
        "test": "is_family",
        "subject": "other",
        "value": "happy_ghast"
      },
      "spring_type": "quad_dampened"
    },
    {
      "hard_distance": 10,
      "max_distance": 14
    }
  ]
}
```

#### [Sheepomelon](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/1_hello_world/behavior_packs/aop_mobs/entities/sheepomelon.behavior.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10
}
```

#### [Frost Moose](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/frost_moose.behavior.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10,
  "can_be_stolen": true
}
```
