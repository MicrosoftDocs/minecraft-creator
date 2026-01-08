---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:cparti"
description: "Describes the minecraft:cparti mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:cparti

Validates particle effect identifiers for proper namespace formatting. Particle identifiers should follow the creator:name convention.


## Particle Identifiers Validation Rules


### CPARTI101: File Read Error

**Rule ID:** `CPARTI101`

**Severity:** Info

**What it checks:** Error when the particle JSON file could not be read. Check file permissions and format.

**Technical details:** Data contains the path to the unreadable file.


### CPARTI102: Version Read Error

**Rule ID:** `CPARTI102`

**Severity:** Info

**What it checks:** Error when the format_version field could not be read from the particle definition.

**Technical details:** Data contains details about the version parsing failure.


### CPARTI103: Invalid Identifier

**Rule ID:** `CPARTI103`

**Severity:** Info

**What it checks:** Error when a particle identifier doesn't follow the expected namespace:name format. Use your creator namespace prefix (e.g., mypack:custom_particle).

**Technical details:** Data contains the invalid particle identifier.
