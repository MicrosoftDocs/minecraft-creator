---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:attack"
description: "Describes the minecraft:attack entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:attack

Allows an entity to define an entity's melee attack and any additional effects on it's attack.


## Attack Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage | *not set* | Range of floats | Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it. | Biceson: `6`, Sheepomelon: `3`, Axe Turret: `400` | 
| effect_duration | 0 | Decimal number | Duration in seconds of the status ailment applied to the damaged entity. |  | 
| effect_name | *not set* | String | Identifier of the status ailment to apply to an entity attacked by this entity's melee attack. |  | 

## Samples

#### [Biceson](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/biceson.behavior.json)


```json
"minecraft:attack": {
  "damage": 6
}
```

#### [Sheepomelon](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/sheepomelon.behavior.json)


```json
"minecraft:attack": {
  "damage": 3
}
```

#### [Axe Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/axe_turret.behavior.json)


```json
"minecraft:attack": {
  "damage": 400
}
```
