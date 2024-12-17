---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:ignore_cannot_be_attacked
description: "A reference document detailing the 'ignore_cannot_be_attacked' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:ignore_cannot_be_attacked

`minecraft:ignore_cannot_be_attacked`, when set, blocks entities from attacking the owner entity unless they have the `minecraft:ignore_cannot_be_attacked` component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| filters | *not set* | Minecraft Filter | Defines which entities are exceptions and are allowed to be attacked by the owner entity, potentially attacked entity is subject "other". If this is not specified then all attacks by the owner are allowed. |

