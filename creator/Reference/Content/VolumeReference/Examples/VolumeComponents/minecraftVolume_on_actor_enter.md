---
author: v-josjones
ms.author: v-josjones
title: Volume Documentation - minecraft:on_actor_enter
ms.prod: gaming
---

# Volume Documentation -  minecraft:on_actor_enter

`minecraft:on_actor_enter` is a Volume Component that defines what happens when an actor enters the volume.

| Name| Default Value| Type| Description |
|:----------|:----------|:----------|:----------|
|on_enter |*not set* |Array | Required array that contains all the triggers.|

### on_enter

`on_enter` is an array parameter that can use the following components:

| Name| Default Value| Type| Description |
|:----------|:----------|:----------|:----------|
| condition| *not set*| Molang expression| Molang expression to test against the actor. The given event will be triggered if the expression evaluates to true.|
| event| *not set*| String| Name of the event to run.|
| target| *not set* | String| One of "self" or "other". Self means the event is attached to the volume. Other means the event is attached to the actor.|

## Example

```json
"minecraft:on_actor_enter":{
  "on_enter": {
    "condition": "query.modified_move_speed >= 1.0", //check if player is sprinting
    "event" : "reduce_fog_amount", //custom event
    "target": "self"
  }
}
```
