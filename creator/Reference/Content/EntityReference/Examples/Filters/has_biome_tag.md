---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_biome_tag
ms.prod: gaming
---

# Entity Documentation - has_biome_tag

Tests whether the biome the subject is in has the specified tag.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String | (Required) The tag to look for |

> [!NOTE]
> `has_biome_tag` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------|:-----------|
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

## Example

### Full

```json
{ "test": "has_biome_tag", "subject": "self", "operator": "equals", "value": " " }
```

### Short (using Defaults)

```json
{ "test": "has_biome_tag", "value": " " }
```

## Vanilla entities examples

### Creeper

:::code language="json" source="../../../../Source/VanillaBehaviorPack/spawn_rules/creeper.json" range="28-30":::

## Vanilla entities using `has_biome_tag`

- [bat](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/bee.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/chicken.md)
- [cod](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/cod.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/donkey.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/drowned.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/enderman.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/fox.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/ghast.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/llama.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/magma_cube.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/mooshroom.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/panda.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/parrot.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/phantom.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/pig.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/piglin.md)
- [pillager_patrol](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/pillager_patrol.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/polar_bear.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/pufferfish.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/rabbit.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/salmon.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/sheep.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/slime.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/spider.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/strider.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/turtle.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/witch.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/wolf.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/zombie_pigman.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/zombie.md)
