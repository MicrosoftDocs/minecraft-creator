---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:interact"
description: "Describes the minecraft:interact entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:interact

Defines interactions with this entity.


## Interact Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | Time in seconds before this entity can be interacted with again. |  | 
| cooldown_after_being_attacked | 0 | Decimal number | Time in seconds before this entity can be interacted with after being attacked. |  | 
| drop_item_slot | *not set* | String | The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 
| drop_item_y_offset | 0 | Decimal number | Will offset the item drop position this amount in the y direction. Requires "drop_item_slot" to be specified. |  | 
| equip_item_slot | *not set* | String | The entity's slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 
| health_amount | 0 | Integer number | The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity. |  | 
| hurt_item | 0 | Integer number | The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. |  | 
| interact_text | *not set* | String | Text to show when the player is able to interact in this way with this entity when playing with touch-screen controls. |  | 
| interactions | *not set* | Array of [Interactions (Interactions)](#interactions-interactions) items |  | Allay: `[{"on_interact":{"filters":{"all_of":[{"test":"has_equipment","subject":"other","domain":"hand","operator":"not","value":"lead"},{"test":"is_sneak_held","subject":"other","value":false},{"any_of":[{"test":"all_slots_empty","subject":"other","operator":"not","value":"hand"},{"test":"all_slots_empty","subject":"self","operator":"not","value":"hand"}]}]}},"give_item":true,"take_item":true,"interact_text":"action.interact.allay"}]` | 

## Interactions (Interactions)

#### Interactions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| give_item | *not set* | String |  | Allay: `true` | 
| hurt_item | *not set* | Decimal number |  |  | 
| interact_text | *not set* | String |  | Allay: `"action.interact.allay"` | 
| on_interact | *not set* | String |  | Allay: `{"filters":{"all_of":[{"test":"has_equipment","subject":"other","domain":"hand","operator":"not","value":"lead"},{"test":"is_sneak_held","subject":"other","value":false},{"any_of":[{"test":"all_slots_empty","subject":"other","operator":"not","value":"hand"},{"test":"all_slots_empty","subject":"self","operator":"not","value":"hand"}]}]}}` | 
| particle_on_start | *not set* | Array of [Particle On Start](#particle-on-start) items | Particle effect that will be triggered at the start of the interaction. |  | 
| particle_on_start | *not set* | [Particle On Start (Particle On Start)](#particle-on-start-particle-on-start) item |  |  | 
| play_sounds | *not set* | String | List of sounds to play when the interaction occurs. |  | 
| play_sounds | *not set* | String |  |  | 
| repair_entity_item | *not set* | Array of [Repair Entity Item](#repair-entity-item) items | Allows to repair one of the entity's items. |  | 
| spawn_entities | *not set* | String | List of entities to spawn when the interaction occurs. |  | 
| spawn_items | *not set* | Array of [Spawn Items](#spawn-items) items | Loot table with items to drop on the ground upon successful interaction. |  | 
| spawn_items | *not set* | [Spawn Items (Spawn Items)](#spawn-items-spawn-items) item |  |  | 
| swing | false | Boolean true/false | If true, the player will do the 'swing' animation when interacting with this entity. |  | 
| swing | *not set* | String |  |  | 
| take_item | *not set* | String |  | Allay: `true` | 
| transform_to_item | *not set* | String | The item used will transform to this item upon successful interaction. Format: itemName:auxValue |  | 
| use_item | false | Boolean true/false | If true, the interaction will use an item. |  | 
| use_item | *not set* | String |  |  | 
| vibration | entity_interact | String | Vibration to emit when the interaction occurs. Admitted values are none (no vibration emitted), shear, entity_die, entity_act, entity_interact. |  | 

## Particle On Start
Particle effect that will be triggered at the start of the interaction.


#### Particle On Start Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_offset_towards_interactor | false | Boolean true/false | Whether or not the particle will appear closer to who performed the interaction. |  | 
| particle_type | *not set* | String | The type of particle that will be spawned. |  | 
| particle_y_offset | 0 | Decimal number | Will offset the particle this amount in the y direction. |  | 

## Particle On Start (Particle On Start)

#### Particle_on_start Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_type | *not set* | String |  | Bee: `"food"` | 

## Repair Entity Item
Allows to repair one of the entity's items.


#### Repair Entity Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amount | *not set* | Integer number | How much of the item durability should be restored upon interaction. |  | 
| slot | *not set* | Integer number | The entity's slot containing the item to be repaired. Inventory slots are denoted by positive numbers. Armor slots are denoted by 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 

## Spawn Items
Loot table with items to drop on the ground upon successful interaction.


#### Spawn Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String | File path, relative to the Behavior Pack's path, to the loot table file. |  | 
| y_offset | 1 | Decimal number | Will offset the items spawn position this amount in the y direction. |  | 

## Spawn Items (Spawn Items)

#### Spawn_items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String |  | Armadillo: `"loot_tables/entities/armadillo_brush.json"` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:interact": {
  "interactions": [
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "operator": "not",
              "value": "lead"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            },
            {
              "any_of": [
                {
                  "test": "all_slots_empty",
                  "subject": "other",
                  "operator": "not",
                  "value": "hand"
                },
                {
                  "test": "all_slots_empty",
                  "subject": "self",
                  "operator": "not",
                  "value": "hand"
                }
              ]
            }
          ]
        }
      },
      "give_item": true,
      "take_item": true,
      "interact_text": "action.interact.allay"
    }
  ]
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


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
              "subject": "other",
              "domain": "hand",
              "value": "brush"
            }
          ]
        }
      },
      "play_sounds": "mob.armadillo.brush",
      "interact_text": "action.interact.brush",
      "hurt_item": 16,
      "swing": true,
      "spawn_items": {
        "table": "loot_tables/entities/armadillo_brush.json"
      }
    }
  ]
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


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
              "value": "minecraft:open_eyeblossom"
            }
          ]
        },
        "event": "fed_open_eyeblossom"
      },
      "use_item": true,
      "particle_on_start": {
        "particle_type": "food"
      },
      "interact_text": "action.interact.feed"
    },
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
              "value": "minecraft:wither_rose"
            }
          ]
        },
        "event": "fed_wither_rose"
      },
      "use_item": true,
      "particle_on_start": {
        "particle_type": "food"
      },
      "interact_text": "action.interact.feed"
    }
  ]
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:interact": {
  "interactions": [
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            },
            {
              "test": "has_component",
              "operator": "!=",
              "value": "minecraft:is_sheared"
            }
          ]
        },
        "event": "be_sheared",
        "target": "self"
      },
      "use_item": false,
      "hurt_item": 1,
      "play_sounds": "shear",
      "spawn_items": {
        "table": "loot_tables/entities/bogged_shear.json"
      },
      "interact_text": "action.interact.shear"
    }
  ]
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:interact": {
  "interactions": [
    {
      "play_sounds": "saddle",
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "operator": "not",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "saddle"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        }
      },
      "equip_item_slot": "0",
      "interact_text": "action.interact.saddle"
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "is_sitting",
              "subject": "self",
              "value": false
            },
            {
              "test": "rider_count",
              "subject": "self",
              "operator": "equals",
              "value": 0
            },
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        }
      },
      "hurt_item": 1,
      "drop_item_slot": "0",
      "drop_item_y_offset": 2,
      "interact_text": "action.interact.removesaddle",
      "play_sounds": "unsaddle",
      "vibration": "shear"
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "is_sitting",
              "subject": "self"
            },
            {
              "test": "rider_count",
              "subject": "self",
              "operator": "equals",
              "value": 0
            },
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        }
      },
      "hurt_item": 1,
      "drop_item_slot": "0",
      "drop_item_y_offset": 1,
      "interact_text": "action.interact.removesaddle",
      "play_sounds": "unsaddle",
      "vibration": "shear"
    }
  ]
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:interact": {
  "interactions": [
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "bool_property",
              "domain": "minecraft:is_waxed",
              "value": false
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
              "value": "honeycomb"
            }
          ]
        },
        "event": "minecraft:wax_on"
      },
      "use_item": true,
      "swing": true,
      "interact_text": "action.interact.wax_on",
      "particle_on_start": {
        "copper_event": "wax_on"
      }
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "bool_property",
              "domain": "minecraft:is_waxed",
              "value": false
            },
            {
              "test": "enum_property",
              "domain": "minecraft:oxidation_level",
              "operator": "not",
              "value": "unoxidized"
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "has_equipment_tag",
              "domain": "hand",
              "subject": "other",
              "value": "minecraft:is_axe"
            }
          ]
        },
        "event": "minecraft:remove_oxidation_layer"
      },
      "swing": true,
      "hurt_item": 1,
      "interact_text": "action.interact.scrape",
      "particle_on_start": {
        "copper_event": "scrape"
      }
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "bool_property",
              "domain": "minecraft:is_waxed",
              "value": true
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "has_equipment_tag",
              "domain": "hand",
              "subject": "other",
              "value": "minecraft:is_axe"
            }
          ]
        },
        "event": "minecraft:wax_off"
      },
      "swing": true,
      "hurt_item": 1,
      "interact_text": "action.interact.wax_off",
      "particle_on_start": {
        "copper_event": "wax_off"
      }
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "all_slots_empty",
              "value": "hand",
              "operator": "not"
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "all_slots_empty",
              "value": "main_hand",
              "subject": "other"
            }
          ]
        }
      },
      "drop_item_slot": "slot.weapon.mainhand",
      "swing": true,
      "interact_text": "action.interact.drop_item"
    },
    {
      "cooldown": 2.5,
      "use_item": false,
      "hurt_item": 1,
      "play_sounds": "shear",
      "interact_text": "action.interact.shear",
      "vibration": "shear",
      "spawn_items": {
        "table": "loot_tables/entities/copper_golem_shear.json"
      },
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "bool_property",
              "domain": "minecraft:has_flower",
              "value": true
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            }
          ]
        },
        "event": "minecraft:on_sheared",
        "target": "self"
      }
    }
  ]
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


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
      "use_item": true,
      "transform_to_item": "bucket:1",
      "play_sounds": "milk",
      "interact_text": "action.interact.milk"
    }
  ]
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:interact": {
  "interactions": {
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
            "value": "flint_and_steel"
          },
          {
            "test": "has_component",
            "operator": "!=",
            "value": "minecraft:explode"
          }
        ]
      },
      "event": "minecraft:start_exploding_forced",
      "target": "self"
    },
    "hurt_item": 1,
    "swing": true,
    "play_sounds": "ignite",
    "interact_text": "action.interact.creeper"
  }
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)

