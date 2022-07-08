---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:flammable
ms.prod: gaming
---

# Block Documentation - minecraft:flammable

`minecraft:flammable` is a component controlled by a `JSON object` that describes the flammable properties for this block. If set to true, default values are used. If set to false, this block will not be able to catch on fire. If this component is omitted, the block will not be able to catch on fire naturally from neighbors or lava, but it can still be directly ignited, and that fire will be able to spread to neighbor blocks

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Extra Parameters

`minecraft:flammable` can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|burn_odds| 0| Integer| How likely the block will be destroyed by flames when on fire. Value must be greater than or equal to 0.|
|flame_odds| 0| Integer| How likely the block will catch flame when next to a fire. Value must be greater than or equal to 0.|
|catch_chance_modifier| Integer| 5| A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. The default value of 5 is the same as that of Planks. |
|destroy_chance_modifier| Integer| 20| A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. The default value of 20 is the same as that of Planks. |

## Example

```json
"minecraft:flammable":{
    "burn_odds": 0,
    "flame_odds": 0
}
```
