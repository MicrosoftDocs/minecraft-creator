---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:rect_layout
ms.prod: gaming
---

## minecraft:rect_layout

`minecraft:rect_layout` scans the surface of a Chunk, calling place() on the surface of each block column.

**Succeeds if**
A Feature is successfully placed within a Chunk.

**Fails if**
No Feature could be placed within a Chunk.

## Example use: Scans the surface of a chunk and places a feature if able

```json
{
  "ratio_of_empty_space": 0.5,
  "feature_areas":[
    {
      "feature": "badger:tree",
      "area_dimensions": [Width,Height]
    },
    {
      "feature": "badger:tree2",
      "area_dimensions": [Width,Height]
    }
  ]
}
```
