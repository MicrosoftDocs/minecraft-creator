---
author: v-josjones
ms.author: v-josjones
title: minecraft:armor
ms.prod: gaming
---

# minecraft:armor

`minecraft:armor` determines the amount of protection you have in your armor item.


> [!NOTE]
> When making Horse armor, you are restricted to leather, iron, gold, or diamond.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|Protection|*not set* |Integer |How much protection does the armor item have.|
|texture_type |*not set*  | String | Texture Type to apply for the armor.|

## Example

```json
"minecraft:armor":{
    "protection": 5,
    "texture_type" : "diamond"
}
```
