---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:cwi"
description: "Describes the minecraft:cwi mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:cwi

Validates world template icons (world_icon.jpeg) for correct format, size, and placement. The icon is shown in the world selection screen.


## World Icon Validation Rules


### CWI101: Missing Icon

**Rule ID:** `CWI101`

**Severity:** Info

**What it checks:** Warning when no world_icon.jpeg file is found in the world template. A world icon helps players identify the world in their list.

**Technical details:** Data contains the world folder path missing the icon.


### CWI102: Multiple Icons

**Rule ID:** `CWI102`

**Severity:** Info

**What it checks:** Warning when multiple world icon files are found. Only one world_icon.jpeg should exist in the root of the world folder.

**Technical details:** Data contains the paths to multiple icon files.


### CWI103: Invalid Format

**Rule ID:** `CWI103`

**Severity:** Info

**What it checks:** Error when the world icon file is not a valid image. The file must be a properly formatted JPEG image.

**Technical details:** Data contains the path to the invalid icon file.


### CWI104: Invalid Size

**Rule ID:** `CWI104`

**Severity:** Info

**What it checks:** Warning when the world icon is not the expected dimensions. World icons should be square (typically 256x256 or 128x128 pixels).

**Technical details:** Data contains the actual dimensions found.
