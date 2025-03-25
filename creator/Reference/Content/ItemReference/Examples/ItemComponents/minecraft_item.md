---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:item"
description: "Describes the minecraft:item item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:item

Item definition includes the "description" and "components" sections.


## Minecraft Item Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | Object | List of all components used in this item. |  | 
| description | *not set* | [Description](#description-item-type) item | Contains the required identifier for the item. May contain optional fields like menu_category. |  | 

## Description item type
Contains the required identifier for the item. May contain optional fields like menu_category.


#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | Unique name for the item that must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item. |  | 
| menu_category | *not set* | [Menu Category](#menu-category-item-type) item | menu_category contains the creative group name and category for this item. |  | 

## Menu Category item type
menu_category contains the creative group name and category for this item.


#### Menu Category Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| category | *not set* | String | Creative category where this item belongs. Defaults to "none". |  | 
| group | *not set* | String | The Creative Group that this item belongs to. Group name is limited to 256 characters. The name also must start with a namespace. Value must be match patern "^(?:.)+:(?:.)+$". |  | 
| is_hidden_in_commands | *not set* | Boolean true/false | Determines whether or not this item can be used with commands. Commands can use items by default if a category is set. |  | 