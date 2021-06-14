---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:shareables
ms.prod: gaming
---
​
# minecraft:shareables
​
`minecraft:shareables` Defines a list of items the mob wants to share or pick up.
​
## Parameters

> [!IMPORTANT]
> `minecraft:shareables` items must have the following parameters set:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| all_items| False| Boolean| A bucket for all other items in the game. Note this category is always least priority items. |
| all_items_max_amount| -1| Integer| Maximum number of this item the mob will hold. |
| all_items_surplus_amount| -1| Integer| Number of this item considered extra that the entity wants to share. |
| all_items_want_amount| -1| Integer| Number of this item this entity wants to share. |
| items| *not set*| List| List of items that the entity wants to share.|

### items

`items` is a list defined by eleven parameters. Each item has the following properties:

| Name| Default Value| Type| Description|
|:----------|:----------|:----------|:----------|
| admire| False| Boolean| Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an [Admire](minecraftComponent_admire_item.md) component and an [Admire](../EntityGoals/minecraftBehavior_admire_item.md) goal.|
| barter| False| Boolean| Mob will barter for the item after picking it up. For this to work the mob needs to have a [Barter](minecraftComponent_barter.md) component and a [Barter](../EntityGoals/minecraftBehavior_barter.md) goal.|
| consume_item|False|Boolean|Determines whether the mob will consume the item or not.|
| craft_into|*not set*|String| Defines the item this entity wants to craft with the item defined above. Should be an item name.|
|item |*not set* | String| The name of the item. Aux value can be specified, for instance `minecraft:skull:1`.|
| max_amount| *not set*| Integer| Maximum number of this item the mob will hold.|
| pickup_limit| *not set*| Integer| Maximum number of this item the mob will pick up during a single goal tick.|
| priority| *not set*| Integer| Prioritizes which items the entity prefers. 0 is the highest priority.|
| stored_in_inventory| *not set*| Boolean| Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.|
| surplus_amount| *not set*| Integer| Number of this item considered extra that the entity wants to share.|
| want_amount| *not set*| Integer| Number of this item this entity wants to have.|

## Example

In this example, an entity wants to be able to make `bread` from `wheat`. Since bread requires 3 total wheat, the entity will want a total of 3 and will consider 4 or more as surplus.
​
```json
"minecraft:shareables":{
    "all_items": true,
    "all_items_max_amount": 1,
    "all_items_surplus_amount": 4,
    "all_items_want_amount": 3,
    "items": [
        {
            "item": "minecraft:wheat",
            "admire": false,
            "barter": false,
            "consume_item": false, 
            "craft_into": "minecraft:bread", 
            "priority": 0, 
            "max_amount": 3,
            "pickup_limit": -1, //no limit
            "store_in_inventory": true,
            "surplus_amount": 4,
            "want_amount": 3
        },
    ],
}
```
​
## Vanilla entities examples
​
### wither_skeleton

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither_skeleton.json" range="59-410":::
​
## Vanilla entities using `minecraft:shareables`
​
- [area_effect_cloud](../../../../Source/VanillaBehaviorPack_Snippets/entities/area_effect_cloud.md)
- [armor_stand](../../../../Source/VanillaBehaviorPack_Snippets/entities/armor_stand.md)
- [arrow](../../../../Source/VanillaBehaviorPack_Snippets/entities/arrow.md)
- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [chest_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/chest_minecart.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [command_block_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/command_block_minecart.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [dragon_fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/dragon_fireball.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [egg](../../../../Source/VanillaBehaviorPack_Snippets/entities/egg.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [ender_pearl](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_pearl.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [eye_of_ender_signal](../../../../Source/VanillaBehaviorPack_Snippets/entities/eye_of_ender_signal.md)
- [fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/fireball.md)
- [fireworks_rocket](../../../../Source/VanillaBehaviorPack_Snippets/entities/fireworks_rocket.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [fishing_hook](../../../../Source/VanillaBehaviorPack_Snippets/entities/fishing_hook.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [hopper_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/hopper_minecart.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [lightning_bolt](../../../../Source/VanillaBehaviorPack_Snippets/entities/lightning_bolt.md)
- [llama_spit](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama_spit.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/minecart.md)
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
- [small_fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/small_fireball.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [snowball](../../../../Source/VanillaBehaviorPack_Snippets/entities/snowball.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [splash_potion](../../../../Source/VanillaBehaviorPack_Snippets/entities/splash_potion.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [thrown_trident](../../../../Source/VanillaBehaviorPack_Snippets/entities/thrown_trident.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
- [tnt](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt.md)
- [tripod_camera](../../../../Source/VanillaBehaviorPack_Snippets/entities/tripod_camera.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither_skull_dangerous](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull_dangerous.md)
- [wither_skull](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [xp_bottle](../../../../Source/VanillaBehaviorPack_Snippets/entities/xp_bottle.md)
- [xp_orb](../../../../Source/VanillaBehaviorPack_Snippets/entities/xp_orb.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)