---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:enchantable
description: "A reference document detailing the 'enchantable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:enchantable

`minecraft:enchantable` determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|slot|*not set* | String| What enchantments can be applied (ex. Using `bow` would allow this item to be enchanted as if it were a bow).|
|value |*not set* |--| The value of the enchantment (minimum of 0).|

### slot

Here are the following enchantment slots that can be set for the value of `slot`.

- sword
- bow
- armor_head
- armor_torso
- armor_legs
- armor_feet

- ## Example

```json
"minecraft:enchantable": {
  "value": 10,
  "slot": "armor_torso"
}
```
