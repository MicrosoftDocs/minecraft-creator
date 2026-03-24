---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.find_mount"
description: "Describes the minecraft:behavior.find_mount ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.find_mount

Allows the mob to look around for another mob to ride atop it.


## Entity Find Mount Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_water | false | Boolean true/false | If true, the mob will not go into water blocks when going towards a mount | Parrot: `true` | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| max_failed_attempts | 20 | Integer number | Number of attempts to find mount | Drowned: `20` | 
| mount_distance | -1 | Decimal number | This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance | Parrot: `2` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Drowned: `1`, Parrot: `4` | 
| start_delay | 0 | Integer number | Time the mob will wait before starting to move towards the mount | Drowned: `15`, Parrot: `100` | 
| target_needed | false | Boolean true/false | If true, the mob will only look for a mount if it has a target |  | 
| within_radius | 0 | Decimal number | Distance in blocks within which the mob will look for a mount | Drowned: `16` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.find_mount": {
  "max_failed_attempts": 20,
  "priority": 1,
  "start_delay": 15,
  "within_radius": 16
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.find_mount": {
  "avoid_water": true,
  "mount_distance": 2,
  "priority": 4,
  "start_delay": 100,
  "target_needed": false,
  "within_radius": 16
}
```
