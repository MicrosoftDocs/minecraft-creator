---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.panic"
description: "Describes the minecraft:behavior.panic ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.panic

Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.


## Panic Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_sources | [campfire, fire, fire_tick, freezing, lava, lightning, magma, soul_campfire, temperature, entity_attack, entity_explosion, fireworks, magic, projectile, ram_attack, sonic_boom, wither, mace_smash] | Array of strings | The list of Entity Damage Sources that will cause this mob to panic |  | 
| force | false | Boolean true/false | If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it |  | 
| ignore_mob_damage | false | Boolean true/false | If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in "damage_sources" |  | 
| prefer_water | false | Boolean true/false | If true, the mob will prefer water over land |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `1`, Fox: `2` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Allay: `2`, Chicken: `1.5`, Cow: `1.25` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 2
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.5
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.25
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:defending_fox/minecraft:behavior.panic/: 

```json
"minecraft:behavior.panic": {
  "priority": 2,
  "speed_multiplier": 1.25
}
```
