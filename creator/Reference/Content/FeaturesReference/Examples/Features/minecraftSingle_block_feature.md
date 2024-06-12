---
author: mammerla
ms.author: mikeam
title: Features Documentation - minecraft:single_block_feature
description: "A reference document detailing the 'single_block_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:single_block_feature

`minecraft:single_block_feature` places a single block in the world. The `may_place_on` and `may_replace` fields are allow lists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The block's internal survivability and placement rules can optionally be enforced with the `enforce_survivability_rules` and `enforce_placement_rules` fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.

**Succeeds if**
The block is successfully placed in the world.

**Fails if**
The block fails to be placed.

### Schema

```json
object "minecraft:single_block_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  "places_block" // Reference to the block to be placed.
  bool "enforce_placement_rules" // If true, enforce the block's canPlace check.
  bool "enforce_survivability_rules" // If true, enforce the block's canSurvive check.
  object "may_attach_to" : opt
  {
    int "min_sides_must_attach"<1-4> : opt
    bool "auto_rotate" : opt // Automatically rotate the block to attach sensibly.
    "top" : opt
    array "top" : opt
    {
      "<any array element>"
    }
    "bottom" : opt
    array "bottom" : opt
    {
      "<any array element>"
    }
    "north" : opt
    array "north" : opt
    {
      "<any array element>"
    }
    "east" : opt
    array "east" : opt
    {
      "<any array element>"
    }
    "south" : opt
    array "south" : opt
    {
      "<any array element>"
    }
    "west" : opt
    array "west" : opt
    {
      "<any array element>"
    }
    "all" : opt
    array "all" : opt
    {
      "<any array element>"
    }
    "sides" : opt
    array "sides" : opt
    {
      "<any array element>"
    }
  }
  array "may_replace" : opt
  {
    "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
  }
}
```

### Example

Placing a single pumpkin block

```json
{
  "format_version": "1.13.0",
  "minecraft:single_block_feature": {
    "description": {
      "identifier": "example:single_pumpkin_feature"
    },
    "places_block": "minecraft:pumpkin",
    "enforce_placement_rules": true,
    "enforce_survivability_rules": true,
    "may_place_on": [
      "minecraft:grass"
    ],
    "may_replace": [
      "minecraft:air"
    ]
  }
}
```
