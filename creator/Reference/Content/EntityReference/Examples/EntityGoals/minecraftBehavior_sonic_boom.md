---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.sonic_boom"
description: "Describes the minecraft:behavior.sonic_boom ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.sonic_boom

Allows this entity to perform a 'sonic boom' ranged attack.


## Sonic Boom Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_cooldown | 5 | Decimal number | Cooldown in seconds required after using this attack until the entity can use sonic boom again. | Warden: `2` | 
| attack_damage | 30 | Decimal number | Attack damage of the sonic boom. | Warden: `10` | 
| attack_range_horizontal | 15 | Decimal number | Horizontal range (in blocks) at which the sonic boom can damage the target. | Warden: `15` | 
| attack_range_vertical | 20 | Decimal number | Vertical range (in blocks) at which the sonic boom can damage the target. | Warden: `20` | 
| attack_sound | *not set* | String | Sound event for the attack. | Warden: `"sonic_boom"` | 
| charge_sound | *not set* | String | Sound event for the charge up. | Warden: `"sonic_charge"` | 
| duration | 3 | Decimal number | Goal duration in seconds | Warden: `3` | 
| duration_until_attack_sound | 1.7 | Decimal number | Duration in seconds until the attack sound is played. | Warden: `1.7` | 
| knockback_height_cap | 0 | Decimal number | Height cap of the attack knockback's vertical delta. | Warden: `0.5` | 
| knockback_horizontal_strength | 0 | Decimal number | Horizontal strength of the attack's knockback applied to the attack target. | Warden: `2.5` | 
| knockback_vertical_strength | 0 | Decimal number | Vertical strength of the attack's knockback applied to the attack target. | Warden: `0.5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `3` | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the attacking entity's speed when moving toward the target. | Warden: `1.2` | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.sonic_boom": {
  "priority": 3,
  "duration": 3,
  "speed_multiplier": 1.2,
  "attack_damage": 10,
  "attack_range_horizontal": 15,
  "attack_range_vertical": 20,
  "attack_cooldown": 2,
  "knockback_vertical_strength": 0.5,
  "knockback_horizontal_strength": 2.5,
  "knockback_height_cap": 0.5,
  "duration_until_attack_sound": 1.7,
  "charge_sound": "sonic_charge",
  "attack_sound": "sonic_boom"
}
```
