---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:scale"
description: "Describes the minecraft:scale entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:scale

Sets the entity's visual size.


## Scale Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 1 | Decimal number | The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger. | Sheepomelon: `0.5`, Nardolphle: `0.16`, Eliza: `0.4`, `0.8` | 

## Samples

#### [Sheepomelon](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/1_hello_world/behavior_packs/aop_mobs/entities/sheepomelon.behavior.json)


```json
"minecraft:scale": {
  "value": 0.5
}
```

#### [Nardolphle](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/nardolphle.behavior.json)


```json
"minecraft:scale": {
  "value": 0.16
}
```

#### [Eliza](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/custom_cat_eliza/behavior_packs/mike_eliz/entities/eliza.json)

At /minecraft:entity/component_groups/mike_eliz:eliza_baby/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 0.4
}
```

At /minecraft:entity/component_groups/mike_eliz:eliza_adult/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 0.8
}
```

#### [Gray Zombie Leader](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/gray_zombie_leader.behavior.json)


```json
"minecraft:scale": {
  "value": 1.3
}
```
