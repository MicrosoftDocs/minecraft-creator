---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:angry"
description: "Describes the minecraft:angry entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:angry

Defines an entity's 'angry' state using a timer.


## Angry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angry_sound | *not set* | String | The sound event to play when the mob is angry |  | 
| broadcast_anger | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry |  | 
| broadcast_anger_on_attack | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |  | 
| broadcast_anger_on_being_attacked | false | Boolean true/false | If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked |  | 
| broadcast_anger_when_dying | true | Boolean true/false | If false, when this mob is killed it does not spread its anger to other entities of the same entity definition within the broadcastRange |  | 
| broadcast_filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| broadcast_range | 20 | Integer number | Distance in blocks within which other entities of the same entity type will become angry |  | 
| broadcast_targets | *not set* | Array of strings | A list of entity families to broadcast anger to |  | 
| calm_event | *not set* | Minecraft Event Reference | Event to fire when this entity is calmed down |  | 
| duration | 25 | Integer number | The amount of time in seconds that the entity will be angry. |  | 
| duration_delta | 0 | Integer number | Variance in seconds added to the duration [-delta, delta]. |  | 
| filters | *not set* | Minecraft filter | Filter out mob types that it should not attack while angry (other Piglins) |  | 
| sound_interval | 0 | Range of integers | The range of time in seconds to randomly wait before playing the sound again. |  | 

## Samples
