---
author: mammerla
ms.author: mikeam
title: Features Documentation - minecraft:aggregate_feature
description: "A reference document detailing the 'aggregate_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:aggregate_feature

`minecraft:aggregate_feature` places a collection of features in an arbitrary order. All features in the collection use the same input position. Features should not depend on each other, as there is no guarantee in which order the features will be placed.

**Succeeds if**
At lease one feature is placed successfully.

**Fails if**
All features fail to be placed.

## Example

### Scattering multiple different plants around a monument

```json
{
  "format_version": 1.3.0,
  "minecraft:aggregate_feature": {
    "description": {
      "identifier": "example:monument_with_flowers_feature"
    },
    "features": [
      "monument_feature",
      "scatter_white_flowers_feature",
      "scatter_yellow_flower_feature"
    ]
  }
}
```
