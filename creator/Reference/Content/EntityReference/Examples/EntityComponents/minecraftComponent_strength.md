---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:strength
ms.prod: gaming
---
​
# minecraft:strength
​
`minecraft:strength` defines the entity's strength to carry items.
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max| 5| Integer| The maximum strength of this entity |
| value| 1| Integer| The initial value of the strength |
​
## Example
​
```json
"minecraft:strength":{
    "max": 5,
    "value": 1,
}
```
​
## Vanilla entities examples
​
### llama

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/llama.json" range="98-127":::
​
## Vanilla entities using `minecraft:strength`

- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)