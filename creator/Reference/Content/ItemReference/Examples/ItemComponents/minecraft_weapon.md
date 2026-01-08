---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:weapon"
description: "Describes the minecraft:weapon item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:weapon

> [!IMPORTANT]
> This type is now deprecated, and no longer in use in the latest versions of Minecraft.

Deprecated weapon item component. This component is automatically added to vanilla weapon items like swords, axes, and bows.

> [!Note]
> This component is deprecated. For custom weapons, use minecraft:damage to set attack damage, minecraft:cooldown for attack speed, and minecraft:durability for durability.


## Weapon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_hit_block | *not set* | Object | An event trigger that fires when this item is used to strike a block. |  | 
| on_hurt_entity | *not set* | Object | An event trigger that fires when this item successfully damages another entity. |  | 
| on_not_hurt_entity | *not set* | Object | An event trigger that fires when this item hits an entity but deals no damage (e.g., due to invincibility frames or immunity). |  | 