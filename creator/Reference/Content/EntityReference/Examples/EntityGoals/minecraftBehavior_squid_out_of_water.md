---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.squid_out_of_water
ms.prod: gaming
---

# minecraft:behavior.squid_out_of_water

`minecraft:behavior.squid_out_of_water` allows an entity to stay close to a ground block when out of water.

> [!NOTE]
> This behavior can only be used by the `squid` entity type.

## Example

```json
"minecraft:behavior.squid_out_of_water":{
    "priority": 2,
}
```

## Vanilla entities examples

### squid

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/squid.json" range="92-94":::

## Vanilla entities using `minecraft:behavior.squid_out_of_water`

- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
