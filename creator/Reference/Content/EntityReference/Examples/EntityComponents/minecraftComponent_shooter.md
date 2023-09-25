---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:shooter(entity)
description: "A reference document detailing the 'shooter (entity)' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:shooter (Entity)

`minecraft:shooter` defines the entity's ranged attack behavior. The "minecraft:behavior.ranged_attack" goal uses this component to determine which projectiles to shoot.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| aux_val| -1| Integer| ID of the Potion effect for the default projectile to be applied on hit |
| def| *not set*| String| Actor definition to use as projectile for the ranged attack. The entity definition must have the projectile component to be able to be shot as a projectile |
| magic| False| Boolean| Sets whether the projectiles being used are flagged as magic. If set, the ranged attack goal will not be used at the same time as other magic goals, such as minecraft:behavior.drink_potion |
| power| 0.00| Decimal| Velocity in which the projectiles will be shot. A power of 0 will be overwritten by the default projectile throw power. |
| projectiles| -- | List| List of projectiles that can be used by the shooter. Projectiles are evaluated in the order of the list; after a projectile is chosen, the rest of the list is ignored. |
| sound| -- | String| Sound that is played when the shooter shoots a projectile. |

## Example

```json
"minecraft:shooter":{
    "aux_val": -1,
    "def": "minecraft:small_fireball",
}
```

## Vanilla entities examples

### ghast

```json
"minecraft:shooter": {
    "def": "minecraft:fireball"
}
```

## Vanilla entities using `minecraft:shooter`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
