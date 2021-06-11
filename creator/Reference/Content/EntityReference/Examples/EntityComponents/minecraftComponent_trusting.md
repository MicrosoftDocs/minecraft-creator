---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:trusting
ms.prod: gaming
---
​
# minecraft:trusting
​
`minecraft:trusting` defines the rules for a mob to trust players.
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:-----------:|:-----------:|:-----------:|:-----------:|
| probability| 1.00| Decimal| The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%. |
| trust_event| *not set*| String| Event to run when this entity becomes trusting. |
| trust_items| *not set*| List| The list of items that can be used to get the entity to trust players. |
​
## Example
​
```json
"minecraft:trusting": {
    "probability": 1.00,
    "trust_items": [ ],
    "trust_event": {
        "event": ,
        "target": 
    }
```
​
## Vanilla entities examples
​
### ocelot

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ocelot.json" range="41-47":::
​
## Vanilla entities using `minecraft:trusting`
​
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)