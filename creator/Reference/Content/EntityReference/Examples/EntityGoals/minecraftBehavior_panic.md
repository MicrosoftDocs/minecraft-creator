---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.panic"
description: "Describes the minecraft:behavior.panic ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.panic

Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.


## Panic Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_sources | [campfire, fire, fire_tick, freezing, lava, lightning, magma, soul_campfire, temperature, entity_attack, entity_explosion, fireworks, magic, projectile, ram_attack, sonic_boom, wither, mace_smash] | Array of strings | The list of Entity Damage Sources that will cause this mob to panic | Polar Bear: `["campfire","fire","fire_tick","freezing","lightning","lava","magma","temperature","soul_campfire"]` | 
| force | false | Boolean true/false | If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it | Bee: `true` | 
| ignore_mob_damage | false | Boolean true/false | If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in "damage_sources" | Armadillo: `true` | 
| panic_sound | *not set* | String |  | Strider: `"panic"` | 
| prefer_water | false | Boolean true/false | If true, the mob will prefer water over land | Turtle: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `1`, Copper Golem: `2`, Horse: `3` | 
| sound_interval | *not set* | [Sound Interval](#sound-interval) item |  | Strider: `{"range_min":1,"range_max":3}` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Allay: `2`, Bee: `1.25`, Camel: `4` | 

## Sound Interval

#### Sound interval Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Decimal number |  | Strider: `3` | 
| range_min | *not set* | Decimal number |  | Strider: `1` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 2
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "ignore_mob_damage": true,
  "speed_multiplier": 2
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/escape_fire/minecraft:behavior.panic/: 

```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.25,
  "force": true
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 4
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.25
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.5
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:behavior.panic": {
  "priority": 2,
  "speed_multiplier": 1.5
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.2
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

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:behavior.panic": {
  "priority": 2,
  "speed_multiplier": 2
}
```

#### [Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/horse.json)


```json
"minecraft:behavior.panic": {
  "priority": 3,
  "speed_multiplier": 1.2
}
```
