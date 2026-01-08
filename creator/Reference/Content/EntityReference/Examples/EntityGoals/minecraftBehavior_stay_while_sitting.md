---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stay_while_sitting"
description: "Describes the minecraft:behavior.stay_while_sitting ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stay_while_sitting

Allows the mob to stay put while it is in a sitting state instead of doing something else.

> [!Note]
> This behavior works with the minecraft:sittable component. When the entity is commanded to sit, this goal prevents other behaviors from moving the entity.


## Stay While Sitting Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cat: `3`, Parrot: `2` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.stay_while_sitting": {
  "priority": 3
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.stay_while_sitting": {
  "priority": 2
}
```
