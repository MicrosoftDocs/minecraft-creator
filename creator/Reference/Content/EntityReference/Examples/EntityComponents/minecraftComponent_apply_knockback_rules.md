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
| presets | [] | Array of [Presets](#entity-apply-knockback-rules-instance) items | Array of rules instances defining how knockback should be applied to the entity. | Egg: `[{"vertical_power":0.12,"vertical_velocity_cap":0.12}]`, Iron Golem: `[{"horizontal_power":1.3,"vertical_power":0.39,"vertical_velocity_cap":0.8}]`, Player: `[{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"bouncy"},"horizontal_power":0.33,"vertical_power":0.07,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"regular"},"horizontal_power":0.33,"vertical_power":0.07,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:ball_archetype","value":"slow_bouncy"},"horizontal_power":0.33,"vertical_power":0.16,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"slow_flat"},"horizontal_power":0.33,"vertical_power":0.07,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"fast_flat"},"horizontal_power":0.73,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"light"},"horizontal_power":0.33,"vertical_power":0.12,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"fast_sliding"},"horizontal_power":0.53,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"slow_sliding"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"sticky"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"high_resistance"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"explosive"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"hot"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true,"extra_knockback_approach":"multiply_reduced"}]` | 

### Entity Apply Knockback Rules Instance
Intance of rules definition.


#### Entity Apply Knockback Rules Instance Properties

**JSON path:** `presets`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| check_if_target_is_immersed_in_water | false | Boolean true/false | Whether or not the target should be fully immersed in water for the knockback rules to apply. | 
| filter (Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filter](#filter) item | Filter for the entity type that will be affected by these knockback rules. | 
| filter (Alternate 1) | *not set* | Object |  | 
| horizontal_hit_angle_scale | 0 | Decimal number | Scaling factor to angle the knockback horizontally based on the attacker's aim direction. | 
| horizontal_power | 1 | Decimal number | Power with which a target should be knocked backwards. | 
| scale_previous_velocity | 0.5 | Decimal number | Scaling factor to apply to the target's velocity before applying knockback. Value must be <= 1. | 
| scale_with_damage | false | Boolean true/false | Scaling factor to the magnitude of knockback based on the inverse square of the damage. | 
| vertical_hit_angle_scale | 0 | Decimal number | Scaling factor to angle the knockback vertically based on the attacker's aim direction. Value must be <= 1. | 
| vertical_position_angle_scale | 0 | Decimal number | Scaling factor to angle the knockback vertically based on the difference in the attacker's feet position to the target's feet position. Value must be <= 1. | 
| vertical_power | 0.4000000059604645 | Decimal number | Power with which a target should be knocked upwards. | 
| vertical_velocity_cap | 0.4000000059604645 | Decimal number | Maximum allowed Y velocity after target's knockback rules have been evaluated. | 

#### Filter

##### Filter Properties

**JSON path:** `presets > filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

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

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "bouncy"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.07,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "regular"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.07,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:ball_archetype",
        "value": "slow_bouncy"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.16,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_flat"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.07,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_flat"
      },
      "horizontal_power": 0.73,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "light"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.12,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_sliding"
      },
      "horizontal_power": 0.53,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_sliding"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "sticky"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "high_resistance"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "explosive"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "hot"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true,
      "extra_knockback_approach": "multiply_reduced"
    }
  ]
}
```
