---
author: iconicNurdle
ms.author: mikeam
title: Subsurface Scattering Customization
ms.topic: tutorial
description: "Subsurface Scattering Customization section of Deferred Lighting in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
---

# Subsurface Scattering

Minecraft Bedrock 1.21.30 Previews add a capability to Texture Sets for the Deferred Technical Preview: subsurface Scattering. This new feature can be used to simulate the effect that occurs when light is shined on translucent surfaces such as leaves, wax, and skin.

## Compare Subsurface Scattering Images

This is a comparison of a forest scene with no subsurface scattering vs full subsurface scattering applied to all leaves.

# [Subsurface Scattering OFF](#tab/SubSurfaceScatteringOFF)

![Image showing a forest in Minecraft with NO subsurface Scattering enabled](Media/sub_surface_scattering_off.png)

# [Subsurface Scattering ON](#tab/SubSurfaceScatteringON)

![Image showing a forest in Minecraft with subsurface Scattering enabled on the tree leaves allowing sunlight to penetrate through the canopy](Media/sub_surface_scattering_on.png)

---

This effect can be controlled with Texture Sets, much like how metalness, emissive, and roughness are controlled.  Note that metalness and subsurface cannot be used in conjunction with each other for the same pixel in a texture or uniform value. That is, only non-metals can exhibit subsurface scattering effects.  If non-zero values are provided for both metalness and subsurface, then the larger value will win and the other will be ignored.  In the event of a tie, subsurface will take precedence.

```
metalness(m,s) = { 0,  m<=s
                   m,  m>s }
subsurface(s,m) = { 0, s<m
                    s, s>=m }
m = TextureSet _metalness 
s = TextureSet _subsurface
```

Higher subsurface values will increase the effect, allowing more light to penetrate the surface of a given object more and more, while a value of 0 will have no subsurface effect.  The effect is calibrated to allow a maximum penetration depth of roughly 1 block.

The [Texture Sets documentation](../../Reference/Content/TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md) has updated guidance.
