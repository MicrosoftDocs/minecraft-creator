---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:sittable
description: "A reference document detailing the 'sittable' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:sittable

`minecraft:sittable` defines the entity's 'sit' state.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| sit_event| *not set*| String| Event to run when the entity enters the 'sit' state |
| stand_event| *not set*| String| Event to run when the entity exits the 'sit' state |

## Example

```json
"minecraft:sittable":{
    "sit_event": {"event": "minecraft:taking_a_seat"},
    "stand_event": {"event": "minecraft:time_to_go"}
}
```

## Vanilla entities examples

### cat

```json
"minecraft:sittable": {
}
```

## Vanilla entities using `minecraft:sittable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
