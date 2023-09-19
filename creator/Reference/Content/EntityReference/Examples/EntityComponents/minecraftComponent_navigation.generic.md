---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:navigation.generic
description: "A reference document detailing the 'navigation.generic' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:navigation.generic

`minecraft:navigation.generic` compels the entity to generate paths by walking, swimming, flying, climbing, or jumping up and down a block.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| avoid_damage_blocks| False| Boolean| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| avoid_portals| False| Boolean| Tells the pathfinder to avoid portals when finding a path |
| avoid_sun| False| Boolean| Determines whether the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| avoid_water| False| Boolean| Determines whether the pathfinder should avoid water when creating a path |
| blocks_to_avoid| *not set*| List| Tells the pathfinder which blocks to avoid when creating a path |
| can_breach| False| Boolean| Tells the pathfinder whether or not it can jump out of water, like a dolphin |
| can_break_doors| False| Boolean| Determines whether the pathfinder can break through doors when creating a path |
| can_jump| True| Boolean| Tells the pathfinder whether or not it can jump up blocks |
| can_open_doors| False| Boolean| Determines whether the pathfinder can path through a closed door when creating a path |
| can_open_iron_doors| False| Boolean| Determines whether the pathfinder can path through a closed iron door when creating a path |
| can_pass_doors| True| Boolean| Whether a path can be created through a door |
| can_path_from_air| False| Boolean| Determines whether the pathfinder can start pathing when in the air |
| can_path_over_lava| False| Boolean| Determines whether the pathfinder can travel on the surface of lava |
| can_path_over_water| False| Boolean| Determines whether the pathfinder can travel on the surface of water |
| can_sink| True| Boolean| Determines whether the pathfinder will be pulled down by gravity while in water |
| can_swim| False| Boolean| Determines whether the pathfinder can path anywhere through water and play a swimming animation along that path |
| can_walk| True| Boolean| Determines if the pathfinder can walk on the ground outside water |
| can_walk_in_lava| False| Boolean| Determines if the pathfinder can walk in lava |
| is_amphibious| False| Boolean| Determines if the pathfinder can walk on the ground underwater |

## Example

```json
"minecraft:navigation.generic":{
    "avoid_damage_blocks": false,
    "avoid_portals": false,
    "avoid_sun": false,
    "avoid_water": false,
    "blocks_to_avoid": [],
    "can_breach": false,
    "can_break_doors": false,
    "can_jump": true,
    "can_open_doors": false,
    "can_open_iron_doors": false,
    "can_pass_doors": true,
    "can_path_from_air": false,
    "can_path_over_lava": false,
    "can_path_over_water": false,
    "can_sink": true,
    "can_swim": false,
    "can_walk": true,
    "can_walk_in_lava": false,
    "is_amphibious": false
}
```

## Vanilla entities examples

### fish

```json
"minecraft:navigation.generic": { 
        "is_amphibious": false,
        "can_path_over_water": false,
        "can_swim": true,
        "can_walk": false,
        "can_breach": false,
        "can_sink": false
      }
```

## Vanilla entities using `minecraft:navigation.generic`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
