---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:healable"
description: "Describes the minecraft:healable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:healable

How entities heal.


## Healable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | The filter group that defines the conditions for using this item to heal the entity. | Parrot: `{"test":"is_riding","operator":"!=","value":true}` | 
| force_use | false | Boolean true/false | Determines if item can be used regardless of entity being at full health. | Parrot: `true` | 
| items | *not set* | Array of [Items](#items) items | The array of items that can be used to heal this entity. | Camel: `[{"item":"cactus","heal_amount":2}]`, Cat: `[{"item":"fish","heal_amount":2},{"item":"salmon","heal_amount":2}]` | 

## Items
The array of items that can be used to heal this entity.


#### Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| heal_amount | 1 | Integer number | The amount of health this entity gains when fed this item. |  | 
| item | *not set* | String | Item identifier that can be used to heal this entity. |  | 

## Samples

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "cactus",
      "heal_amount": 2
    }
  ]
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "fish",
      "heal_amount": 2
    },
    {
      "item": "salmon",
      "heal_amount": 2
    }
  ]
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "wheat",
      "heal_amount": 2
    },
    {
      "item": "sugar",
      "heal_amount": 1
    },
    {
      "item": "hay_block",
      "heal_amount": 20
    },
    {
      "item": "apple",
      "heal_amount": 3
    },
    {
      "item": "carrot",
      "heal_amount": 3
    },
    {
      "item": "golden_carrot",
      "heal_amount": 4
    },
    {
      "item": "golden_apple",
      "heal_amount": 10
    },
    {
      "item": "appleEnchanted",
      "heal_amount": 10
    }
  ]
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "wheat",
      "heal_amount": 2
    },
    {
      "item": "hay_block",
      "heal_amount": 10
    }
  ]
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:healable": {
  "force_use": true,
  "filters": {
    "test": "is_riding",
    "operator": "!=",
    "value": true
  },
  "items": [
    {
      "item": "cookie",
      "heal_amount": 0,
      "effects": [
        {
          "name": "fatal_poison",
          "chance": 1,
          "duration": 1000,
          "amplifier": 0
        }
      ]
    }
  ]
}
```

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "torchflower_seeds",
      "heal_amount": 2
    }
  ]
}
```

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:healable": {
  "items": [
    {
      "item": "porkchop",
      "heal_amount": 6
    },
    {
      "item": "cooked_porkchop",
      "heal_amount": 16
    },
    {
      "item": "fish",
      "heal_amount": 4
    },
    {
      "item": "salmon",
      "heal_amount": 4
    },
    {
      "item": "clownfish",
      "heal_amount": 2
    },
    {
      "item": "pufferfish",
      "heal_amount": 2
    },
    {
      "item": "cooked_fish",
      "heal_amount": 10
    },
    {
      "item": "cooked_salmon",
      "heal_amount": 12
    },
    {
      "item": "beef",
      "heal_amount": 6
    },
    {
      "item": "cooked_beef",
      "heal_amount": 16
    },
    {
      "item": "chicken",
      "heal_amount": 4
    },
    {
      "item": "cooked_chicken",
      "heal_amount": 12
    },
    {
      "item": "muttonRaw",
      "heal_amount": 4
    },
    {
      "item": "muttonCooked",
      "heal_amount": 12
    },
    {
      "item": "rotten_flesh",
      "heal_amount": 8
    },
    {
      "item": "rabbit",
      "heal_amount": 6
    },
    {
      "item": "cooked_rabbit",
      "heal_amount": 10
    },
    {
      "item": "rabbit_stew",
      "heal_amount": 20
    }
  ]
}
```
