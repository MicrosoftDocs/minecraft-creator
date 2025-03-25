---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:weapon"
description: "Describes the minecraft:weapon item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:weapon

> [!IMPORTANT]
> This type is now deprecated, and no longer in use in the latest versions of Minecraft.

Weapon Item Component. Added to every weapon item such as axe, sword, trident, bow, crossbow.


## Weapon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_hit_block | *not set* | Object | Trigger for letting you know when this item is used to hit a block |  | 
| on_hurt_entity | *not set* | Object | Trigger for letting you know when this item is used to hurt another mob |  | 
| on_not_hurt_entity | *not set* | Object | Trigger for letting you know when this item hit another actor, but didn't do damage |  | 