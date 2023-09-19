---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:trusting
description: "A reference document detailing the 'trusting' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:trusting

`minecraft:trusting` defines the rules for an entity to trust players.

## Parameters

|Name |Default Value  |Type  |Description  |
|:-----------|:-----------|:-----------|:-----------|
| probability| 1.00| Decimal| The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%. |
| trust_event| *not set*| String| Event to initiate when the entity becomes trusting. |
| trust_items| *not set*| List| The list of items that can be used to get the entity to trust players. |

## Example

```json
"minecraft:trusting": {
    "probability": 1.00,
    "trust_items": ["emerald", "gold" ],
    "trust_event": {
        "event": "minecraft:trust",
        "target": "self"
    }
```

## Vanilla entities examples

### ocelot

```json
"minecraft:trusting": {
          "probability": 0.33,
          "trust_items": [ "fish", "salmon" ],
          "trust_event": {
            "event": "minecraft:on_trust",
            "target": "self"
          }
```

## Vanilla entities using `minecraft:trusting`

- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