At /minecraft:entity/component_groups/minecraft:donkey_tamed/minecraft:interact/: 

```json
"minecraft:interact": {
  "interactions": [
    {
      "play_sounds": "armor.equip_generic",
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "operator": "not",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "saddle"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        },
        "target": "self"
      },
      "equip_item_slot": "0",
      "interact_text": "action.interact.equip"
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "rider_count",
              "subject": "self",
              "operator": "equals",
              "value": 0
            },
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        }
      },
      "hurt_item": 1,
      "drop_item_slot": "0",
      "drop_item_y_offset": 1.1,
      "interact_text": "action.interact.removesaddle",
      "play_sounds": "unsaddle",
      "vibration": "shear"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:donkey_unchested/minecraft:interact/: 

```json
"minecraft:interact": {
  "interactions": [
    {
      "play_sounds": "armor.equip_generic",
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "operator": "not",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "saddle"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        },
        "target": "self"
      },
      "equip_item_slot": "0",
      "interact_text": "action.interact.saddle"
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "rider_count",
              "subject": "self",
              "operator": "equals",
              "value": 0
            },
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        }
      },
      "hurt_item": 1,
      "drop_item_slot": "0",
      "drop_item_y_offset": 1.1,
      "interact_text": "action.interact.removesaddle",
      "play_sounds": "unsaddle",
      "vibration": "shear"
    },
    {
      "play_sounds": "armor.equip_generic",
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "is_sneaking",
              "subject": "other",
              "value": false
            },
            {
              "test": "has_equipment",
              "domain": "hand",
              "subject": "other",
              "value": "chest"
            }
          ]
        },
        "event": "minecraft:on_chest",
        "target": "self"
      },
      "use_item": true,
      "interact_text": "action.interact.attachchest"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:donkey_chested/minecraft:interact/: 

```json
"minecraft:interact": {
  "interactions": [
    {
      "play_sounds": "armor.equip_generic",
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "operator": "not",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "saddle"
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "is_sneaking",
              "subject": "other",
              "value": false
            }
          ]
        },
        "target": "self"
      },
      "equip_item_slot": "0",
      "interact_text": "action.interact.saddle"
    },
    {
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "rider_count",
              "subject": "self",
              "operator": "equals",
              "value": 0
            },
            {
              "test": "has_equipment",
              "subject": "self",
              "domain": "inventory",
              "value": "saddle"
            },
            {
              "test": "has_equipment",
              "subject": "other",
              "domain": "hand",
              "value": "shears"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
            }
          ]
        }
      },
      "hurt_item": 1,
      "drop_item_slot": "0",
      "drop_item_y_offset": 1.1,
      "interact_text": "action.interact.removesaddle",
      "play_sounds": "unsaddle",
      "vibration": "shear"
    }
  ]
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)

At /minecraft:entity/component_groups/interact_default/minecraft:interact/: 

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

At /minecraft:entity/component_groups/interact_screamer/minecraft:interact/: 

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
      "play_sounds": "milk.screamer",
      "interact_text": "action.interact.milk"
    }
  ]
}
```
