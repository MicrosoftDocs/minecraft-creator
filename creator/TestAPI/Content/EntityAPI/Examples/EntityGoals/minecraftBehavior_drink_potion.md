---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.drink_potion
ms.prod: gaming
---

# minecraft:behavior.drink_potion

`minecraft:behavior.drink_potion` allows an entity to drink a potion as a reaction to an event or when set conditions are met.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|speed_modifier| 0.0| Decimal| Movement speed modifier of the mob when using this AI Goal|
|potions |*not set* |List |A list of potions that this entity can drink. |

### Potion Parameters

Each potion entry has the following parameters:
|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|chance| 1.0| Decimal| The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use. |
| filters|*not set* | Minecraft Filter| The filters to use when determining if this potion can be selected. |
|id| -1|Integer | The registry ID of the potion to use |

## Vanilla entities examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="170-218":::

## Vanilla entities using `minecraft:behavior.drink_potion`

- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
