---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Appearance Tinting component
ms.prod: gaming
---

# Particle Documentation - Particle Appearance Tinting component

This component sets the color tinting of the particle.

```json

// color fields are special, they can be either an RGB, or a "#RRGGBB"
// field (or RGBA or "AARRGGBB").  If RGB(A), the channels are
// from 0 to 1.  If the string "#AARRGGBB", then the values are
// hex from 00 to ff.
//
// this pseudo-type will be denoted by <color>
"minecraft:particle_appearance_tinting": {
    // interpolation based color
    "color": {
        // an array of colors
        // there are two ways to specify the array of colors
        // the first method is to just have an array of colors
        // these will be interpreted to be equally spaced, with the entire
        // range going from 0 to 1
        //
        // the second option is to specify a value/color pair list
        // this will cause the colors to appear when their specified value
        // occurs in the interpolant, and interpolated in between.  Note
        // that this will be sorted
        "gradient": [ <color>, <color>, ...],
        "gradient": {
        <float>: <color>,
        <float>: <color>,
        ...
        }
        "interpolant": <float/molang> // hint: use a curve here!
    }

    // directly set the color
    "color": <color>
    // examples of direct color field:
    "color": "#ff0000"
    "color": [1, 0, 0]
},

```
