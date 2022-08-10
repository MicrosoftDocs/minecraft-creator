---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:destructible_by_explosion
ms.prod: gaming
---

# Block Documentation - minecraft:destructible_by_explosion

`minecraft:destructible_by_explosion` is a `Boolean` or `JSON Object` component determines whether this block can be destroyed by explosions, and can be specified as either a boolean or an object.

## Default Parameter

|Default Value|Type |
|:----|:----|
|true| Boolean|

## Extra Parameters

| Name| Type | Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| explosion_resistance| Decimal | 0.0| Describes how resistant the block is to explosion. Greater values mean the block is less likely to break when near an explosion. The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode. |


## Boolean Example

```json
"minecraft:destructible_by_explosion": true
```

## Object example

```json
"minecraft:destructible_by_explosion": {
    "explosion_resistance": 0
}
```
