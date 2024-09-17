---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:interact
description: "A reference document detailing the 'interact' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:interact

`minecraft:interact` is a list of interactions that can be used with an entity.

## Parameter

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|add_items| | JSON Object|  Loot table with items to add to the player's inventory upon successful interaction.|
|cooldown| 0.0| Decimal|  Time in seconds before this entity can be interacted with again. |
|cooldown_after_being_attacked| 0.0| Decimal|  Time in seconds before this entity can be interacted with after being attacked. |
|drop_item_slot| --| String| The slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers; Armor slots are denoted by `slot.armor.head`, `slot.armor.chest`, `slot.armor.legs`, `slot.armor.feet`, and `slot.armor.body`. |
|equip_item_slot| --| String| The slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers; Armor slots are denoted by `slot.armor.head`, `slot.armor.chest`, `slot.armor.legs`, `slot.armor.feet`, and `slot.armor.body`. |
|health_amount| 0| Integer | The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity. |
|hurt_item| 0| Integer|  The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. |
|interact_text|*not set* | String|  Text to show while playing with touch-screen controls when the player is able to interact in this way with this entity. |
|on_interact|*not set* | JSON object | Events to initiate when the interaction occurs. |
|particle_on_start|*not set* | JSON Object|  Particle effect that will be initiated at the start of the interaction.|
|play_sounds|*not set* | String| One or more sound identifiers to play when the interaction occurs. |
|repair_entity_item|--| JSON object| Allows the repair of a given entity's item.|
|spawn_entities|*not set* | String| Entity to spawn when the interaction occurs. |
|spawn_items|*not set* |JSON Object|  Loot table with items to drop on the ground upon successful interaction.|
|swing| false| Boolean| If true, the player will do the 'swing' animation when interacting with this entity. |
|transform_to_item|*not set* | String|  The item used will transform to this item upon successful interaction. Format: `itemName:auxValue` |
|use_item| false| Boolean| If true, the interaction will use an item. |
| vibration| entity_interact |String| Vibration to emit when the interaction occurs. Admitted values are entity_interact (used by default), shear, and none (no vibration emitted). |

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
|particle_type|*not set* |String |Name of the particle system to run |
|particle_y_offset|0.0 |Decimal |Vertical offset of the particle system |

### spawn_items

`spawn_items` is a JSON object defined by one parameter. Each item has the following properties:

| Type| Name| Default Value| Description |
|:-----------|:-----------|:-----------|:-----------|
| table| *not set*| String| File path, relative to the Behavior Pack's path, to the loot table file. |

## Example

```json
"minecraft:interact": {
    "interactions": [
        {
            "on_interact": {
                "filters": {
                    "all_of": [
                        {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        {
                            "test": "has_equipment",
                            "domain": "hand",
                            "subject": "other",
                            "value": "bucket:0"
                        }
                    ]
                }
            },
            "add_items": {
                "table": "loot_tables/gameplay/entities/cow_milking.json"
            },
            "cooldown": 0.0,
            "cooldown_after_being_attacked": 0.0,
            "hurt_item": 0,
            "particle_on_start": {
                "particle_type": "smoke",
                "particle_y_offset": 0.25,
                "particle_offset_towards_interactor": true
            },
            "swing": true,
            "use_item": true,
            "transform_to_item": "bucket:1",
            "play_sounds": "milk",
            "interact_text": "action.interact.milk",
            "spawn_entities": "minecraft:cow_adult",
            "spawn_items": {
                "table": "loot_tables/entities/cow.json"
            }
        }
    ]
}
```

## Vanilla entities examples

### goat

```json
"minecraft:interact": {
          "interactions": [
            {
              "on_interact": {
                "filters": {
                  "all_of": [
                    {
                      "test": "has_component",
                      "subject": "self",
                      "operator": "!=",
                      "value": "minecraft:is_baby"
                    },
                    {
                      "test": "is_family",
                      "subject": "other",
                      "value": "player"
                    },
                    {
                      "test": "has_equipment",
                      "domain": "hand",
                      "subject": "other",
                      "value": "bucket:0"
                    }
                  ]
                }
              },
              "use_item": true,
              "transform_to_item": "bucket:1",
              "play_sounds": "milk_suspiciously",
              "interact_text": "action.interact.milk"
            }
          ]
        }
```

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
