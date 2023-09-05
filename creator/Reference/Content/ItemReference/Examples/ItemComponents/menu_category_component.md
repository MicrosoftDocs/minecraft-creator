---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - menu_category
description: "A reference document detailing the 'menu_category' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - menu_category

`menu_category` defines the creative group name and category for this item.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category|items |String | The menu category to which the item belongs.|
|group |*not set* | String| The group to which the item belongs. The group name is limited to 256 characters.|
|is_hidden_in_commands|*not set*|Boolean| Determines whether or not this item can be used with commands. Commands can use items by default.|
