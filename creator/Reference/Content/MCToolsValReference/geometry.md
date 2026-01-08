---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:geometry"
description: "Describes the minecraft:geometry mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:geometry

Validates and analyzes model geometry files (.geo.json) for blocks, entities, and items. Tracks cube counts and complexity to identify potential performance issues.


## Model Geometry Validation Rules


### GEOMETRY101: Block Geometry

**Rule ID:** `GEOMETRY101`

**Severity:** Info

**What it checks:** Tracks custom block geometry files found in /blocks/ folders. Reports cube counts for performance analysis.

**Technical details:** Data contains the cube count for the block geometry.


### GEOMETRY102: Entity Geometry

**Rule ID:** `GEOMETRY102`

**Severity:** Info

**What it checks:** Tracks custom entity geometry files found in /entity/ folders. Reports cube counts for complexity analysis.

**Technical details:** Data contains the cube count for the entity geometry.


### GEOMETRY103: Item Geometry

**Rule ID:** `GEOMETRY103`

**Severity:** Info

**What it checks:** Tracks custom item geometry files found in /items/ or /attachables/ folders. Reports cube counts for complexity analysis.

**Technical details:** Data contains the cube count for the item geometry.


### GEOMETRY501: Complex Block

**Rule ID:** `GEOMETRY501`

**Severity:** Info

**What it checks:** Warning when a custom block has more than 50 cubes in its geometry. High cube counts can cause performance degradation, especially on lower-end devices. Consider simplifying the model or using textures instead.

**How to fix:** Simplify the model by reducing cube count, merging adjacent cubes, or using textures with transparency instead of modeled details. Target under 50 cubes for blocks.

**Technical details:** Data contains the cube count exceeding the threshold.
