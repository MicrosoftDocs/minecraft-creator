---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:out_of_control
ms.prod: gaming
---

# Entity Documentation - minecraft:out_of_control

`minecraft:out_of_control` defines the entity's 'out of control' state.

## Example

```json
"minecraft:out_of_control":{
}
```

## Vanilla entities examples

### boat

In the `boat` entity, `minecraft:out_of_control` is used in conjunction with `minecraft:buoyant`to create a custom event.

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/boat.json" range="80-93":::

## Vanilla entities using `minecraft:out_of_control`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
