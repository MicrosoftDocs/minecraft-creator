---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:formatver"
description: "Describes the minecraft:formatver mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:formatver

Validates format_version fields across various Minecraft JSON definition files including block types, item types, recipes, animations, and animation controllers. Compares versions against the current Minecraft version and can update them to the latest.

Topic IDs follow a pattern where each file type has a base offset. Within each offset: +0 = undefined, +2 = major low, +4 = major high, +6 = minor low, +8 = minor high, +10 = patch low, +12 = patch high. Topic IDs 600+ report format version info (info type) as 600 + ProjectItemType.


## Format Version Validation Rules


### FORMATVER100: Format Undefined

**Rule ID:** `FORMATVER100`

**Severity:** Error

**What it checks:** Checks that a format_version field is defined in the JSON definition file.


### FORMATVER110: Block Major Low

**Rule ID:** `FORMATVER110`

**Severity:** Recommendation

**What it checks:** The block type format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER112: Block Major High

**Rule ID:** `FORMATVER112`

**Severity:** Error

**What it checks:** The block type format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER114: Block Minor Low

**Rule ID:** `FORMATVER114`

**Severity:** Recommendation

**What it checks:** The block type format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER116: Block Minor High

**Rule ID:** `FORMATVER116`

**Severity:** Error

**What it checks:** The block type format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER118: Block Patch Low

**Rule ID:** `FORMATVER118`

**Severity:** Recommendation

**What it checks:** The block type format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER120: Block Patch High

**Rule ID:** `FORMATVER120`

**Severity:** Error

**What it checks:** The block type format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER130: Item Major Low

**Rule ID:** `FORMATVER130`

**Severity:** Recommendation

**What it checks:** The item type format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER132: Item Major High

**Rule ID:** `FORMATVER132`

**Severity:** Error

**What it checks:** The item type format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER134: Item Minor Low

**Rule ID:** `FORMATVER134`

**Severity:** Recommendation

**What it checks:** The item type format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER136: Item Minor High

**Rule ID:** `FORMATVER136`

**Severity:** Error

**What it checks:** The item type format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER138: Item Patch Low

**Rule ID:** `FORMATVER138`

**Severity:** Recommendation

**What it checks:** The item type format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER140: Item Patch High

**Rule ID:** `FORMATVER140`

**Severity:** Error

**What it checks:** The item type format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER150: Recipe Major Low

**Rule ID:** `FORMATVER150`

**Severity:** Recommendation

**What it checks:** The recipe format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER152: Recipe Major High

**Rule ID:** `FORMATVER152`

**Severity:** Error

**What it checks:** The recipe format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER154: Recipe Minor Low

**Rule ID:** `FORMATVER154`

**Severity:** Recommendation

**What it checks:** The recipe format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER156: Recipe Minor High

**Rule ID:** `FORMATVER156`

**Severity:** Error

**What it checks:** The recipe format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER158: Recipe Patch Low

**Rule ID:** `FORMATVER158`

**Severity:** Recommendation

**What it checks:** The recipe format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER160: Recipe Patch High

**Rule ID:** `FORMATVER160`

**Severity:** Error

**What it checks:** The recipe format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER170: BP Anim Major Low

**Rule ID:** `FORMATVER170`

**Severity:** Recommendation

**What it checks:** The behavior pack animation format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER172: BP Anim Major High

**Rule ID:** `FORMATVER172`

**Severity:** Error

**What it checks:** The behavior pack animation format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER174: BP Anim Minor Low

**Rule ID:** `FORMATVER174`

**Severity:** Recommendation

**What it checks:** The behavior pack animation format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER176: BP Anim Minor High

**Rule ID:** `FORMATVER176`

**Severity:** Error

**What it checks:** The behavior pack animation format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER178: BP Anim Patch Low

**Rule ID:** `FORMATVER178`

**Severity:** Recommendation

**What it checks:** The behavior pack animation format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER180: BP Anim Patch High

**Rule ID:** `FORMATVER180`

**Severity:** Error

**What it checks:** The behavior pack animation format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER190: BP AnimCtrl Major Low

**Rule ID:** `FORMATVER190`

**Severity:** Recommendation

**What it checks:** The behavior pack animation controller format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER192: BP AnimCtrl Major High

**Rule ID:** `FORMATVER192`

**Severity:** Error

**What it checks:** The behavior pack animation controller format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER194: BP AnimCtrl Minor Low

**Rule ID:** `FORMATVER194`

**Severity:** Recommendation

**What it checks:** The behavior pack animation controller format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER196: BP AnimCtrl Minor High

**Rule ID:** `FORMATVER196`

**Severity:** Error

**What it checks:** The behavior pack animation controller format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER198: BP AnimCtrl Patch Low

**Rule ID:** `FORMATVER198`

**Severity:** Recommendation

**What it checks:** The behavior pack animation controller format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER200: BP AnimCtrl Patch High

**Rule ID:** `FORMATVER200`

**Severity:** Error

**What it checks:** The behavior pack animation controller format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER210: RP Anim Major Low

**Rule ID:** `FORMATVER210`

**Severity:** Recommendation

**What it checks:** The resource pack animation format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER212: RP Anim Major High

**Rule ID:** `FORMATVER212`

**Severity:** Error

**What it checks:** The resource pack animation format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER214: RP Anim Minor Low

**Rule ID:** `FORMATVER214`

**Severity:** Recommendation

**What it checks:** The resource pack animation format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER216: RP Anim Minor High

**Rule ID:** `FORMATVER216`

**Severity:** Error

**What it checks:** The resource pack animation format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER218: RP Anim Patch Low

**Rule ID:** `FORMATVER218`

**Severity:** Recommendation

**What it checks:** The resource pack animation format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER220: RP Anim Patch High

**Rule ID:** `FORMATVER220`

**Severity:** Error

**What it checks:** The resource pack animation format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER230: RP AnimCtrl Major Low

**Rule ID:** `FORMATVER230`

**Severity:** Recommendation

**What it checks:** The resource pack animation controller format_version major version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER232: RP AnimCtrl Major High

**Rule ID:** `FORMATVER232`

**Severity:** Error

**What it checks:** The resource pack animation controller format_version major version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER234: RP AnimCtrl Minor Low

**Rule ID:** `FORMATVER234`

**Severity:** Recommendation

**What it checks:** The resource pack animation controller format_version minor version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER236: RP AnimCtrl Minor High

**Rule ID:** `FORMATVER236`

**Severity:** Error

**What it checks:** The resource pack animation controller format_version minor version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER238: RP AnimCtrl Patch Low

**Rule ID:** `FORMATVER238`

**Severity:** Recommendation

**What it checks:** The resource pack animation controller format_version patch version is lower than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER240: RP AnimCtrl Patch High

**Rule ID:** `FORMATVER240`

**Severity:** Error

**What it checks:** The resource pack animation controller format_version patch version is higher than the current Minecraft version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### FORMATVER500: Version Retrieval Failed

**Rule ID:** `FORMATVER500`

**Severity:** Error

**What it checks:** Internal error: Could not retrieve the latest Minecraft version from the database.


### FORMATVER501: Version Parse Failed

**Rule ID:** `FORMATVER501`

**Severity:** Error

**What it checks:** Internal error: Could not parse a version string into version components.

**Technical details:** Data field contains the version string that failed to parse.
