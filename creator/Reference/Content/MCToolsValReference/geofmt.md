---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:geofmt"
description: "Describes the minecraft:geofmt mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:geofmt

Validates model geometry files for format compatibility and restricted features. Identifies geometry features that may not work on all platforms.


## Geometry Format Validation Rules


### GEOFMT101: Restricted Poly Mesh

**Rule ID:** `GEOFMT101`

**Severity:** Info

**What it checks:** Error when geometry contains poly_mesh data. Poly meshes are a restricted feature that may not be available on all platforms.

**Technical details:** Data contains the geometry identifier with poly_mesh.


### GEOFMT102: JSON Parse Error

**Rule ID:** `GEOFMT102`

**Severity:** Info

**What it checks:** Error when the geometry JSON file could not be parsed. Check for syntax errors in the geometry definition.

**Technical details:** Data contains the JSON parse error message.
