---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:world"
description: "Describes the minecraft:world mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:world

Validates world-level settings including experiments, version requirements, and metadata. These settings affect how the world loads and what features are available.


## World Validation Validation Rules


### WORLD101: Beta APIs

**Rule ID:** `WORLD101`

**Severity:** Info

**What it checks:** Indicates whether the Beta APIs experiment is enabled in the world. Required for using experimental script API features.

**Technical details:** Data contains a boolean indicating experiment status.


### WORLD102: Data Driven Items

**Rule ID:** `WORLD102`

**Severity:** Info

**What it checks:** Indicates whether the Data Driven Items experiment is enabled. Required for certain custom item features.

**Technical details:** Data contains a boolean indicating experiment status.


### WORLD103: Deferred Preview

**Rule ID:** `WORLD103`

**Severity:** Info

**What it checks:** Indicates whether the Deferred Technical Preview experiment is enabled. Used for testing upcoming rendering features.

**Technical details:** Data contains a boolean indicating experiment status.


### WORLD107: Base Game Version

**Rule ID:** `WORLD107`

**Severity:** Info

**What it checks:** The base game version specified for the world. Determines which Minecraft features and behaviors are available.

**Technical details:** Data contains the version array as a string [major, minor, patch].


### WORLD108: World Name

**Rule ID:** `WORLD108`

**Severity:** Info

**What it checks:** The display name of the world shown to players.

**Technical details:** Data contains the world name string.


### WORLD109: World Description

**Rule ID:** `WORLD109`

**Severity:** Info

**What it checks:** The description text for the world, shown in world selection screens.

**Technical details:** Data contains the world description string.
