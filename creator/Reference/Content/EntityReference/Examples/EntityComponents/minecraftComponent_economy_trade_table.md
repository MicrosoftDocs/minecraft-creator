---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:economy_trade_table"
description: "Describes the minecraft:economy_trade_table entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:economy_trade_table

Defines this entity's ability to trade with players.


## Economy Trade Table Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| convert_trades_economy | false | Boolean true/false | Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |  | 
| cured_discount | *not set* | Range of integers | How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (When use_legacy_price_formula is true this is the low-tier trade discount and high-tier trade discount, otherwise it is the minor positive gossip and major positive gossip.) | Villager v2: `[-25,-20]` | 
| display_name | *not set* | String | Name to be displayed while trading with this entity | Villager v2: `"entity.villager.farmer"`, `"entity.villager.fisherman"`, `"entity.villager.shepherd"`, `"entity.villager.fletcher"`, `"entity.villager.librarian"`, `"entity.villager.cartographer"`, `"entity.villager.cleric"`, `"entity.villager.armor"`, `"entity.villager.weapon"`, `"entity.villager.tool"`, `"entity.villager.butcher"`, `"entity.villager.leather"`, `"entity.villager.mason"` | 
| hero_demand_discount | -4 | Integer number | Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect |  | 
| max_cured_discount | *not set* | Range of integers | The max the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (When use_legacy_price_formula is true this is the low-tier trade discount and high-tier trade discount, otherwise it is the minor positive gossip and major positive gossip.) | Villager v2: `[-25,-20]` | 
| max_nearby_cured_discount | -200 | Integer number | The max the discount can be modified by when the player has cured a nearby Zombie Villager. Only used when use_legacy_price_formula is true, otherwise max_cured_discount (low) is used. |  | 
| nearby_cured_discount | -20 | Integer number | How much should the discount be modified by when the player has cured a nearby Zombie Villager |  | 
| new_screen | false | Boolean true/false | Used to determine if trading with entity opens the new trade screen | Villager v2: `true` | 
| persist_trades | false | Boolean true/false | Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. | Villager v2: `true` | 
| show_trade_screen | true | Boolean true/false | Show an in game trade screen when interacting with the mob. |  | 
| table | *not set* | String | File path relative to the resource pack root for this entity's trades | Villager v2: `"trading/economy_trades/farmer_trades.json"`, `"trading/economy_trades/fisherman_trades.json"`, `"trading/economy_trades/shepherd_trades.json"`, `"trading/economy_trades/fletcher_trades.json"`, `"trading/economy_trades/librarian_trades.json"`, `"trading/economy_trades/cartographer_trades.json"`, `"trading/economy_trades/cleric_trades.json"`, `"trading/economy_trades/armorer_trades.json"`, `"trading/economy_trades/weapon_smith_trades.json"`, `"trading/economy_trades/tool_smith_trades.json"`, `"trading/economy_trades/butcher_trades.json"`, `"trading/economy_trades/leather_worker_trades.json"`, `"trading/economy_trades/stone_mason_trades.json"` | 
| use_legacy_price_formula | false | Boolean true/false | Determines whether the legacy formula is used to determines the trade prices. |  | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/trade_components/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {}
```

At /minecraft:entity/component_groups/farmer/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.farmer",
  "table": "trading/economy_trades/farmer_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/fisherman/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.fisherman",
  "table": "trading/economy_trades/fisherman_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/shepherd/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.shepherd",
  "table": "trading/economy_trades/shepherd_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/fletcher/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.fletcher",
  "table": "trading/economy_trades/fletcher_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/librarian/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.librarian",
  "table": "trading/economy_trades/librarian_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/cartographer/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.cartographer",
  "table": "trading/economy_trades/cartographer_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/cleric/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.cleric",
  "table": "trading/economy_trades/cleric_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/armorer/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.armor",
  "table": "trading/economy_trades/armorer_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/weaponsmith/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.weapon",
  "table": "trading/economy_trades/weapon_smith_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/toolsmith/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.tool",
  "table": "trading/economy_trades/tool_smith_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/butcher/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.butcher",
  "table": "trading/economy_trades/butcher_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/leatherworker/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.leather",
  "table": "trading/economy_trades/leather_worker_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```

At /minecraft:entity/component_groups/mason/minecraft:economy_trade_table/: 

```json
"minecraft:economy_trade_table": {
  "display_name": "entity.villager.mason",
  "table": "trading/economy_trades/stone_mason_trades.json",
  "new_screen": true,
  "persist_trades": true,
  "cured_discount": [
    -25,
    -20
  ],
  "max_cured_discount": [
    -25,
    -20
  ]
}
```
