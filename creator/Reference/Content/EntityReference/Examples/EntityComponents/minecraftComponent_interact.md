---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:interact
ms.prod: gaming
---

# minecraft:interact

`minecraft:interact` defines interactions with this entity.

## Parameter

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|add_items| | JSON Object|  Loot table with items to add to the player's inventory upon successful interaction.|
|cooldown| 0.0| Decimal|  Time in seconds before this entity can be interacted with again. |
|cooldown_after_being_attacked| 0.0| Decimal|  Time in seconds before this entity can be interacted with after being attacked. |
|hurt_item| 0| Integer|  The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. |
|interact_text|*not set* | String|  Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls. |
|on_interact|*not set* | String|  Event to fire when the interaction occurs. |
|particle_on_start|*not set* | JSON Object|  Particle effect that will be triggered at the start of the interaction.|
|play_sounds|*not set* | String|  List of sounds to play when the interaction occurs. |
| spawn_entities|*not set* | String| List of entities to spawn when the interaction occurs. |
|spawn_items|*not set* |JSON Object|  Loot table with items to drop on the ground upon successful interaction.|
|swing| false| Boolean| If true, the player will do the 'swing' animation when interacting with this entity. |
|transform_to_item|*not set* | String|  The item used will transform to this item upon successful interaction. Format: `itemName:auxValue` |
|use_item| false| Boolean| If true, the interaction will use an item. |

### add_items

`add_items` is a JSON object defined by one parameter. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| table| *not set*| String| File path, relative to the Behavior Pack's path, to the loot table file. |

### particle_on_start

`particle_on_start` is a JSON object defined by three parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
|particle_offset_towards_interactor|False |Boolean |Whether or not the particle will appear closer to who performed the interaction. |
|particle_type|*not set* |String |name of the particle system to run |
|particle_y_offset|0.0 |Decimal |vertical offset of the particle system |

### spawn_items

`spawn_items` is a JSON object defined by one parameter. Each item has the following properties:

| Type| Name| Default Value| Description |
|:-----------|:-----------|:-----------|:-----------|
| table| *not set*| String| File path, relative to the Behavior Pack's path, to the loot table file. |

## Example

```json
"minecraft:interact":{
    "add_items": {
                "table": "loot_tables/gameplay/entities/cow_milking.json"
              },
    "cooldown": 25.0,
    "cooldown_after_being_attacked": 0.0,
    "hurt_item": 0,
    "interact_text": "got milk?",
    "on_interact": {
        "event":"minecraft:produce_milk",
        "target": "self"
    },
    "particle_on_start": {
        "particle_type": "smoke", "particle_y_offset": 0.25, "particle_offset_towards_interactor": true
    },
    "play_sound": "moo",
    "transform_to_item": "bucket:1",
    "swing": true,
    "use_item": true
}
```

## Vanilla entities examples

### mooshroom

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/mooshroom.json" range="67-326":::

## Vanilla entities using `minecraft:interact`

- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
