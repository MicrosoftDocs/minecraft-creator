---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:caddonreq"
description: "Describes the minecraft:caddonreq mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:caddonreq

A set of requirements for cooperative Add-On projects. See https://learn.microsoft.com/minecraft/creator/documents/practices/guidelinesforbuildingcooperativeaddons for more info.


## Coop Add-On Requirements Validation Rules


### CADDONREQ101: No Loose Files

**Rule ID:** `CADDONREQ101`

**Severity:** Info

**What it checks:** In a cooperative Add-On, there should not be any 'loose files' - e.g., <pack>/entities/this_is_a_loose_file.json - inside of a folder.

**How to fix:** Move loose files into a creator-namespaced subfolder. For example, move entities/my_mob.json to entities/creatorname_gamename/my_mob.json to avoid conflicts with other add-ons.

**Technical details:** Data contains the path of the loose file found.


### CADDONREQ102: No Common Folder Names

**Rule ID:** `CADDONREQ102`

**Severity:** Info

**What it checks:** Creator folders - e.g., <pack>/entities/<custom folder name> - should not be a 'common' name. It should probably be in the form <creator_short_name>_<game_shortName>. See attached list of creator names.

**How to fix:** Rename the folder to use a unique prefix like 'creatorname_gamename'. For example, rename 'entities/mobs' to 'entities/myname_mygame'. This prevents conflicts when multiple add-ons are installed together.

**Technical details:** Data contains the forbidden common folder name used.


### CADDONREQ104: Loose Creator File

**Rule ID:** `CADDONREQ104`

**Severity:** Info

**What it checks:** Cooperative Add-Ons should not have loose files directly in creator folders.

**Technical details:** Data contains the path of the loose file found.


### CADDONREQ108: Multiple Creator Folders

**Rule ID:** `CADDONREQ108`

**Severity:** Info

**What it checks:** Found more than one folder in creator folder besides common shared folders.

**Technical details:** Data contains the folder names found.


### CADDONREQ109: Unsupported Folder Name

**Rule ID:** `CADDONREQ109`

**Severity:** Info

**What it checks:** Type folder contains unsupported subfolder names that don't follow cooperative Add-On conventions.

**Technical details:** Data contains the unsupported folder name.


### CADDONREQ110: Multiple Type Folders

**Rule ID:** `CADDONREQ110`

**Severity:** Info

**What it checks:** Found more than one folder in the type folder, which may indicate naming convention issues.

**Technical details:** Data contains the folder names found.


### CADDONREQ111: Loose Type Files

**Rule ID:** `CADDONREQ111`

**Severity:** Info

**What it checks:** Type folders should not contain loose files in cooperative Add-Ons.

**Technical details:** Data contains the path of the loose file found.


### CADDONREQ131: No Dimension Elements

**Rule ID:** `CADDONREQ131`

**Severity:** Info

**What it checks:** Cooperative Add-Ons should not contain dimension-related elements.

**Technical details:** Data contains the dimension element path found.


### CADDONREQ133: No UI Elements

**Rule ID:** `CADDONREQ133`

**Severity:** Info

**What it checks:** Cooperative Add-Ons should not contain custom UI elements.

**Technical details:** Data contains the UI element path found.


### CADDONREQ160: BP Manifest Missing

**Rule ID:** `CADDONREQ160`

**Severity:** Info

**What it checks:** Expected exactly one behavior pack manifest.json but found none or multiple.

**Technical details:** Data contains the count of manifests found.


### CADDONREQ161: RP Manifest Missing

**Rule ID:** `CADDONREQ161`

**Severity:** Info

**What it checks:** Expected exactly one resource pack manifest.json but found none or multiple.

**Technical details:** Data contains the count of manifests found.


### CADDONREQ163: RP Manifest Count

**Rule ID:** `CADDONREQ163`

**Severity:** Info

**What it checks:** Expected exactly one resource pack manifest.json but found incorrect count.

**Technical details:** Data contains the count of manifests found.


### CADDONREQ164: BP Manifest Invalid

**Rule ID:** `CADDONREQ164`

**Severity:** Info

**What it checks:** The behavior pack manifest.json file is not valid or cannot be parsed.

**Technical details:** Data contains the validation error message.


### CADDONREQ165: BP-RP Dependency Missing

**Rule ID:** `CADDONREQ165`

**Severity:** Info

**What it checks:** Expected exactly one dependency from behavior pack to resource pack but found none or multiple.

**Technical details:** Data contains the dependency count found.


### CADDONREQ166: BP-RP Dependency Invalid

**Rule ID:** `CADDONREQ166`

**Severity:** Info

**What it checks:** The dependency from behavior pack to resource pack is not valid.

**Technical details:** Data contains the validation error message.


### CADDONREQ168: RP-BP Dependency Missing

**Rule ID:** `CADDONREQ168`

**Severity:** Info

**What it checks:** Expected exactly one dependency from resource pack to behavior pack but found none or multiple.

**Technical details:** Data contains the dependency count found.


### CADDONREQ169: RP-BP Dependency Invalid

**Rule ID:** `CADDONREQ169`

**Severity:** Info

**What it checks:** The dependency from resource pack to behavior pack is not valid.

**Technical details:** Data contains the validation error message.
