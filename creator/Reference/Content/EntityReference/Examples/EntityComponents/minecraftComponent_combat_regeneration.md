---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:combat_regeneration"
description: "Describes the minecraft:combat_regeneration entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:combat_regeneration

Gives `Regeneration I` and removes `Mining Fatigue` from the mob that kills the entity's attack target.


## Combat Regeneration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| apply_to_family | false | Boolean true/false | Determines if the mob will grant mobs of the same type combat buffs if they kill the target. |  | 
| apply_to_self | false | Boolean true/false | Determines if the mob will grant itself the combat buffs if it kills the target. |  | 
| regeneration_duration | 5 | Integer number | The duration in seconds of Regeneration I added to the mob. Can also be set to "infinite" |  | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:combat_regeneration": {}
```
