---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:script"
description: "Describes the minecraft:script mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:script

Analyzes JavaScript/TypeScript script files to identify Minecraft Script API usage. Parses code to extract API references and usage patterns.


## Script Analysis Validation Rules


### SCRIPT101: APIs Used

**Rule ID:** `SCRIPT101`

**Severity:** Info

**What it checks:** Tracks which Minecraft Script APIs are being used in the project. Identifies imports from @minecraft/ modules and API method calls.

**Technical details:** Data contains the API name or method being referenced.
