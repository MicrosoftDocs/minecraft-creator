---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:mob_effect
ms.prod: gaming
---
​
# minecraft:mob_effect
​
`minecraft:mob_effect` applies a mob effect to entities that get within range.
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| Minecraft Filter| *not set*| | entity_filter |
| effect_range| 0.2| Decimal| How close a hostile entity must be to have the mob effect applied. |
| effect_time| 10| Integer| How long the applied mob effect lasts in seconds. |
| mob_effect| *not set*| String| The mob effect that is applied to entities that enter this entities effect range. |
​
## Example
​
```json
"minecraft:mob_effect":{
    "Minecraft Filter": ,
    "effect_range": 0.2,
    "effect_time": 10,
    "mob_effect": ,
}
```
​
## Vanilla entities examples
​
### pufferfish

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pufferfish.json" range="91-101":::
​
## Vanilla entities using `minecraft:mob_effect`
​
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)