---
author: mammerla
ms.author: mikeam
title: "Block Position - Command Argument Type"
description: "Reference for the Block Position command argument type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Position

A 3D block position (integer coordinates).

**Format:** `x y z or ~ ~ ~`

**Alias of:** type_position_float

## Examples

### Values

| Example | Description |
|:--------|:------------|
| `100 64 -200` | Absolute coordinates |
| `~10 ~ ~` | Relative to executor (10 blocks east) |
| `~ ~5 ~` | Relative (5 blocks up) |
| `~ ~ ~` | Current position |
