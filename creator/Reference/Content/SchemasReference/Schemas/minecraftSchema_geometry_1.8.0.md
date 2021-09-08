---
author: v-jeffreykim
ms.author: v-jeffreykim
title: "Schema Documentation - geometry:1.8.0"
ms.prod: gaming
---

# Schema Documentation - geometry:1.8.0

This schema corresponds to the *.geo.json files in the "models/entity" folder of the resource pack.

```json
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
```