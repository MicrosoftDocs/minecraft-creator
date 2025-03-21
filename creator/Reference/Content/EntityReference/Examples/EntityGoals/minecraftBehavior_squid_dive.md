---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.squid_dive"
description: "Describes the behavior.squid_dive AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.squid_dive

Allows the squid to dive down in water. Can only be used by the Squid.


## Squid Dive Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Glow Squid: `2` | 

## Samples

#### [Glow Squid](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/glow_squid.json)


```json
{
  "priority": 2
}
```

#### [Squid](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/squid.json)


```json
{
  "priority": 2
}
```
