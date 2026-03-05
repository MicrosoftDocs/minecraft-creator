---
author: mammerla
ms.author: mikeam
title: "camera Command"
description: "Description and usage of the /camera command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/camera` Command

Transforms the camera for the selected player(s) to a different perspective.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**set**](#set) (28 variants) — Applies a camera preset to the selected players, with optional position, rotation, easing, and offset settings.
- [**attach_to_entity**](#attach_to_entity) — Attaches the camera to an entity so it follows that entity's movement.
  `/camera <players: target> attach_to_entity <entity: target>`
- [**detach_from_entity**](#detach_from_entity) — Detaches the camera from an entity it was previously attached to.
  `/camera <players: target> detach_from_entity`
- [**targetEntity**](#targetentity) (2 variants) — Sets a target entity that the camera should continuously look at while maintaining its current position.
- [**removeTarget**](#removetarget) — Removes the camera's target entity, so the camera no longer tracks any entity.
  `/camera <players: target> removeTarget`
- [**clear**](#clear) — Clears all active camera changes and returns to the default camera.
  `/camera <players: target> clear`
- [**fade**](#fade) (4 variants) — Applies a screen fade effect with optional timing and color.
- [**fov_set**](#fov_set) — Sets a custom field of view with optional easing.
  `/camera <players: target> fov_set <fov_value: float> [fovEaseTime: float] [fovEaseType: Easing]`
- [**fov_clear**](#fov_clear) — Resets the field of view back to the default value.
  `/camera <players: target> fov_clear [fovEaseTime: float] [fovEaseType: Easing]`

## set

Applies a camera preset to the selected players, with optional position, rotation, easing, and offset settings.

**Syntax variants:**

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> default`

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtEntity: target>`

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtPosition: x y z>`

`/camera <players: target> set <preset: CameraPresets> view_offset <xViewOffset: float> <yViewOffset: float>`

`/camera <players: target> set <preset: CameraPresets> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float>`

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z>`

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation>`

`/camera <players: target> set <preset: CameraPresets> facing <lookAtEntity: target>`

`/camera <players: target> set <preset: CameraPresets> facing <lookAtPosition: x y z>`

`/camera <players: target> set <preset: CameraPresets> default`

### With ease

#### Sets camera with easing overrides and initial position and x/y rotation

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with a specified preset and a fixed x/y rotation.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |

**Examples:**

Move the free camera to (100,80,100) facing south over 2 seconds:

```
/camera @s set minecraft:free ease 2 linear pos 100 80 100 rot 0 180
```

Cinematic camera sweep for all players:

```
/camera @a set minecraft:free ease 3 in_out_cubic pos 0 100 0 rot -45 90
```

#### Sets camera with easing overrides and initial position, looking at a selected entity

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with a specified preset while looking at a selected entity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |
| lookAtEntity | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector to use for looking at an entity. |

#### Sets camera with easing overrides and a initial position, looking at a particular position

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>`

Sets a camera with a specified preset while looking at a particular position.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |
| lookAtPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A position to look at. |

#### Sets camera with easing overrides and a position

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z>`

Sets a camera with a specified preset, easing, and position.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |

#### Sets camera with easing overrides and rotation

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with a specified preset and rotation.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |

#### Sets camera with easing overrides and looking at an entity

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>`

Sets a camera with a specified easing and time, facing an entity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| lookAtEntity | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector to use for looking at an entity. |

#### Sets camera looking at a position, with easing

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>`

Sets a camera with a specified easing and time, facing a position.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| lookAtPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A position to look at. |

#### Sets camera with an easing

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> default`

Sets a camera with a specified easing.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |

#### Timed color-tinted fade

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float>`

Applies a color tinted fade for the specified fade in, hold, and out time periods.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |

#### Timed fade

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

Applies a fade for the specified fade in, hold, and out time periods.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

#### Color-tinted fade

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float>`

Applies a color-tinted fade for the selected player(s).

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |

#### Fade

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

Applies a fade for the selected player(s).

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

#### With preset, ease, easeTime, easeType, view_offset, xViewOffset, yViewOffset, entity_offset, xEntityOffset, yEntityOffset, zEntityOffset

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

#### With preset, ease, easeTime, easeType, rot, xRot, yRot, view_offset, xViewOffset, yViewOffset, entity_offset, xEntityOffset, yEntityOffset, zEntityOffset

`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| easeTime | [Value](../CommandTypes/type_val.md) | Required | Specified time for the easing. |
| easeType | Easing | Required | Specified type of the easing to use. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

### With pos

#### Sets camera with a position and rotation

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with an override position and a specific x/y rotation.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |

#### Set camera with override facings, looking at an entity

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with override positions and facing at a particular entity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |
| lookAtEntity | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector to use for looking at an entity. |

#### Set camera with override facings, looking at a position

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtPosition: x y z>`

Sets a camera with override positions facing a particular position.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |
| lookAtPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A position to look at. |

#### With preset, pos, position

`/camera <players: target> set <preset: CameraPresets> pos <position: x y z>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | The position to locate the camera at. |

### With view_offset

#### Sets a camera from a position

`/camera <players: target> set <preset: CameraPresets> view_offset <xViewOffset: float> <yViewOffset: float>`

Sets a camera from a position.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |

#### Fade

`/camera <players: target> set <preset: CameraPresets> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

Specifies a general camera fade-out.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

### With entity_offset

#### Camera facing rotation

`/camera <players: target> set <preset: CameraPresets> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

Specifies a camera with a particular rotatoin.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

### With rot

#### Fade out to times

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float>`

Specifies a camera timed fade-out type operation.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |

#### Camera preset facing/looking at a position

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

Specifies a camera looking at a particular position.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

#### Clear

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float> entity_offset <xEntityOffset: float> <yEntityOffset: float> <zEntityOffset: float>`

Clears any active camera changes for the player.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |
| xViewOffset | [Value](../CommandTypes/type_val.md) | Required | X component of a view offset |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Required | Y component of a view offset |
| xEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| yEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |
| zEntityOffset | [Value](../CommandTypes/type_val.md) | Required |  |

#### With preset, rot, xRot, yRot

`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | x Rotation value |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | Required | y Rotation value |

### With facing

#### With preset, facing

`/camera <players: target> set <preset: CameraPresets> facing <lookAtEntity: target>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| lookAtEntity | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector to use for looking at an entity. |

#### With preset, facing, lookAtPosition

`/camera <players: target> set <preset: CameraPresets> facing <lookAtPosition: x y z>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |
| lookAtPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | Required | A position to look at. |

### With default

#### With preset, default

`/camera <players: target> set <preset: CameraPresets> default`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| preset | CameraPresets | Required | A camera preset defined in a camera JSON file. |

## attach_to_entity

Attaches the camera to an entity so it follows that entity's movement.

### Attach camera to entity

`/camera <players: target> attach_to_entity <entity: target>`

Attaches the camera to an entity so it follows that entity's position and movement.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | The target entity to attach to or focus on. |

## detach_from_entity

Detaches the camera from an entity it was previously attached to.

### Detach camera from entity

`/camera <players: target> detach_from_entity`

Detaches the camera from an entity it was previously attached to, returning to default behavior.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |

## targetEntity

Sets a target entity that the camera should continuously look at while maintaining its current position.

### Set camera to look at entity

`/camera <players: target> targetEntity <entity: target>`

Sets a target entity that the camera continuously looks at.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | The target entity to attach to or focus on. |

### Set camera to look at entity with offset

`/camera <players: target> targetEntity <entity: target> targetCenterOffset <xTargetCenterOffset: float> <yTargetCenterOffset: float> <zTargetCenterOffset: float>`

Sets a target entity with an offset from the entity's center for the camera to look at.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | The target entity to attach to or focus on. |
| xTargetCenterOffset | [Value](../CommandTypes/type_val.md) | Required | X offset from the center of a targeted entity |
| yTargetCenterOffset | [Value](../CommandTypes/type_val.md) | Required | Y offset from the center of a targeted entity |
| zTargetCenterOffset | [Value](../CommandTypes/type_val.md) | Required | Z offset from the center of a targeted entity |

## removeTarget

Removes the camera's target entity, so the camera no longer tracks any entity.

### Remove camera target

`/camera <players: target> removeTarget`

Removes the camera's current target entity so it no longer tracks any entity.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |

## clear

Clears all active camera changes and returns to the default camera.

### Basic usage

`/camera <players: target> clear`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |

## fade

Applies a screen fade effect with optional timing and color.

### With time, fadeInSeconds, holdSeconds, fadeOutSeconds, color, red, green, blue

`/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| fadeInSeconds | [Value](../CommandTypes/type_val.md) | Required | Specifies a fade-in time value. |
| holdSeconds | [Value](../CommandTypes/type_val.md) | Required | Specifies the amount of time to hold the camera view. |
| fadeOutSeconds | [Value](../CommandTypes/type_val.md) | Required | Specifies the number of seconds to fade out the camera. |
| red | [Integer](../CommandTypes/type_int.md) | Required | Red component of a color value. Valid values are between 0 and 255. |
| green | [Integer](../CommandTypes/type_int.md) | Required | Green component of a color value. Valid values are between 0 and 255. |
| blue | [Integer](../CommandTypes/type_int.md) | Required | Blue component of a color value. Valid values are between 0 and 255. |

### With time, fadeInSeconds, holdSeconds, fadeOutSeconds

`/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| fadeInSeconds | [Value](../CommandTypes/type_val.md) | Required | Specifies a fade-in time value. |
| holdSeconds | [Value](../CommandTypes/type_val.md) | Required | Specifies the amount of time to hold the camera view. |
| fadeOutSeconds | [Value](../CommandTypes/type_val.md) | Required | Specifies the number of seconds to fade out the camera. |

### With color, red, green, blue

`/camera <players: target> fade color <red: int> <green: int> <blue: int>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| red | [Integer](../CommandTypes/type_int.md) | Required | Red component of a color value. Valid values are between 0 and 255. |
| green | [Integer](../CommandTypes/type_int.md) | Required | Green component of a color value. Valid values are between 0 and 255. |
| blue | [Integer](../CommandTypes/type_int.md) | Required | Blue component of a color value. Valid values are between 0 and 255. |

### Basic usage

`/camera <players: target> fade`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |

## fov_set

Sets a custom field of view with optional easing.

### With fov_value, fovEaseTime, fovEaseType

`/camera <players: target> fov_set <fov_value: float> [fovEaseTime: float] [fovEaseType: Easing]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| fov_value | [Value](../CommandTypes/type_val.md) | Required |  |
| fovEaseTime | [Value](../CommandTypes/type_val.md) | Optional |  |
| fovEaseType | Easing | Optional |  |

## fov_clear

Resets the field of view back to the default value.

### With fovEaseTime, fovEaseType

`/camera <players: target> fov_clear [fovEaseTime: float] [fovEaseType: Easing]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required | A target selector of players. |
| fovEaseTime | [Value](../CommandTypes/type_val.md) | Optional |  |
| fovEaseType | Easing | Optional |  |

## Examples

### Smoothly move the camera to a position looking south

```
/camera @s set minecraft:free ease 2 linear pos 100 80 100 rot 0 180
```

### Set the camera at a position looking at world origin

```
/camera @s set minecraft:free pos 50 100 50 facing 0 64 0
```

### Transition to free camera with smooth easing

```
/camera @s set minecraft:free ease 1.5 in_out_cubic
```

### Switch to third person camera

```
/camera @s set minecraft:third_person
```

### Reset camera back to normal

```
/camera @s clear
```

### Fade to black, hold 1 second, then fade back

```
/camera @s fade time 0.5 1.0 0.5 color 0 0 0
```

### Fade to white for 2 seconds (scene transition)

```
/camera @s fade time 0.5 2.0 0.5 color 255 255 255
```

### Apply a quick fade effect to all players

```
/camera @a fade
```

### Smoothly transition to orbit camera

```
/camera @s set minecraft:follow_orbit ease 1 linear
```

### Zoom in by setting FOV to 30 over 0.5 seconds

```
/camera @s fov_set 30 0.5 linear
```

### Reset FOV back to default

```
/camera @s fov_clear
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| blue | [Integer](../CommandTypes/type_int.md) | Blue component of a color value. Valid values are between 0 and 255. |
| easeTime | [Value](../CommandTypes/type_val.md) | Specified time for the easing. |
| easeType | Easing | Specified type of the easing to use. |
| entity | [Entity Selector](../CommandTypes/type_selection.md) | The target entity to attach to or focus on. |
| fadeInSeconds | [Value](../CommandTypes/type_val.md) | Specifies a fade-in time value. |
| fadeOutSeconds | [Value](../CommandTypes/type_val.md) | Specifies the number of seconds to fade out the camera. |
| fov_value | [Value](../CommandTypes/type_val.md) |  |
| fovEaseTime | [Value](../CommandTypes/type_val.md) |  |
| fovEaseType | Easing |  |
| green | [Integer](../CommandTypes/type_int.md) | Green component of a color value. Valid values are between 0 and 255. |
| holdSeconds | [Value](../CommandTypes/type_val.md) | Specifies the amount of time to hold the camera view. |
| lookAtEntity | [Entity Selector](../CommandTypes/type_selection.md) | A target selector to use for looking at an entity. |
| lookAtPosition | [Position (x y z)](../CommandTypes/type_position_float.md) | A position to look at. |
| players | [Entity Selector](../CommandTypes/type_selection.md) | A target selector of players. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | The position to locate the camera at. |
| preset | CameraPresets | A camera preset defined in a camera JSON file. |
| red | [Integer](../CommandTypes/type_int.md) | Red component of a color value. Valid values are between 0 and 255. |
| xEntityOffset | [Value](../CommandTypes/type_val.md) |  |
| xRot | [Rotation Value](../CommandTypes/type_rval.md) | x Rotation value |
| xTargetCenterOffset | [Value](../CommandTypes/type_val.md) | X offset from the center of a targeted entity |
| xViewOffset | [Value](../CommandTypes/type_val.md) | X component of a view offset |
| yEntityOffset | [Value](../CommandTypes/type_val.md) |  |
| yRot | [Rotation Value](../CommandTypes/type_rval.md) | y Rotation value |
| yTargetCenterOffset | [Value](../CommandTypes/type_val.md) | Y offset from the center of a targeted entity |
| yViewOffset | [Value](../CommandTypes/type_val.md) | Y component of a view offset |
| zEntityOffset | [Value](../CommandTypes/type_val.md) |  |
| zTargetCenterOffset | [Value](../CommandTypes/type_val.md) | Z offset from the center of a targeted entity |
