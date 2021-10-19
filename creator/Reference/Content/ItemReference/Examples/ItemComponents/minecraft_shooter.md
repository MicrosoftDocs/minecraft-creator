---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:shooter
ms.prod: gaming
---

# Item Documentation - minecraft:shooter

`minecraft:shooter` sets the shooter item component.

>[!IMPORTANT]
> `minecraft:shooter` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|ammunition|*not set* |String|Sets the entity that is used as ammunition|
|charge_on_draw|false |Boolean|Sets if the item is charged when drawn|
|launch_power_scale|1.0|Float |Scale used for the launch power|
|max_draw_duration|0.0|Float | How long can it be drawn before it will release automatically|
|max_launch_power|1.0|Float |Launch power|
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
