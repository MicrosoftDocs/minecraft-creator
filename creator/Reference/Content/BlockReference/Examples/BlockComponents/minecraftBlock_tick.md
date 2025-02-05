---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:tick
description: "A reference document detailing the 'minecraft:tick' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:tick

`minecraft:tick` is a block component which causes the block to tick based on a regular interval equal to a number of ticks randomly chosen from the `internal_range` parameter. This ticking will send the `onTick` event to blocks with custom components subscribed for the event.

[Custom components](../../../../../Documents/CustomComponents.md) listening to the `onTick` event that are added to a block that does not have the `minecraft:tick` component will cause a content error.

## Parameters

| Name | Default Value | Type | Description |
|:----|:----|:----|:----|
| interval_range | [ 0, 0 ] | JSON Array | A range of values, specified in ticks, to decide the next tick interval for a block. After each block tick, a new value will be chosen from within the range to determine the next tick interval. If the values in the interval_range are the same, the block will always be ticked after that number of ticks. The first value must be lower or equal to the second value in the array. |
| looping | true | Boolean | If false, the block will only be ticked once after a delay equal to a number of ticks randomly chosen from the interval_range and no further ticking will occur. If true, after the block ticks, a new random value will be chosen from the interval_range for when the block will tick again. |

## Example

```json
"miencraft:tick" {
    "interval_range": [ 20, 60 ], // ticks randomly between 1 and 3 seconds
    "looping": 
}
```
