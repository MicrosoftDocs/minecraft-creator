---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:dweller"
description: "Describes the minecraft:dweller entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:dweller

Compels an entity to join and migrate between villages and other dwellings.


## Dweller Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_find_poi | *not set* | Boolean true/false | Whether or not the entity can find and add POIs to the dwelling. |  | 
| can_migrate | *not set* | Boolean true/false | Determines whether the entity can migrate between dwellings, or only have its initial dwelling. | Iron Golem: `true` | 
| dweller_role | *not set* | String |  | Iron Golem: `"defender"` | 
| dwelling_bounds_tolerance | *not set* | Decimal number | A padding distance for checking if the entity is within the dwelling. |  | 
| dwelling_role | *not set* | String | The role of which the entity plays in the dwelling. Current Roles: inhabitant, defender, hostile, passive. |  | 
| dwelling_type | *not set* | String | The type of dwelling the entity wishes to join. Current Types: village. | Iron Golem: `"village"` | 
| first_founding_reward | *not set* | Integer number | Determines how much reputation players are rewarded on first founding. |  | 
| preferred_profession | *not set* | String | Allows the user to define a starting profession for this particular Dweller, instead of letting them choose organically. (They still need to gain experience from trading before this takes effect.) |  | 
| update_interval_base | *not set* | Decimal number | How often the entity checks on their dwelling status in ticks. Positive values only. | Iron Golem: `60` | 
| update_interval_variant | *not set* | Decimal number | The variant value in ticks that will be added to the update_interval_base. | Iron Golem: `40` | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:dweller": {
  "dwelling_type": "village",
  "dweller_role": "defender",
  "update_interval_base": 60,
  "update_interval_variant": 40,
  "can_find_poi": false,
  "can_migrate": true,
  "first_founding_reward": 0
}
```
