---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:destructible_by_mining
ms.prod: gaming
---

# Block Documentation - minecraft:destructible_by_mining

`minecraft:destructible_by_mining` is a `Boolean` or `JSON Object` component that describes the destructible by mining properties for this block. If set to true, the block will have the default destroy time. If set to false, this block is indestructible by mining. If the component is omitted, the block will have the default destroy time.

## Default Parameter

|Default Value|Type |
|:----|:----|
|true| Boolean|

## Extra Parameters

| Name| Type | Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| seconds_to_destroy| Decimal | 0.0| Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times. |

## Example

```json
"minecraft:destructible_by_mining": 0.0
```
