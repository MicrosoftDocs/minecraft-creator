---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:damage_sensor"
description: "Describes the minecraft:damage_sensor entity component"
ai-usage: ai-assisted
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
| triggers (Damage Sensor Trigger) | *not set* | [Triggers](#triggers) item | List of triggers with the events to call when taking specific kinds of damage. | Allay: `[{"deals_damage":"no","on_damage":{"filters":{"all_of":[{"subject":"other","test":"is_family","value":"player"},{"subject":"other","test":"is_owner"}]}}}]`, Bat: `{"cause":"fall","deals_damage":"no"}`, Breeze: `[{"cause":"fall","deals_damage":"no"},{"cause":"projectile","on_damage":{"filters":{"operator":"!=","test":"is_family","subject":"damager","value":"wind_charge"}},"deals_damage":"no"}]` | 
| triggers (as Object) | *not set* | Object |  |  | 

### Deals Damage choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| yes | Yes | Received damage is applied to the entity.|
| no | No | Received damage is not applied to the entity.|
| no_but_side_effects_apply | No But Side Effects Apply | Received damage is not applied to the entity, but the side effects of the attack are. This means that the attacker's weapon loses durability, enchantment side effects are applied, and so on.|

### Triggers

#### Damage Sensor Trigger Properties

**JSON path:** `triggers`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| cause | none | String | Type of damage that triggers the events. | 
| damage_modifier | 0 | Decimal number | A modifier that adds/removes to the base damage received from the specified damage cause. | 
| damage_multiplier | 1 | Decimal number | A multiplier that modifies the base damage received from the specified damage cause. | 
| deals_damage | false | Boolean true/false | Defines how received damage affects the entity. | 
| deals_damage (as String) | *not set* | String |  | 
| event | *not set* | String | Event to emit when the trigger conditions are met. | 
| filters | *not set* | Minecraft filter | Filter conditions for when this trigger applies. | 
| on_damage | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines which entities the trigger applies to, and which event to emit when damaged. | 
| on_damage_sound_event | *not set* | Minecraft Event Reference | Defines what sound to play when the on_damage filters are met. | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:damage_sensor": {
  "triggers": [
    {
      "deals_damage": "no",
      "on_damage": {
        "filters": {
          "all_of": [
            {
              "subject": "other",
              "test": "is_family",
              "value": "player"
            },
            {
              "subject": "other",
              "test": "is_owner"
            }
          ]
        }
      }
    }
  ]
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


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
      "deals_damage": "no"
    },
    {
      "cause": "projectile",
      "on_damage": {
        "filters": {
          "operator": "!=",
          "test": "is_family",
          "subject": "damager",
          "value": "wind_charge"
        }
      },
      "deals_damage": "no"
    }
  ]
}
```
