---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - Block Properties & Descriptions
ms.prod: gaming
---

# Block Documentation - Block Properties & Descriptions

These properties are part of the Block Definition and Block Properties that are used within block JSON files. This helps the system determine how to parse and initialize this block.

## Code Example of a custom block's behavior JSON file

```json
{
  "format_version": "1.19.30",
  "minecraft:block": {
    "description": {
      "identifier": "design:lavenderstone"
    },
    "components": {
      "minecraft:loot": "loot_tables/chests/simple_dungeon.json",
      "minecraft:destroy_time": 4.0,
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00",
      "minecraft:flammable": {
        "flame_odds": 50,
        "burn_odds": 0
	      },
      "minecraft:light_emission": 1
    }
  }
}

```
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|format_version|*not set* | String| Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.|
|minecraft:block|*not set*| JSON Object| JSON container used for descriptions.|
|[components](../BlockComponentsList.md)|*not set*| List| List of all components that are used in this block.|

### Identifier

The identifier parameter is apart of the minecraft:block JSON object that sets the namespace of the block.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* | String|  The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block. |
