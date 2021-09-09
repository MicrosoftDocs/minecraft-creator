---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:ravager_blocked
ms.prod: gaming
---

# Entity Documentation - minecraft:ravager_blocked

`minecraft:ravager_blocked` defines the ravager's response to their melee attack being blocked.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| knockback_strength| 3.0| Decimal| The strength with which blocking entities should be knocked back |
| reaction_choices| *not set*| List| A list of weighted responses to the melee attack being blocked |

## Example

```json
"minecraft:ravager_blocked":{
    "knockback_strength": 3.0,
    "reaction_choices": []
}
```

## Vanilla entities examples

### ravager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ravager.json" range="232-247":::

## Vanilla entities using `minecraft:ravager_blocked`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)