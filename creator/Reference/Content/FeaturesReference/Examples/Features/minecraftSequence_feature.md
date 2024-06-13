---
author: mammerla
ms.author: mikeam
title: Features Documentation - minecraft:sequence_feature
description: "A reference document detailing the 'sequence_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:sequence_feature

`minecraft:sequence_feature` places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0).

**Succeeds if**
All features in the sequence are successfully placed.

**Fails if**
Any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.

### Schema

```json

object "minecraft:sequence_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  array "features"[1,*] // List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next.
  {
    feature_reference "<any array element>" : opt
  }
}
```

### Example: Scattering fruit throughout the canopy of a tree

```json
{
  "format_version": 1.13.0,
  "minecraft:sequence_feature": {
    "description": {
      "identifier": "example:oak_tree_then_apples_feature"
    },
    "features": [
      "example:oak_tree_feature",
      "example:scatter_apples_feature"
    ]
  }
}
```
