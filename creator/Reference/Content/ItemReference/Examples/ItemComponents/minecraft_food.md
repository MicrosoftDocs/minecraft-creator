---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:food"
description: "Describes the minecraft:food item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:food

Sets the item as a food component, allowing it to be edible to the player.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Use Modifier (minecraft:use_modifier)](../EntityComponents/minecraftComponent_use_modifier.md)
> 

## Minecraft Food Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_always_eat | *not set* | Boolean true/false | If true you can always eat this item (even when not hungry). Default is set to false. | AppleEnchanted: `true` | 
| cooldown_time | *not set* | Decimal number |  |  | 
| cooldown_type | *not set* | String |  |  | 
| effects | *not set* | Array of [Effects](#effects-item-type) items |  | AppleEnchanted: `[{"name":"regeneration","chance":1,"duration":30,"amplifier":1},{"name":"absorption","chance":1,"duration":120,"amplifier":3},{"name":"resistance","chance":1,"duration":300,"amplifier":0},{"name":"fire_resistance","chance":1,"duration":300,"amplifier":0}]`, Chicken: `[{"name":"hunger","chance":0.3,"duration":30,"amplifier":0}]` | 
| is_meat | *not set* | String |  |  | 
| nutrition | *not set* | Integer number | Value that is added to the entity's nutrition when the item is used. Default is set to 0. | Apple: `4`, Baked Potato: `5`, Beef: `3` | 
| on_use_action | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  |  | 
| on_use_range | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  |  | 
| remove_effects | *not set* | Array of strings |  |  | 
| saturation_modifier | *not set* | Decimal number | saturation_modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Default is set to 0.6. | Apple: `0.3`, AppleEnchanted: `"supernatural"`, Baked Potato: `"normal"` | 
| using_converts_to | *not set* | String | When used, converts to the item specified by the string in this field. Default does not convert item. | Beetroot Soup: `"bowl"`, Honey Bottle: `"glass_bottle"` | 
| using_converts_to (Alternate 1) | *not set* | Keyed set of strings |  |  | 

## Effects item type

#### Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amplifier | *not set* | Decimal number |  | AppleEnchanted: `1` | 
| chance | *not set* | Decimal number |  | AppleEnchanted: `1` | 
| duration | *not set* | Decimal number |  | AppleEnchanted: `30` | 
| name | *not set* | String |  | AppleEnchanted: `"regeneration"` | 

## Samples


```json
"minecraft:food": {
  "can_always_eat": false,
  "nutrition": 3,
  "saturation_modifier": 0.6,
  "using_converts_to": "bowl"
}
```

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:food": {
  "nutrition": 4,
  "saturation_modifier": 0.3
}
```

#### [AppleEnchanted](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/appleEnchanted.json)


```json
"minecraft:food": {
  "nutrition": 4,
  "saturation_modifier": "supernatural",
  "can_always_eat": true,
  "effects": [
    {
      "name": "regeneration",
      "chance": 1,
      "duration": 30,
      "amplifier": 1
    },
    {
      "name": "absorption",
      "chance": 1,
      "duration": 120,
      "amplifier": 3
    },
    {
      "name": "resistance",
      "chance": 1,
      "duration": 300,
      "amplifier": 0
    },
    {
      "name": "fire_resistance",
      "chance": 1,
      "duration": 300,
      "amplifier": 0
    }
  ]
}
```

#### [Baked Potato](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/baked_potato.json)


```json
"minecraft:food": {
  "nutrition": 5,
  "saturation_modifier": "normal"
}
```

#### [Beef](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beef.json)


```json
"minecraft:food": {
  "nutrition": 3,
  "saturation_modifier": "low"
}
```

#### [Beetroot Soup](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beetroot_soup.json)


```json
"minecraft:food": {
  "nutrition": 6,
  "saturation_modifier": "normal",
  "using_converts_to": "bowl"
}
```

#### [Beetroot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beetroot.json)


```json
"minecraft:food": {
  "nutrition": 1,
  "saturation_modifier": "normal"
}
```

#### [Carrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/carrot.json)


```json
"minecraft:food": {
  "nutrition": 3,
  "saturation_modifier": "normal"
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/chicken.json)


```json
"minecraft:food": {
  "nutrition": 2,
  "saturation_modifier": "low",
  "effects": [
    {
      "name": "hunger",
      "chance": 0.3,
      "duration": 30,
      "amplifier": 0
    }
  ]
}
```

#### [Chorus Fruit](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/chorus_fruit.json)


```json
"minecraft:food": {
  "nutrition": 4,
  "saturation_modifier": "low",
  "on_use_action": "chorus_teleport",
  "on_use_range": [
    8,
    8,
    8
  ],
  "cooldown_type": "chorusfruit",
  "cooldown_time": 20,
  "can_always_eat": true
}
```

#### [Clownfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/clownfish.json)


```json
"minecraft:food": {
  "nutrition": 1,
  "saturation_modifier": "poor"
}
```

#### [Cooked Beef](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/cooked_beef.json)


```json
"minecraft:food": {
  "nutrition": 8,
  "saturation_modifier": "good"
}
```
