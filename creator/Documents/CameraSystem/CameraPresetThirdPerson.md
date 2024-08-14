---
author: iconicNurdle
ms.author: mikeam
title: Third Person Camera Preset
description: "An overview about the Third_Person Camera Presets"
ms.service: minecraft-bedrock-edition
---

# Third Person Camera Preset

In this overview, you will learn about the **third_person** camera presets. These presets can be applied using commands, JSON, and script APIs.

You can find more information about the camera system in the [Camera Command Introduction](CameraCommandIntroduction.md) and in the [Free Camera Preset](CameraPresetFree.md) tutorial, using commands and script.

## Third Person Camera Functionality

The third person camera preset can be used to set the follow orbit preset camera on a player. This lets you 'attach' the camera to a player. 

Here is the command to use follow_orbit:

`/camera @s set minecraft:follow_orbit`

You will need to use this experimental toggle for the follow-orbit preset: **Creator Cameras: Focus Target Camera**.

**Follow Orbit Example**

```json
{
 "format_version": "1.21.0", 
 "minecraft:camera_preset": { 
   "identifier": "test:follow_orbit_test", 
   "inherit_from": "minecraft:follow_orbit", 
   "view_offset":  [2.0, 2.0], 
  "radius": 12 
  }
}
```

### View offset – follow orbit only 

The view offset can be used to create an over the shoulder type view for the player. 
The x and y offset is a range between -100 and 100.

`/camera @s set minecraft:follow_orbit view_offset viewX viewY`

Here are three different examples:

```json
{
  "format_version": "1.21.0", 
  "minecraft:camera_preset": { 
    "identifier": "test:follow_orbit_test", 
    "inherit_from": "minecraft:follow_orbit", 
    "view_offset":  [2.0, 2.0], 
    "radius": 12 
  }
}
```

```json
{
  "format_version": "1.21.0", 
  "minecraft:camera_preset": { 
    "identifier": "test:follow_orbit_test", 
    "inherit_from": "minecraft:follow_orbit", 
    "radius": 12 
  }
}

```json
{ 
  "format_version": "1.21.0", 
  "minecraft:camera_preset": { 
    "identifier": "test:follow_orbit_test", 
    "inherit_from": "minecraft:follow_orbit", 
    "view_offset":  [2.0, 2.0], 
  }
}
```

### Understanding the third person camera 

When making third person camera games and experiences, you will have the option to use and customize two presets:

- Follow orbit - This preset allows the third person camera to have its pivot point adjusted.

- Fixed boom - This preset keeps the camera at a fixed distance from the player.


### Parameters and definitions of the camera system 

**Radius**

The distance from the player. Imagine the player as the center of a circle and the radius is how far out the camera is from the player.

**Yaw**

The rotation of the camera 360 degrees around the target parallel to the earth. The yaw value can be up to 180 to point directly to the right, and up to -180 to point directly to the left. 

**Pitch**

The angle up or down, perpendicular to the earth. Pitch is limited to a range of 90 facing straight down to -90 facing straight up. This limitation is to prevent rolling the camera upside down.


