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
### Sets a camera with a specified preset a fixed x/y rotation
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with a specified preset and a fixed x/y rotation.

### Sets a camera with a specified preset while looking at a selected entity
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with a specified preset while looking at a selected entity.

### Sets a camera with a preset looking at a particular position
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>`

Sets a camera with a specified preset while looking at a particular position.

### Sets a camera with a specified preset and easing
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> pos <position: x y z>`

Sets a camera with a specified preset and easing.

### Sets a camera with rotation
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with a specified preset and rotation.

### Sets a camera with a facing looking at an entity
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtEntity: target>`

Sets a camera with a specified easing and time, facing an entity

### Sets a camera with a facing looking at a position
`/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> facing <lookAtPosition: x y z>`

Sets a camera with a specified easing and time, facing a position

### `/camera <players: target> set <preset: CameraPresets> ease <easeTime: float> <easeType: Easing> [default: default]`
Sets a camera with a specified preset.

### Sets a camera with an override position and rotation
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> rot <xRot: rotation> <yRot: rotation>`

Sets a camera with an override position and a specific x/y rotation.

### Set a camera with override facings looking at an entity
`/camera <players: target> set <preset: CameraPresets> pos <position: x y z> facing <lookAtEntity: target>`

Sets a camera with override positions and facing at a particular entity.

### Set camera with override facing
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

Specifies a camera fade to a color wipe

### Fade
`/camera <players: target> fade`

Specifies a general camera fade-out.

## Arguments
- `blue`: int
- `default`: default
- `easeTime`: float
- `easeType`: Easing
- `fadeInSeconds`: float
- `fadeOutSeconds`: float
- `green`: int
- `holdSeconds`: float
- `lookAtEntity`: target
- `lookAtPosition: x y z`: position
- `players`: target
- `position: x y z`: position
- `preset`: CameraPresets
- `red`: int
- `xRot`: rotation
- `yRot`: rotation

## Enums
### `CameraPresets`
A listing of available camera presets.

#### Values
- `example:example_free`
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
