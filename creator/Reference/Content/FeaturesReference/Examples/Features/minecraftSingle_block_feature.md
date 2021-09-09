---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:single_block_feature
ms.prod: gaming
---

# Features Documentation - minecraft:single_block_feature

`minecraft:single_block_feature` places a single block in the world. The `may_place_on` and `may_replace` fields are allow lists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The block's internal survivability and placement rules can optionally be enforced with the `enforce_survivability_rules` and `enforce_placement_rules` fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.

**Succeeds if**
The block is successfully placed in the world.

**Fails if**
The block fails to be placed.

## Example

### Placing a single pumpkin block

```json
{
  "format_version": 1.13.0,
  "minecraft:single_block_feature": {
    "description": {
      "identifier": "example:single_pumpkin_feature"
    },
    "places_block": "example:pumpkin",
    "enforce_placement_rules": true,
    "enforce_survivability_rules": true,
    "may_place_on": [
      "example:grass"
    ],
    "may_replace": [
      "example:air"
    ]
  }
}
```
