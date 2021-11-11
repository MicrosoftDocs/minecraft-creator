---
author: v-josjones
ms.author: v-josjones
title: "Schema Documentation - actor_resource:1.8.0"
ms.prod: gaming
---

# Schema Documentation - actor_resource:1.8.0

This schema corresponds to the *.entity.json files in the "entity" folder of the resource pack.

```json
actor_resource_definition:1.8.0:{
    version "format_version"
    object "minecraft:(client_entity|attachable)"
    {
        object "description"
        {
            string "identifier"
            version "min_engine_version" : opt
            object "materials" : opt
            {
                string "<identifier>"
            }
            object "textures" : opt
            {
                string "<identifier>"
            }
            object "geometry" : opt
            {
                string "<identifier>"
            }
            object "spawn_egg" : opt
            {
                string "texture" : opt
                string "base_color" : opt
                string "overlay_color" : opt
                int "texture_index" : opt
            }
            object "scripts" : opt
            {
                array "pre_animation" : opt
                {
                    molang "<any array element>"
                }
                molang "scale" : opt
                molang "scale[xX]" : opt
                molang "scale[yY]" : opt
                molang "scale[zZ]" : opt
                molang "parent_setup" : opt
            }
            object "particle_effects"[1,*] : opt
            {
                string "<identifier>" : opt
            }
            object "particle_emitters"[1,*] : opt
            {
                string "<identifier>" : opt
            }
            object "animations"[1,*] : opt
            {
                string "<identifier>" : opt
            }
            array "animation_controllers"[1,*] : opt
            {
                object "<any array element>" : opt
                {
                    string "<identifier>" : opt
                }
            }
            array "render_controllers"[1,*] : opt
            {
                string "<any array element>" : opt
            }
            object "sound_effects"[1,*] : opt
            {
                string "<identifier>" : opt
            }
            bool "enable_attachables" : opt
            bool "hide_armor" : opt
        }
    }
}
```