---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:beards_and_shavers
ms.prod: gaming
---

# Features Documentation - minecraft:beards_and_shavers

`minecraft:beards_and_shavers` will build a 'beard' or 'shave' out space so as to provide a clear space for a feature to place.

**Succeeds if**
A beard/shave is made (this should always happen).

**Fails if**
Will always return placement pos, but interior feature placement not guaranteed.

## Example

### Provides an area for interior structure placement

```json
{"code:beards_and_shavers": {
  "description": {
    "identifier": "..."
  },
  "places_feature": "minecraft:feature_that_places_a_structure",
  "bounding_box_min": [ -2, 0, -2 ],
  "bounding_box_max": [ 2, 8, 2 ],
  "y_delta": 2.0,
  "surface_block_type": "minecraft:grass",
  "subsurface_block_type": "minecraft:dirt",
  "beard_raggedness_min": 0.1,
  "beard_raggedness_max": 0.3
}}
```
