---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:sharing"
description: "Describes the minecraft:sharing mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:sharing

Validates content for sharing and marketplace requirements. Identifies custom capabilities and potentially problematic content that may affect distribution.


## Sharing Validation Validation Rules


### SHARING100: Custom Capabilities

**Rule ID:** `SHARING100`

**Severity:** Info

**What it checks:** Information about custom capabilities the pack requires (experiments, Beta APIs, etc.). Some capabilities may limit where content can be shared.

**Technical details:** Data contains the name of the custom capability required.


### SHARING101: Strong Language

**Rule ID:** `SHARING101`

**Severity:** Info

**What it checks:** Warning when content may contain strong language. 

**Technical details:** Data contains the text or location where strong language was detected.
