---
author: v-jeffreykim
ms.author: v-jeffreykim
title: block_reference Schema
ms.prod: gaming
---

## block_reference Schema

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