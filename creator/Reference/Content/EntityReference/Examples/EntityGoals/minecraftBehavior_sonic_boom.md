---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.sonic_boom
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.sonic_boom

`minecraft:behavior.sonic_boom` [EXPERIMENTAL BEHAVIOR] plays the provided sounds and activates the "SONIC BOOM" actor flag during the specified duration.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack_cooldown| 5.00| Decimal| Cooldown in seconds required after using this attack until the entity can use sonic boom again. |
| attack_damage| 30.00| Decimal| Attack damage of the sonic boom. |
| attack_range_horizontal| 15.00| Decimal| Horizontal range (in blocks) at which the sonic boom can damage the target. |
| attack_range_vertical| 20.00| Decimal| Vertical range (in blocks) at which the sonic boom can damage the target. |
| attack_sound| | String| Sound event for the attack. |
| charge_sound| | String| Sound event for the charge up. |
| duration| 3.00| Decimal| Goal duration in seconds |
| duration_until_attack_sound| 1.70| Decimal| Duration in seconds until the attack sound is played. |
| knockback_height_cap| 0.00| Decimal| Height cap of the attack knockback's vertical delta. |
| knockback_horizontal_strength| 0.00| Decimal| Horizontal strength of the attack's knockback applied to the attack target. |
| knockback_vertical_strength| 0.00| Decimal| Vertical strength of the attack's knockback applied to the attack target. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.00| Decimal| This multiplier modifies the attacking entity's speed when moving toward the target. |

## Vanilla entities examples

### warden

```json
"minecraft:behavior.sonic_boom": {
  "priority": 3,
  "duration": 3.0,
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
},
```

## Vanilla entities using `sonic_boom`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
