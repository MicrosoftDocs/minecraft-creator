---
author: v-josjones
ms.author: v-josjones
title: Features Documentation - minecraft:partially_exposed_blob_feature
ms.prod: gaming
---

# Features Documentation - minecraft:partially_exposed_blob_feature

`minecraft:partially_exposed_blob_feature` generates a blob of the specified block with the specified dimensions. For the most part, the blob is embedded in the specified surface, however a single side is allowed to be exposed.

## Example

### Blobs of Magma blocks partially embedded in the floors of flooded caves

```JSON
{
    "format_version": "1.13.0",
    "minecraft:partially_exposed_blob_feature": {
      "description": {
        "identifier": "minecraft:underwater_magma_feature"
      },
      "places_block": "minecraft:magma",
      "placement_radius_around_floor": 1,
      "placement_probability_per_valid_position": 0.5,
      "exposed_face": "up"
    }
  }
}
```
