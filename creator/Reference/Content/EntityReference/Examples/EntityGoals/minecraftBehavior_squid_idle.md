---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.squid_idle
ms.prod: gaming
---

# minecraft:behavior.squid_idle

`minecraft:behavior.squid_idle` allows an entity to swim in place.

> [!NOTE]
> This behavior can only be used by `squid` entity types.

## Example

```json
"minecraft:behavior.squid_idle":{
    "priority": 2,
}
```

## Vanilla entities examples

### squid

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/squid.json" range="84-86":::

## Vanilla entities using `minecraft:behavior.squid_idle`

- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
