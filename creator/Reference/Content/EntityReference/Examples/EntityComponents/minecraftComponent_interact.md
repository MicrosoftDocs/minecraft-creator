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
| add_items | *not set* | Array of [Add Items](#add-items-item-type) items | Loot table with items to add to the player's inventory upon successful interaction. |  | 
| cooldown | 0 | Decimal number | Time in seconds before this entity can be interacted with again. |  | 
| cooldown_after_being_attacked | 0 | Decimal number | Time in seconds before this entity can be interacted with after being attacked. |  | 
| drop_item_slot | *not set* | String | The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Armor slots are denoted by 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 
| equip_item_slot | *not set* | String | The entity's slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Armor slots are denoted by 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 
| health_amount | 0 | Integer number | The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity. |  | 
| hurt_item | 0 | Integer number | The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. |  | 
| interact_text | *not set* | String | Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls. |  | 
| interactions | *not set* | Array of [Interactions](#interactions-item-type) items |  | Allay: `[{"on_interact":{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_sneak_held","subject":"other","value":false}]}},"give_item":true,"take_item":true,"interact_text":"action.interact.allay"}]`, Armadillo: `[{"on_interact":{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"has_equipment","subject":"other","domain":"hand","value":"brush"}]}},"play_sounds":"mob.armadillo.brush","interact_text":"action.interact.brush","hurt_item":16,"swing":true,"spawn_items":{"table":"loot_tables/entities/armadillo_brush.json"}}]` | 
| on_interact | *not set* | String | Event to fire when the interaction occurs. |  | 
| particle_on_start | *not set* | Array of [Particle On Start](#particle-on-start-item-type) items | Particle effect that will be triggered at the start of the interaction. |  | 
| play_sounds | *not set* | String | List of sounds to play when the interaction occurs. |  | 
| repair_entity_item | *not set* | Array of [Repair Entity Item](#repair-entity-item-item-type) items | Allows to repair one of the entity's items. |  | 
| spawn_entities | *not set* | String | List of entities to spawn when the interaction occurs. |  | 
| spawn_items | *not set* | Array of [Spawn Items](#spawn-items-item-type) items | Loot table with items to drop on the ground upon successful interaction. |  | 
| swing | false | Boolean true/false | If true, the player will do the 'swing' animation when interacting with this entity. |  | 
| transform_to_item | *not set* | String | The item used will transform to this item upon successful interaction. Format: itemName:auxValue |  | 
| use_item | false | Boolean true/false | If true, the interaction will use an item. |  | 
| vibration | entity_interact | String | Vibration to emit when the interaction occurs. Admitted values are none (no vibration emitted), shear, entity_die, entity_act, entity_interact. |  | 

## Add Items item type
Loot table with items to add to the player's inventory upon successful interaction.


#### Add Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String | File path, relative to the Behavior Pack's path, to the loot table file. |  | 

## Interactions item type

#### Interactions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| give_item | *not set* | String |  | Allay: `true` | 
| hurt_item | *not set* | Decimal number |  |  | 
| interact_text | *not set* | String |  | Allay: `"action.interact.allay"` | 
| on_interact | *not set* | String |  | Allay: `{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_sneak_held","subject":"other","value":false}]}}` | 
| particle_on_start | *not set* | [Particle On Start](#particle-on-start-item-type) item |  |  | 
| play_sounds | *not set* | String |  |  | 
| spawn_items | *not set* | [Spawn Items](#spawn-items-item-type) item |  |  | 
| swing | *not set* | String |  |  | 
| take_item | *not set* | String |  | Allay: `true` | 
| use_item | *not set* | String |  |  | 

## Particle On Start item type

#### Particle_on_start Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_type | *not set* | String |  | Bee: `"food"` | 

## Spawn Items item type

#### Spawn_items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String |  | Armadillo: `"loot_tables/entities/armadillo_brush.json"` | 

## Particle On Start item type
Particle effect that will be triggered at the start of the interaction.


#### Particle On Start Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_offset_towards_interactor | false | Boolean true/false | Whether or not the particle will appear closer to who performed the interaction. |  | 
| particle_type | *not set* | String | The type of particle that will be spawned. |  | 
| particle_y_offset | 0 | Decimal number | Will offset the particle this amount in the y direction. |  | 

## Repair Entity Item item type
Allows to repair one of the entity's items.


#### Repair Entity Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amount | *not set* | Integer number | How much of the item durability should be restored upon interaction. |  | 
| slot | *not set* | Integer number | The entity's slot containing the item to be repaired. Inventory slots are denoted by positive numbers. Armor slots are denoted by 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 

## Spawn Items item type
Loot table with items to drop on the ground upon successful interaction.


#### Spawn Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String | File path, relative to the Behavior Pack's path, to the loot table file. |  | 

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
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "is_sneak_held",
              "subject": "other",
              "value": false
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
              "test": "is_family",
              "subject": "other",
              "value": "player"
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
              "test": "is_family",
              "subject": "other",
              "value": "player"
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
              "test": "is_family",
              "subject": "other",
              "value": "player"
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
      "play_sounds": "armor.equip_generic",
      "on_interact": {
        "filters": {
          "all_of": [
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
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
