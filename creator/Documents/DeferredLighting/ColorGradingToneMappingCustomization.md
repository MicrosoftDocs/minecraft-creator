---
author: iconicNurdle
ms.author: mikeam
title: Color Grading and Tone Mapping Customization
ms.topic: tutorial
description: "Color Grading and Tone Mapping Customization section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Color Grading and Tone Mapping Customization

New data-driving capabilities for Color Grading and Tone Mapping are available in Minecraft Bedrock **1.21.0.22** Previews and newer. These new tools allow resource packs to convey unique moods and themes through industry standard color correction controls.

### Color Grading

Minecraft's color grading system allows for many degrees of customization of the final image. You can control the saturation, contrast, gain, and offset of pixels per RGB channel. This can be done on a global scale regardless of pixel luminance, or it can be done on a more fine-grained scale with unique sets of parameters for shadows, midtones and highlights. The highlight parameters are applied to the brightest pixels, the shadow parameters applied to the darkest pixels, and the midtone parameters applied to the pixels with luminance close to the average luminance of the scene.

In order to enable highlight and/or shadow grading, you must be sure to set the corresponding `"enabled"` parameter to `true` along with any actual grading parameters for that luminance range; simply specifying a Shadow Max or Highlight Min is not enough. The Minecraft Bedrock Editor is a great way to see the effects of these parameters in real-time.

For convenience, when data-driving, midtones will be applied to all pixels unless highlights or shadows are specified. Think of midtones as your global settings, whereas highlights and shadows further refine the bright or dark regions of the image.

- **Saturation** - Determines the hue intensity of colors. A value of `1.0` results in no change in saturation to the original image. A value of `0.0` results in a grayscale image. Values `> 1.0` will increase the purity of colors.

- **Contrast** - Describes the difference in luminance between the bright and dark pixels in an image, otherwise known as the tonal range. An image with high contrast will have pixels with a wide range of luminance values, whereas an image with low contrast will have pixels of a relatively small luminance range. A value of `1.0` results in no change in contrast to the original image. A value of `0.0` results in a completely washed-out, gray image. Values `> 1.0` will increase brightness of highlights while darkening the shadows in the final image.

- **Gain** - A multiplication factor applied to each color channel to adjust the overall luminance intensity of the image. A value of `1.0` results in no change to the original image. Values `< 1.0` will darken the image while values `> 1.0` will brighten it. A value of `0.0` will cancel out that color channel completely. Gain is multiplicative and therefore has a stronger affect on brighter pixels than darker pixels.

- **Gamma** - An exponential factor applied to the final color after both color grading and tone mapping to adjust the overall luminance intensity of the image. A sensible value for this parameter is typically `2.2`. Lower values will darken the final image, whereas higher values will cause the final image to appear washed-out.

- **Offset** - An additive factor that is multiplied by the average luminance of the scene and then added to a given color channel to adjust the overall luminance intensity of the image. A value of `0.0` results in no change to the original image. Values `> 0.0` will brighten the image, while values `< 0.0` will darken it. Offset is additive and therefore has a stronger effect on darker pixels than brighter pixels. 

- **Shadow Max** - A factor multiplied by the average luminance of the scene to determine which pixels are considered shadows. Pixels with luminance less than `ShadowMax * AverageLuminance` will have the shadows set of color grading values applied. A value of `1.0` indicates shadows occupy the entire range of values including and up to the average luminance. Lower values will cause the maximum required luminance value for a pixel to be considered a shadow to drop. This value should not be equal to Highlight Min.

- **Highlight Min** - A factor multiplied by the average luminance of the scene to determine which pixels are considered highlights. Pixels with luminance greater than `HighlightMin * AverageLuminance` will have the highlights set of color grading values applied. A value of `1.0` indicates highlights occupy the entire range of values including and above the average luminance. Higher values will cause the minimum required luminance value for a pixel to be considered a highlight to rise. This value should not be equal to Shadow Max.

### Tone Mapping

Tone mapping determines how a color is remapped from HDR-space to SDR-space for display on modern televisions and monitors. For tone mapping, you can choose from the following operators:

