---
author: ryan.edgemon
ms.author: ryan.edgemon
title: Render Dragon Shader List Documentation
ms.prod: gaming
---

# Render Dragon Shader List Documentation

## Indtroductory Notes

Paradigms across shaders available to players for use in a "material_input_mapping" JSON object:

- After Each shader's defined identifier, a list of blend and/or tint operations follow. Operations are listed in the order of execution within the dragonfx shader. This order matches the defined input order. Most operations and inputs are 1-to-1, with a few exceptions. Exceptions are noted in the comments in the list of shaders below.
- Each shader's first input is a base texture reference.
- Each input's default value is shown, and used if an input is not defined under its associated shader's JSON identifier.
- Comments explaining an input's use are not repeated if the input is used in the same operation under a different shader.
- Each listed shader includes an example of a vanilla entity which uses that shader to get an idea of the entity's resulting on screen appearence and effects.
- Input comments denoting "accumulated result of previous operations" include from the base-texture-input (and associated operation) down to that commented input. Often the only previous operation is to sample an entity's base texture.

#### Available Shader List

```JSON
// Used by "minecraft:cow"
// Most simple or "standard base" shader.
"entity:": { // Base | Blend_ComponentAlpha_Rgb
  "input_map": {
    // Main, base texture to be sampled for first entity coloring operation. Flat-pink diffuse color if no base is used.
    "texture.base": "textures/missing/pink",
    // RGB color modifier to blend with the accumulated result of previous operations. The default white color (and implicit, undefined alpha value of 0) doesn't modify the appearance of the final result. RGBA components can be molang expressions, in addition to numeric values.
    "overlay_color": [ 1.0, 1.0, 1.0 /*, alpha = 0.0  */ ]
  }
},

// Used by "minecraft:sheep"
// Color mask shader.
"entity_change_color": { // Base | BlendTint_CurrentAlpha_Rgb | Tint_Alpha | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    // Mask color used with the accumulated result of previous operations.
    "query.color_mask": [ 1.0, 1.0, 1.0 ],
    // Strength of masking effect.
    "query.color_mask_alpha": 0.5,
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:llama" to achieve decor effect.
// Shader to blend multiple textures together.
"entity_multitexture": { // Base | Blend_ComponentAlpha_Rgb | Blend_ComponentAlpha_Rgb | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    // Texture to blend with the accumulated result of previous operations.
    "texture.blend_0": "textures/missing/pink",
    // Additional texture to blend with the previous blend result.
    "texture.blend_1": "textures/missing/pink",
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:glow_squid"
// "Emmisive" shader. Functionally similar to the "entity" shader.
"entity_emissive": { // Base | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:chicken" when rendering the legs, not the body. Achieves transparency around the legs.
// Shader to discard pixels from the base texture.
"entity_alphatest": { // Base | Discard_Equal | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    // Compared against accumulated result of previous operations' pixel's alpha value. If equal discard pixel.
    "variable.discard": 0.5,
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:cat"
// Shader combination of "entity_alphatest" and "entity_change_color" operation flow.
"entity_alphatest_change_color": { // Base | Discard_LessThan | BlendTint_CurrentAlpha_Rgb | Tint_Alpha | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    // If accumulated result of previous operations' pixel's alpha is less than this input, then discard pixel.
    "variable.discard": 0.0,
    "query.color_mask": [ 1.0, 1.0, 1.0 ],
    "query.color_mask_alpha": 0.5,
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:tropicalfish" for skin-pattern effect.
// Multi-staged shader using a color mask, followed by a weighted texture-blend, followed by a discard operation.
"entity_multitexture_multiplicative_blend": { // Base | BlendTint_CurrentAlpha_Rgb | Tint_Alpha | BlendSourceTint_ComponentAlpha_Rgb (2 inputs) | DiscardAlphaSum_LessEqual (2 inputs) | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    "query.color_mask": [ 1.0, 1.0, 1.0 ],
    "query.color_mask_alpha": 0.5,
    // Blend texture used with the "query.tint_color" input.
    "texture.tint": "textures/missing/pink",
    // RGB blend strengths in BlendSourceTint_ComponentAlpha_Rgb operation.
    "query.tint_color": [ 1.0, 1.0, 1.0 ],
    // Used in summation during DiscardAlphaSum_LessEqual operation.
    "query.tint_alpha": 1.0,
    // If accumulated result of previous operations' pixel's alpha plus the "query.tint_alpha" input is less than or equal to this input, then discard pixel.
    "variable.discard": 0.0,
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:horse" to combine base hair color, hair markings, and armor.
// Shader to produce a Texture blend with additional texture masking.
"entity_multitexture_alpha_test_color_mask": { // Base | Blend_ComponentAlpha_Rgb | DiscardAlphaMask (hard-coded, no input) | ReplaceIfSourceTint_ComponentAlpha_Rgb (2 inputs) | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    // Texture to blend with accumulated result of previous operations.
    "texture.blend": "textures/missing/pink",
    /*{ 🚩 Note: no input for DiscardAlphaMask operation }*/
    // Additional blend texture used with the "query.tint_color" input.
    "texture.tint": "textures/missing/pink",
   // RGB blend strengths, 2nd input used in BlendSourceTint_ComponentAlpha_Rgb operation.
    "query.tint_color": [ 1.0, 1.0, 1.0 ],
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by "minecraft:ghast" to hide/un-hide eyes and mouth, while shooting.
"entity_emissive_alpha": {
  "input_map": {
    "texture.base": "textures/missing/pink",
    // If the accumulated result of previous operations' pixel R + G + B + A is equal to this value, then discard pixel.
    "variable.discard": 0.0,
    "overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used by invisible entities such as "minecraft:enderman", "minecraft:phantom", and "minecraft:spider"
// Shader able to turn entities invisible. Can also use "entity_emissive_only_alpha" instead of "invisible"
"invisible": { // Base | DiscardZeroOne (no input(s)) | Blend_ComponentAlpha_Rgb
  "input_map": {
    "texture.base": "textures/missing/pink",
    // If the accumulated result of previous operations' pixel-alpha is less-than or equal to 0 OR greater-than or equal to 1, then discard pixel [ie, pixel.a <= 0 OR pixel.a >= 1].
    /*{ 🚩 Note: no input for DiscardZeroOne operation }*/
    "query.overlay_color": [ 1.0, 1.0, 1.0 ]
  }
},

// Used with many Minecraft items to achieve the enchanted effect.
"entity_alphatest_glint": { // Base | Discard_Equal | Blend_ComponentAlpha_Rgb | Glint
  "input_map": {
    "texture.base": "textures/missing/pink",
    // Compared against accumulated result of previous operations' pixel's alpha value. If equal discard pixel.
    "variable.discard": 0.5,
    "overlay_color": [ 1.0, 1.0, 1.0 ],
    // Texture to blend as a shimmering-light effect with accumulated result of previous operations.
    "texture.glint": "textures/missing/pink"
  }
}

```
