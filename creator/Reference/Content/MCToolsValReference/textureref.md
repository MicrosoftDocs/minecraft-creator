---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:textureref"
description: "Describes the minecraft:textureref mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:textureref

Collects and aggregates all texture references from across the project including entity textures, block textures, particle effects, and UI elements.


## Texture References Validation Rules


### TEXTUREREF101: Reference List

**Rule ID:** `TEXTUREREF101`

**Severity:** Info

**What it checks:** Aggregated list of all texture file references found in the project. Used to verify that referenced textures exist and are properly formatted.

**Technical details:** Data contains the texture path being referenced.