| Tone Map | Description |
|----------|-------|
| Reinhard | A low-cost tone mapping operator [[3](#ref_reinhard), eq. 3] that remaps HDR color values in the range `[0, ∞)` to `[0, 1)`. This operator looks especially good when applied to low-contrast scenes whose values are already within the range of `[0, 1)`, but tends to mute higher luminance values. |
| Reinhard Luma | An extended version of the Reinhard operator [[3](#ref_reinhard), eq. 4] that comes at a slightly higher cost, but it preserves details in low dynamic range regions of an image that would otherwise be lost by the standard Reinhard operator. |
| Reinhard Luminance | A version of the extended Reinhard operator [[3](#ref_reinhard), eq. 4] modified to adjust the luminance of the input colors. It comes at a slightly higher cost, but it preserves colors in high luminance regions of an image that would otherwise be washed out by the standard Reinhard operator. |
| Hable | A filmic tone mapping operator meant to emulate the behaviors of real-life film, developed and shared by John Hable at a GDC talk from 2010 titled "Uncharted 2: HDR Lighting". [[1](#ref_hable)] |
| Academy Color Encoding System (ACES) | A filmic tone mapping operator meant to emulate the behaviors of real-life film, specifically following the ACES standard used in television and film. [[2](#ref_hill)] |

### Filmic tone mapping operators

Because filmic tone mapping operators are designed to emulate real-life film, they tend to look best when remapping HDR scene values that were themselves produced from other real-life, physically accurate values, such as the intensity of the sun or the strength of Rayleigh scattering in the atmosphere.

For instance, the relative difference in luminous power between a torch and an Earth-based sun is orders of magnitudes different at noon. Filmic operators are designed to preserve subtle differences in extremely dark and extremely bright areas (like low luminance and high luminance) for this reason, but they come at a higher performance cost compared to the non-filmic variants. There is currently no way for creators to alter the properties of the filmic curves.

### Schema

Color grading configurations are JSON files located in the "color_grading" directory in a resource pack. They must have the filename "color_grading.json", and adhere to the following format:

```json
{
  object "minecraft:color_grading_settings"
  {
    object "description"
    {
      string "identifier" // The identifier for these color grading settings. The identifier must include a namespace.
    }
    object "color_grading" : opt
    {
      object "midtones" // Color grading parameters for midtones, and for when highlights or shadows are not specified.
      {
        float[3] "contrast" <0.0-4.0> : opt
        float[3] "gain" <0.0-10.0> : opt
        float[3] "gamma" <0.0-4.0> : opt
        float[3] "offset" <-1.0-1.0> : opt
        float[3] "saturation" <0.0-10.0> : opt
      }
      object "highlights" : opt // Optional color grading parameters for highlights.
      {
        bool "enabled" <true | false>
        float "highlightsMin" <1.0 - 4.0> : opt
        float[3] "contrast" <0.0-4.0> : opt
        float[3] "gain" <0.0-10.0> : opt
        float[3] "gamma" <0.0-4.0> : opt
        float[3] "offset" <-1.0-1.0> : opt
        float[3] "saturation" <0.0-10.0> : opt
      }
      object "shadows" : opt // Optional color grading parameters for shadows.
      {
        bool "enabled" <true | false>
        float "shadowsMax" <0.1 - 1.0> : opt
        float[3] "contrast" <0.0-4.0> : opt
        float[3] "gain" <0.0-10.0> : opt
        float[3] "gamma" <0.0-4.0> : opt
        float[3] "offset" <-1.0-1.0> : opt
        float[3] "saturation" <0.0-10.0> : opt
      }
    }
    object "tone_mapping" : opt
    {
      string "operator" <"reinhard"|"reinhard_luma"|"reinhard_luminance"|"hable"|"aces">
    }
  }
}
```

The following example JSON can be used as a starting point:

**color_grading/color_grading.json**

```json
{
  "minecraft:color_grading_settings"
  {
    "description"
    {
      "identifier": "my_pack:default_color_grading"
    },
    "color_grading"
    {
      "midtones"
        {
          "contrast": [1.3, 1.3, 1.3],
          "gain": [1.0, 1.0, 1.0],
          "gamma": [2.2, 2.2, 2.2],
          "offset": [0.0, 0.0, 0.0],
          "saturation": [1.05, 1.05, 1.05]
        }
    },
    "tone_mapping"
    {
      "operator": "reinhard_luminance"
    }
  }
}
```

## References
<a name="ref_hable"></a>[1] Hable, John. 2010. Uncharted 2: HDR Lighting. GDC 2010. Naughty Dog. https://www.gdcvault.com/play/1012351/Uncharted-2-HDR

<a name="ref_hill"></a>[2] Hill, Stephen & Narkowicz, Krzysztof & MJP. https://github.com/ampas/aces-dev & https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/ & https://github.com/TheRealMJP/BakingLab

<a name="ref_reinhard"></a>[3] Reinhard, Erik & Stark, Michael & Shirley, Peter & Ferwerda, James. 2002. Photographic Tone Reproduction for Digital Images. ACM Transactions on Graphics. Vol 21. https://www-old.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf

