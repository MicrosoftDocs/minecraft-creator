---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equipment"
description: "Describes the minecraft:equipment entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equipment

Sets the Equipment table to use for this Entity.


## Equipment Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot_drop_chance | *not set* | Array of strings | A list of slots with the chance to drop an equipped item from that slot. | Drowned: `[{"slot":"slot.weapon.offhand","drop_chance":1}]`, Fox: `[{"slot":"slot.weapon.mainhand","drop_chance":1}]`, Villager V2: `[{"slot":"slot.weapon.mainhand","drop_chance":0}]` | 
| table | *not set* | String | The file path to the equipment table, relative to the behavior pack's root. | Bogged: `"loot_tables/entities/skeleton_gear.json"`, Drowned: `"loot_tables/entities/drowned_ranged_equipment.json"`, `"loot_tables/entities/drowned_equipment.json"` | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/skeleton_gear.json"
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)

At /minecraft:entity/component_groups/minecraft:ranged_equipment/minecraft:equipment/: 

```json
"minecraft:equipment": {
  "table": "loot_tables/entities/drowned_ranged_equipment.json",
  "slot_drop_chance": [
    {
      "slot": "slot.weapon.offhand",
      "drop_chance": 1
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:melee_equipment/minecraft:equipment/: 

```json
"minecraft:equipment": {
  "table": "loot_tables/entities/drowned_equipment.json",
  "slot_drop_chance": [
    {
      "slot": "slot.weapon.offhand",
      "drop_chance": 1
    }
  ]
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/fox_equipment.json",
  "slot_drop_chance": [
    {
      "slot": "slot.weapon.mainhand",
      "drop_chance": 1
    }
  ]
}
```

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/zombie_equipment.json"
}
```

#### [Piglin Brute](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin_brute.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/piglin_brute_gear.json"
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)

At /minecraft:entity/component_groups/ranged_unit/minecraft:equipment/: 

```json
"minecraft:equipment": {
  "table": "loot_tables/entities/piglin_gear_ranged.json"
}
```

At /minecraft:entity/component_groups/melee_unit/minecraft:equipment/: 

```json
"minecraft:equipment": {
  "table": "loot_tables/entities/piglin_gear_melee.json"
}
```

#### [Vex](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/vex_gear.json"
}
```

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:equipment": {
  "slot_drop_chance": [
    {
      "slot": "slot.weapon.mainhand",
      "drop_chance": 0
    }
  ]
}
```

#### [Wither Skeleton](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither_skeleton.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/wither_skeleton_gear.json"
}
```

#### [Zombie Pigman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_pigman.json)

At /minecraft:entity/component_groups/minecraft:pig_zombie_adult/minecraft:equipment/: 

```json
"minecraft:equipment": {
  "table": "loot_tables/entities/zombie_pigman_gear.json"
}
```

At /minecraft:entity/component_groups/minecraft:strider_jockey/minecraft:equipment/: 

```json
"minecraft:equipment": {
  "table": "loot_tables/entities/zombified_piglin_rider_gear.json"
}
```
