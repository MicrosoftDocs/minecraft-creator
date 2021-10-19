---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:throwable
ms.prod: gaming
---

# Item Documentation - minecraft:throwable

`minecraft:throwable` sets the throwable item component.

>[!IMPORTANT]
> `minecraft:throwable` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|do_swing_animation|false |Boolean|Whether the item should use the swing animation when thrown.|
|launch_power_scale|1.0|Float |The scale at which the power of the throw increases|
|max_draw_duration|0.0|Float | The maximum duration to draw a throwable item.|
|max_launch_power|1.0|Float |The maximum power to launch the throwable item.|
|min_draw_duration|0.0|Float |The minimum duration to draw a throwable item.|
|scale_power_by_draw_duration|false|Boolean|Whether or not the power of the throw increases with duration charged. When true, The longer you hold, the more power it will have when released.|

## Example

```json
"minecraft:throwable":{
    "do_swing_animation" : false,
    "launch_power_scale" : 1.0,
    "max_draw_duration" : 0.0,
    "max_launch_power" : 1.0,
    "min_draw_duration" : 0.0,
    "scale_power_by_draw_duration" : false
}
```
