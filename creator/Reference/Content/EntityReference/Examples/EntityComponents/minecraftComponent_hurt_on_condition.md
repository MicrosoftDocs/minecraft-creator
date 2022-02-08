---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:hurt_on_condition
ms.prod: gaming
---

# Entity Documentation - minecraft:hurt_on_condition

`minecraft:hurt_on_condition` defines a set of conditions under which an entity should take damage.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage_conditions| *not set*| Array | List of damage conditions that, when met, can cause damage to the entity.  |

### damage_conditions

`damage_conditions` is an array defined by three parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[filters](../FilterList.md)|*not set* | Minecraft Filter| Filter used to test for|
|cause|*not set* |String| The kind of damage that is caused to the entity. Various armors and spells use this to determine if the entity is immune. |
|damange_per_tick |*not set*| Integer| Amount of damage done each tick that the conditions are met.|

### cause

> [!IMPORTANT]
> A list of available damage sources can be found at [Entity Damage Source](../../../AddonsReference/Examples/AddonEntities.md#entity-damage-source) located in the Addons Documentation.

## Example

```json
"minecraft:hurt_on_condition":{
    "damage_conditions": [
        {
            "filters": {"test": "in_water", "subject": "self", "operator": "==", "value": true},
            "causes": "drowning",
            "damage_per_tick": 1
        }
    ]
}
```

## Vanilla entities examples

### chicken

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/chicken.json" range="108-116":::

## Vanilla entities using `minecraft:hurt_on_condition`

- [armor_stand](../../../../Source/VanillaBehaviorPack_Snippets/entities/armor_stand.md)
- [arrow](../../../../Source/VanillaBehaviorPack_Snippets/entities/arrow.md)
- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [hopper_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/hopper_minecart.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [npc](../../../../Source/VanillaBehaviorPack_Snippets/entities/npc.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [shulker_bullet](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker_bullet.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [tripod_camera](../../../../Source/VanillaBehaviorPack_Snippets/entities/tripod_camera.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)