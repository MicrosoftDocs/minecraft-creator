---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Schema Documentation - render_controller
ms.prod: gaming
---

# Schema Documentation - render_controller

This schema corresponds to the *.render_controllers.json files in the "render_controllers" folder of the resource pack.

```json
render_controller:1.8.0:{
    version "format_version"
    object "render_controllers"
    {
        object "controller.render.<scope_identifier>"
        {
            bool "rebuild_animation_matrices" : opt
            object "arrays" : opt
            {
                object "geometries" : opt
                {
                    array "array.<scope_identifier>"
                    {
                        string "<any array element>"
                    }
                }
                object "materials" : opt
                {
                    array "array.<scope_identifier>"
                    {
                        string "<any array element>"
                    }
                }
                object "textures" : opt
                {
                    array "array.<scope_identifier>"
                    {
                        string "<any array element>"
                    }
                }
            }
            string "geometry"
            array "part_visibility" : opt
            {
                object "<any array element>"
                {
                    molang "[a-zA-Z0-9_.:*]+"
                }
            }
            array "materials" : opt
            {
                object "<any array element>"
                {
                    molang "[a-zA-Z0-9_.:*]+"
                }
            }
            array "textures" : opt
            {
                string "<any array element>"
            }
            object "color" : opt
            {
                molang "r" : opt
                molang "g" : opt
                molang "b" : opt
                molang "a" : opt
            }
            object "overlay_color" : opt
            {
                molang "r" : opt
                molang "g" : opt
                molang "b" : opt
                molang "a" : opt
            }
            object "on_fire_color" : opt
            {
                molang "r" : opt
                molang "g" : opt
                molang "b" : opt
                molang "a" : opt
            }
            object "is_hurt_color" : opt
            {
                molang "r" : opt
                molang "g" : opt
                molang "b" : opt
                molang "a" : opt
            }
            object "uv_anim" : opt
            {
                array "offset"[2]
                {
                    molang "<any array element>"
                }
                array "scale"[2]
                {
                    molang "<any array element>"
                }
            }
            molang "light_color_multiplier" : opt
            bool "ignore_lighting" : opt
            bool "filter_lighting" : opt
        }
    }
}
```