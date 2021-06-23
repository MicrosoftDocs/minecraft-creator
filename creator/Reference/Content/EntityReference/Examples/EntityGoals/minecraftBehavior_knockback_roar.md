---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.knockback_roar
ms.prod: gaming
---

# minecraft:behavior.knockback_roar

`minecraft:behavior.knockback_roar` allows an entity to emit a roar effect that knocks back other entities in a set radius from where the roar was emitted.

>[!IMPORTANT]
> `minecraft:behavior.knockback_roar` requires a Trigger Event in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|attack_time| 0.5| Decimal| The delay after which the knockback occurs (in seconds). |
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the goal again |
|duration| 1.0| Decimal| The duration of the roar (in seconds). |
|knockback_damage| 6| Integer| The damage dealt by the knockback roar. |
|knockback_range| 4| Integer| The radius (in blocks) of the knockback effect. |
|knockback_strength| 4| Integer| The strength of the knockback. |
|[knockback_filters](../FilterList.md)|*not set*| Minecraft Filter| filters to use to decide what is affected by knockback roar. |
|[damage_filters](../FilterList.md)|*not set*| Minecraft Filter| filters to use to decide what is damaged by knockback roar.|
|on_roar_end |*not set*| String| Event to run when knockback roar has finished.|

## Example

```json
"minecraft:behavior.knockback_roar":{
    "priority": 1,
    "attack_time": 2.0,
    "cooldown_time": 0.5,
    "duration": 2.5,
    "knockback_damage": 3,
    "knockback_range": 4,
    "knockback_strength": 1
}
```

## Vanilla entities examples

### ravager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ravager.json" range="197-220":::

## Vanilla entities using `minecraft:behavior.knockback_roar`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
