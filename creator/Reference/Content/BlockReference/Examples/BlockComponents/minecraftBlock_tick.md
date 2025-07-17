---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:tick"
description: "Describes the minecraft:tick block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:tick

Causes the block to tick based on a regular interval equal to a number of ticks randomly chosen from the internal_range parameter. This ticking will send the onTick event to blocks with custom components subscribed for the event. Custom components listening to the onTick event that are added to a block that does not have the minecraft:tick component will cause a content error.


## Tick Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval_range | [0, 0] | Array of numbers | A range of values, specified in ticks, to decide the next tick interval for a block. After each block tick, a new value will be chosen from within the range to determine the next tick interval. If the values in the interval_range are the same, the block will always be ticked after that number of ticks. The first value must be lower or equal to the second value in the array. | Tick Every 1 To 3 Seconds: `[20,60]` | 
| looping | true | Boolean true/false | If false, the block will only be ticked once after a delay equal to a number of ticks randomly chosen from the interval_range and no further ticking will occur. If true, after the block ticks, a new random value will be chosen from the interval_range for when the block will tick again. | Tick Every 1 To 3 Seconds: `true` | 

## Samples

#### [Tick Every 1 To 3 Seconds](Tick every 1 to 3 seconds)


```json
"minecraft:tick": {
  "interval_range": [
    20,
    60
  ],
  "looping": true
}
```
