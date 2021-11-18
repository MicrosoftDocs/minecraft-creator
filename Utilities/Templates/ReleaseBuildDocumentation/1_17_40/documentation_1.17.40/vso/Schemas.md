<big>Version: 1.17.40.6</big>

[[_TOC_]]

# Overview

These are the data format schemas for content creators to reference when editing or creating new content.



# Schemas

```
--------
item_event_responses:1.16.100:
----------
actor_animation:1.8.0:{
    version "format_version"
    object "animations"
    {
        object "animation.<identifier>"
        {
            bool "loop" : opt // should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame"
            string "loop"<"hold_on_last_frame"> : opt // should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame"
            molang "start_delay" : opt // How long to wait in seconds before playing this animation.  Note that this expression is evaluated once before playing, and only re-evaluated if asked to play from the beginning again.  A looping animation should use 'loop_delay' if it wants a delay between loops.
            molang "loop_delay" : opt // How long to wait in seconds before looping this animation.  Note that this expression is evaluated after each loop and on looping animation only.
            molang "anim_time_update" : opt // how does time pass when playing the animation.  Defaults to "query.anim_time + query.delta_time" which means advance in seconds.
            molang "blend_weight" : opt
            bool "override_previous_animation" : opt // reset bones in this animation to the default pose before applying this animation
            object "bones" : opt
            {
                object "<identifier>"
                {
                    object "relative_to" : opt
                    {
                        string "rotation"<"entity"> : opt // if set, makes the bone rotation relative to the entity instead of the bone's parent
                    }
                    molang "position" : opt
                    object "position" : opt
                    {
                        object "<time_stamp>"
                        {
                            enumerated_value "lerp_mode"<"linear", "catmullrom"> : opt
                            array "pre"[3] : opt
                            {
                                molang "<any array element>"
                            }
                            array "post"[3] : opt
                            {
                                molang "<any array element>"
                            }
                        }
                        array "<time_stamp>"[3]
                        {
                            molang "<any array element>"
                        }
                    }
                    array "position" : opt
                    {
                        molang "<any array element>"
                    }
                    molang "rotation" : opt
                    array "rotation" : opt
                    {
                        molang "<any array element>"
                        object "<any array element>"
                        {
                            molang "[xyz]"
                        }
                    }
                    object "rotation" : opt
                    {
                        object "<time_stamp>"
                        {
                            enumerated_value "lerp_mode"<"linear", "catmullrom"> : opt
                            array "pre"[3] : opt
                            {
                                molang "<any array element>"
                            }
                            array "post"[3] : opt
                            {
                                molang "<any array element>"
                            }
                        }
                        array "<time_stamp>"[3]
                        {
                            molang "<any array element>"
                        }
                    }
                    molang "scale" : opt
                    object "scale" : opt
                    {
                        object "<time_stamp>"
                        {
                            enumerated_value "lerp_mode"<"linear", "catmullrom"> : opt
                            array "pre"[3] : opt
                            {
                                molang "<any array element>"
                            }
                            array "post"[3] : opt
                            {
                                molang "<any array element>"
                            }
                        }
                        array "<time_stamp>"[3]
                        {
                            molang "<any array element>"
                        }
                    }
                    array "scale" : opt
                    {
                        molang "<any array element>"
                    }
                }
            }
            object "particle_effects" : opt
            {
                array "<time_stamp>" : opt
                {
                    object "<any array element>" : opt
                    {
                        string "effect" // The name of a particle effect that should be played
                        string "locator" : opt // The name of a locator on the actor where the effect should be located
                        molang "pre_effect_script" : opt // A Molang script that will be run when the particle emitter is initialized
                        bool "bind_to_actor" : opt // Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).
                    }
                }
                object "<time_stamp>" : opt
                {
                    string "effect" // The name of a particle effect that should be played
                    string "locator" : opt // The name of a locator on the actor where the effect should be located
                    molang "pre_effect_script" : opt // A Molang script that will be run when the particle emitter is initialized
                    bool "bind_to_actor" : opt // Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).
                }
            }
            object "sound_effects" : opt // sound effects to trigger as this animation plays, keyed by time
            {
                array "<time_stamp>" : opt
                {
                    object "<any array element>" : opt
                    {
                        string "effect" // Valid sound effect names should be listed in the entity's resource_definition json file.
                    }
                }
                object "<time_stamp>" : opt
                {
                    string "effect" // Valid sound effect names should be listed in the entity's resource_definition json file.
                }
            }
            object "timeline" : opt
            {
                string "<time_stamp>" : opt
                array "<time_stamp>" : opt
                {
                    string "<any array element>" : opt
                }
            }
            float "animation_length" : opt // override calculated value (set as the last keyframe time) and set animation length in seconds.
        }
    }
}

----------
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

----------
chance_information:1.14.0:{
    int "numerator"<1-*>
    int "denominator"<1-*>
}

----------
block_reference:1.10.0:{
    string "name"
    object "states"
    {
        bool "\w*:?\w+" : opt
        int "\w*:?\w+" : opt
        string "\w*:?\w+" : opt
    }
}

----------
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

----------
geometry:1.8.0:{
    bool "debug" : opt
    version "format_version"
    object "geometry.[a-zA-Z0-9_.'-:]+"
    {
        bool "debug" : opt
        float "visible_bounds_width" : opt
        float "visible_bounds_height" : opt
        array "visible_bounds_offset"[3] : opt
        {
            float "<any array element>"
        }
        int "texturewidth" : opt
        int "textureheight" : opt
        string "cape" : opt
        array "bones" : opt
        {
            object "<any array element>" : opt
            {
                string "name"
                bool "reset" : opt
                bool "neverRender" : opt
                string "parent" : opt
                array "pivot"[3] : opt
                {
                    float "<any array element>"
                }
                array "rotation"[3] : opt
                {
                    float "<any array element>"
                }
                array "bind_pose_rotation"[3] : opt
                {
                    float "<any array element>" : opt
                }
                bool "mirror" : opt
                float "inflate" : opt
                bool "debug" : opt
                int "render_group_id"<0-*> : opt
                array "cubes" : opt
                {
                    object "<any array element>" : opt
                    {
                        array "origin"[3] : opt
                        {
                            float "<any array element>"
                        }
                        array "size"[3] : opt
                        {
                            float "<any array element>"
                        }
                        array "uv"[2] : opt
                        {
                            float "<any array element>"
                        }
                        float "inflate" : opt
                        bool "mirror" : opt
                    }
                }
                object "locators" : opt
                {
                    array "<identifier>" : opt
                    {
                        float "<any array element>" : opt
                    }
                }
                object "poly_mesh" : opt
                {
                    bool "normalized_uvs" : opt
                    array "positions" : opt
                    {
                        array "<any array element>"[3] : opt
                        {
                            float "<any array element>"
                        }
                    }
                    array "normals" : opt
                    {
                        array "<any array element>"[3] : opt
                        {
                            float "<any array element>"
                        }
                    }
                    array "uvs" : opt
                    {
                        array "<any array element>"[2] : opt
                        {
                            float "<any array element>"
                        }
                    }
                    array "polys"
                    {
                        array "<any array element>"[3,4] : opt
                        {
                            array "<any array element>"[3]
                            {
                                float "<any array element>"
                            }
                        }
                    }
                    string "polys"<"tri_list", "quad_list">
                }
                array "texture_meshes" : opt
                {
                    object "<any array element>"
                    {
                        string "texture"
                        array "position"[3] : opt
                        {
                            float "<any array element>"
                        }
                        array "local_pivot"[3] : opt
                        {
                            float "<any array element>"
                        }
                        array "rotation"[3] : opt
                        {
                            float "<any array element>"
                        }
                        array "scale"[3] : opt
                        {
                            float "<any array element>"
                        }
                    }
                }
            }
        }
    }
}

----------
geometry:1.12.0:{
    bool "debug" : opt
    version "format_version"
    array "minecraft:geometry"[1,*]
    {
        object "<any array element>"
        {
            object "description"
            {
                string "identifier" // Entity definition and Client Block definition files refer to this geometry via this identifier.
                float "visible_bounds_width" : opt // Width of the visibility bounding box (in model space units).
                float "visible_bounds_height" : opt // Height of the visible bounding box (in model space units).
                array "visible_bounds_offset"[3] : opt
                {
                    float "<any array element>" // Offset of the visibility bounding box from the entity location point (in model space units).
                }
                int "texture_width" : opt // Assumed width in texels of the texture that will be bound to this geometry.
                int "texture_height" : opt // Assumed height in texels of the texture that will be bound to this geometry.
            }
            string "cape" : opt
            array "bones" : opt // Bones define the 'skeleton' of the mob: the parts that can be animated, and to which geometry and other bones are attached.
            {
                object "<any array element>" : opt
                {
                    string "name" // Animation files refer to this bone via this identifier.
                    string "parent" : opt // Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.
                    array "pivot"[3] : opt
                    {
                        float "<any array element>" // The bone pivots around this point (in model space units).
                    }
                    array "rotation"[3] : opt
                    {
                        float "<any array element>" // This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).
                    }
                    bool "mirror" : opt // Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.
                    float "inflate" : opt // Grow this box by this additive amount in all directions (in model space units).
                    bool "debug" : opt
                    int "render_group_id"<0-*> : opt
                    array "cubes" : opt // This is the list of cubes associated with this bone.
                    {
                        object "<any array element>" : opt
                        {
                            array "origin"[3] : opt
                            {
                                float "<any array element>" // This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).
                            }
                            array "size"[3] : opt
                            {
                                float "<any array element>" // The cube extends this amount relative to its origin (in model space units).
                            }
                            array "rotation"[3] : opt
                            {
                                float "<any array element>" // The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.
                            }
                            array "pivot"[3] : opt
                            {
                                float "<any array element>" // If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.  Note that in 1.12 this is flipped upside-down, but is fixed in 1.14.
                            }
                            float "inflate" : opt // Grow this box by this additive amount in all directions (in model space units), this field overrides the bone's inflate field for this cube only.
                            bool "mirror" : opt // Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone's 'mirror' setting for this cube.
                            object "uv" : opt // This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.
                            {
                                object "north" : opt // Specifies the UV's for the face that stretches along the x and y axes, and faces the -z axis.
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "south" : opt // Specifies the UV's for the face that stretches along the x and y axes, and faces the z axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "east" : opt // Specifies the UV's for the face that stretches along the z and y axes, and faces the x axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "west" : opt // Specifies the UV's for the face that stretches along the z and y axes, and faces the -x axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "up" : opt // Specifies the UV's for the face that stretches along the x and z axes, and faces the y axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you're facing 'north' relative to the cube.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "down" : opt // Specifies the UV's for the face that stretches along the x and z axes, and faces the -y axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you're facing 'north' relative to the cube.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                            }
                            array "uv"[2] : opt
                            {
                                float "<any array element>" // Specifies the upper-left corner on the texture for the start of the texture mapping for this box.
                            }
                        }
                    }
                    object "locators" : opt
                    {
                        object "<identifier>" : opt // This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
                        {
                            array "offset"
                            {
                                float "<any array element>" : opt // Position of the locator in model space.
                            }
                            array "rotation"
                            {
                                float "<any array element>" : opt // Rotation of the locator in model space.
                            }
                            bool "ignore_inherited_scale" : opt // Discard scale inherited from parent bone.
                        }
                        array "<identifier>" : opt // This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
                        {
                            float "<any array element>" : opt // Position of the locator in model space.
                        }
                    }
                    object "poly_mesh" : opt // ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.
                    {
                        bool "normalized_uvs" : opt // If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.
                        array "positions" : opt
                        {
                            array "<any array element>"[3] : opt
                            {
                                float "<any array element>" // Vertex positions for the mesh.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.
                            }
                        }
                        array "normals" : opt
                        {
                            array "<any array element>"[3] : opt
                            {
                                float "<any array element>" // Vertex normals.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.
                            }
                        }
                        array "uvs" : opt
                        {
                            array "<any array element>"[2] : opt
                            {
                                float "<any array element>" // Vertex UVs.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.
                            }
                        }
                        array "polys"
                        {
                            array "<any array element>"[3,4] : opt
                            {
                                array "<any array element>"[3]
                                {
                                    float "<any array element>" // Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).
                                }
                            }
                        }
                        string "polys"<"tri_list", "quad_list"> // If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either "tri_list" or "quad_list"
                    }
                    array "texture_meshes" : opt // ***EXPERIMENTAL*** Adds a mesh to the bone's geometry by converting texels in a texture into boxes
                    {
                        object "<any array element>"
                        {
                            string "texture" // The friendly-named texture to use.
                            array "position"[3] : opt
                            {
                                float "<any array element>" // The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry
                            }
                            array "local_pivot"[3] : opt
                            {
                                float "<any array element>" // The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry
                            }
                            array "rotation"[3] : opt
                            {
                                float "<any array element>" // The rotation (in degrees) of the texture geometry relative to the offset
                            }
                            array "scale"[3] : opt
                            {
                                float "<any array element>" // The scale (in degrees) of the texture geometry relative to the offset
                            }
                        }
                    }
                }
            }
        }
    }
}

----------
geometry:1.14.0:{
    version "format_version"
    bool "debug" : opt
    array "minecraft:geometry"[1,*]
    {
        object "<any array element>"
        {
            object "description"
            {
                string "identifier" // Entity definition and Client Block definition files refer to this geometry via this identifier.
                float "visible_bounds_width" : opt // Width of the visibility bounding box (in model space units).
                float "visible_bounds_height" : opt // Height of the visible bounding box (in model space units).
                array "visible_bounds_offset"[3] : opt
                {
                    float "<any array element>" // Offset of the visibility bounding box from the entity location point (in model space units).
                }
                int "texture_width" : opt // Assumed width in texels of the texture that will be bound to this geometry.
                int "texture_height" : opt // Assumed height in texels of the texture that will be bound to this geometry.
            }
            string "cape" : opt
            array "bones" : opt // Bones define the 'skeleton' of the mob: the parts that can be animated, and to which geometry and other bones are attached.
            {
                object "<any array element>" : opt
                {
                    string "name" // Animation files refer to this bone via this identifier.
                    string "parent" : opt // Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.
                    array "pivot"[3] : opt
                    {
                        float "<any array element>" // The bone pivots around this point (in model space units).
                    }
                    array "rotation"[3] : opt
                    {
                        float "<any array element>" // This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).
                    }
                    bool "mirror" : opt // Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.
                    float "inflate" : opt // Grow this box by this additive amount in all directions (in model space units).
                    bool "debug" : opt
                    int "render_group_id"<0-*> : opt
                    array "cubes" : opt // This is the list of cubes associated with this bone.
                    {
                        object "<any array element>" : opt
                        {
                            array "origin"[3] : opt
                            {
                                float "<any array element>" // This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).
                            }
                            array "size"[3] : opt
                            {
                                float "<any array element>" // The cube extends this amount relative to its origin (in model space units).
                            }
                            array "rotation"[3] : opt
                            {
                                float "<any array element>" // The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.
                            }
                            array "pivot"[3] : opt
                            {
                                float "<any array element>" // If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.
                            }
                            float "inflate" : opt // Grow this box by this additive amount in all directions (in model space units), this field overrides the bone's inflate field for this cube only.
                            bool "mirror" : opt // Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone's 'mirror' setting for this cube.
                            object "uv" : opt // This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.
                            {
                                object "north" : opt // Specifies the UV's for the face that stretches along the x and y axes, and faces the -z axis.
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "south" : opt // Specifies the UV's for the face that stretches along the x and y axes, and faces the z axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "east" : opt // Specifies the UV's for the face that stretches along the z and y axes, and faces the x axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "west" : opt // Specifies the UV's for the face that stretches along the z and y axes, and faces the -x axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "up" : opt // Specifies the UV's for the face that stretches along the x and z axes, and faces the y axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you're facing 'north' relative to the cube.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "down" : opt // Specifies the UV's for the face that stretches along the x and z axes, and faces the -y axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you're facing 'north' relative to the cube.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                            }
                            array "uv"[2] : opt
                            {
                                float "<any array element>" // Specifies the upper-left corner on the texture for the start of the texture mapping for this box.
                            }
                        }
                    }
                    object "locators" : opt
                    {
                        object "<identifier>" : opt // This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
                        {
                            array "offset"
                            {
                                float "<any array element>" : opt // Position of the locator in model space.
                            }
                            array "rotation"
                            {
                                float "<any array element>" : opt // Rotation of the locator in model space.
                            }
                            bool "ignore_inherited_scale" : opt // Discard scale inherited from parent bone.
                        }
                        array "<identifier>" : opt // This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
                        {
                            float "<any array element>" : opt // Position of the locator in model space.
                        }
                    }
                    object "poly_mesh" : opt // ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.
                    {
                        bool "normalized_uvs" : opt // If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.
                        array "positions" : opt
                        {
                            array "<any array element>"[3] : opt
                            {
                                float "<any array element>" // Vertex positions for the mesh.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.
                            }
                        }
                        array "normals" : opt
                        {
                            array "<any array element>"[3] : opt
                            {
                                float "<any array element>" // Vertex normals.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.
                            }
                        }
                        array "uvs" : opt
                        {
                            array "<any array element>"[2] : opt
                            {
                                float "<any array element>" // Vertex UVs.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.
                            }
                        }
                        array "polys"
                        {
                            array "<any array element>"[3,4] : opt
                            {
                                array "<any array element>"[3]
                                {
                                    float "<any array element>" // Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).
                                }
                            }
                        }
                        string "polys"<"tri_list", "quad_list"> // If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either "tri_list" or "quad_list"
                    }
                    array "texture_meshes" : opt // ***EXPERIMENTAL*** Adds a mesh to the bone's geometry by converting texels in a texture into boxes
                    {
                        object "<any array element>"
                        {
                            string "texture" // The friendly-named texture to use.
                            array "position"[3] : opt
                            {
                                float "<any array element>" // The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry
                            }
                            array "local_pivot"[3] : opt
                            {
                                float "<any array element>" // The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry
                            }
                            array "rotation"[3] : opt
                            {
                                float "<any array element>" // The rotation (in degrees) of the texture geometry relative to the offset
                            }
                            array "scale"[3] : opt
                            {
                                float "<any array element>" // The scale (in degrees) of the texture geometry relative to the offset
                            }
                        }
                    }
                }
            }
        }
    }
}

----------
geometry:1.16.0:{
    version "format_version"
    bool "debug" : opt
    array "minecraft:geometry"[1,*]
    {
        object "<any array element>"
        {
            object "description"
            {
                string "identifier" // Entity definition and Client Block definition files refer to this geometry via this identifier.
                float "visible_bounds_width" : opt // Width of the visibility bounding box (in model space units).
                float "visible_bounds_height" : opt // Height of the visible bounding box (in model space units).
                array "visible_bounds_offset"[3] : opt
                {
                    float "<any array element>" // Offset of the visibility bounding box from the entity location point (in model space units).
                }
                int "texture_width" : opt // Assumed width in texels of the texture that will be bound to this geometry.
                int "texture_height" : opt // Assumed height in texels of the texture that will be bound to this geometry.
            }
            string "cape" : opt
            array "bones" : opt // Bones define the 'skeleton' of the mob: the parts that can be animated, and to which geometry and other bones are attached.
            {
                object "<any array element>" : opt
                {
                    string "name" // Animation files refer to this bone via this identifier.
                    string "parent" : opt // Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.
                    array "pivot"[3] : opt
                    {
                        float "<any array element>" // The bone pivots around this point (in model space units).
                    }
                    array "rotation"[3] : opt
                    {
                        float "<any array element>" // This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).
                    }
                    bool "mirror" : opt // Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.
                    float "inflate" : opt // Grow this box by this additive amount in all directions (in model space units).
                    bool "debug" : opt
                    int "render_group_id"<0-*> : opt
                    array "cubes" : opt // This is the list of cubes associated with this bone.
                    {
                        object "<any array element>" : opt
                        {
                            array "origin"[3] : opt
                            {
                                float "<any array element>" // This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).
                            }
                            array "size"[3] : opt
                            {
                                float "<any array element>" // The cube extends this amount relative to its origin (in model space units).
                            }
                            array "rotation"[3] : opt
                            {
                                float "<any array element>" // The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.
                            }
                            array "pivot"[3] : opt
                            {
                                float "<any array element>" // If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.
                            }
                            float "inflate" : opt // Grow this box by this additive amount in all directions (in model space units), this field overrides the bone's inflate field for this cube only.
                            bool "mirror" : opt // Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone's 'mirror' setting for this cube.
                            object "uv" : opt // This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.
                            {
                                object "north" : opt // Specifies the UV's for the face that stretches along the x and y axes, and faces the -z axis.
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "south" : opt // Specifies the UV's for the face that stretches along the x and y axes, and faces the z axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "east" : opt // Specifies the UV's for the face that stretches along the z and y axes, and faces the x axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "west" : opt // Specifies the UV's for the face that stretches along the z and y axes, and faces the -x axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "up" : opt // Specifies the UV's for the face that stretches along the x and z axes, and faces the y axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you're facing 'north' relative to the cube.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                                object "down" : opt // Specifies the UV's for the face that stretches along the x and z axes, and faces the -y axis
                                {
                                    array "uv"[2]
                                    {
                                        float "<any array element>" // Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you're facing 'north' relative to the cube.
                                    }
                                    array "uv_size"[2] : opt
                                    {
                                        float "<any array element>" // The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
                                    }
                                    string "material_instance" : opt
                                }
                            }
                            array "uv"[2] : opt
                            {
                                float "<any array element>" // Specifies the upper-left corner on the texture for the start of the texture mapping for this box.
                            }
                        }
                    }
                    molang "binding" : opt // useful for items.  A molang expression specifying the bone name of the parent skeletal hierarchy that this bone should use as the root transform.  Without this field it will look for a bone in the parent entity with the same name as this bone.  If both are missing, it will assume a local skeletal hierarchy (via the "parent" field).  If that is also missing, it will attach to the owning entity's root transform.
                    object "locators" : opt
                    {
                        object "<identifier>" : opt // This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
                        {
                            array "offset"
                            {
                                float "<any array element>" : opt // Position of the locator in model space.
                            }
                            array "rotation"
                            {
                                float "<any array element>" : opt // Rotation of the locator in model space.
                            }
                            bool "ignore_inherited_scale" : opt // Discard scale inherited from parent bone.
                        }
                        array "<identifier>" : opt // This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
                        {
                            float "<any array element>" : opt // Position of the locator in model space.
                        }
                    }
                    object "poly_mesh" : opt // ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.
                    {
                        bool "normalized_uvs" : opt // If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.
                        array "positions" : opt
                        {
                            array "<any array element>"[3] : opt
                            {
                                float "<any array element>" // Vertex positions for the mesh.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.
                            }
                        }
                        array "normals" : opt
                        {
                            array "<any array element>"[3] : opt
                            {
                                float "<any array element>" // Vertex normals.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.
                            }
                        }
                        array "uvs" : opt
                        {
                            array "<any array element>"[2] : opt
                            {
                                float "<any array element>" // Vertex UVs.  Can be either indexed via the "polys" section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.
                            }
                        }
                        array "polys"
                        {
                            array "<any array element>"[3,4] : opt
                            {
                                array "<any array element>"[3]
                                {
                                    float "<any array element>" // Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).
                                }
                            }
                        }
                        string "polys"<"tri_list", "quad_list"> // If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either "tri_list" or "quad_list"
                    }
                    array "texture_meshes" : opt // ***EXPERIMENTAL*** Adds a mesh to the bone's geometry by converting texels in a texture into boxes
                    {
                        object "<any array element>"
                        {
                            string "texture" // The friendly-named texture to use.
                            array "position"[3] : opt
                            {
                                float "<any array element>" // The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry
                            }
                            array "local_pivot"[3] : opt
                            {
                                float "<any array element>" // The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry
                            }
                            array "rotation"[3] : opt
                            {
                                float "<any array element>" // The rotation (in degrees) of the texture geometry relative to the offset
                            }
                            array "scale"[3] : opt
                            {
                                float "<any array element>" // The scale (in degrees) of the texture geometry relative to the offset
                            }
                        }
                    }
                }
            }
        }
    }
}

----------
```


