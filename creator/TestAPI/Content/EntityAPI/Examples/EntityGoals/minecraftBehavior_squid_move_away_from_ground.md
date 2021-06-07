---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.squid_move_away_from_ground
ms.prod: gaming
---

# minecraft:behavior.squid_move_away_from_ground

`minecraft:behavior.squid_move_away_from_ground` allows an entity to swim away from the ground blocks.

> [!NOTE]
> This behavior can only be used by `squid` entity types.

## Example

```json
"minecraft:behavior.squid_move_away_from_ground":{
    "priority": 2,
}
```

## Vanilla entities examples

### squid

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/squid.json" range="78-80":::

## Vanilla entities using `minecraft:behavior.squid_move_away_from_ground`

- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
