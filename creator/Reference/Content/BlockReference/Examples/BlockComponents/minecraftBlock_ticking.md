---
author: v-josjones
ms.author: v-josjones
title: minecraft:ticking
ms.prod: gaming
---

# minecraft:ticking

`minecraft:ticking` is a component controlled by a `JSON object` that describes how the component will trigger an even at a regular interval between two values.

## Extra Parameters

`minecraft:ticking` can use the following parameters that are fired on-tick.

### Trigger

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition| 1| String| The condition of event to be executed on the block. |
|event| set_block_property| String|  The type of event executed on the block. |
|range| [10, 10]| Array|  The Range between which the component will trigger his event. |
|target| self| String| The target of event executed on the block. |

`minecraft:ticking` can also adjust the range and looping parameters.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|looping| true| Boolean| Does the event loop |
|range| [10, 10]| Array| The Range between which the component will trigger its event. |

## Example

```json
"minecraft:ticking":{
    "condition": 1,
    "event": "minecraft:redstone_signal", //custom
    "range": [10,10],
    "target": "self",
    "looping": true,
}
```
