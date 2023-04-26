---
author: mammerla
ms.author: v-jillheaden
title: Camera Command Introduction
ms.prod: gaming
description: "An introduction to the `/camera` command"
---

# Camera Command

The Bedrock version of Minecraft has a new `/camera` command that adds the ability to control how players view the game or adds full-screen fades for a more polished experience. This document goes into all the relevant detail of how it works and can be used to make interesting new experiences.

This new feature adds the concept of Camera Presets, plus a new command to interact with those presets. Both are behind a new Cameras experiment toggle while we gather feedback and make changes.

>[!IMPORTANT]
>The camera command is experimental. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning. Check the Minecraft Changelog for details on any changes.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](ExperimentalFeaturesToggle.md).

## Camera Presets

Camera Presets define individual cameras which can be specified by the camera command. They can be built-in or can be defined by creator content in behavior packs.

The built-in Camera Preset names are:

>- "minecraft:first_person"
>- "minecraft:third_person"
>- "minecraft:third_person_front"
>- "minecraft:free"

The first three names correspond to the standard gameplay perspective options which you can cycle through by pressing F5 on the keyboard, with the controller directional pad, or by selecting the perspective you want in the Settings menu.  

The last name is for the new free camera, which just floats in space and does nothing.

Custom content can define its own Camera Presets. For example, an "example:sky" camera might be defined based on the "minecraft:free" camera, but with a custom position and rotation to view the world at a specific angle.

Camera Presets are specified in JSON files in the game’s behavior packs, for example:

```json
{ 
  "format_version": "1.19.50", 
  "minecraft:camera_preset": { 
    "identifier": "example:custom", 
    "inherit_from": "minecraft:free", 
    "pos_x": 30, 
    "pos_y": 90, 
    "pos_z": -20, 
    "rot_x": 10, 
    "rot_y": 40 
  } 
} 
```

This defines a new Camera Preset named "example:custom" which inherits settings and behaviors from the "minecraft:free" camera, then specifies its own default position as "x=30", "y=90", "z=-20" and a rotation of "x=10", "y=40".

"format_version" behaves like it does in many other Bedrock Minecraft JSON files. It allows Mojang to change the expected JSON format of the file without invalidating old files. For now, you can just use "1.19.50".

"identifier" names the Camera Preset. All Camera Preset identifiers must be namespace-qualified, and like with other content, custom presets must use a namespace other than ""minecraft"".

"inherit_from" says what other Camera Preset to inherit values and behaviors from. A custom Camera Preset can inherit from other custom Camera Presets, or from the "minecraft:free" preset. For now, the other built-in camera perspectives can’t be specified here. This can let a creator define a hierarchy of Camera Presets if they desire, for example an "example:security_base" camera could have an elevation and pitch defined in its "pos_y" and "rot_x" fields, and "example_security_1" through "example_security_5" could use "inherit_from" to use that preset’s values, and only specify their X/Z positions via "pos_x" and "pos_z" and the yaw via "rot_y". With something like that set up, it would only take one edit to the base security camera to modify the elevation of all the security cameras.

"pos_x", "pos_y", and "pos_z" specify the default constant x, y, and z positions of the camera. If these are omitted, the value from the "inherit_from" Camera Preset will be used. "minecraft:free" uses a value of zero for all of its position settings. Be sure to set more useful positions here or via the camera command or your camera perspective will be underground.

"rot_x" and "rot_y" specify the default rotations of the camera, around each of those axes. "rot_x" is equivalent to the pitch of the camera, though with positive values looking downward and negative values looking up, which matches the convention of the teleport command. "rot_y" is equivalent to the yaw, or compass direction of the camera, also matching the behavior of the teleport command. Both values are specified in degrees, and "rot_x" must be no lower than –90 and no higher than 90, to prevent the camera from going upside-down.

## Camera Command Syntax

This command has the following syntax options:

`/camera <players> set <preset> [ease <easeTime> <easeType>] [pos <x> <y> <z>] [rot <xRot> <yRot>]`

`/camera <players> set <preset> [ease <easeTime> <easeType>] [default]`

`/camera <players> clear`

`/camera <players> fade [time <fadeInSeconds> <holdSeconds> <fadeOutSeconds>] [color <red> <green> <blue>]`

Every version of the camera command starts with a player selector, which is used to specify the player or player(s) that will be affected by the command. After that, there are three options that you can specify: "set", "clear", or "fade". "set" will cause the targeted player(s) to use a specified camera perspective. "clear" will return the targeted player(s) back to their usual camera mode. "fade" will cause a full-screen fade, like what players see when sleeping in a bed.

## The "set" Option

