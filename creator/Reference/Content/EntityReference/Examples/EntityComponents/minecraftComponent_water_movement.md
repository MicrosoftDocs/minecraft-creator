---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:water_movement"
description: "Describes the minecraft:water_movement entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:water_movement

Customizes how the entity moves through water by adjusting drag coefficient. Lower values let entities glide through water easily like fish, while higher values create resistance for entities that struggle in water. Essential for aquatic mobs, boats, and any entity needing custom underwater physics.


## Water Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| drag_factor | 0.8 | Decimal number | Drag factor to determine movement speed when in water. | Polar Bear: `0.98`, Turtle: `0.9` | 

## Samples

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)


```json
"minecraft:water_movement": {
  "drag_factor": 0.98
}
```

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:water_movement": {
  "drag_factor": 0.9
}
```
