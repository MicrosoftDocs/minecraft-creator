---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:sndsdef"
description: "Describes the minecraft:sndsdef mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:sndsdef

Validates sound_definitions.json files that define custom sounds for the resource pack. Ensures proper structure and references to audio files.


## Sounds Definition Validation Rules


### SNDSDEF101: Multiple Definitions

**Rule ID:** `SNDSDEF101`

**Severity:** Info

**What it checks:** Warning when multiple sound_definitions.json files exist. Only one should exist per resource pack in the sounds/ folder.

**Technical details:** Data contains the path to the additional sound_definitions.json file.


### SNDSDEF102: Invalid Structure

**Rule ID:** `SNDSDEF102`

**Severity:** Info

**What it checks:** Error when sound_definitions.json has an invalid structure. Verify format_version, sound categories, and sound entry formats.

**Technical details:** Data contains details about the structural issue.


### SNDSDEF103: Invalid JSON

**Rule ID:** `SNDSDEF103`

**Severity:** Info

**What it checks:** Error when sound_definitions.json contains JSON syntax errors. Check for missing commas, brackets, or malformed entries.

**Technical details:** Data contains the JSON parse error message.


### SNDSDEF104: Loose Definition

**Rule ID:** `SNDSDEF104`

**Severity:** Info

**What it checks:** Warning when a sound definition references a path that doesn't follow the expected folder structure. Sounds should be organized in the sounds/ folder.

**Technical details:** Data contains the path to the loose sound definition.
