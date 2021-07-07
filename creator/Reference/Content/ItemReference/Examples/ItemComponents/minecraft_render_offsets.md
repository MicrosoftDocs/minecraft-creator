---
author: v-josjones
ms.author: v-josjones
title: minecraft:render_offsets
ms.prod: gaming
---

# minecraft:render_offsets

`minecraft:render_offsets` sets the render_offsets item component. Optional values can be given to offset the way the item is rendered.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|main_hand|*not set* |Vector [x,y,z]|Right hand transform data.|
|off_hand|*not set* |Vector [x,y,z]|Left hand transform data.|

## Example

```json
"minecraft:render_offsets":{
    "main_hand": [0,0,0],
    "off_hand":[0,0.5,0]
}
```
