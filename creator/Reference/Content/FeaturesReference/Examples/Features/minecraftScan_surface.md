---
author: mammerla
ms.author: mikeam
title: Features Documentation - minecraft:scan_surface
ms.prod: gaming
description: "A reference document detailing the 'scan_surface' feature"
---

# Features Documentation - minecraft:scan_surface

`minecraft:scan_surface` scans the surface of a Chunk, calling `place()` on the surface of each block column.

**Succeeds if**
A Feature was successfully placed during the scan.

**Fails if**
No Feature was placed during the course of the scan.

## Example

### Scans the surface of a chunk and places a feature if able

```json
{"scan_surface_feature": "example:apple_feature"}
```
