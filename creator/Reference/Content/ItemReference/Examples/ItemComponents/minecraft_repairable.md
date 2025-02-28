---
author: mammerla
ms.author: mikeam
title: "Items Documentation - repairable"
description: "Describes the repairable Items"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - repairable

Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. Each entry needs to define a list of strings for 'items' that can be used for the repair and an optional 'repair_amount' for how much durability is repaired.


## Repairable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| repair_items | *not set* | Array of objects | List of repair item entries. Each entry needs to define a list of strings for `items` that can be used for the repair and an optional `repair_amount` for how much durability is gained. | Chestplate: `[{"items":["minecraft:stick"],"repair_amount":"context.other->query.remaining_durability + 0.05 * context.other->query.max_durability"}]`, My Sword Chuck: `[{"items":["minecraft:diamond"],"repair_amount":"query.max_durability * 0.25"}]` | 

## Samples

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
{
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

#### [My Boots](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_boots.json)


```json
{
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

#### [My Helm](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_helm.json)


```json
{
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

#### [My Leggings](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_leggings.json)


```json
{
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
{
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

#### [My Sword Shoot](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_shoot.json)


```json
{
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

#### [My Sword Turtle](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_turtle.json)


```json
{
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
