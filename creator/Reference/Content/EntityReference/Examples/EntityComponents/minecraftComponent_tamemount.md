---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:tamemount"
description: "Describes the minecraft:tamemount entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:tamemount

Allows the Entity to be tamed by mounting it.


## Tamemount Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attempt_temper_mod | 5 | Integer number | The amount the entity's temper will increase when mounted. |  | 
| auto_reject_items | *not set* | Array of [Auto Reject Items](#auto-reject-items-item-type) items |  |  | 
| autoRejectItems | *not set* | Array of [AutoRejectItems](#autorejectitems-item-type) items | The list of items that, if carried while interacting with the entity, will anger it. |  | 
| feed_items | *not set* | Array of [Feed Items](#feed-items-item-type) items | The list of items that can be used to increase the entity's temper and speed up the taming process. | Donkey: `[{"item":"wheat","temper_mod":3},{"item":"sugar","temper_mod":3},{"item":"apple","temper_mod":3},{"item":"carrot","temper_mod":3},{"item":"golden_carrot","temper_mod":5},{"item":"golden_apple","temper_mod":10},{"item":"appleEnchanted","temper_mod":10}]` | 
| feed_text | *not set* | String | The text that shows in the feeding interact button. |  | 
| max_temper | 100 | Integer number | The maximum value for the entity's random starting temper. |  | 
| min_temper | 0 | Integer number | The minimum value for the entity's random starting temper. |  | 
| ride_text | *not set* | String | The text that shows in the riding interact button. |  | 
| tame_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event that triggers when the entity becomes tamed. |  | 

## Auto Reject Items item type

#### Auto_reject_items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String |  | Donkey: `"horsearmorleather"` | 

## AutoRejectItems item type
The list of items that, if carried while interacting with the entity, will anger it.


#### AutoRejectItems Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | Name of the item this entity dislikes and will cause it to get angry if used while untamed. |  | 

## Feed Items item type
The list of items that can be used to increase the entity's temper and speed up the taming process.


#### Feed Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | Name of the item this entity likes and can be used to increase this entity's temper. |  | 
| temper_mod | 0 | Integer number | The amount of temper this entity gains when fed this item. |  | 

## Samples

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 100,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "sugar",
      "temper_mod": 3
    },
    {
      "item": "apple",
      "temper_mod": 3
    },
    {
      "item": "carrot",
      "temper_mod": 3
    },
    {
      "item": "golden_carrot",
      "temper_mod": 5
    },
    {
      "item": "golden_apple",
      "temper_mod": 10
    },
    {
      "item": "appleEnchanted",
      "temper_mod": 10
    }
  ],
  "auto_reject_items": [
    {
      "item": "horsearmorleather"
    },
    {
      "item": "horsearmoriron"
    },
    {
      "item": "horsearmorgold"
    },
    {
      "item": "horsearmordiamond"
    },
    {
      "item": "minecraft:copper_horse_armor"
    },
    {
      "item": "saddle"
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```

#### [Trader Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json)


```json
"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "auto_reject_items": [
    {
      "item": "horsearmorleather"
    },
    {
      "item": "horsearmoriron"
    },
    {
      "item": "horsearmorgold"
    },
    {
      "item": "horsearmordiamond"
    },
    {
      "item": "minecraft:copper_horse_armor"
    },
    {
      "item": "saddle"
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```

#### [Frost Moose](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/frost_moose.behavior.json)


```json
"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "auto_reject_items": [
    {
      "item": "horsearmorleather"
    },
    {
      "item": "horsearmoriron"
    },
    {
      "item": "horsearmorgold"
    },
    {
      "item": "horsearmordiamond"
    },
    {
      "item": "saddle"
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```
