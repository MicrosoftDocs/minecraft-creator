---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.guardian_attack"
description: "Describes the minecraft:behavior.guardian_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.guardian_attack

Allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.


## Entity Guardian Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| elder_extra_magic_damage | 2 | Integer number | Amount of additional damage dealt from an elder guardian's magic attack. Value must be > 0. |  | 
| hard_mode_extra_magic_damage | 2 | Integer number | In hard difficulty, amount of additional damage dealt from a guardian's magic attack. Value must be > 0. |  | 
| magic_damage | 1 | Integer number | Amount of damage dealt from a guardian's magic attack. Magic attack damage is added to the guardian's base attack damage. Value must be > 0. |  | 
| min_distance | 3 | Decimal number | Guardian attack behavior stops if the target is closer than this distance (doesn't apply to elders). |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Elder Guardian: `4` | 
| sound_delay_time | 0.5 | Decimal number | Time (in seconds) to wait after starting an attack before playing the guardian attack sound. Value must be > 0. |  | 
| x_max_rotation | 90 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. Value must be > 0. |  | 
| y_max_head_rotation | 90 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. Value must be > 0. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:behavior.guardian_attack": {
  "priority": 4
}
```
