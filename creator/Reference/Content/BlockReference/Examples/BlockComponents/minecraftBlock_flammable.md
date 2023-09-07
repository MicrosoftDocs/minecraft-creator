---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:flammable
description: "A reference document detailing the 'flammable' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:flammable

`minecraft:flammable` is a `Boolean` or `JSON Object` component that describes the flammable properties for this block. If set to `true`, default values are used. If set to `false`, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

## Default Value of the Component

This component can be specified as a `Boolean`. If this component is omitted, the default value for this component is `false` (the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited).

## Parameters

`minecraft:flammable` can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|`catch_chance_modifier`| 5| Integer| A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. For a `catch_chance_modifier` greater than 0, the fire will continue to burn until the block is destroyed (or it will burn forever if the "destroy_chance_modifier" is 0). If the `catch_chance_modifier` is 0, and the block is directly ignited, the fire will eventually burn out without destroying the block (or it will have a chance to be destroyed if `destroy_chance_modifier` is greater than 0). The default value of 5 is the same as that of Planks. |
|`destroy_chance_modifier`| 20| Integer| A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. For a `destroy_chance_modifier` of 0, the block will never be destroyed by fire, and the fire will burn forever if the `catch_chance_modifier` is greater than 0. The default value of 20 is the same as that of Planks. |

## Example (Boolean)

```json
"minecraft:flammable": true
```

## Example (JSON Object)

```json
"minecraft:flammable": {
     "catch_chance_modifier": 5,
     "destroy_chance_modifier": 20
}
```
