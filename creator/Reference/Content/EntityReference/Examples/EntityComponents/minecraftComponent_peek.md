---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:peek
ms.prod: gaming
---
​
# minecraft:peek
​
`minecraft:peek` defines the entity's 'peek' behavior, defining the events that should be called during it.
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| on_close| *not set*| String| Event to call when the entity is done peeking. |
| on_open| *not set*| String| Event to call when the entity starts peeking. |
| on_target_open| *not set*| String| Event to call when the entity's target entity starts peeking. |
​
## Example
​
```json
"minecraft:peek":{
    "on_close": ,
    "on_open": ,
    "on_target_open": ,
}
```
​
## Vanilla entities examples
​
### shulker

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/shulker.json" range="140-150":::
​
## Vanilla entities using `minecraft:peek`
​
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)