---
author: chipotle
ms.author: v-wamartin
title: Control Schemes
description: "An overview of control schemes for player and camera movements."
ms.service: minecraft-bedrock-edition
ms.date: 05/06/2025
---

# Control Schemes

In Minecraft: Bedrock Edition, players can choose from a set of schemes that define how the player and the camera move in response to controller input. These provide great flexibility for different gameplay scenarios.

The control scheme can be manually set by using the [`/controlscheme`][cs] command. It can also be set with [camera presets][cp].

[cs]: ../commands/commands/controlscheme.md
[cp]: CameraSystem/CameraCommandIntroduction.md#camera-presets

## Control scheme types

Each control scheme defines how Minecraft responds to game controllers, touch input on mobile devices, keyboard and mouse combos, and full keyboard controls.

### Player relative

**Controller:** Push the left stick forward or backward to move the player forward or backward in the direction they're facing, and left or right to rotate the player to the left or right. Use the right stick to rotate the camera in third-person or free camera views.

**Touch:** Swipe up or down to move the player forward or backward in the direction they're facing. Swipe right or left to rotate the player in that direction. Drag on the right side of the screen to rotate the camera in third-person or free camera views.

**Keyboard + Mouse:** Press W to move the player forward, S to move backward, A to rotate them left, and D to rotate right. Use the mouse to rotate the camera in third-person or free camera views.

**Full Keyboard:** Press W to move the player forward, S to move backward, A to rotate them left, and D to rotate right. Press the left and right arrows to rotate the camera in third-person or free camera views. The numeric keypad can also be used for camera rotation if enabled.

### Player relative strafe

**Controller:** Push the left stick forward or backward to move the player forward or backward in the direction they're facing, and left or right to move the player to the left or right without turning (strafe). Push the right stick left or right to rotate the player.

**Touch:** Swipe up or down on the left side of the screen to move the player forward or backward in the direction they're facing. Swipe right or left to move the player to the left or right without turning (strafe). Drag on the right side of the screen to rotate the player.

**Keyboard + Mouse:** Press W to move the player forward, S to move backward, A to move (strafe) left, and D to move (strafe) right. Use the mouse to rotate the player.

**Full Keyboard:** Press W to move the player forward, S to move backward, A to move (strafe) left, and D to move (strafe) right. Press the left and right arrows to rotate the player. The numeric keypad can also be used for player rotation if enabled.

### Locked player relative strafe

The controls in this scheme are the same as in player relative strafe, but the camera is locked to the direction the player faces.

### Camera relative

**Controller:** Use the left stick to control player movement; the player automatically faces the direction of motion. Use the right stick to rotate the camera.

**Touch:** Drag on the left side of the screen to control player movement; the player automatically faces the direction of motion. Drag on the right side of the screen to rotate the camera.

**Keyboard + Mouse:** Press W to move the player forward, S to move backward, A to move left, and D to move right; the player automatically faces the direction of motion. Use the mouse to rotate the camera.

**Full Keyboard:** Press W to move the player forward, S to move backward, A to move left, and D to move right; the player automatically faces the direction of motion. Press the left and right arrows to rotate the camera. The numeric keypad can also be used for camera rotation if enabled.

### Camera relative strafe

> [!NOTE]
> This scheme is experimental, and requires the **Experimental Creator Camera** setting to be enabled.

**Controller:** Use the left stick to move the player. Use the right stick to rotate the player to look in the direction the stick is moved.

**Touch:** Drag on the left side of the screen to control player movement. Drag on the right side of the screen to rotate the player to look in the direction of the drag.

**Keyboard + Mouse:** Press W to move the player forward, S to move backward, A to move left, and D to move right. Use the mouse to rotate the player to look in the direction the mouse is moved.

**Full Keyboard:** Press W to move the player forward, S to move backward, A to move left, and D to move right. Press the left and right arrows to rotate the player to look in that direction. The numeric keypad can also be used for rotation if enabled.

## Control schemes and camera presets

When you use [camera presets][cp], you can use the `control_scheme` key in the **camera.json** file to associate a control scheme with a preset.

```json
{
    "format_version": "1.19.50",
    "minecraft:camera_preset": {
        "identifier": "example:custom",
        "inherit_from": "minecraft:follow_orbit",
        "control_scheme": "camera_relative"
    }
}
```

Setting a control scheme in a camera preset will override the preset's default control scheme, as long as the scheme is allowed in that camera mode. If the scheme is _not_ allowed in that mode, or you don't include the `control_scheme` key in that preset, the default control scheme of the camera mode will be used instead.

Here are the allowed control schemes and default scheme for each built-in camera preset:

| Camera Preset | Allowed Control Schemes | Default Scheme |
| :------------ | :---------------------- | :------------- |
| minecraft:first_person | locked player relative strafe | locked player relative strafe |
| minecraft:third_person | locked player relative strafe | locked player relative strafe |
| minecraft:third_person_front | locked player relative strafe | locked player relative strafe |
| minecraft:free | player relative strafe<br>player relative<br>camera relative<br>camera relative strafe | player relative strafe |
| minecraft:follow_orbit | locked player relative strafe<br>player relative<br>camera relative | locked player relative strafe |
| minecraft:fixed_boom | camera relative<br>camera relative strafe<br>player relative strafe<br>player relative | camera relative |

## Switching control schemes

To switch schemes from the command line, use the [`/controlscheme` command][cs].

`/controlscheme <player> set <control_scheme>`

Possible control schemes are:

- `camera_relative`
- `camera_relative_strafe`
- `player_relative`
- `player_relative_strafe`
- `locked_player_relative_strafe`

You can reset the control scheme to the default for the current camera mode with the `clear` subcommand:

`/controlscheme <player> clear`

Note that you can only switch to a control scheme that's allowed in the current camera mode.

## Control scheme inheritance

A custom camera preset inherits the allowed control schemes of the built-in camera preset it descends from. It will use the default control scheme of its parent camera if its own `control_scheme` is not defined, or if the defined scheme is not supported by the camera.
