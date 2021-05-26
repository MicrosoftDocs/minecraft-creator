---
author: v-josjones
ms.author: v-josjones
title: has_biome_tag
ms.prod: gaming
---

# has_biome_tag

Tests whether the biome the subject is in has the specified tag.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String | (Required) The tag to look for |

`has_biome_tag` can also use `subject` and `operator` parameters but they are optional.

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

## Example

### Full

```json
{ "test": "has_biome_tag", "subject": "self", "operator": "equals", "value": " " }
```

### Short (using Defaults)

```json
{ "test": "has_biome_tag", "value": " " }
```

## Vanilla Mob examples

### Creeper

:::code language="json" source="../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/creeper.json" range="28-30":::

## Vanilla Mobs using `has_biome_tag`

- bat
- bee
- chicken
- cod
- cow
- creeper
- dolphin
- donkey
- drowned
- enderman
- fox
- ghast
- hoglin
- horse
- husk
- llama
- magma cube
- mooshroom
- ocelot
- panda
- parrot
- phantom
- pig
- piglin
- pillager_patrol
- polar bear
- pufferfish
- rabbit
- salmon
- sheep
- skeleton
- slime
- spider
- squid
- stray
- strider
- tropical fish
- turtle
- witch
- wolf
- zombie pigman
- zombie
- 