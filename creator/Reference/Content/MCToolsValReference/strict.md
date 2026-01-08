---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:strict"
description: "Describes the minecraft:strict mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:strict

Validates content against strict platform requirements. Identifies cases where custom content overrides vanilla Minecraft identifiers, which may cause compatibility issues or unexpected behavior.


## Platform Validation Validation Rules


### STRICT100: Entity Override

**Rule ID:** `STRICT100`

**Severity:** Info

**What it checks:** Warning when a custom entity uses a 'minecraft:' prefixed identifier. This overrides vanilla entity behavior and may cause conflicts with Minecraft updates.

**Technical details:** Data contains the minecraft: identifier being overridden.


### STRICT101: Runtime ID Override

**Rule ID:** `STRICT101`

**Severity:** Info

**What it checks:** Warning when a custom entity uses a runtime_identifier that references a vanilla Minecraft entity. While useful for inheriting behaviors, it may cause unexpected interactions.

**Technical details:** Data contains the runtime_identifier being used.


### STRICT104: Item Override

**Rule ID:** `STRICT104`

**Severity:** Info

**What it checks:** Warning when a custom item uses a 'minecraft:' prefixed identifier. This overrides vanilla item behavior and may cause conflicts with Minecraft updates.

**Technical details:** Data contains the minecraft: item identifier being overridden.
