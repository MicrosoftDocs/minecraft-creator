---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:destructible_by_mining
description: "A reference document detailing the 'destructible_by_mining' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:destructible_by_mining

`minecraft:destructible_by_mining` is a `Boolean` or `JSON Object` component that describes the destructible by mining properties for this block. If set to `true`, the block will take the default number of seconds to destroy. If set to `false`, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.

## Default Value of the Component

This component can be specified as a `Boolean`. If this component is omitted, the default value for this component is `true`, which will give your block the default values for its parameters (it will take ZERO seconds to destroy the block by mining it).

## Parameters

| Name| Type | Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| seconds_to_destroy| Decimal | 0.0| Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times. |

## Example (Boolean)

```json
"minecraft:destructible_by_mining": true
```

## Example (JSON Object)

```json
"minecraft:destructible_by_mining": {
    "seconds_to_destroy": 10
}
```
