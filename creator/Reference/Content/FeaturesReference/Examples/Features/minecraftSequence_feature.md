---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:sequence_feature
ms.prod: gaming
---

# Features Documentation - minecraft:sequence_feature

`minecraft:sequence_feature` places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0).

**Succeeds if**
All features in the sequence are successfully placed.

**Fails if**
Any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.

## Example

### Scattering fruit throughout the canopy of a tree

```json
{
  "format_version": 1.3.0,
  "minecraft:sequence_feature": {
    "description": {
      "identifier": "example:oak_tree_then_apples_feature"
    },
    "features": [
      "oak_tree_feature",
      "scatter_apples_feature"
    ]
  }
}
```
