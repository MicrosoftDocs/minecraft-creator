---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:minenginever"
description: "Describes the minecraft:minenginever mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:minenginever

Validates and updates the min_engine_version field in pack manifests. This version specifies the minimum Minecraft version required to use the pack.


## Min Engine Version Validation Rules


### MINENGINEVER100: BP Version Defined

**Rule ID:** `MINENGINEVER100`

**Severity:** Info

**What it checks:** Confirms that min_engine_version is defined in the behavior pack manifest header.

**Technical details:** Data contains the min_engine_version value.


### MINENGINEVER110: BP Major Low

**Rule ID:** `MINENGINEVER110`

**Severity:** Info

**What it checks:** Warning when the behavior pack's min_engine_version major number is below the current Minecraft version. Update to access newer features.

**Technical details:** Data contains the current min_engine_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER111: BP Major High

**Rule ID:** `MINENGINEVER111`

**Severity:** Info

**What it checks:** Error when the behavior pack's min_engine_version major number is above the current Minecraft version. The pack may not load.

**Technical details:** Data contains the min_engine_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER120: BP Minor Low

**Rule ID:** `MINENGINEVER120`

**Severity:** Info

**What it checks:** Warning when the behavior pack's min_engine_version minor number is below the current Minecraft version.

**Technical details:** Data contains the current min_engine_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER121: BP Minor High

**Rule ID:** `MINENGINEVER121`

**Severity:** Info

**What it checks:** Error when the behavior pack's min_engine_version minor number is above the current Minecraft version.

**Technical details:** Data contains the min_engine_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER130: BP Patch Low

**Rule ID:** `MINENGINEVER130`

**Severity:** Info

**What it checks:** Information when the behavior pack's min_engine_version patch number is below the current Minecraft version.

**Technical details:** Data contains the current min_engine_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER131: BP Patch High

**Rule ID:** `MINENGINEVER131`

**Severity:** Info

**What it checks:** Warning when the behavior pack's min_engine_version patch number is above the current Minecraft version.

**Technical details:** Data contains the min_engine_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER180: No Manifest

**Rule ID:** `MINENGINEVER180`

**Severity:** Info

**What it checks:** Error when no manifest.json file was found in the pack root.

**Technical details:** Data contains the expected manifest path.


### MINENGINEVER181: Version Errors

**Rule ID:** `MINENGINEVER181`

**Severity:** Info

**What it checks:** Error when the min_engine_version field could not be parsed or validated.

**Technical details:** Data contains the version processing error.


### MINENGINEVER200: RP Version Defined

**Rule ID:** `MINENGINEVER200`

**Severity:** Info

**What it checks:** Confirms that min_engine_version is defined in the resource pack manifest header.

**Technical details:** Data contains the min_engine_version value.


### MINENGINEVER210: RP Major Low

**Rule ID:** `MINENGINEVER210`

**Severity:** Info

**What it checks:** Warning when the resource pack's min_engine_version major number is below the current Minecraft version.

**Technical details:** Data contains the current min_engine_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER211: RP Major High

**Rule ID:** `MINENGINEVER211`

**Severity:** Info

**What it checks:** Error when the resource pack's min_engine_version major number is above the current Minecraft version.

**Technical details:** Data contains the min_engine_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER220: RP Minor Low

**Rule ID:** `MINENGINEVER220`

**Severity:** Info

**What it checks:** Warning when the resource pack's min_engine_version minor number is below the current Minecraft version.

**Technical details:** Data contains the current min_engine_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER221: RP Minor High

**Rule ID:** `MINENGINEVER221`

**Severity:** Info

**What it checks:** Error when the resource pack's min_engine_version minor number is above the current Minecraft version.

**Technical details:** Data contains the min_engine_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER230: RP Patch Low

**Rule ID:** `MINENGINEVER230`

**Severity:** Info

**What it checks:** Information when the resource pack's min_engine_version patch number is below the current Minecraft version.

**Technical details:** Data contains the current min_engine_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER231: RP Patch High

**Rule ID:** `MINENGINEVER231`

**Severity:** Info

**What it checks:** Warning when the resource pack's min_engine_version patch number is above the current Minecraft version.

**Technical details:** Data contains the min_engine_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### MINENGINEVER500: Version Retrieved

**Rule ID:** `MINENGINEVER500`

**Severity:** Info

**What it checks:** Status indicating the current Minecraft version was retrieved for comparison.

**Technical details:** Data contains the retrieved Minecraft version.


### MINENGINEVER501: Version Parsed

**Rule ID:** `MINENGINEVER501`

**Severity:** Info

**What it checks:** Status indicating the Minecraft version string was parsed into version numbers.

**Technical details:** Data contains the parsed version components.
