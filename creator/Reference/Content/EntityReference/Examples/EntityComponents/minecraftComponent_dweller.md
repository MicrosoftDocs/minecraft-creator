---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:dweller"
description: "Describes the minecraft:dweller entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:dweller

Compels an entity to join and migrate between villages and other dwellings.


## Dweller Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_find_poi | *not set* | Boolean true/false | Whether or not the entity can find and add POIs to the dwelling. |  | 
| can_migrate | *not set* | Boolean true/false | Determines whether the entity can migrate between dwellings, or only have its initial dwelling. | Cat: `true` | 
| dweller_role | *not set* | String |  | Cat: `"passive"`, Evocation Illager: `"hostile"`, Iron Golem: `"defender"` | 
| dwelling_bounds_tolerance | *not set* | Decimal number | A padding distance for checking if the entity is within the dwelling. |  | 
| dwelling_role | *not set* | String | The role of which the entity plays in the dwelling. Current Roles: inhabitant, defender, hostile, passive. |  | 
| dwelling_type | *not set* | String | The type of dwelling the entity wishes to join. Current Types: village. | Cat: `"village"` | 
| first_founding_reward | *not set* | Integer number | Determines how much reputation players are rewarded on first founding. |  | 
| preferred_profession | *not set* | String | Allows the user to define a starting profession for this particular Dweller, instead of letting them choose organically. (They still need to gain experience from trading before this takes effect.) |  | 
| update_interval_base | *not set* | Decimal number | How often the entity checks on their dwelling status in ticks. Positive values only. | Cat: `60` | 
| update_interval_variant | *not set* | Decimal number | The variant value in ticks that will be added to the update_interval_base. | Cat: `40` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:dweller": {
  "dwelling_type": "village",
  "dweller_role": "passive",
  "update_interval_base": 60,
  "update_interval_variant": 40,
  "can_find_poi": false,
  "can_migrate": true,
  "first_founding_reward": 0
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:dweller": {
  "dwelling_type": "village",
  "dweller_role": "hostile",
  "update_interval_base": 60,
  "update_interval_variant": 40,
  "can_find_poi": false,
  "can_migrate": true,
  "first_founding_reward": 0
}
```

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
