---
author: mammerla
ms.author: mikeam
title: "Position (x y z) - Command Argument Type"
description: "Reference for the Position (x y z) command argument type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Position (x y z)

A 3D position in the world. Can use absolute coordinates, relative coordinates (~), or local coordinates (^).

**Format:** `x y z, ~ ~ ~, or ^ ^ ^`

## Examples

### Relative

| Example | Description |
|:--------|:------------|
| `~ ~ ~` | Current position (where command executes) |
| `~ ~1 ~` | One block above current position |
| `~ ~-1 ~` | One block below current position |
| `~5 ~ ~` | 5 blocks east (positive X) |
| `~0 ~0 ~0` | Explicit relative (same as ~ ~ ~) |

### Local

| Example | Description |
|:--------|:------------|
| `^ ^ ^1` | One block in front (facing direction) |
| `^ ^ ^-1` | One block behind |
| `^1 ^ ^` | One block to the left |

### Absolute

| Example | Description |
|:--------|:------------|
| `0 64 0` | World origin at sea level |
