---
author: mammerla
ms.author: mikeam
title: minecraft:bounds
ms.prod: gaming
---

# minecraft:bounds

`minecraft:bounds` is a Volume Component that is defined by three parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| dimension| *not set*| String| The name of the dimension the bounding box will exist in: one of 'overworld', 'nether' or 'the end'. |
| max| *not set*| Vector [a, b, c]| The maximum block position of the bounding box. |
| min| *not set*| Vector [a, b, c]| The minimum block position of the bounding box. |

## Default Parameter

|Default Value|Type |
|:----|:----|
|0.0| Decimal|

## Extra Parameters

`minecraft:bounds` does not use any extra parameters.

## Example

```json
"minecraft:bounds": {
  "dimension": "overworld",
  "min": [-50, 0, -50],
  "max": [50, 256, 50],
},
```
