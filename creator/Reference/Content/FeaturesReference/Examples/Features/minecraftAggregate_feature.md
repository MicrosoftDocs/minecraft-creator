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
At least one feature is placed successfully.

**Fails if**
All features fail to be placed.

### Schema

```json
object "minecraft:aggregate_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  array "features"[1,*] // Collection of features to be placed one by one. No guarantee of order. All features use the same input position.
  {
    feature_reference "<any array element>" : opt
  }
  enumerated_value "early_out"<"none", "first_failure", "first_success"> : opt // LIKELY TO BE CHANGED: Do not continue placing features once either the first success or first failure has occurred.
}
```

### Example

Scattering multiple different plants around a monument

```json
{
  "format_version": "1.13.0",
  "minecraft:aggregate_feature": {
    "description": {
      "identifier": "example:monument_with_flowers_feature"
    },
    "features": [
      "example:monument_feature",
      "example:scatter_white_flowers_feature",
      "example:scatter_yellow_flower_feature"
    ]
  }
}
```
