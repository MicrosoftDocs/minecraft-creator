---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:entity_fall_on
description: "A reference document detailing the 'entity_fall_on' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:entity_fall_on

`minecraft:entity_fall_on` is a block component which configures what distance an entity must fall onto this block to cause the `onEntityFallOn` block custom component event to be sent to script.

Custom components subscribed to the `onEntityFallOn` event on a block without the `minecraft:entity_fall_on` component use the default fall distance of 1 block.

## Parameters

| Name | Default Value | Type | Description |
|:----|:----|:----|:----|
| minimum_fall_distance | 0.0 | Float | The minimum distance in blocks that an entity needs to fall before events are raised. |

## Example

```json
"minecraft:entity_fall_on" {
    "minimum_fall_distance": 2.0
}
```
