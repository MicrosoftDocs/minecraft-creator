---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.stay_while_sitting
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.stay_while_sitting

`minecraft:behavior.stay_while_sitting` allows an entity to stay in place while sitting.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.stay_while_sitting":{
    "priority": 3,
}
```

## Vanilla entities examples

### cat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cat.json" range="176-178":::

## Vanilla entities using `minecraft:behavior.stay_while_sitting`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
