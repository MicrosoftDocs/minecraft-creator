---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:ore_feature
ms.prod: gaming
---

# Features Documentation - minecraft:ore_feature

`minecraft:ore_feature` places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the `may_replace` field of a `replace_rules` entry. If no `may_replace` field is specified in a `replace_rule` entry, the ore block can replace any existing block.

**Succeeds if**
At least one ore block is successfully placed.

**Fails if**
All ore block placements fail.

## Examples

### Malachite ore in different materials

```json
{
  "format_version": 1.13.0,
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
  "format_version": 1.13.0,
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
