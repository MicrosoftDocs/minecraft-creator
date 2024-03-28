---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:destructible_by_explosion
description: "A reference document detailing the 'destructible_by_explosion' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:destructible_by_explosion

`minecraft:destructible_by_explosion` is a `Boolean` or `JSON Object` component that describes the destructible by explosion properties for this block. If set to `true`, the block will have the default explosion resistance. If set to `false`, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.

## Default Value of the Component

This component can be specified as a `Boolean`. If this component is omitted, the default value for this component is `true`, which will give your block the default values for its parameters (ZERO explosion resistance so your block will be destroyed right away when near an explosion).

## Parameters

|Name |Default Value |Type |Description|
|:----|:----|:----|:----|
|explosion_resistance|0.0| Decimal|Describes how resistant the block is to explosion. Greater values mean the block is less likely to break when near an explosion (or has higher resistance to explosions). The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance.|

## Example (Boolean)

```json
"minecraft:destructible_by_explosion": true
```

## Example (JSON Object)

```json
"minecraft:destructible_by_explosion": {
    "explosion_resistance": 50
}
```
