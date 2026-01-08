---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:prjint"
description: "Describes the minecraft:prjint mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:prjint

Validates the structural integrity of the project, checking for orphaned files that don't belong to any pack and detecting nested manifest structures that indicate improperly organized packs.


## Project Integrity Validation Rules


### PRJINT101: Extraneous Content

**Rule ID:** `PRJINT101`

**Severity:** Info

**What it checks:** The project contains files or folders that are not part of any recognized pack structure. These orphaned files may have been accidentally included or placed in the wrong location. Review and either move them to the correct location or remove them.

**Technical details:** Data contains the relative path to the extraneous file or folder.


### PRJINT102: Nested Pack Structure

**Rule ID:** `PRJINT102`

**Severity:** Info

**What it checks:** A pack contains multiple manifest.json files, indicating a nested pack structure. Each pack should have exactly one manifest.json at its root. Nested packs are not allowed - extract any nested packs to their own directories.

**Technical details:** Data contains the path to the nested manifest.json file.
