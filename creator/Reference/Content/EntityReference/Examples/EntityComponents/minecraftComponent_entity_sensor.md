---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:entity_sensor
ms.prod: gaming
---

# minecraft:entity_sensor

`minecraft:entity_sensor` is a component that fires an event when a set of conditions are met by other entities within the defined range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| Minecraft Filter| *not set*| | event_filters |
| String| *not set*| | event |
| maximum_count| -1| Integer| The maximum number of entities that must pass the filter conditions for the event to send. |
| minimum_count| 1| Integer| The minimum number of entities that must pass the filter conditions for the event to send. |
| relative_range| True| Boolean| If true the sensor range is additive on top of the entity's size. |
| require_all| False| Boolean| If true requires all nearby entities to pass the filter conditions for the event to send. |
| sensor_range| 10| Decimal| The maximum distance another entity can be from this and have the filters checked against it. |

## Example

```json
"minecraft:entity_sensor":{
    "Minecraft": ,
    "String": ,
    "maximum_count": -1,
    "minimum_count": 1,
    "relative_range": true,
    "require_all": false,
    "sensor_range": 10
}
```

## Vanilla entities examples

### pufferfish

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pufferfish.json" range="15-31":::

## Vanilla entities using `minecraft:entity_sensor`

- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)