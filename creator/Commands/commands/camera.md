---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: camera Command
description: Description and usage of the camera command
---
# `/camera` Command
Transforms the camera for the selected player(s) to a different perspective.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Sets camera with easing overrides and initial position and x/y rotation
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with a specified preset and a fixed x/y rotation.

### Sets camera with easing overrides and initial position, looking at a selected entity
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with a specified preset while looking at a selected entity.

### Sets camera with easing overrides and a initial position, looking at a particular position
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>`

Sets a camera with a specified preset while looking at a particular position.

### Sets camera with easing overrides and a position
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z>`

Sets a camera with a specified preset, easing, and position.

### Sets camera with easing overrides and rotation
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with a specified preset and rotation.

### Sets camera with easing overrides and looking at an entity
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>`

Sets a camera with a specified easing and time, facing an entity

### Sets camera looking at a position, with easing
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>`

Sets a camera with a specified easing and time, facing a position

### Sets camera with an easing
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> [default: default]`

Sets a camera with a specified easing.

### Sets camera with a position and rotation
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with an override position and a specific x/y rotation.

### Set camera with override facings, looking at an entity
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with override positions and facing at a particular entity.

### Set camera with override facings, looking at a position
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtPosition: x y z>`

Sets a camera with override positions facing a particular position.

### Set camera with a target entity
`/camera <players: target> target_entity <entity: target>`

Specifies a camera transition with target

### Set camera with a target entity and positional offset
`/camera <players: target> target_entity <entity: target> target_center_offset <xTargetCenterOffset: float> <yTargetCenterOffset: float> <zTargetCenterOffset: float>`


### Removes camera target
`/camera <players: target> remove_target`

Removes a camera target.

### Set camera with a view offset
`/camera <players: target> set <preset: CameraPresets> view_offset <xViewOffset: float> <yViewOffset: float>`


### Set camera to default
`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation> view_offset <xViewOffset: float> <yViewOffset: float>`

Sets a camera using the default settings for the camera preset.

### Sets a camera from a position
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z>`

Sets a camera from a position.

### Camera facing rotation
`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation>`

Specifies a camera with a particular rotatoin

### Fade out to times
`/camera <players: target> set <preset: CameraPresets> facing <lookAtEntity: target>`

Specifies a camera timed fade-out type operation.

### Camera preset facing/looking at a position
`/camera <players: target> set <preset: CameraPresets> facing <lookAtPosition: x y z>`

Specifies a camera looking at a particular position.

### Fade
`/camera <players: target> set <preset: CameraPresets> [default: default]`

Specifies a general camera fade-out.

### Clear
`/camera <players: target> clear`

Clears any active camera changes for the player.

### Timed color-tinted fade
`/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>`

Applies a color tinted fade for the specified fade in, hold, and out time periods.

### Timed fade
`/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>`

Applies a fade for the specified fade in, hold, and out time periods.

### Color-tinted fade
`/camera <players: target> fade color <red: int> <green: int> <blue: int>`

Applies a color-tinted fade for the selected player(s).

### Fade
`/camera <players: target> fade`

Applies a fade for the selected player(s)

## Arguments
- `blue`: int
Blue component of a color value. Valid values are between 0 and 255.
- `default`: default
Specifies that the camera movement should be reset to its default parameters.
- `easeTime`: float
Specified time for the easing.
- `easeType`: Easing
Specified type of the easing to use.
- `entity`: target
Related entity
- `fadeInSeconds`: float
Specifies a fade-in time value.
- `fadeOutSeconds`: float
Specifies the number of seconds to fade out the camera.
- `green`: int
Green component of a color value. Valid values are between 0 and 255.
- `holdSeconds`: float
Specifies the amount of time to hold the camera view.
- `lookAtEntity`: target
A target selector to use for looking at an entity.
- `lookAtPosition: x y z`: position
A position to look at.
- `players`: target
A target selector of players.
- `position: x y z`: position
The position to locate the camera at.
- `preset`: CameraPresets
A camera preset defined in a camera JSON file.
- `red`: int
Red component of a color value. Valid values are between 0 and 255.
- `xRot`: rotation
x Rotation value
- `xTargetCenterOffset`: float
X offset from the center of a targeted entity
- `xViewOffset`: float
X component of a view offset
- `yRot`: rotation
y Rotation value
- `yTargetCenterOffset`: float
Y offset from the center of a targeted entity
- `yViewOffset`: float
Y component of a view offset
- `zTargetCenterOffset`: float
Z offset from the center of a targeted entity

## Enums
### `CameraPresets`
A listing of available camera presets.

#### Values
- `minecraft:first_person`
- `minecraft:free`
- `minecraft:third_person`
- `minecraft:third_person_front`
- `minecraft:follow_orbit`

### `Easing`
Specifies an easing function to use for the camera.

#### Values
- `linear`
- `spring`
- `in_quad`
- `out_quad`
- `in_out_quad`
- `in_cubic`
- `out_cubic`
- `in_out_cubic`
- `in_quart`
- `out_quart`
- `in_out_quart`
- `in_quint`
- `out_quint`
- `in_out_quint`
- `in_sine`
- `out_sine`
- `in_out_sine`
- `in_expo`
- `out_expo`
- `in_out_expo`
- `in_circ`
- `out_circ`
- `in_out_circ`
- `in_bounce`
- `out_bounce`
- `in_out_bounce`
- `in_back`
- `out_back`
- `in_out_back`
- `in_elastic`
- `out_elastic`
- `in_out_elastic`
