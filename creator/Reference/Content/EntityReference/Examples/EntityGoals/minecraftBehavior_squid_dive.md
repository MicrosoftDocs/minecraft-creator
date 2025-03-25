---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.squid_dive"
description: "Describes the minecraft:behavior.squid_dive ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.squid_dive

Allows the squid to dive down in water.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Squid (minecraft:squid)
> 

## Squid Dive Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Glow Squid: `2` | 

## Samples

#### [Glow Squid](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/glow_squid.json)


```json
"minecraft:behavior.squid_dive": {
  "priority": 2
}
```
