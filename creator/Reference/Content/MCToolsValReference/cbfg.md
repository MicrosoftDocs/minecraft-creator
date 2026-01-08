---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:cbfg"
description: "Describes the minecraft:cbfg mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:cbfg

Validates that add-on content does not use beta features flags. The 'use_beta_features' property is not allowed in entity, block, or item behavior definitions for published content. This validator scans manifest files and custom definition JSON files to detect usage of beta feature flags.


## Beta Features Validation Rules


### CBFG101: File Read Error

**Rule ID:** `CBFG101`

**Severity:** Info

**What it checks:** The validator was unable to read the file contents. This may indicate a corrupted file, encoding issues, or file system permissions problems. Ensure the file is accessible and properly formatted.

**How to fix:** Check file permissions and ensure the file isn't locked by another program. If the file appears corrupted, try restoring from backup or recreating it.

**Technical details:** Data contains the file path that could not be read.


### CBFG102: JSON Parse Error

**Rule ID:** `CBFG102`

**Severity:** Info

**What it checks:** The file contains invalid JSON syntax and could not be parsed. Check for missing commas, unquoted strings, trailing commas, or other JSON syntax errors. Use a JSON validator to identify the exact location of the error.

**How to fix:** Use a JSON validator or editor with JSON syntax highlighting to find errors. Common issues: missing commas, unquoted strings, or trailing commas before closing brackets.

**Technical details:** Data contains the JSON parse error message.


### CBFG103: Beta Features Flag

**Rule ID:** `CBFG103`

**Severity:** Info

**What it checks:** The 'use_beta_features: true' property was found in an entity, block, or item behavior definition. Beta features are experimental and not allowed in published add-on content. Remove the 'use_beta_features' property or set it to false.

**How to fix:** Remove the 'use_beta_features' property from your entity, block, or item definition, or set it to false. Beta features cannot be used in published content.

**Technical details:** Data contains the file path where beta features flag was found.
