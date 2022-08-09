---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.sniff
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.sniff

`minecraft:behavior.sniff` [EXPERIMENTAL BEHAVIOR] The entity detects the nearest player within "sniffing_radius" and updates its "minecraft:suspect_tracking" component state.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_range| [3.0, 10.0]| Range [a, b]| Cooldown range between sniffs in seconds. |
| duration| 1.0| Decimal| Sniffing duration in seconds |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| sniffing_radius| 5.0| Decimal| Mob detection radius. |
| suspicion_radius_horizontal| 3.0| Decimal| Mob suspicion horizontal radius. When a player is within this radius horizontally, the anger level towards that player is increased. |
| suspicion_radius_vertical| 3.0| Decimal| Mob suspicion vertical radius. When a player is within this radius vertically, the anger level towards that player is increased. |

## Vanilla entities examples

### warden

```json
"minecraft:behavior.sniff": {
  "priority": 6,
  "duration": 4.16,
  "sniffing_radius": 24.0,
  "suspicion_radius_horizontal" : 6.0,
  "suspicion_radius_vertical": 20.0,
  "cooldown_range": [ 5.0, 10.0 ]
},
```

## Vanilla entities using `sniff`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
