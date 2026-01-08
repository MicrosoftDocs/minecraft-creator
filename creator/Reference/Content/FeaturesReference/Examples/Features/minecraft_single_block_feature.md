---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:single_block_feature"
description: "Describes the minecraft:single_block_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:single_block_feature

Places a single block in the world. The places_block field supports a single block or a list of weighted blocks, where the weight defines how likely it is for that block to be selected. The may_attach_to and may_replace fields are allowlists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The may_not_attach_to field is a denylist that specifies what blocks can't be close to the placement location. The randomize_rotation field will randomize the block's cardinal orientation. The block's internal survivability and placement rules can optionally be enforced with the enforce_survivability_rules and enforce_placement_rules fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures. Succeeds if the block is successfully placed in the world. Fails if the block fails to be placed. Example use: Placing a single pumpkin or carved pumpkin block where carved pumpkins are less likely to appear.

> [!Note]
> This item requires a format version of at least 1.21.40.


## Single Block Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| enforce_placement_rules | *not set* | Boolean true/false | If true, enforce the block's canPlace check. |  | 
| enforce_survivability_rules | *not set* | Boolean true/false | If true, enforce the block's canSurvive check. |  | 
| format_version | *not set* | String |  |  | 
| may_attach_to | *not set* | [May Attach To](#may-attach-to) item | Allowlist which specifies where the block can be placed. |  | 
| may_not_attach_to | *not set* | [May Not Attach To](#may-not-attach-to) item | Denylist which specifies where the block can't be placed. |  | 
| may_replace | *not set* | Array of strings |  |  | 
| places_block | *not set* | Array of [Places Block](#places-block) items |  |  | 
| places_block (Alternate 1) | *not set* | Object | Reference to the block to be placed. |  | 
| places_block (Alternate 2) | *not set* | Array of strings |  |  | 
| randomize_rotation | *not set* | Boolean true/false | If true, randomizes the block's cardinal orientation. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## May Attach To

#### May Attach To Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all | *not set* | Array of strings |  |  | 
| auto_rotate | *not set* | Boolean true/false | Automatically rotate the block to attach sensibly. This setting is ignored if 'randomize_rotation' is enabled. |  | 
| bottom | *not set* | Array of strings |  |  | 
| diagonal | *not set* | Array of strings |  |  | 
| east | *not set* | Array of strings |  |  | 
| min_sides_must_attach | *not set* | Integer number | Number of side faces that need to pass the attach conditions before the block can be placed. Default value is four. |  | 
| north | *not set* | Array of strings |  |  | 
| sides | *not set* | Array of strings |  |  | 
| south | *not set* | Array of strings |  |  | 
| top | *not set* | Array of strings |  |  | 
| west | *not set* | Array of strings |  |  | 

## May Not Attach To

#### May Not Attach To Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all | *not set* | Array of strings |  |  | 
| bottom | *not set* | Array of strings |  |  | 
| diagonal | *not set* | Array of strings |  |  | 
| east | *not set* | Array of strings |  |  | 
| north | *not set* | Array of strings |  |  | 
| sides | *not set* | Array of strings |  |  | 
| south | *not set* | Array of strings |  |  | 
| top | *not set* | Array of strings |  |  | 
| west | *not set* | Array of strings |  |  | 

## Places Block

#### Places Block Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block | *not set* | Object | Reference to the block to be placed. |  | 

## Samples

#### [Example](example)


```json
"minecraft:single_block_feature": {
  "format_version": "1.21.40",
  "minecraft:single_block_feature": {
    "description": {
      "identifier": "example:single_pumpkin_feature"
    },
    "places_block": [
      {
        "block": "minecraft:pumpkin",
        "weight": 5
      },
      {
        "block": "minecraft:carved_pumpkin",
        "weight": 1
      }
    ],
    "randomize_rotation": true,
    "enforce_survivability_rules": true,
    "enforce_placement_rules": true,
    "may_attach_to": {
      "auto_rotate": false,
      "min_sides_must_attach": 1,
      "south": [
        "minecraft:grass",
        "minecraft:dirt"
      ]
    },
    "may_not_attach_to": {
      "south": {
        "name": "minecraft:dirt",
        "states": {
          "dirt_type": "coarse"
        }
      }
    }
  }
}
```
