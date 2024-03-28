---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:cooldown
description: "A reference document detailing the 'cooldown' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:cooldown

`minecraft:cooldown` sets an items "Cool down" time. After using an item, it becomes unusable for the duration specified by the 'duration' setting of this component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category|*not set* |JSON Object | The type of cool down for this item.|
|duration |*not set*  |Float | The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again.|

## Example

```json
"minecraft:cooldown":{
    "category" : "attack",
    "duration" : 0.2
}
```
