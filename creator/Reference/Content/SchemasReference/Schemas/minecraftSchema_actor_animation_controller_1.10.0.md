---
author: docsbryce
ms.author: v-bbortree
title: "Schema Documentation - actor_animation_controller:1.10.0"
ms.prod: gaming
---

# Schema Documentation - actor_animation_controller:1.10.0

This schema corresponds to the *.animation_controllers.json files in the "animation_controllers" folder of the resource pack.

```json
actor_animation_controller:1.10.0:{
    version "format_version"
    object "animation_controllers"
    {
        object "controller.animation.<identifier>"
        {
            object "states"
            {
                object "<identifier>"
                {
                    object "variables" : opt
                    {
                        object "<identifier>"
                        {
                            molang "input"
                            object "remap_curve" : opt
                            {
                                float "<time_stamp>"
                            }
                        }
                    }
                    array "animations" : opt
                    {
                        string "<any array element>"
                        object "<any array element>"
                        {
                            molang "<identifier>"
                        }
                    }
                    array "transitions" : opt
                    {
                        object "<any array element>"[1] : opt
                        {
                            string "<identifier>"
                        }
                    }
                    bool "blend_via_shortest_path" : opt // When blending a transition to another state, animate each euler axis through the shortest rotation, instead of by value
                    object "blend_transition" : opt // Specifies the cross-fade time in seconds when transitioning to another state
                    {
                        float "<identifier>" // Mapping of time since the animation was canceled, to the blend value at that time.  A default key of time=0 to a blend value of 1.0 is provided if any other key is set and a blend value at time=0 hasn't already been set.
                    }
                    float "blend_transition" : opt // A short-hand version of blend_out that simply sets the amount of time to fade out if the animation is interrupted
                    array "particle_effects" : opt
                    {
                        object "<any array element>" : opt
                        {
                            string "effect" // The name of a particle effect that should be played
                            string "locator" : opt // The name of a locator on the actor where the effect should be located
                            molang "pre_effect_script" : opt // A Molang script that will be run when the particle emitter is initialized
                            bool "bind_to_actor" : opt // Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).
                        }
                    }
                    array "on_entry" : opt
                    {
                        string "<any array element>" : opt
                    }
                    array "on_exit" : opt
                    {
                        string "<any array element>" : opt
                    }
                    array "sound_effects" : opt // Collection of sounds to trigger on entry to this animation state.
                    {
                        object "<any array element>" : opt
                        {
                            string "effect" // Valid sound effect names should be listed in the entity's resource_definition json file.
                        }
                    }
                }
            }
            string "initial_state" : opt
        }
    }
}
```