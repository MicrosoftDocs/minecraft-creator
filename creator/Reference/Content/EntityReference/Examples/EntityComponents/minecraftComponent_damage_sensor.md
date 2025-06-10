---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:damage_sensor"
description: "Describes the minecraft:damage_sensor entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:damage_sensor

Defines what events to call when this entity is damaged by specific entities or items.


## Damage Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| deals_damage | false | [Deals Damage](#deals-damage-choices) choices | Defines how received damage affects the entity. |  | 
| deals_damage (Alternate 1) | false | Boolean true/false |  |  | 
| triggers | *not set* | [Triggers](#triggers-item-type) item | List of triggers with the events to call when taking specific kinds of damage." | Allay: `[{"on_damage":{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_owner","subject":"other"}]}},"deals_damage":"no"}]`, Armadillo: `{"on_damage":{"filters":{"any_of":[{"test":"is_family","subject":"other","value":"mob"},{"test":"is_family","subject":"other","value":"player"}]},"event":"minecraft:threat_detected"}}`, `[{"on_damage":{"filters":{"any_of":[{"test":"is_family","subject":"other","value":"mob"},{"test":"is_family","subject":"other","value":"player"}]},"event":"minecraft:threat_detected"},"damage_multiplier":0.5,"damage_modifier":-1},{"damage_multiplier":0.5,"damage_modifier":-1}]` | 

### Deals Damage choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| yes | Yes | Received damage is applied to the entity.|
| no | No | Received damage is not applied to the entity.|
| no_but_side_effects_apply | No But Side Effects Apply | Received damage is not applied to the entity, but the side effects of the attack are. This means that the attacker's weapon loses durability, enchantment side effects are applied, and so on.|

## Triggers item type
List of triggers with the events to call when taking specific kinds of damage.".


#### Triggers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cause | none | String | Type of damage that triggers the events. |  | 
| damage_modifier | 0 | Decimal number | A modifier that adds/removes to the base damage received from the specified damage cause. It does not reduce damage to less than 0. |  | 
| damage_multiplier | 1 | Decimal number | A multiplier that modifies the base damage received from the specified damage cause. If "deals_damage" is true the multiplier can only reduce the damage the entity will take to a minimum of 1. |  | 
| deals_damage | false | Boolean true/false | Defines how received damage affects the entity: <br>           <br>- "yes", received damage is applied to the entity. <br>           <br>- "no", received damage is not applied to the entity. <br>           <br>- "no_but_side_effects_apply", received damage is not applied to the entity, but the side effects of the attack are. This means that the attacker's weapon loses durability, enchantment side effects are applied, and so on. |  | 
| on_damage | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines which entities the trigger applies to, and which, if any, event to emit when damaged. |  | 
| on_damage_sound_event | *not set* | Minecraft Event Reference | Defines what sound to play, if any, when the "on_damage" filters are met. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "on_damage": {
        "filters": {
          "all_of": [
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            },
            {
              "test": "is_owner",
              "subject": "other"
            }
          ]
        }
      },
      "deals_damage": "no"
    }
  ]
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)

At /minecraft:entity/component_groups/minecraft:unrolled/minecraft:damage_sensor/: 

```json
"minecraft:damage_sensor": {
  "triggers": {
    "on_damage": {
      "filters": {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "mob"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          }
        ]
      },
      "event": "minecraft:threat_detected"
    }
  }
}
```

At /minecraft:entity/component_groups/minecraft:rolled_up/minecraft:damage_sensor/: 

```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "on_damage": {
        "filters": {
          "any_of": [
            {
              "test": "is_family",
              "subject": "other",
              "value": "mob"
            },
            {
              "test": "is_family",
              "subject": "other",
              "value": "player"
            }
          ]
        },
        "event": "minecraft:threat_detected"
      },
      "damage_multiplier": 0.5,
      "damage_modifier": -1
    },
    {
      "damage_multiplier": 0.5,
      "damage_modifier": -1
    }
  ]
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:damage_sensor": {
  "triggers": {
    "cause": "lightning",
    "deals_damage": "yes",
    "damage_multiplier": 2000
  }
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:damage_sensor": {
  "triggers": {
    "cause": "fall",
    "deals_damage": false
  }
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "cause": "fall",
      "deals_damage": "no"
    },
    {
      "on_damage": {
        "filters": {
          "test": "is_block",
          "subject": "block",
          "value": "minecraft:sweet_berry_bush"
        }
      },
      "deals_damage": "no"
    }
  ]
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:damage_sensor": {
  "triggers": {
    "cause": "fall",
    "deals_damage": "no"
  }
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "cause": "fall",
      "deals_damage": false
    },
    {
      "on_damage": {
        "filters": {
          "test": "is_family",
          "subject": "damager",
          "operator": "!=",
          "value": "wind_charge"
        }
      },
      "cause": "projectile",
      "deals_damage": false
    }
  ]
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "cause": "void",
      "deals_damage": "yes"
    },
    {
      "on_damage": {
        "filters": {
          "test": "is_family",
          "subject": "other",
          "value": "player"
        },
        "event": "minecraft:damaged_by_player"
      },
      "cause": "all",
      "deals_damage": "no_but_side_effects_apply"
    },
    {
      "on_damage": {
        "filters": {
          "test": "is_family",
          "subject": "other",
          "value": "mob"
        },
        "event": "minecraft:damaged_by_entity"
      },
      "cause": "all",
      "deals_damage": "no_but_side_effects_apply"
    },
    {
      "on_damage": {
        "event": "minecraft:damaged_by_entity"
      },
      "cause": "projectile",
      "deals_damage": "no_but_side_effects_apply"
    },
    {
      "cause": "all",
      "deals_damage": "no_but_side_effects_apply"
    }
  ]
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:damage_sensor": {
  "triggers": {
    "on_damage": {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "lightning"
      },
      "event": "minecraft:become_charged"
    },
    "deals_damage": false
  }
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "on_damage": {
        "filters": {
          "test": "is_block",
          "subject": "block",
          "value": "minecraft:sweet_berry_bush"
        }
      },
      "deals_damage": "no"
    }
  ]
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:damage_sensor": {
  "triggers": {
    "cause": "fall",
    "deals_damage": "yes",
    "damage_modifier": -5
  }
}
```
