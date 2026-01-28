---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - minecraft:spawn_herd"
description: "Describes the minecraft:spawn_herd spawn rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation - minecraft:spawn_herd

Configures group spawning behavior, including minimum and maximum herd size. Mobs like wolves, chickens, and zombies spawn in groups rather than individually. Also allows running events on the first N spawns or after M spawns.


## Spawn Herd Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event |  | String | An event to run after M number of the herd have spawned |  | 
| event_skip_count | 0 | Integer number | Number of the herd to skip before running the event |  | 
| initial_event |  | String | Event run for the first N of the herd are placed. |  | 
| initial_event_count | 0 | Integer number | Number of times that the initial event will run |  | 
| max_size | 1 | Integer number | Maximum number in this group to attempt to spawn |  | 
| min_size | 1 | Integer number | Minimum number in this group to attempt to spawn |  | 