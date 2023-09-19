---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:fuel
description: "A reference document detailing the 'fuel' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:fuel

`minecraft:fuel` allows this item to be used as fuel in a furnace to 'cook' other items.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|duration|*not set* |Float |How long in seconds will this fuel cook items for. Minimum value: 0.05. |

## Example

```json
"minecraft:fuel":{
    "duration": 3.0
}
```
