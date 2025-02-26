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
| can_be_stolen | false | Boolean true/false | If true, players can leash this entity even if it is already leashed to another mob. | Llama: `true` | 
| hard_distance | 6 | Integer number | Distance in blocks at which the leash stiffens, restricting movement. | Allay: `6` | 
| max_distance | 10 | Integer number | Distance in blocks it which the leash breaks. | Allay: `10` | 
| on_leash | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is leashed. | Ocelot: `{"event":"minecraft:on_leash","target":"self"}` | 
| on_unleash | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is unleashed. | Ocelot: `{"event":"minecraft:on_unleash","target":"self"}` | 
| soft_distance | 4 | Integer number | Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it. | Allay: `4` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:leashable": {}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10,
  "can_be_stolen": true
}
```

#### [Ocelot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ocelot.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10,
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
