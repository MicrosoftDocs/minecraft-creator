---
author: docsbryce
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.circle_around_anchor
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.circle_around_anchor

`minecraft:behavior.circle_around_anchor` causes an entity to circle around an anchor point placed near a point or target.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| angle_change| 15.0| Decimal| Number of degrees to change this entity's facing by, when the entity selects its next anchor point. |
| goal_radius| 0.5| Decimal| Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot. |
| height_above_target_range| [ 0.0, 0.0 ]| Range [a, b]| The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target. |
| height_adjustment_chance| 0.002857| Decimal| Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%. "height_change_chance" is deprecated and has been replaced with "height_adjustment_chance". |
| height_offset_range| [ 0.0, 0.0 ]| Range [a, b]| Vertical distance from the anchor point this entity must stay within, upon a successful height adjustment. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| radius_adjustment_chance| 0.004| Decimal| Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%. "radius_change_chance" is deprecated and has been replaced with "radius_adjustment_chance". |
| radius_change| 1.0| Decimal| The number of blocks to increase the current movement radius by, upon successful "radius_adjustment_chance". If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement.. |
| radius_range| [ 5.0, 15.0 ]| Range [a, b]| Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment. |
| speed_multiplier| 1.0| Decimal| Multiplies the speed at which this entity travels to its next desired position. |

## Example

```json
"minecraft:behavior.circle_around_anchor": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

## Vanilla entities examples

### phantom

```json
"minecraft:behavior.circle_around_anchor": {
    "priority": 3,
    "radius_change": 1.0,
    "radius_adjustment_chance": 0.004,
    "height_adjustment_chance": 0.002857,
    "goal_radius": 1.0,
    "angle_change": 15.0,
    "radius_range": [ 5.0, 15.0 ],
    "height_offset_range": [ -4.0, 5.0 ],
    "height_above_target_range": [ 20.0, 40.0 ]
} 
```

## Vanilla entities using `circle_around_anchor`

- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
