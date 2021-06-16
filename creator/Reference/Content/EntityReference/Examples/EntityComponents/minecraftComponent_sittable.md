---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:sittable
ms.prod: gaming
---

# minecraft:sittable

`minecraft:sittable` defines the entity's 'sit' state.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| sit_event| *not set*| String| Event to run when the entity enters the 'sit' state |
| stand_event| *not set*| String| Event to run when the entity exits the 'sit' state |

## Example

```json
"minecraft:sittable":{
    "sit_event": ,
    "stand_event": ,
}
```

## Vanilla entities examples

### cat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cat.json" range="151-152":::

## Vanilla entities using `minecraft:sittable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)