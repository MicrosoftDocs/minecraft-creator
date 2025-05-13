---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ignore_cannot_be_attacked"
description: "Describes the minecraft:ignore_cannot_be_attacked entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ignore_cannot_be_attacked

When set, blocks entities from attacking the owner entity unless they have the "minecraft:ignore_cannot_be_attacked" component.

> [!Note]
> This item requires a format version of at least 1.21.50.


## Ignore Cannot Be Attacked Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | Defines which entities are exceptions and are allowed to be attacked by the owner entity, potentially attacked entity is subject "other". If this is not specified then all attacks by the owner are allowed. |  | 