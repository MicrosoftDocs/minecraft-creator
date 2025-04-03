---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_item_remaining_use_duration"
description: "Describes the minecraft:query_item_remaining_use_duration molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_item_remaining_use_duration

Returns the amount of time an item has left to use, else 0.0 if it doesn't make sense.Item queried is specified by the slot name 'main_hand' or 'off_hand'.Time remaining is normalized using the normalization value, only if one is given, else it is returned in seconds.
