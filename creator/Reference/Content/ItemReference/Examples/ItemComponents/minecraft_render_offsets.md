---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:render_offsets
ms.prod: gaming
---

# Item Documentation - minecraft:render_offsets

`minecraft:render_offsets` sets the render_offsets item component. Optional values can be given to offset the way the item is rendered.

>[!IMPORTANT]
> `minecraft:render_offsets` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|main_hand|[0,0,0] |Vector [x,y,z]|Right hand transform data.|
|off_hand|[0,0,0] |Vector [x,y,z]|Left hand transform data.|

## Example

```json
"minecraft:render_offsets":{
    "main_hand": [0,0,0],
    "off_hand":[0,0.5,0]
}
```
