---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.charge_attack"
description: "Describes the minecraft:behavior.charge_attack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.charge_attack

Allows this entity to damage a target by using a running attack.


## Charge Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_distance | 3 | Decimal number | A charge attack cannot start if the entity is farther than this distance to the target. |  | 
| min_distance | 2 | Decimal number | A charge attack cannot start if the entity is closer than this distance to the target. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Vex: `4` | 
| speed_multiplier | 1 | Decimal number | Modifies the entity's speed when charging toward the target. |  | 
| success_rate | 0.1428 | Decimal number | Percent chance this entity will start a charge attack, if not already attacking (1.0 = 100%) |  | 

## Samples

#### [Vex](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json)


```json
"minecraft:behavior.charge_attack": {
  "priority": 4
}
```
