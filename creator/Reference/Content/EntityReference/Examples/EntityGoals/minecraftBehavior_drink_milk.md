---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.drink_milk
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.drink_milk

`minecraft:behavior.drink_milk` allows the mob to drink milk based on specified environment conditions.

## Parameters


| Name| Default Value| Type | Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| filters| *not set* | Minecraft Filter | Conditions that need to be met for the behavior to start. |
| cooldown_seconds| 5.00| Decimal | Time (in seconds) that the goal is on cooldown before it can be used again. |


## Example

```json
"minecraft:behavior.drink_milk": {
    "cooldown_seconds": 5.00
},
```

## Vanilla entities using `drink_milk`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)