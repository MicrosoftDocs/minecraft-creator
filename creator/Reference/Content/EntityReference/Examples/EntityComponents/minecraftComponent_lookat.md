---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:lookat
ms.prod: gaming
---

# Entity Documentation - minecraft:lookat

`minecraft:lookat` defines the behavior when another entity looks at this entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| allow_invulnerable| False| Boolean| If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets. |
| filters| *not set*| Minecraft Filter| Defines the entities that can trigger this component. |
| look_cooldown| [0, 0]| Range [a, b]| The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target. |
| look_event| *not set*| String| The event identifier to run when the entities specified in filters look at this entity. |
| search_radius| 10| Decimal| Maximum distance this entity will look for another entity looking at it. |
| set_target| True| Boolean| If true, this entity will set the attack target as the entity that looked at it. |

## Example

```json
"minecraft:lookat":{
    "allow_invulnerable": false,
    "filters": {"test": "has_target"}  ,
    "look_cooldown": [0, 0],
    "look_event": "minecraft:get_angry" ,
    "search_radius": 10,
    "set_target": true,
}
```

## Vanilla entities examples

### enderman

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/enderman.json" range="93-113":::

## Vanilla entities using `minecraft:lookat`

- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)