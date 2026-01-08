---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:unlink"
description: "Describes the minecraft:unlink mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:unlink

Identifies content items that are defined but not referenced anywhere in the project. Also detects dependencies on vanilla Minecraft content that may change.


## Unlinked Items Validation Rules


### UNLINK191: Unused Item

**Rule ID:** `UNLINK191`

**Severity:** Info

**What it checks:** Warning when a defined resource (entity, block, item, etc.) is not referenced by any other content. The item may be unused or the reference may be missing.

**Technical details:** Data contains the identifier of the unused item.


### UNLINK205: Vanilla Reference

**Rule ID:** `UNLINK205`

**Severity:** Info

**What it checks:** Recommendation to avoid direct references to vanilla Minecraft items. Vanilla content may change between game versions, potentially breaking your add-on.

**Technical details:** Data contains the vanilla item identifier being referenced.
