---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.croak
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.croak

`minecraft:behavior.croak` [EXPERIMENTAL BEHAVIOR] allows the entity to croak at a random time interval with configurable conditions.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| duration| [4.5, 4.5]| Range [a, b]| Random range in seconds after which the croaking stops. Can also be a constant. |
| filters| None | Minecraft Filter| Conditions for the behavior to start and keep running. The interval between runs only starts after passing the filters. |
| interval| [10, 20]| Range [a, b]| Random range in seconds between runs of this behavior. Can also be a constant. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Vanilla entities examples

### frog

```json
"minecraft:behavior.croak": {
    "priority": 9,
    "interval": [ 10, 20 ],
    "duration": 4.5,
    "filters": {
      "all_of": [
          {
           "test": "in_water",
           "value": false
          },
          {
           "test": "in_lava",
           "value": false
          }
      ]
    }
}
```

## Vanilla entities using `croak`

- [frog](../../../../Source/VanillaBehaviorPack_Snippets/entities/frog.md)
