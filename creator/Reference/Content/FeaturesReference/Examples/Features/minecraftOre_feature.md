---
author: JimSeaman42
ms.author: mikeam
title: Features Documentation - minecraft:ore_feature
description: "A reference document detailing the 'ore_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:ore_feature

`minecraft:ore_feature` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified, the ore block can replace any existing block.

**Succeeds if**
At least one ore block is successfully placed.

**Fails if**
All ore block placements fail.

### Schema

```json
object "minecraft:ore_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  int "count"<1-*> // The number of blocks to be placed.
  float "discard_chance_on_air_exposure"<0.000000-1.000000> : opt // Chance of discarding placement if neighboring block is Air.
  array "replace_rules"[1,*] : opt
  {
    object "<any array element>" // Collection of replace rules that will be checked in order of definition. If a rule is resolved, the rest will not be resolved for that block position.
    {
      "places_block" // Reference to the block to be placed.
          array "may_replace"[1,*] : opt
      {
        "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
      }
    }
  }
}
```

### Example

Malachite ore in different materials

```json
{
  "format_version": "1.13.0",
  "minecraft:ore_feature": {
    "description": {
      "identifier": "example:malachite_ore_feature"
    },
  "count": 12,
  "replace_rules": [
    {
      "places_block": "example:malachite_ore",
      "may_replace": [
        "minecraft:stone"
      ]
    },
    {
      "places_block": "example:granite_malachite_ore",
      "may_replace": [
        "minecraft:granite"
      ]
    },
    {
      "places_block": "example:andesite_malachite_ore",
      "may_replace": [
        "minecraft:andesite"
      ]
    }
  ]
  }
}
```

### Oil deposits in the sand

```json
{
  "format_version": "1.13.0",
  "minecraft:ore_feature": {
    "description": {
      "identifier": "example:oil_deposit_feature"
    },
    "count": 12,
    "replace_rules": [
      {
      "places_block": "example:oil_block",
      "may_replace": [
        "minecraft:sand"
      ]
      }
    ]
  }
}
```
