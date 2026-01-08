---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:jsontags"
description: "Describes the minecraft:jsontags mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:jsontags

Tracks content types and component usage across JSON files in the project. Used to build content indexes for cross-referencing.


## Content Tags Validation Rules


### JSONTAGS101: Entity Type

**Rule ID:** `JSONTAGS101`

**Severity:** Info

**What it checks:** Tracks entity type identifiers defined in behavior pack entity JSON files.

**Technical details:** Data contains the entity type identifier.


### JSONTAGS102: Block Type

**Rule ID:** `JSONTAGS102`

**Severity:** Info

**What it checks:** Tracks custom block type identifiers defined in behavior pack block JSON files.

**Technical details:** Data contains the block type identifier.


### JSONTAGS103: Item Type

**Rule ID:** `JSONTAGS103`

**Severity:** Info

**What it checks:** Tracks custom item type identifiers defined in behavior pack item JSON files.

**Technical details:** Data contains the item type identifier.


### JSONTAGS104: Terrain Texture

**Rule ID:** `JSONTAGS104`

**Severity:** Info

**What it checks:** Tracks terrain texture short names defined in terrain_texture.json.

**Technical details:** Data contains the terrain texture short name.


### JSONTAGS105: Item Texture

**Rule ID:** `JSONTAGS105`

**Severity:** Info

**What it checks:** Tracks item texture short names defined in item_texture.json.

**Technical details:** Data contains the item texture short name.


### JSONTAGS106: Sound Definition

**Rule ID:** `JSONTAGS106`

**Severity:** Info

**What it checks:** Tracks sound definition identifiers defined in sound_definitions.json.

**Technical details:** Data contains the sound definition identifier.


### JSONTAGS107: Music Definition

**Rule ID:** `JSONTAGS107`

**Severity:** Info

**What it checks:** Tracks music definition identifiers defined in music_definitions.json.

**Technical details:** Data contains the music definition identifier.


### JSONTAGS108: Sound File

**Rule ID:** `JSONTAGS108`

**Severity:** Info

**What it checks:** Tracks individual sound file references across sound definitions.

**Technical details:** Data contains the sound file path.
