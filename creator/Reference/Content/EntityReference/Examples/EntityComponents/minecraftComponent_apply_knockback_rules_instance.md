---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:apply_knockback_rules_instance"
description: "Describes the minecraft:apply_knockback_rules_instance entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:apply_knockback_rules_instance

Intance of rules definition.


## Entity Apply Knockback Rules Instance Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| check_if_target_is_immersed_in_water | false | Boolean true/false | Whether or not the target should be fully immersed in water for the knockback rules to apply. | 
| extra_knockback_approach | reapply_default | [Extra Knockback Approach](#extra-knockback-approach-choices) choices | Defines the approach for combining extra knockback from enchantments or sprinting: - "reapply_default": Reapplies knockback again with default knockback parameters, i. | 
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

### extra_knockback_approach

Defines the approach for combining extra knockback from enchantments or sprinting: - "reapply_default": Reapplies knockback again with default knockback parameters, i.e. values not defined by this component. - "multiply_reduced": Multiplies the extra knockback with the first knockback and a reduction factor, and adds it to the first knockback.


### Extra Knockback Approach choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| multiply_reduced | Multiply reduced | |
| reapply_default | Reapply default | |

### Filter

#### Filter Properties

**JSON path:** `filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 