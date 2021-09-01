---
author: v-jeffreykim
ms.author: v-jeffreykim
title: "Schema Documentation - block_reference:1.10.0"
ms.prod: gaming
---

# Schema Documentation - block_reference:1.10.0

This schema corresponds to the custom block JSON files in the "blocks" folder of the resource pack.

```json
block_reference:1.10.0:{
    string "name"
    object "states"
    {
        bool "\w*:?\w+" : opt
        int "\w*:?\w+" : opt
        string "\w*:?\w+" : opt
    }
}
```
