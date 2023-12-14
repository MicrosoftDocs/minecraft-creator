---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - menu_category
description: "A reference document detailing the 'menu_category' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - menu_category

`menu_category` details the creative group name and category for an item.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category |items |String |The creative category that this item belongs to. Options include "construction", "nature", "equipment", "items", and "none"|
|group |-- |String |The creative group that this item belongs to. Group name is limited to 256 characters. |
|is_hidden_in_commands |-- |Boolean |Determines whether or not this item can be used with commands. Commands can use items by default. |
