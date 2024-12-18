---
author: mammerla
ms.author: mikeam
title: Entity Documentation - emit vibration
description: "A reference document detailing the 'emit_vibration' entity event"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - emit_vibration

`emit_vibration` allows the entity to emit a vibration having the entity itself as its source.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|vibration|*not set* | String|  Type of vibration to emit. Valid values are "entity_interact", "shear", "entity_act" and "entity_die". |

## Example

```json
{
    "emit_vibration": {
        "vibration": "entity_act"
    }
}
```
