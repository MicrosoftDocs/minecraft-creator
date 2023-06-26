---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: camera Command
description: Description and usage of the camera command
---
# `/camera` Command
[Experimental feature.] Transforms the camera for the selected player to a different perspective.

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

### Sets camera looking at a position
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>`

Sets a camera with a specified easing and time, facing a position

### Sets camera with default settings
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> [default: default]`

Sets a camera with a specified preset.

### Sets camera with a position and rotation
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with an override position and a specific x/y rotation.

### Set camera with override facings, looking at an entity
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with override positions and facing at a particular entity.

### Set camera with override facings, looking at a position
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtPosition: x y z>`

Sets a camera with override positions facing a particular position.

### Set camera with override position
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z>`

Specifies a camera transition with a specified position.

### Set camera with override rotation
`/camera <players: target> set <preset: CameraPresets> rot <xRot: rotation> <yRot: rotation>`


### Set camera with override facing looking at entity
`/camera <players: target> set <preset: CameraPresets> facing <lookAtEntity: target>`


### Set camera with override facing looking at position
`/camera <players: target> set <preset: CameraPresets> facing <lookAtPosition: x y z>`


### Set camera to default
`/camera <players: target> set <preset: CameraPresets> [default: default]`

Sets a camera using the default settings for the camera preset.

### Clear camera
`/camera <players: target> clear`

Clears the current camera from the player.

### Fade out to times and color
`/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>`

Specifies a camera fade-out type operation and color transition.

### Fade out to times
`/camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float>`

Specifies a camera timed fade-out type operation.

### Fade to color
`/camera <players: target> fade color <red: int> <green: int> <blue: int>`

Specifies a camera fade to a color wipe.

### Fade
`/camera <players: target> fade`

Specifies a general camera fade-out.

## Arguments
- `blue`: int
Blue component of a color value. Valid values are between 0 and 255.
- `default`: default
Specifies that the camera movement should be reset to its default parameters.
- `easeTime`: float
Specified time for the easing.
- `easeType`: Easing
Specified type of the easing to use.
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
- `yRot`: rotation
y Rotation value

## Enums
### `CameraPresets`
A listing of available camera presets.

#### Values
- `example:example_free`
- `example:example_player_effects`
- `example:example_player_listener`
- `minecraft:first_person`
- `minecraft:free`
- `minecraft:third_person`
- `minecraft:third_person_front`

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
