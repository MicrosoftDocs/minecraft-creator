---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:flammable
ms.prod: gaming
---

# Block Documentation - minecraft:flammable

`minecraft:flammable` is a component controlled by a `JSON object` that describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Extra Parameters

`minecraft:flammable` can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|`catch_chance_modifier`| Integer| 5| A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. For a `catch_chance_modifier` greater than 0, the fire will continue to burn until the block is destroyed (or it will burn forever if the "destroy_chance_modifier" is 0). If the `catch_chance_modifier` is 0, and the block is directly ignited, the fire will eventually burn out without destroying the block (or it will have a chance to be destroyed if `destroy_chance_modifier` is greater than 0). The default value of 5 is the same as that of Planks. |
|`destroy_chance_modifier`| Integer| 20| A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. For a `destroy_chance_modifier` of 0, the block will never be destroyed by fire, and the fire will burn forever if the `catch_chance_modifier` is greater than 0. The default value of 20 is the same as that of Planks. |

## Example

```json
"minecraft:flammable":{
    "burn_odds": 0,
    "flame_odds": 0
}
```
