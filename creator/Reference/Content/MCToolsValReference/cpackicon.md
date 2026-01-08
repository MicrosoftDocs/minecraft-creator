---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:cpackicon"
description: "Describes the minecraft:cpackicon mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:cpackicon

Validates behavior and resource pack icons (pack_icon.png) for correct format, size, and placement. The icon is shown in the pack selection screens.


## Pack Icon Validation Rules


### CPACKICON101: Missing Icon

**Rule ID:** `CPACKICON101`

**Severity:** Info

**What it checks:** Warning when no pack_icon.png file is found in the pack root. A pack icon helps players identify your content.

**Technical details:** Data contains the pack path missing the icon.


### CPACKICON102: Multiple Icons

**Rule ID:** `CPACKICON102`

**Severity:** Info

**What it checks:** Warning when multiple pack icon files are found. Only one pack_icon.png should exist in each pack root.

**Technical details:** Data contains the paths to the multiple icon files.


### CPACKICON103: Invalid Format

**Rule ID:** `CPACKICON103`

**Severity:** Info

**What it checks:** Error when the pack icon file is not a valid PNG image. Ensure the file is properly formatted.

**Technical details:** Data contains the path to the invalid icon file.


### CPACKICON104: Invalid Size

**Rule ID:** `CPACKICON104`

**Severity:** Info

**What it checks:** Warning when the pack icon is not the expected dimensions. Pack icons should be square (typically 256x256 pixels for best display).

**Technical details:** Data contains the actual dimensions found.
