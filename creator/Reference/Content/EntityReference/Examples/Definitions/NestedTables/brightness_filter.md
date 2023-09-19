---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:brightness_filter
description: "A reference document detailing the 'brightness_filter' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:brightness_filter

Allows players to set a light level range that causes a given entity to spawn.

## Parameters

|Name |Default Value |Type | Description |
|:-----------|:-----------|:-----------|:-----------|
|adjust_for_weather |false |Boolean |Determines if weather can affect the light level conditions that cause the entity to spawn (e.g. Allowing hostile entities to spawn during the day when it rains.) |
|max |15.0 |Decimal | The maximum light level value that allows the entity to spawn. |
|min |0.0 |Decimal |The minimum light level value that allows the entity to spawn.|
