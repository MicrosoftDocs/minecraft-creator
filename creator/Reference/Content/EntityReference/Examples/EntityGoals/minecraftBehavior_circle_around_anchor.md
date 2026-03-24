---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.circle_around_anchor"
description: "Describes the minecraft:behavior.circle_around_anchor ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.circle_around_anchor

Causes an entity to circle around an anchor point placed near a point or target.


## Entity Circle Around Anchor Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_change | 15 | Decimal number | Number of degrees to change this entity's facing by, when the entity selects its next anchor point. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| goal_radius | 0.5 | Decimal number | Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. | Phantom: `1` | 
| height_above_target_range | {"max":0,"min":0} | [Height Above Target Range](#item-components-floatrange) item | The number of blocks above the target that the next anchor point can be set. | Phantom: `{"min":20,"max":40}` | 
| height_adjustment_chance | 0.0028570001013576984 | Decimal number | Percent chance to determine how often to increase or decrease the current height around the anchor point. |  | 
| height_offset_range | {"max":0,"min":0} | [Height Offset Range](#item-components-floatrange) item | Vertical distance from the anchor point this entity must stay within, upon a successful height adjustment. | Phantom: `{"min":-4,"max":5}` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Phantom: `3` | 
| radius_adjustment_chance | 0.004000000189989805 | Decimal number | Percent chance to determine how often to increase the size of the current movement radius around the anchor point. |  | 
| radius_change | 1 | Decimal number | The number of blocks to increase the current movement radius by, upon successful "radius_adjustment_chance". |  | 
| radius_range | {"max":15,"min":5} | [Radius Range](#item-components-floatrange) item | Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment. |  | 
| speed_multiplier | 1 | Decimal number | Multiplies the speed at which this entity travels to its next desired position. |  | 

### goal_radius

Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot.

### height_above_target_range

The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target.  Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected.

### height_adjustment_chance

Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%. "height_change_chance" is deprecated and has been replaced with "height_adjustment_chance".

### radius_adjustment_chance

Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%. "radius_change_chance" is deprecated and has been replaced with "radius_adjustment_chance".

### radius_change

The number of blocks to increase the current movement radius by, upon successful "radius_adjustment_chance". If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement.

### radius_range

Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment.  Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `height_above_target_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples

#### [Phantom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json)


```json
"minecraft:behavior.circle_around_anchor": {
  "goal_radius": 1,
  "height_offset_range": {
    "min": -4,
    "max": 5
  },
  "height_above_target_range": {
    "min": 20,
    "max": 40
  },
  "priority": 3
}
```
