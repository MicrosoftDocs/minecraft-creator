---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Appearance Billboard component
ms.prod: gaming
---

# Particle Documentation - Particle Appearance Billboard component

This component tells the particle system to render the particle as a billboard, a rectangle in the world facing a particular direction.

```json
"minecraft:particle_appearance_billboard": {
    // specifies the x/y size of the billboard
    // evaluated every frame
    "size": [<float/molang>, <float/molang>],

    // used to orient the billboard.  Options are:
    // "rotate_xyz" - aligned to the camera, perpendicular to the view axis
    // "rotate_y" - aligned to camera, but rotating around world y axis
    // "lookat_xyz" - aimed at the camera, biased towards world y up
    // "lookat_y" - aimed at the camera, but rotating around world y axis
    // "direction_x" - unrotated particle x axis is along the direction vector, unrotated y axis attempts to aim upwards
    // "direction_y" - unrotated particle y axis is along the direction vector, unrotated x axis attempts to aim upwards
    // "direction_z" - billboard face is along the direction vector, unrotated y axis attempts to aim upwards
	// emitter_transform_xy, // orient the particles to match the emitter's transform (the billboard plane will match the transform's xy plane).
	// emitter_transform_xz, // orient the particles to match the emitter's transform (the billboard plane will match the transform's xz plane).
	// emitter_transform_yz, // orient the particles to match the emitter's transform (the billboard plane will match the transform's yz plane).

    //"face_camera_mode": <string>

    // Specifies how to calculate the direction of a particle, this will be used by facing modes that require a direction as input (for instance: lookat_direction and direction)
    // Options are:
    // "derive_from_velocity" - The direction matches the direction of the velocity.
    // "custom_direction" - The direction is specified in the json definition using a vector of floats or molang expressions.
    // If the direction subsection is not defined, the default will be "derive_from_velocity" mode with a "min_speed_threshold" of 0.01.
    "direction": {
        "mode": "derive_from_velocity" or "custom_direction",
        "min_speed_threshold": <float> // only used in "derive_from_velocity" mode. The direction is set if the speed of the particle is above the threshold. The default is 0.01
        "custom_direction": [ <float/molang>, <float/molang>, <float/molang> ], // only used in "custom_direction" mode. Specifies the direction vector
    }

    // specifies the UVs for the particle.
    "uv": {
        // specifies the assumed texture width/height
        // defaults to 1
        // when set to 1, UV's work just like normalized UV's
        // when set to the texture width/height, this works like texels
        "texturewidth": <int>,
        "textureheight": <int>,

        // Assuming the specified texture width and height, use these
        // uv coordinates.
        // evaluated every frame
        "uv": [<float/molang>, <float/molang>],
        "uv_size": [<float/molang>, <float/molang>],

        // alternate way via specifying a flipbook animation
        // a flipbook animation uses pieces of the texture to animate, by stepping over time from one
        // "frame" to another
        "flipbook": {
            "base_UV": [ <float/molang>, <float/molang> ], // upper-left corner of starting UV patch
            "size_UV": [ <float>, <float> ], // size of UV patch
            "step_UV": [ <float>, <float> ], // how far to move the UV patch each frame
            "frames_per_second": <float>, // default frames per second
            "max_frame": <float/molang>, // maximum frame number, with first frame being frame 1
            "stretch_to_lifetime": <bool>, // optional, adjust fps to match lifetime of particle. default=false
            "loop":  <bool> // optional, makes the animation loop when it reaches the end? default=false
        }
    }
}
```
