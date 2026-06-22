---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.float"
description: "Describes the minecraft:behavior.float ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.float

Allows the mob to stay afloat while swimming. Passengers will be kicked out the moment the mob's head goes underwater, which may not happen for tall mobs.


## Entity Float Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance_per_tick_to_float | 0.8 | Decimal number | Probability per tick (0-1) that the entity will attempt to float when in water. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `7`, Cave Spider: `1` | 
| sink_with_passengers | false | Boolean true/false | If true, the mob will keep sinking as long as it has passengers. |  | 
| time_under_water_to_dismount_passengers | 0 | Decimal number | Time in seconds the entity must spend with its head underwater before any passengers are dismounted. |  | 

### chance_per_tick_to_float

Probability per tick (0-1) that the entity will attempt to float when in water. Lower values produce slower, more deliberate floating behavior. This item requires a format version of at least 1.21.130.

### time_under_water_to_dismount_passengers

Time in seconds the entity must spend with its head underwater before any passengers are dismounted. A value of 0 dismounts passengers as soon as the entity's head submerges. This item requires a format version of at least 1.21.130.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.float": {
  "priority": 7
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:behavior.float": {
  "priority": 0
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.float": {
  "priority": 1
}
```