The "set" option for the camera command will cause the selected players to view the game through the specified Camera Preset. Until they disconnect from the game or a camera command using "clear" is used, they will use the specified Preset. This overrides things that normally control camera perspective like the settings menu option.

When no additional parameters are specified, this will cause the user’s camera perspective to immediately snap to the specified Camera Preset.
There are several additional options that can be used with the "set" option.

### The "ease" sub-option

The ease option will cause the transition between the views to be done over some specified number of seconds, rather than instantly. It requires specifying an 'easeType', which is the name of one of the various easing methods available. 32 different options are "linear", "spring", or the thirty other options that can be viewed at on [Easing Functions Cheat Sheet](https://easings.net) (easings.net)  

Eased motions always start from where the camera currently is, so an ease from A to B which is interrupted with another ease to C will start from somewhere in between A and B.

Eased transitions to the three standard gameplay perspectives are not allowed, as they are tied strongly to the player, and if the player moves or turns in drastic ways, the eased transition to those perspectives can be very unpleasant to experience.

### The "pos" sub-option

This sub-option of the "set" option allows the camera command to specify an override to the position that is defined in the Camera Preset’s JSON file. It supports the "~" and "^" characters like other commands do, allowing the command to set the camera to a dynamically calculated position.

Warning: Setting the position of a camera to an area of the world that isn’t loaded is not a supported scenario, though there is not a plan currently to programmatically prevent it. The chunks of the world will still only load if the player is nearby and the device’s render distance option is high enough. Positioning the camera in ways that look beyond what is loaded is something that may not function consistently in the future. It’s recommended to keep the camera somewhat near the player and to double-check content on lower-end devices or with a lower render distance setting to ensure that things will work for all users.

### The "rot" sub-option

Like the "pos" sub-option, the "rot" sub-option overrides the rotation of the Camera Preset. The "~" character is supported here to specify relative rotations. The "xRot" and "yRot" values in this command correspond to the "rot_x" and "rot_y" properties in the Camera Preset JSON file. As with the "rot_x" property, the result of the "xRot" value is clamped to no less than –90 degrees and no more than 90 degrees, to prevent the camera from going upside-down.

### The "default" sub-option

This sub-option of the "set" option will use the position and rotation of the Camera Preset according to its JSON definition in the behavior pack. In other words, this causes any previous "pos" or "rot" overrides to be discarded.

## The "clear" Option

The "clear" option for the camera command takes no additional arguments. It causes the specified players to end any in-progress camera perspectives, including any eased camera motions, and return to normal. For example, to return all players back to normal camera functionality, run:

`/camera @a clear`

After a "clear" command, players will see the game through the perspective they have selected in the option menu, and will be able to resume using the perspective change key (i.e., F5 on keyboard) to change that setting. VR users will also be able to transition from the virtual Living Room back to the Immersive first-person view if desired.

## The "fade" Option

The "fade" option of the camera command causes a full-screen color to fade in, wait, then fade out. It uses the same effect as when the player sleeps in a bed.

`/camera <players> fade [time <fadeInSeconds> <holdSeconds> <fadeOutSeconds>] [color <red> <green> <blue>]`

### The "time" sub-option  

This sub-option allows for customizing the timing of the fade effect. If not specified, this will use a 1 second fade in, a 0.5 second hold, and a 1 second fade out. Fade in, hold, and fade out are each limited to no more than 10 seconds. If a longer fade (or dynamically timed fade out) is needed, multiple fade commands can be used – see the "Combining fades" section.

### The "color" sub-option

This sub-option allows for customizing the color of the fade effect. The red, green, and blue values should be a value from 0.0 to 1.0. The target opacity of the fade is always fully opaque. If this is not specified, it will use 0.0 for each value, which causes a fade to black.

## Fade timing, networked gameplay, and game performance

Because Minecraft content can be played over a network connection or on a device that isn’t running at a perfect frame rate, it’s important to keep in mind that the timing of camera fades may not always show up at exactly the desired moment. When authoring a fade effect, it’s a good idea to consider adding more time to the ‘holdSeconds’ value or to test on less powerful platforms to check that the presentation is acceptable.  

### Combining fades

It’s possible (and valid) to issue a camera fade command while a camera fade is already in progress. When that happens, the fades are combined with the following logic. This can be useful for extending fades dynamically until some other event takes place.

The timing of the fade will combine in a way that will fade in with the faster of either the remaining fade-in time or the new fade’s fade-in time. The fade out will start when both fades are ready to fade out (whichever is later). The fade out will similarly complete when both fades would complete (whichever is later).

The amount of fade transparency will always start with the current fade amount. For example, if a slow fade is in progress and half complete, and a new quick fade command is received, the user will see a quick fade from half opaque to fully opaque.

The target color (red, green, blue) of a combined fade is always the color of the in-progress fade. See "Limitations on fades" below.

### Limitations on fades

For user comfort, fades follow two additional rules.  

First, all fades must take at least 0.5 seconds so they won’t happen more than two times per second. If a camera fade starts where the combined fade in plus hold plus fade out time is less than 0.5 seconds, the hold time will be increased to make up the difference.

Second, if a fade is already in progress, new fades will continue to use the same color as the in-progress fade effect. This prevents full-screen changes between different colors.

## Additional Notes and Nuances  

### User Input during the "minecraft:free" camera

When the "minecraft:free" camera (or a custom camera based on it) is used via the "set" option of the Camera command, user input will be handled as if the player is in the first-person camera view. This means that the player can continue to turn around, place blocks, or otherwise interact with the world as usual, they just will not see it from the typical viewpoint. If player input is not desired when the "minecraft:free" camera is active, other commands can be used to limit the player’s abilities. See "Combining Multiple Commands Together" below for some suggestions.

## Persistence of Camera State

There will be no persistence of camera state for players across game sessions. For example, if a player is under the effect of "/camera … set", then they exit the game in any way and rejoin later, they will load into the world as if no camera command is active. It will be up to the created world’s logic to put rejoined players back into the desired camera state.

During the time a player is loaded into a particular world, it will persist any position or rotation values that have been specified to override a camera’s default JSON state.

For example, if a player is set to a custom camera with a custom position:

`/camera @a set example:my_camera pos 100 100 100`

Then the player is put back to normal:

`/camera @a clear`

Later, the camera is put back to the custom camera:

`/camera @a set example:my_camera`

The example:my_camera camera will be at 100 100 100 instead of its default position specified in the JSON file. 

To return that camera back to normal, the player could either exit and rejoin the game, or the following command could activate the camera while returning it back to its default state:

`/camera @a set example:my_camera default`

## How the Camera Command Affects VR Users

When using a Virtual Reality headset, players can be in an immersive first-person view, or in a virtual living room with a virtual television that displays a flat view of the game. When a camera command using "set" targets a VR player in the immersive first-person view, they will be transitioned to the virtual living room and the specified Camera Preset will appear on the virtual screen. While a "set" is active for force the player to a particular perspective (including "minecraft:first_person"), pressing the perspective change button will display a message explaining the situation, and the transition to the immersive view will be prevented.

Camera commands using "fade" will not do anything for VR users in the immersive first-person mode, but players in the virtual living room will still see it.

## Combining Multiple Commands Together

The new Camera Command allows for a variety of new simple features, but combining multiple commands together can allow for a wider array of possibilities. Here are some examples:

### Making a simple non-interactive cutscene

To make a simple non-interactive cutscene, a camera command can be combined with the `/inputpermission` command to disable player movement and rotation:

`/camera @a set example:cutscene_camera`

`/inputpermission @a camera disabled`

`/inputpermission @a movement disabled`

Then at the end of the cutscene animations:

`/camera @a clear`

`/inputpermission @a camera enabled`

`/inputpermission @a movement enabled`

### Hiding a teleport

To hide a player or other mob teleport, use the camera fade command combined with some delayed teleport commands: 

`/camera @a fade 0.5 0.5 0.5`

Then after half a second, teleport the player to the desired location:

`/tp @a <x y z coordinates here>`

If this is being used to teleport the player to an area that may not have loaded yet, increase the middle number (the "holdSeconds") to give the player’s device enough time to load the surrounding area.  

### Transitioning to and from a flyover camera

When a player encounters a new part of an adventure map, showing a dramatic flyover of the area can add some interest to the upcoming experience. This can be done with a series of camera commands:

First, start a camera fade to hide the next transition...

`/camera @a fade 0.5 0.2 0.5`

After 0.5 seconds (the "fadeInSeconds" time), issue a command to cut to one position and another command to start an eased camera motion. This assumes that Camera Presets named "example:flyover_start" and "example:flyover_end" have been defined in a behavior pack. 

`/camera @a set example:flyover_start`

`/camera @a set example:flyover_end ease 5 linear`

Then after three seconds (before that five second movement ends and with enough time to fade again) issue another fade command. 

`/camera @a fade 0.5 0.2 0.5`

Then after another 0.5 seconds, return the camera back to normal.

`/camera @a clear`

## The Camera Command and Split-screen Gameplay

When multiple people are playing in split-screen on the same device, they have separate cameras and separate targetable player entities. When the new Camera command is used (whether for "set" or "fade" options), that separation is not changed. Each player’s camera can be separately affected. There are no plans for combining views in split-screen scenarios, or for supporting multiple split-screen-like views for individual players.
