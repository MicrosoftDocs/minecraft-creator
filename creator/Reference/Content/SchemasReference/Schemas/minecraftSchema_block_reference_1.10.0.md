---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Schema Documentation - block_reference
ms.prod: gaming
---

# Schema Documentation - block_reference

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