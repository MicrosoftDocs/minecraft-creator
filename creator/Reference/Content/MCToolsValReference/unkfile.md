---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:unkfile"
description: "Describes the minecraft:unkfile mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:unkfile

Identifies files with unrecognized extensions that are not standard Minecraft content types. Unknown files may indicate misplaced assets or incompatible content.


## Unknown Files Validation Rules


### UNKFILE102: Unknown File Type

**Rule ID:** `UNKFILE102`

**Severity:** Info

**What it checks:** Error when a file with an unrecognized extension is found in the pack. Minecraft only supports specific file types (JSON, PNG, TGA, OGG, FSB, etc.). Remove or relocate unknown files.

**Technical details:** Data contains the file extension or path of the unknown file.
