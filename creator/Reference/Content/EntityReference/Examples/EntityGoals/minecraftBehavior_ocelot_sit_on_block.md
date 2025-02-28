---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ocelot_sit_on_block"
description: "Describes the minecraft:behavior.ocelot_sit_on_block ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ocelot_sit_on_block

Allows to mob to be able to sit in place like the ocelot.


## Ocelot Sit On Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cat: `7`, Ocelot: `6` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Cat: `1` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.ocelot_sit_on_block": {
  "priority": 7,
  "speed_multiplier": 1
}
```

#### [Ocelot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ocelot.json)


```json
"minecraft:behavior.ocelot_sit_on_block": {
  "priority": 6,
  "speed_multiplier": 1
}
```
