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
| presets | [] | Array of [Presets](#entity-apply-knockback-rules-instance) items | Array of rules instances defining how knockback should be applied to the entity. | Drowned: `[{"horizontal_power":0.6,"vertical_power":-0.6,"vertical_velocity_cap":-0.4,"check_if_target_is_immersed_in_water":true}]`, Egg: `[{"vertical_power":0.1,"vertical_velocity_cap":0.1}]`, Iron Golem: `[{"horizontal_power":0.52,"vertical_power":0.39,"vertical_velocity_cap":0.8}]` | 

### Entity Apply Knockback Rules Instance
Intance of rules definition.


#### Entity Apply Knockback Rules Instance Properties

**JSON path:** `presets`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| check_if_target_is_immersed_in_water | false | Boolean true/false | Whether or not the target should be fully immersed in water for the knockback rules to apply. | 
| extra_knockback_approach | reapply_default | [Extra Knockback Approach](#extra-knockback-approach-choices) choices | Defines the approach for combining extra knockback from enchantments or sprinting: - "reapply_default": Reapplies knockback again with default knockback parameters, i. | 
| filter (Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filter](#filter) item | Filter for the entity type that will be affected by these knockback rules. | 
| filter (Alternate 1) | *not set* | Object |  | 
| horizontal_power | 1 | Decimal number | Power with which a target should be knocked backwards. | 
| knockback_mode | relative_horizontal | [Knockback Mode](#knockback-mode-choices) choices | Defines how knockback is applied to the target: - "relative_horizontal": Applies knockback along the horizontal direction from the attacker to the target. | 
| scale_with_damage | false | Boolean true/false | Scaling factor to the magnitude of knockback based on the inverse square of the damage. | 
| slowdown_scale | 0.5 | Decimal number | Scaling factor to apply to the target's velocity before applying knockback. Value must be <= 1. | 
| vertical_power | 0.4000000059604645 | Decimal number | Power with which a target should be knocked upwards. | 
| vertical_velocity_cap | 0.4000000059604645 | Decimal number | Maximum allowed Y velocity after target's knockback rules have been evaluated. | 

#### extra_knockback_approach

Defines the approach for combining extra knockback from enchantments or sprinting: - "reapply_default": Reapplies knockback again with default knockback parameters, i.e. values not defined by this component. - "multiply_reduced": Multiplies the extra knockback with the base knockback and a reduction factor, and adds it to the base knockback.

#### knockback_mode

Defines how knockback is applied to the target: - "relative_horizontal": Applies knockback along the horizontal direction from the attacker to the target. - "hit_direction": Applies knockback based on the hit direction and the point of impact (e.g. hits to the bottom of the entity or from below push it upward, hits on the left side of the entity push it to the right).


### Extra Knockback Approach choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| multiply_reduced | Multiply reduced | |
| reapply_default | Reapply default | |

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

### Knockback Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| hit_direction | Hit direction | |
| relative_horizontal | Relative horizontal | |

## Samples

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "horizontal_power": 0.6,
      "vertical_power": -0.6,
      "vertical_velocity_cap": -0.4,
      "check_if_target_is_immersed_in_water": true
    }
  ]
}
```

#### [Egg](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json)


```json
"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "vertical_power": 0.1,
      "vertical_velocity_cap": 0.1
    }
  ]
}
```

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "horizontal_power": 0.52,
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
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "regular"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_bouncy"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.24,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_flat"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_flat"
      },
      "horizontal_power": 0.365,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "light"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.18,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_sliding"
      },
      "horizontal_power": 0.265,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_sliding"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "sticky"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "high_resistance"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "explosive"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "hot"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    }
  ]
}
```
