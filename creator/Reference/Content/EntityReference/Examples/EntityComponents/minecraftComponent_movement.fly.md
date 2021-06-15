---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:movement.fly
ms.prod: gaming
---
​
# minecraft:movement.fly
​
`minecraft:movement.fly` causes the mob to fly.
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |
​
## Example
​
```json
"minecraft:movement.fly":{
    "max_turn": 30.0,
}
```
​
## Vanilla entities examples
​
### parrot

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/parrot.json" range="142-143":::
​
## Vanilla entities using `minecraft:movement.fly`
​
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)