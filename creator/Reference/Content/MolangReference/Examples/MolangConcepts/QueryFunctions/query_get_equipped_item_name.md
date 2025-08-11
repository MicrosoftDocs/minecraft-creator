---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_get_equipped_item_name"
description: "Describes the minecraft:query_get_equipped_item_name molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_get_equipped_item_name

> [!IMPORTANT]
> This type is now deprecated, and no longer in use in the latest versions of Minecraft.

Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''. DEPRECATED (Use query.is_item_name_any instead if possible so names can be changed later without breaking content.).
