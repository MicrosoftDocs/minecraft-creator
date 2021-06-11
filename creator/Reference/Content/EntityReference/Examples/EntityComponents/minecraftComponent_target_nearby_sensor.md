---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:target_nearby_sensor
ms.prod: gaming
---
​
# minecraft:target_nearby_sensor
​
`minecraft:target_nearby_sensor` defines the entity's range within which it can see or sense other entities to target them.
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| inside_range| 1| Decimal| Maximum distance in blocks that another entity will be considered in the 'inside' range |
| must_see| False| Boolean| Whether the other entity needs to be visible to trigger 'inside' events |
| on_inside_range| *not set*| String| Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event |
| on_outside_range| *not set*| String| Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event |
| on_vision_lost_inside_range| *not set*| String| Event to call when an entity exits visual range. Can specify 'event' for the name of the event and 'target' for the target of the event |
| outside_range| 5| Decimal| Maximum distance in blocks that another entity will be considered in the 'outside' range |
​
## Example
​
```json
"minecraft:target_nearby_sensor":{
    "inside_range": 1,
    "must_see": false,
    "on_inside_range": ,
    "on_outside_range": ,
    "on_vision_lost_inside_range": ,
    "outside_range": 5,
}
```
​
## Vanilla entities examples
​
### creeper

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/creeper.json" range="122-138":::
​
## Vanilla entities using `minecraft:target_nearby_sensor`
​
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)