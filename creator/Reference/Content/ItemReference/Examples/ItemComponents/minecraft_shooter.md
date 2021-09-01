---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:shooter
ms.prod: gaming
---

# Item Documentation - minecraft:shooter

`minecraft:shooter` sets the shooter item component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|ammunition|*not set* |String|Sets the entity that is used as ammunition|
|charge_on_draw|false |Boolean|Sets if the item is charged when drawn|
|launch_power_scale|1.0|Decimal|Scale used for the launch power|
|max_draw_duration|0.0|Decimal| How long can it be drawn before it will release automatically|
|max_launch_power|1.0|Decimal|Launch power|
|scale_power_by_draw_duration|false|Boolean|Scale the power by draw duration? When true, the longer you hold, the more power it will have when released.|

## Example

```json
"minecraft:shooter":{
    "ammunition" : "arrow",
    "charge_on_draw" : false,
    "launch_power_scale" : 1.0,
    "max_draw_duration" : 0.0,
    "max_launch_power" : 1.0,
    "scale_power_by_draw_duration" : false
}
```
