---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:valfile"
description: "Describes the minecraft:valfile mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:valfile

Validates that content files are properly formatted and parseable. Catches JSON syntax errors and encoding issues that would prevent content from loading.


## File Validation Validation Rules


### VALFILE102: Invalid JSON

**Rule ID:** `VALFILE102`

**Severity:** Info

**What it checks:** Error when a JSON file contains syntax errors and cannot be parsed. Check for missing commas, brackets, quotes, or invalid escape sequences.

**Technical details:** Data contains the JSON parse error message.


### VALFILE103: Empty File

**Rule ID:** `VALFILE103`

**Severity:** Info

**What it checks:** Warning when a JSON file is empty or contains only whitespace. The file may be incomplete or accidentally cleared.

**Technical details:** Data contains the path to the empty file.


### VALFILE104: Binary Content

**Rule ID:** `VALFILE104`

**Severity:** Info

**What it checks:** Error when a file expected to contain text/JSON data contains binary or non-string content. The file may be corrupted or the wrong type.

**Technical details:** Data contains the path to the file with binary content.
