---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:nobom"
description: "Describes the minecraft:nobom mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:nobom

Validates that JSON files do not contain byte order marks (BOM). BOMs can cause parsing failures in Minecraft.


## BOM Validation Validation Rules


### NOBOM101: BOM Detected

**Rule ID:** `NOBOM101`

**Severity:** Info

**What it checks:** Error when a JSON file begins with a UTF-8 BOM (byte order mark). Minecraft cannot parse JSON files with BOMs. Re-save the file as UTF-8 without BOM using a text editor.

**How to fix:** Open the file in VS Code or Notepad++ and save it as 'UTF-8' (not 'UTF-8 with BOM'). In VS Code, click the encoding in the status bar and select 'Save with Encoding' → 'UTF-8'.

**Technical details:** Data contains the path to the file with BOM.
