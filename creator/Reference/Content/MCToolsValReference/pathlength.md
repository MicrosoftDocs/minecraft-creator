---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:pathlength"
description: "Describes the minecraft:pathlength mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:pathlength

Validates file paths for length and format compatibility across platforms. Long paths can cause issues on some operating systems and storage systems.


## Path Length Validation Rules


### PATHLENGTH102: Deep Nesting

**Rule ID:** `PATHLENGTH102`

**Severity:** Info

**What it checks:** Warning when a file path has more than 8 nested folder levels. Very deep folder structures can cause compatibility issues on some systems.

**How to fix:** Flatten your folder structure by removing unnecessary subfolders. Move files closer to the pack root while keeping logical organization.

**Technical details:** Data contains the depth count (number of directory segments).


### PATHLENGTH103: Path Too Long

**Rule ID:** `PATHLENGTH103`

**Severity:** Info

**What it checks:** Error when a file's full path exceeds platform limits (typically 255 characters). Shorten folder and file names to ensure compatibility.

**How to fix:** Shorten folder and file names to keep the total path under 255 characters. Use abbreviations where possible and avoid deeply nested structures.

**Technical details:** Data contains the path length in characters.


### PATHLENGTH104: Mixed Case Path

**Rule ID:** `PATHLENGTH104`

**Severity:** Info

**What it checks:** Recommendation to use only lowercase letters in file and folder names. Mixed case can cause issues on case-sensitive file systems.

**How to fix:** Rename files and folders to use only lowercase letters. This prevents issues on case-sensitive systems like Linux. Example: 'MyTexture.png' → 'mytexture.png'.

**Technical details:** Data contains the path with mixed case characters.
