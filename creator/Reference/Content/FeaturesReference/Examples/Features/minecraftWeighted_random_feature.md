---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:weighted_random_feature
description: "A reference document detailing the 'weighted_random_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:weighted_random_feature

`minecraft:weighted_random_feature` randomly selects and places a feature based on a weight value. Weights are relative, with higher values making selection more likely.

- **Succeeds if** the selected feature is placed.

- **Fails if** the selected feature fails to be placed.

### Schema

```json
object "minecraft:weighted_random_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  array "features"[1,*]
  {
    array "<any array element>"[2] : opt // Collection of weighted features that placement will select from.
    {
      feature_reference "[0..0]" // Named reference to a feature.
      float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
    }
  }
}
```

### Example

Selecting and placing a variant of a flower

```json
{
  "format_version": "1.13.0",
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
