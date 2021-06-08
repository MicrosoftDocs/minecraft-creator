---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.squid_flee
ms.prod: gaming
---

# minecraft:behavior.squid_flee

`minecraft:behavior.squid_flee` allows an entity to swim away when attacked.

> [!NOTE]
> This behavior can only be used by `squid` entity types.

## Example

```json
"minecraft:behavior.squid_flee":{
    "priority": 2,
}
```

## Vanilla entities examples

### squid

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/squid.json" range="83-85":::

## Vanilla entities using `minecraft:behavior.squid_flee`

- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
