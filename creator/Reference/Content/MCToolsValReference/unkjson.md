---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:unkjson"
description: "Describes the minecraft:unkjson mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:unkjson

Identifies JSON files that don't match any known Minecraft content schema. Unknown JSON files may indicate misplaced content or unsupported custom formats.


## Unknown JSON Validation Rules


### UNKJSON101: Unknown JSON Type

**Rule ID:** `UNKJSON101`

**Severity:** Info

**What it checks:** Warning when a JSON file is found that doesn't match any recognized Minecraft schema. The file may be in the wrong location, use an outdated format, or be non-Minecraft content.

**Technical details:** Data contains the path to the unrecognized JSON file.
