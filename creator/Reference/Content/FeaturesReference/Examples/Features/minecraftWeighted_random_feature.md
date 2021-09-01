---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:weighted_random_feature
ms.prod: gaming
---

# Features Documentation - minecraft:weighted_random_feature

`minecraft:weighted_random_feature` randomly selects and places a feature based on a weight value. Weights are relative, with higher values making selection more likely.

**Succeeds if**
The selected feature is placed.

**Fails if**
The selected feature fails to be placed.

## Example

### Selecting and placing a variant of a flower

```json
{
  "format_version": 1.13.0,
  "minecraft:weighted_random_feature": {
    "description": {
      "identifier": "example:select_flower_feature"
    },
    "features": [
      [ "example:white_flower_feature", 1 ],
      [ "example:red_flower_feature", 2 ],
      [ "example:blue_flower_feature", 1 ],
      [ "example:yellow_flower_feature", 4 ]
    ]
  }
}
```
