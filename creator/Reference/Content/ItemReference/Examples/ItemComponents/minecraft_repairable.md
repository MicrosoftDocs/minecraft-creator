---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:repairable"
description: "Describes the minecraft:repairable item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:repairable

Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. Each entry needs to define a list of strings for 'items' that can be used for the repair and an optional 'repair_amount' for how much durability is repaired.


## Minecraft Repairable Item Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| repair_items | *not set* | String | List of repair item entries. Each entry needs to define a list of strings for `items` that can be used for the repair and an optional `repair_amount` for how much durability is gained. | Chestplate: `[{"items":["minecraft:stick"],"repair_amount":"context.other->query.remaining_durability + 0.05 * context.other->query.max_durability"}]`, My Sword Chuck: `[{"items":["minecraft:diamond"],"repair_amount":"query.max_durability * 0.25"}]` | 
| repair_items (Alternate 1) | *not set* | [Repair Items (Alternate 1)](#repair-items-alternate-1-item-type) item |  |  | 

## Repair Items (Alternate 1) item type

#### Repair Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| items | *not set* | String | Items that may be used to repair an item. |  | 
| items (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| repair_amount | *not set* | Keyed set of strings | How much the item is repaired. |  | 
| repair_amount (Alternate 1) | *not set* | Key/item pairs of [Repair Amount (Alternate 1)](#repair-amount-alternate-1-item-type) items |  |  | 
| repair_amount (Alternate 2) | *not set* | Decimal number |  |  | 

## Repair Amount (Alternate 1) item type

#### Repair Amount Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Samples


```json
"minecraft:repairable": {
  "on_repaired": "minecraft:celebrate",
  "repair_items": [
    "anvil"
  ]
}
```

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
"minecraft:repairable": {
  "repair_items": [
    {
      "items": [
        "minecraft:stick"
      ],
      "repair_amount": "context.other->query.remaining_durability + 0.05 * context.other->query.max_durability"
    }
  ]
}
```

#### [My Sword Chuck](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_chuck.json)


```json
"minecraft:repairable": {
  "repair_items": [
    {
      "items": [
        "minecraft:diamond"
      ],
      "repair_amount": "query.max_durability * 0.25"
    }
  ]
}
```
