---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.knockback_roar
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.knockback_roar

`minecraft:behavior.knockback_roar` allows an entity to emit a roar effect that knocks back other entities in a set radius from where the roar was emitted.

>[!IMPORTANT]
> `minecraft:behavior.knockback_roar` requires a Trigger Event in order to work properly.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack_time| 0.5| Decimal| The delay after which the knockback occurs (in seconds). |
| cooldown_time| 0.10| Decimal| Time (in seconds) the mob has to wait before using the goal again. |
| damage_filters| | Minecraft Filter| The list of conditions another entity must meet to be a valid target to apply damage to. |
| duration| 1.0| Decimal| The max duration of the roar (in seconds). |
| knockback_damage| 6 | Integer| The damage dealt by the knockback roar. |
| knockback_filters| | Minecraft Filter| The list of conditions another entity must meet to be a valid target to apply knockback to. |
| knockback_height_cap| 0.40| Decimal| The maximum height for vertical knockback. |
| knockback_horizontal_strength| 4| Integer| The strength of the horizontal knockback. |
| knockback_range| 4 | Integer| The radius (in blocks) of the knockback effect. |
| knockback_vertical_strength| 4| Integer| The strength of the vertical knockback. |
| on_roar_end| | Trigger| Event that is triggered when the roar ends. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.knockback_roar":{
    "priority": 1,
    "attack_time": 2.0,
    "cooldown_time": 0.5,
    "duration": 2.5,
    "knockback_damage": 3,
    "knockback_range": 4,
    "knockback_vertical_strength": 1,
    "knockback_horizontal_strength": 3
}
```

## Vanilla entities examples

### ravager

```json
"minecraft:behavior.knockback_roar": {
    "priority": 1,
    "duration": 1,
    "attack_time": 0.5,
    "knockback_damage": 6,
    "knockback_strength": 3,
    "knockback_range": 4,
    "knockback_filters": {
        "test": "is_family",
        "subject": "other",
        "operator": "!=",
        "value": "ravager"
    },
    "damage_filters": {
        "test": "is_family",
        "subject": "other",
        "operator": "!=",
        "value": "illager"
    },
        "on_roar_end": {
        "event": "minecraft:end_roar"
    },
    "cooldown_time": 0.1
}
```

## Vanilla entities using `minecraft:behavior.knockback_roar`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
