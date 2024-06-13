---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:partially_exposed_blob_feature
description: "A reference document detailing the 'partially_exposed_blob_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:partially_exposed_blob_feature

`minecraft:partially_exposed_blob_feature` generates a blob of the specified block with the specified dimensions. For the most part, the blob is embedded in the specified surface, however a single side is allowed to be exposed.

### Schema

```json
object "minecraft:partially_exposed_blob_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  int "placement_radius_around_floor"<1-8> // Defines the cubic radius of the blob. [1, 8]
  float "placement_probability_per_valid_position"<0.000000-1.000000> // The probability of trying to place a block at each position within the placement bounds. [0,1]
  string "exposed_face" : opt // Defines a block face that is allowed to be exposed to air and/or water. Other faces need to be embedded for blocks to be placed by this feature. Defaults to upwards face.
  "places_block" // Reference to the block to be placed.
}
```

### Example

Blobs of Magma blocks partially embedded in the floors of flooded caves

```json
{
    "format_version": "1.13.0",
    "minecraft:partially_exposed_blob_feature": {
      "description": {
        "identifier": "example:underwater_magma_feature"
      },
      "places_block": "minecraft:magma",
      "placement_radius_around_floor": 1,
      "placement_probability_per_valid_position": 0.5,
      "exposed_face": "up"
    }
}
```
