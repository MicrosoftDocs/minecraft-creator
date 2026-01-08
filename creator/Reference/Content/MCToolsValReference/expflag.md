---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:expflag"
description: "Describes the minecraft:expflag mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:expflag

Validates experimental flags in world templates. Experiments that were enabled can affect world behavior even after being disabled.


## Experimental Flags Validation Rules


### EXPFLAG101: Experiment Active

**Rule ID:** `EXPFLAG101`

**Severity:** Info

**What it checks:** Warning when an experimental flag is or was enabled in the world. Some experiments permanently modify world data even after being turned off.

**How to fix:** If the experimental feature is no longer needed, you can disable it in the world settings. Note that some experiments cannot be fully reverted. For publishing, create a new world without experiments enabled.

**Technical details:** Data contains the name of the experimental flag.


### EXPFLAG102: Missing Level.dat

**Rule ID:** `EXPFLAG102`

**Severity:** Info

**What it checks:** Error when the world's level.dat file could not be found. The world may be corrupted or incomplete.

**How to fix:** Ensure the world template includes a complete world folder with level.dat. If the file is missing, try re-exporting the world from Minecraft.

**Technical details:** Data contains the expected level.dat path.


### EXPFLAG103: World Not Found

**Rule ID:** `EXPFLAG103`

**Severity:** Info

**What it checks:** Error when the world folder could not be located. Check that the world path is correct and accessible.

**How to fix:** Verify the world template structure includes the correct world folder path. The world should be in a subfolder matching the manifest's world_template module entry.

**Technical details:** Data contains the expected world path.
