---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:rpdepends"
description: "Describes the minecraft:rpdepends mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:rpdepends

Validates that resource pack dependencies declared in behavior pack manifests are properly resolved and available.


## Resource Pack Deps Validation Rules


### RPDEPENDS101: Invalid Manifest JSON

**Rule ID:** `RPDEPENDS101`

**Severity:** Info

**What it checks:** Error when a pack manifest contains invalid JSON syntax. Check for missing commas, brackets, or malformed entries.

**Technical details:** Data contains the path to the invalid manifest file.


### RPDEPENDS102: Missing Resource Pack

**Rule ID:** `RPDEPENDS102`

**Severity:** Info

**What it checks:** Error when a behavior pack declares a dependency on a resource pack that cannot be found. Ensure the resource pack is included and the UUID matches.

**Technical details:** Data contains the UUID of the missing resource pack dependency.


### RPDEPENDS103: Processing Error

**Rule ID:** `RPDEPENDS103`

**Severity:** Info

**What it checks:** An internal error occurred while processing resource pack dependencies. Check logs for details.

**Technical details:** Data contains details about the internal processing error.
