---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:exhaustion_values
ms.prod: gaming
---

# Entity Documentation - minecraft:exhaustion_values

`minecraft:exhaustion_values` defines how much exhaustion each player action should take.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack|0.1| Decimal| Amount of exhaustion applied when attacking. |
| damage| 0.1| Decimal| Amount of exhaustion applied when taking damage. |
| heal| 6| Decimal| Amount of exhaustion applied when healed through food regeneration. |
| jump|| Decimal| Amount of exhaustion applied when jumping. |
| mine| 0.005| Decimal| Amount of exhaustion applied when mining. |
| sprint| 0.01| Decimal| Amount of exhaustion applied when sprinting. |
| sprint_jump| 0.2| Decimal| Amount of exhaustion applied when sprint jumping. |
| swim| 0.01| Decimal| Amount of exhaustion applied when swimming. |
| walk| 0| Decimal| Amount of exhaustion applied when walking. |

## Example

```json
"minecraft:exhaustion_values": {
    "heal": 3,
    "jump": 0.2,
    "sprint_jump": 0.8,
    "mine": 0.025,
    "attack": 0.3,
    "damage": 0.1,
    "walk": 0.01,
    "sprint": 0.01,
    "swim": 0.015
}
```

## Vanilla entities examples

### player

```json
"minecraft:exhaustion_values": {
    "heal": 6,
    "jump": 0.05,
    "sprint_jump": 0.2,
    "mine": 0.005,
    "attack": 0.1,
    "damage": 0.1,
    "walk": 0.0,
    "sprint": 0.01,
    "swim": 0.01
}
```

## Vanilla entities using `minecraft:exhaustion_values`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)