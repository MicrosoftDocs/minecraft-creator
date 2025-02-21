---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.trade_interest"
description: "Describes the behavior.trade_interest AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.trade_interest

Allows the mob to look at a player that is holding a tradable item.


## Trade Interest Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| carried_item_switch_time | 2 | Decimal number | The max time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade | Villager V2: `2` | 
| cooldown | 2 | Decimal number | The time in seconds before the trader can use this goal again | Villager V2: `2` | 
| interest_time | 45 | Decimal number | The max time in seconds that the trader will be interested with showing its trade items | Villager V2: `45` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `5`, Wandering Trader: `3` | 
| remove_item_time | 1 | Decimal number | The max time in seconds that the trader will wait when you no longer have items to trade | Villager V2: `1` | 
| within_radius | 0 | Decimal number | Distance in blocks this mob can be interested by a player holding an item they like | Villager V2: `6` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/trade_components/minecraft:behavior.trade_interest/: 

```json
{}
```

At /minecraft:entity/component_groups/farmer/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/fisherman/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/shepherd/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/fletcher/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/librarian/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/cartographer/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/cleric/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/armorer/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/weaponsmith/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/toolsmith/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/butcher/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/leatherworker/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

At /minecraft:entity/component_groups/mason/minecraft:behavior.trade_interest/: 

```json
{
  "priority": 5,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
{
  "priority": 3,
  "within_radius": 6,
  "interest_time": 45,
  "remove_item_time": 1,
  "carried_item_switch_time": 2,
  "cooldown": 2
}
```
