---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:damage_sensor
ms.prod: gaming
---

# Entity Documentation - minecraft:damage_sensor

`minecraft:damage_sensor` defines what events to call when this entity is damaged by specific entities or items.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| List| triggers| | List of triggers with the events to call when taking specific kinds of damage. |

### triggers

`triggers` is a list that is defined by six parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cause| none| String|  Type of damage that triggers the events. |
|damage_modifier| 0.0| Decimal|  A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0. |
|damage_multiplier| 1.0| Decimal| A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1. |
|deals_damage| true| Boolean|  If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage. |
| on_damage|*not set* | JSON Object| Specifies filters for entity definitions and events. |
|on_damage_sound_event|*not set* | String|  Defines what sound to play, if any, when the on_damage filters are met. |

### on_damage

`on_damage` is a JSON object that is defined by two main parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[filters](../FilterList.md)|*not set* | Minecraft Filter|  Filters to use to define specific tests |
|event |*not set* | String | Defines what event to run |

### cause

> [!IMPORTANT]
> A list of available damage sources can be found at [Entity Damage Source](../../../AddonsReference/Examples/AddonEntities.md#entity-damage-source) located in the Addons Documentation.

## Example

```json
"minecraft:damage_sensor":{
    "triggers": {
        "on_damage": {
            "filters": {
                "test": "has_damage",
                "value": "fire"
            },
            "event": "minecraft:stop_drop_roll",
            "target": "self"
        }
    }
}
```

## Vanilla entities examples

### goat

```json
"minecraft:damage_sensor": {
    "triggers": {
        "cause": "fall",
        "deals_damage": true,
        "damage_modifier": -20
    }
}
```

### pillager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pillager.json" range="112-132":::

## Vanilla entities using `minecraft:damage_sensor`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [npc](../../../../Source/VanillaBehaviorPack_Snippets/entities/npc.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
