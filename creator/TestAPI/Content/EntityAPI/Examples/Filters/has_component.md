---
author: v-josjones
ms.author: v-josjones
title: has_component
ms.prod: gaming
---

# has_component

Returns true when the subject entity contains the named component.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String | (Required) The component name to look for |

### Nested Table

`has_component` can also use `subject` and `operator` parameters but they are optional.

### subject

| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |

## Examples

### Full

```json
{ "test": "has_component", "subject": "self", "operator": "equals", "value": "minecraft:explode" }
```

### Short (using Defaults)

```json
{ "test": "has_component", "value": "minecraft:explode" }
```

## Vanilla Mob examples

This section includes up to 2 snippets of the Filter being used in a vanilla mob.

### Zombie Pigman

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/zombie_pigman.json" range="376-408":::

## Vanilla Mobs using `has_component`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [evocation illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](Source/VanilliaFilterPack/entities/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [snow golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [tnt_minecarft](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [Villager_V2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [Villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [Wandering Trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)