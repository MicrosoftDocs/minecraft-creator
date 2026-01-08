---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:ore_feature"
description: "Describes the minecraft:ore_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:ore_feature

Places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list in the may_replace field of a replace_rules entry. If no may_replace field is specified, the ore block can replace any existing block. Succeeds if at least one ore block is successfully placed. Fails if all ore block placements fail.


## Ore Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| count | *not set* | Integer number | The number of blocks to be placed. |  | 
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| replace_rules | *not set* | Array of [Replace Rules](#replace-rules) items |  |  | 
| replace_rules (Alternate 1) | *not set* | Array of strings |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Replace Rules

#### Replace Rules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| may_replace | *not set* | Array of strings |  |  | 

## Samples

#### [Example](example)

At Malachite ore in different materials: 

```json
"minecraft:ore_feature": {
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

At Oil deposits in the sand: 

```json
"minecraft:ore_feature": {
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

At Using block descriptor objects with name property (vanilla format): 

```json
"minecraft:ore_feature": {
  "format_version": "1.13.0",
  "minecraft:ore_feature": {
    "description": {
      "identifier": "example:coal_ore_feature"
    },
    "count": 17,
    "replace_rules": [
      {
        "places_block": "minecraft:coal_ore",
        "may_replace": [
          {
            "name": "minecraft:stone"
          }
        ]
      }
    ]
  }
}
```
