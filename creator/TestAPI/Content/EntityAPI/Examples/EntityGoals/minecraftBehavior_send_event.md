---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.send_event
ms.prod: gaming
---

# minecraft:behavior.send_event

`minecraft:behavior.send_event` allows an entity to send an event to another entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|cast_duration|*not set*| Decimal| Time in seconds for the entire event sending process |
|look_at_target| true|Boolean| If true, the mob will face the entity it sends an event to |
|sequence|*not set* | List| List of events to send

#### sequence

`sequence` is a list variable that can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|base_delay| 0.0| Decimal| Amount of time in seconds before starting this step |
|event|*not set* | String|  The event to send to the entity |
|sound_event|*not set* | String|  The sound event to play when this step happens |

## Example

```json
"minecraft:behavior.send_event":{
    "priority": 2,
    "cast_duration": 2.5,
    "look_at_target": true,
    "sequence": [
    {
        "base_delay": 1.25,
        "event": "wololo",
        "sound_event": "prepare.wololo"
    }
    ] 
}
```

## Vanilla entities examples

### evocation_illager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/evocation_illager.json" range="179-205":::

## Vanilla entities using `minecraft:behavior.send_event`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
