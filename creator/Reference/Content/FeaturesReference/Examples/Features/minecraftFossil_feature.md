---
author: JDHeaden
ms.author: v-jillheaden
title: Features Documentation - minecraft:fossil_feature
ms.prod: gaming
---

# Features Documentation - minecraft:fossil_feature

`minecraft:fossil_feature` generates a skeletal structure composed of bone blocks and parametric ore blocks.

**Succeeds if**
The fossil is placed.

**Fails if**
The fossil is not placed because it overlaps with another structure or because its bounding box has too many corners occupied by air or fluid.

**Example use: Fossil composed of bone blocks and coal ore blocks.**

```json
{
     "format_version": "1.16.0",
     "minecraft:fossil_feature": {
      "description": {
       "identifier": "minecraft:fossil_feature"
      },
      "ore_block": "minecraft:coal_ore",
      "max_empty_corners": 4
     }
    }
```
