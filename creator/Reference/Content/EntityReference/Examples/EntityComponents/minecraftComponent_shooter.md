---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:shooter"
description: "Describes the minecraft:shooter entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:shooter

Defines the entity's ranged attack behavior. The "minecraft:behavior.ranged_attack" goal uses this component to determine which projectiles to shoot.

> [!Note]
> Ammunition used by minecraft:shooter must have the minecraft:projectile component in order to function properly.

> [!Note]
> Expanded in 1.19.60: the `projectiles` list can now specify multiple projectile definitions with condition filters, and `power`, `magic`, and `sound` are exposed for per-shooter customization.


## Shooter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| aux_val | -1 | Integer number | ID of the Potion effect for the default projectile to be applied on hit. | Bogged: `26` | 
| def | *not set* | String | Actor definition to use as the default projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile. | Blaze: `"minecraft:small_fireball"`, Bogged: `"minecraft:arrow"`, Drowned: `"minecraft:thrown_trident"` | 
| magic | false | Boolean true/false | If set, the projectiles are flagged as magic and the ranged attack goal will not run at the same time as other magic goals (for example, drink_potion). |  | 
| power | 0 | Decimal number | Velocity at which projectiles will be shot. A power of 0 falls back to the default projectile throw power. This item requires a format version of at least 1.19.60. |  | 
| projectiles | *not set* | Array of objects | List of projectiles that can be used by the shooter. |  | 
| sound | *not set* | String | Sound that is played when the shooter shoots a projectile. | Bogged: `"bow"`, Drowned: `"item.trident.throw"` | 

### magic

If set, the projectiles are flagged as magic and the ranged attack goal will not run at the same time as other magic goals (for example, drink_potion). This item requires a format version of at least 1.19.60.

### projectiles

List of projectiles that can be used by the shooter. Each entry can specify its own projectile definition and condition filters; entries are evaluated in order and the first match is used. This item requires a format version of at least 1.19.60.


## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:shooter": {
  "def": "minecraft:small_fireball"
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)

At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:shooter/: 

```json
"minecraft:shooter": {
  "aux_val": 26,
  "def": "minecraft:arrow",
  "sound": "bow"
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:shooter": {
  "def": "minecraft:thrown_trident",
  "sound": "item.trident.throw"
}
```

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:shooter": {
  "def": "minecraft:dragon_fireball"
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:shooter": {
  "def": "minecraft:llama_spit"
}
```
