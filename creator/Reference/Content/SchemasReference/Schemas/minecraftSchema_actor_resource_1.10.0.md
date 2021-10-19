---
author: v-josjones
ms.author: v-josjones
title: "Schema Documentation - actor_resource:1.10.0:"
ms.prod: gaming
---

# Schema Documentation - actor_resource:1.10.0

This schema corresponds to the *.entity.json files in the "entity" folder of the resource pack.

```json
actor_resource_definition:1.10.0:{
    version "format_version"
    object "minecraft:client_entity" : opt
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
            string "queryable_geometry" : opt
            object "spawn_egg" : opt
            {
                string "texture" : opt
                string "base_color" : opt
                string "overlay_color" : opt
                int "texture_index" : opt
            }
            object "scripts" : opt
            {
                object "variables" : opt // A list of variables that need certain settings applied to them.  Currently, for the client, only "public" is supported.
                {
                    string "variable.[a-zA-Z_][a-zA-Z0-9_]*"<"public"> // If a variable is public, it can be read by other mobs.  See the molang '->' operator for details.
                }
                array "initialize" : opt
                {
                    molang "<any array element>"
                }
                array "pre_animation" : opt
                {
                    molang "<any array element>"
                }
                molang "scale" : opt
                molang "scale[xX]" : opt
                molang "scale[yY]" : opt
                molang "scale[zZ]" : opt
                molang "parent_setup" : opt
                array "animate"[1,*] : opt
                {
                    string "<any array element>" : opt
                    object "<any array element>"[1] : opt
                    {
                        molang "<scope_identifier>" : opt
                    }
                }
                molang "should_update_bones_and_effects_offscreen" : opt // Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.
                molang "should_update_effects_offscreen" : opt // Effects will still be updated if the entity is off screen if this expression or `should_update_bones_and_effects_offscreen` returns anything other than 0.0.
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
            array "render_controllers"[1,*] : opt
            {
                string "<any array element>" : opt
                object "<any array element>"[1] : opt
                {
                    molang "<scope_identifier>" : opt
                }
            }
            object "sound_effects"[1,*] : opt
            {
                string "<identifier>" : opt
            }
            bool "enable_attachables" : opt
            bool "hide_armor" : opt
        }
    }
    object "minecraft:attachable" : opt
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
            string "queryable_geometry" : opt
            object "spawn_egg" : opt
            {
                string "texture" : opt
                string "base_color" : opt
                string "overlay_color" : opt
                int "texture_index" : opt
            }
            object "scripts" : opt
            {
                object "variables" : opt // A list of variables that need certain settings applied to them.  Currently, for the client, only "public" is supported.
                {
                    string "variable.[a-zA-Z_][a-zA-Z0-9_]*"<"public"> // If a variable is public, it can be read by other mobs.  See the molang '->' operator for details.
                }
                array "initialize" : opt
                {
                    molang "<any array element>"
                }
                array "pre_animation" : opt
                {
                    molang "<any array element>"
                }
                molang "scale" : opt
                molang "scale[xX]" : opt
                molang "scale[yY]" : opt
                molang "scale[zZ]" : opt
                molang "parent_setup" : opt
                array "animate"[1,*] : opt
                {
                    string "<any array element>" : opt
                    object "<any array element>"[1] : opt
                    {
                        molang "<scope_identifier>" : opt
                    }
                }
                molang "should_update_bones_and_effects_offscreen" : opt // Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.
                molang "should_update_effects_offscreen" : opt // Effects will still be updated if the entity is off screen if this expression or `should_update_bones_and_effects_offscreen` returns anything other than 0.0.
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
            array "render_controllers"[1,*] : opt
            {
                string "<any array element>" : opt
                object "<any array element>"[1] : opt
                {
                    molang "<scope_identifier>" : opt
                }
            }
            object "sound_effects"[1,*] : opt
            {
                string "<identifier>" : opt
            }
            bool "enable_attachables" : opt
            bool "hide_armor" : opt
            string "item" : opt
            object "item"[1] : opt
            {
                molang "<scope_identifier>"
            }
        }
    }
}
```
