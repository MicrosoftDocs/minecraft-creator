---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:apply_knockback_rules"
description: "Describes the minecraft:apply_knockback_rules entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:apply_knockback_rules

Defines how an entity applies knockback.


## Entity Apply Knockback Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| presets | [] | Array of objects | Array of rules instances defining how knockback should be applied to the entity. | Egg: `[{"vertical_power":0.12,"vertical_velocity_cap":0.12}]`, Iron Golem: `[{"horizontal_power":1.3,"vertical_power":0.39,"vertical_velocity_cap":0.8}]` | 

## Samples

#### [Egg](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json)


```json
"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "vertical_power": 0.12,
      "vertical_velocity_cap": 0.12
    }
  ]
}
```

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "horizontal_power": 1.3,
      "vertical_power": 0.39,
      "vertical_velocity_cap": 0.8
    }
  ]
}
```
