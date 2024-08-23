---
author: iconicNurdle
ms.author: mikeam
title: Item Documentation - minecraft:dyeable
description: "A reference document detailing the 'dyeable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:dyeable

`minecraft:dyeable` enables custom items to be dyed in cauldrons. To use the dyeable component, the format version on the item and the attachable needs to be 1.21.30 or greater.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|default_color|*not set* | String | ... |
|dyed |*not set* | String | ...|


**Chestplate Behavior Pack/items/custom_chestplate.item.json**

Edit format version to be 1.21.30
Edit Minecraft:icon:

```json
"minecraft:icon": {
  "textures": {
    "default": "custom_chestplate_icon",
    "dyed": "custom_chestplate_icon_gray"
  }
},
```

Add:
```json
"minecraft:dyeable": {
  "default_color":  "#175882"
}
```

If you do not want a default color, you can leave the `default_color` off and the texture will be the same as if you did not have the component until it is dyed.

For the icon to be dyed correctly, you need to provide a grayscale .tga version of your icon image. To create this, copy your .png, change the extension, and change to grayscale.


### Chestplate Resource Pack

Edit file layout:

```
  attachables
    custom_chestplate.attachable.json
  models
    entity
      custom_chestplate.geo.json
  render_controllers (NEW)
    custom_chestplate.render_controllers.json (NEW)
  textures
    items
      custom_chestplate_ico.png
      custom_chestplate.png
      custom_chestplate_grayscale.tga
      custom_chestplate_icon_grayscale.tga
    item_texture.json
  manifest.json
```

**Chestplate Resource Pack/attachables/custom_chestplate.attachable.json**

- Edit format version to be `1.21.30`
- Edit `"render_controllers"` to be:

```json
"render_controllers": [ "controller.render.custom_chestplate" ],

Edit materials to be:
      "materials": {
        "default": "armor",
        "dyed": "entity_alphatest_change_color"
      },

Edit textures to be:
      "textures": {
        "default": "textures/items/custom_chestplate.png",
        "dyed": "textures/items/custom_chestplate_grayscale.tga"
      },

Add scripts:
      "scripts": {
        "pre_animation": [
          "variable.is_dyed = query.armor_color_slot(1, 0) != 0.0 || query.armor_color_slot(1, 1) != 0.0 || query.armor_color_slot(1, 2) != 0.0 || query.armor_color_slot(1, 3) != 0.0;"
        ]
      }
```

**Add Chestplate resource pack\render_controllers\custom_chestplate.render_controllers.json**

```json
{
  "format_version": "1.8.0",
  "render_controllers": {
    "controller.render.custom_chestplate": {
      "geometry": "Geometry.default",
      "materials": [ { "*": "variable.is_dyed ? Material.dyed : Material.default" } ],
      "textures": [
        "variable.is_dyed ? Texture.dyed : Texture.default"
      ]
    }
  }
}
```

**Chestplate Resource Pack/items/item_texture**

```json
{
  "texture_data": {
    "custom_chestplate": {
      "textures": "textures/items/custom_chestplate.png"
    },
    "custom_chestplate_icon": {
      "textures": "textures/items/custom_chestplate_ico.png"
    },
    "custom_chestplate_icon_gray": {
      "textures": "textures/items/custom_chestplate_icon_grayscale.tga"
    },
    "custom_chestplate_gray": {
      "textures": "textures/items/custom_chestplate_grayscale_fixed.tga"
    }
  }
}
```
