---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.squid_out_of_water
ms.prod: gaming
---

# minecraft:behavior.squid_out_of_water

`minecraft:behavior.squid_out_of_water` allows an entity to stay close to a ground block when out of water.

> [!NOTE]
> This behavior can only be used by `squid` entity types.

## Example

```json
"minecraft:behavior.squid_out_of_water":{
    "priority": 2,
}
```

## Vanilla entities examples

### squid

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/squid.json" range="90-92":::

## Vanilla entities using `minecraft:behavior.squid_out_of_water`

- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
