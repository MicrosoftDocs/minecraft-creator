---
author: mammerla
ms.author: mikeam
title: "Schema Documentation - block_reference:1.10.0"
description: "A reference document detailing the 'block_reference:1.10.0' schema"
ms.service: minecraft-bedrock-edition
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
