---
author: mammerla
ms.author: mikeam
title: "Animation and Render Controllers Documentation - Animation and Render Controllers"
description: "A reference document describing all current Animation and Render Controllers"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025
---

# Animation and Render Controllers

## Render Controllers

To begin create a new folder named "render_controllers" in the root of the Resource Pack you want to add the new Render Controller JSON inside.

### Example render controllers JSON for the ocelot
"format_version": "1.8.0",
"render_controllers": {
  "controller.render.ocelot": {
    "arrays": {
      "textures": {
        "Array.skins": ["Texture.wild", "Texture.black", "Texture.red", "Texture.siamese"]
      }
    },
    "geometry": "Geometry.default",
    "materials": [{ "*": "Material.default" }],
    "textures": ["Array.skins[query.variant]"]
  }
}