---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.circle_around_anchor"
description: "Describes the minecraft:behavior.circle_around_anchor ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.circle_around_anchor

Causes an entity to circle around an anchor point placed near a point or target.


## Circle Around Anchor Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_change | 15 | Decimal number | Number of degrees to change this entity's facing by, when the entity selects its next anchor point. | Phantom: `15` | 
| goal_radius | 0.5 | Decimal number | Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot. | Phantom: `1` | 
| height_above_target_range | *not set* | Range of integers | The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target. | Phantom: `[20,40]` | 
| height_adjustment_chance | 0.002857 | Decimal number | Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%. "height_change_chance" is deprecated and has been replaced with "height_adjustment_chance". | Phantom: `0.002857` | 
| height_offset_range | *not set* | Range of integers | Vertical distance from the anchor point this entity must stay within, upon a successful height adjustment. | Phantom: `[-4,5]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Phantom: `3` | 
| radius_adjustment_chance | 0.004 | Decimal number | Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%. "radius_change_chance" is deprecated and has been replaced with "radius_adjustment_chance". | Phantom: `0.004` | 
| radius_change | 1 | Decimal number | The number of blocks to increase the current movement radius by, upon successful "radius_adjustment_chance". If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement.. | Phantom: `1` | 
| radius_range | *not set* | Range of integers | Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment. | Phantom: `[5,15]` | 
| speed_multiplier | 1 | Decimal number | Multiplies the speed at which this entity travels to its next desired position. |  | 

## Samples

#### [Phantom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json)


```json
"minecraft:behavior.circle_around_anchor": {
  "priority": 3,
  "radius_change": 1,
  "radius_adjustment_chance": 0.004,
  "height_adjustment_chance": 0.002857,
  "goal_radius": 1,
  "angle_change": 15,
  "radius_range": [
    5,
    15
  ],
  "height_offset_range": [
    -4,
    5
  ],
  "height_above_target_range": [
    20,
    40
  ]
}
```
