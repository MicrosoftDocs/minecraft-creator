---
author: iconicnurdle
ms.author: mikeam
title: Features Documentation - minecraft:fossil_feature
description: "A reference document detailing the 'fossil_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:fossil_feature

`minecraft:fossil_feature` generates a skeletal structure composed of bone blocks and parametric ore blocks.

**Succeeds if**
The fossil is placed.

**Fails if**
The fossil is not placed because it overlaps with another structure or because its bounding box has too many corners occupied by air or fluid.

### Schema

```json
object "minecraft:fossil_feature" : opt
{
  object "description"
  {
  string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  "ore_block"
  int "max_empty_corners"
}
```

### Example

Fossil composed of bone blocks and coal ore blocks.

```json
{
  "format_version": "1.13.0",
    "minecraft:fossil_feature": {
      "description": {
        "identifier": "example:fossil_feature"
      },
      "ore_block": "minecraft:coal_ore",
      "max_empty_corners": 4
  }
}
```
