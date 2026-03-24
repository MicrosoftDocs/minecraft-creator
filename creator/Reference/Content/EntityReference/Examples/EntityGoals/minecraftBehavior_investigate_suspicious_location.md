---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.investigate_suspicious_location"
description: "Describes the minecraft:behavior.investigate_suspicious_location ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.investigate_suspicious_location

Allows this entity to move towards a "suspicious" position based on data gathered in `minecraft:suspect_tracking`.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Suspect Tracking (minecraft:suspect_tracking)](../EntityComponents/minecraftComponent_suspect_tracking.md)
> 

## Entity Investigate Suspicious Location Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| goal_radius | 1.5 | Decimal number | Distance in blocks within the entity considers it has reached it's target position. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `5` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier | Warden: `0.7` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.investigate_suspicious_location": {
  "speed_multiplier": 0.7,
  "priority": 5
}
```
