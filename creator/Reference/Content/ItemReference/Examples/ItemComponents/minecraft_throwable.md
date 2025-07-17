---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:throwable"
description: "Describes the minecraft:throwable item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:throwable

Sets the throwable item component.


## Minecraft Throwable Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| do_swing_animation | *not set* | Boolean true/false | Determines whether the item should use the swing animation when thrown. Default is set to false. | Wind Charge: `true` | 
| launch_power_scale | *not set* | Decimal number | The scale at which the power of the throw increases. Default is set to 1.0. | Wind Charge: `1.5`, My Sword Chuck: `1` | 
| max_draw_duration | *not set* | Decimal number | The maximum duration to draw a throwable item. Default is set to 0.0. |  | 
| max_launch_power | *not set* | Decimal number | The maximum power to launch the throwable item. Default is set to 1.0. | Wind Charge: `1.5`, My Sword Chuck: `1` | 
| min_draw_duration | *not set* | Decimal number | The minimum duration to draw a throwable item. Default is set to 0.0. |  | 
| scale_power_by_draw_duration | *not set* | Boolean true/false | Whether or not the power of the throw increases with duration charged. Default is set to false. |  | 

## Samples

#### [Wind Charge](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/wind_charge.json)


```json
"minecraft:throwable": {
  "do_swing_animation": true,
  "launch_power_scale": 1.5,
  "max_launch_power": 1.5
}
```

#### [My Sword Chuck](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_chuck.json)


```json
"minecraft:throwable": {
  "do_swing_animation": true,
  "launch_power_scale": 1,
  "max_draw_duration": 0,
  "max_launch_power": 1,
  "min_draw_duration": 0,
  "scale_power_by_draw_duration": false
}
```
