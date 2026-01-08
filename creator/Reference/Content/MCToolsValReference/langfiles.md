---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:langfiles"
description: "Describes the minecraft:langfiles mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:langfiles

Validates that localization files (.lang) and the languages.json catalog are properly synchronized within each pack. For each language listed in languages.json, there must be a corresponding .lang file, and vice versa. English (en_US) is always required.


## Language Files Validation Rules


### LANGFILES101: Missing Catalog

**Rule ID:** `LANGFILES101`

**Severity:** Info

**What it checks:** The pack is missing a languages.json file in its root directory. This file is required to define which languages your pack supports. Create a languages.json file listing all supported language codes.

**How to fix:** Create a languages.json file in your pack's root texts/ folder with an array of language codes, e.g.: ["en_US", "es_ES", "de_DE"].

**Technical details:** Data contains the pack path missing languages.json.


### LANGFILES102: Missing English

**Rule ID:** `LANGFILES102`

**Severity:** Info

**What it checks:** The languages.json file does not include 'en_US' (English - United States). English is required as the primary language for all packs. Add 'en_US' to the languages array in languages.json.

**How to fix:** Add "en_US" to the array in your languages.json file. English is required as the default fallback language for all packs.

**Technical details:** Data contains the path to languages.json missing en_US.


### LANGFILES103: Invalid JSON

**Rule ID:** `LANGFILES103`

**Severity:** Info

**What it checks:** The languages.json file contains invalid JSON syntax. Verify the file has proper JSON formatting with correct brackets, quotes, and commas.

**How to fix:** Check your languages.json file for JSON syntax errors. It should be a simple array of strings: ["en_US", "es_ES"].

**Technical details:** Data contains the JSON parse error message.


### LANGFILES104: Missing Lang File

**Rule ID:** `LANGFILES104`

**Severity:** Info

**What it checks:** A language listed in languages.json does not have a corresponding .lang file. Every language code in languages.json must have a matching .lang file (e.g., 'en_US' requires 'en_US.lang').

**How to fix:** Create the missing .lang file in the texts/ folder. For example, if you have "de_DE" in languages.json, create a texts/de_DE.lang file.

**Technical details:** Data contains the language code missing a .lang file.


### LANGFILES105: Orphaned Lang File

**Rule ID:** `LANGFILES105`

**Severity:** Info

**What it checks:** A .lang file exists in the pack but its language code is not listed in languages.json. Either add the language code to languages.json or remove the orphaned .lang file.

**How to fix:** Either add the language code to your languages.json array, or delete the orphaned .lang file if that language isn't needed.

**Technical details:** Data contains the orphaned .lang file name.
