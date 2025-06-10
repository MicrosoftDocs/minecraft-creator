---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:inventory"
description: "Describes the minecraft:inventory entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:inventory

Defines this entity's inventory properties.


## Inventory Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| additional_slots_per_strength | 0 | Integer number | Number of slots that this entity can gain per extra strength | Llama: `3` | 
| can_be_siphoned_from | false | Boolean true/false | If true, the contents of this inventory can be removed by a hopper | Chest Boat: `true` | 
| container_type | none | String | Type of container this entity has. Can be horse, minecart_chest, chest_boat, minecart_hopper, inventory, container or hopper | Camel: `"horse"`, Chest Boat: `"chest_boat"`, Chest Minecart: `"minecart_chest"` | 
| inventory_size | 5 | Integer number | Number of slots the container has | Allay: `1`, Chest Boat: `27`, Donkey: `16` | 
| private | false | Boolean true/false | If true, the entity will not drop its inventory on death | Panda: `true` | 
| restrict_to_owner | false | Boolean true/false | If true, the entity's inventory can only be accessed by its owner or itself |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:inventory": {
  "inventory_size": 1
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:inventory": {
  "container_type": "horse"
}
```

#### [Chest Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_boat.json)


```json
"minecraft:inventory": {
  "container_type": "chest_boat",
  "inventory_size": 27,
  "can_be_siphoned_from": true
}
```

#### [Chest Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_minecart.json)


```json
"minecraft:inventory": {
  "container_type": "minecart_chest",
  "inventory_size": 27,
  "can_be_siphoned_from": true
}
```

#### [Command Block Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/command_block_minecart.json)


```json
"minecraft:inventory": {}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:inventory": {
  "inventory_size": 16,
  "container_type": "horse"
}
```

#### [Hopper Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hopper_minecart.json)


```json
"minecraft:inventory": {
  "container_type": "minecart_hopper",
  "inventory_size": 5,
  "can_be_siphoned_from": true
}
```

#### [Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/horse.json)


```json
"minecraft:inventory": {
  "inventory_size": 2,
  "container_type": "horse"
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:inventory": {
  "inventory_size": 16,
  "container_type": "horse",
  "additional_slots_per_strength": 3
}
```

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:inventory": {
  "inventory_size": 1,
  "private": true
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:inventory": {
  "inventory_size": 8
}
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:inventory": {
  "inventory_size": 8,
  "private": true
}
```
