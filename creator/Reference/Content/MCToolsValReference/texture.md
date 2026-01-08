---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:texture"
description: "Describes the minecraft:texture mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:texture

Validates texture references across entities, blocks, items, particles, and UI elements. Tracks texture handle usage to prevent exceeding platform limits.


## Texture Validation Validation Rules


### TEXTURE100: Handle Limit Exceeded

**Rule ID:** `TEXTURE100`

**Severity:** Info

**What it checks:** Error when the total number of unique texture handles exceeds platform limits. Mobile devices have lower limits than PC. Consider consolidating textures or using texture atlases.

**How to fix:** Reduce the number of unique textures by combining small textures into texture atlases. Consider using flipbook animations instead of separate texture files. Remove unused textures from your pack.

**Technical details:** Data contains the count of texture handles exceeding the limit.


### TEXTURE101: Textures

**Rule ID:** `TEXTURE101`

**Severity:** Info

**What it checks:** Count of unique texture paths referenced in the project from entities, blocks, items, particles, terrain_texture.json, and UI definitions.

**Technical details:** Data contains the count of unique texture references.
