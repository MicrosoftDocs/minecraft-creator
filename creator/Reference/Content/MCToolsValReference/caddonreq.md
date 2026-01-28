---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Coop Add-On Requirements"
description: "Documentation for Coop Add-On Requirements validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Coop Add-On Requirements Validation Rules
A set of requirements for cooperative Add-On projects. See https://learn.microsoft.com/minecraft/creator/documents/practices/guidelinesforbuildingcooperativeaddons for more info.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CADDONREQ101](#caddonreq101) | No Loose Files | 🔴 Error |  |
| [CADDONREQ102](#caddonreq102) | No Common Folder Names | 🔴 Error |  |
| [CADDONREQ104](#caddonreq104) | Loose Creator File | 🔴 Error |  |
| [CADDONREQ108](#caddonreq108) | Multiple Creator Folders | 🟡 Warning |  |
| [CADDONREQ109](#caddonreq109) | Unsupported Folder Name | 🔴 Error |  |
| [CADDONREQ110](#caddonreq110) | Multiple Type Folders | 🟡 Warning |  |
| [CADDONREQ111](#caddonreq111) | Loose Type Files | 🔴 Error |  |
| [CADDONREQ131](#caddonreq131) | No Dimension Elements | 🔴 Error |  |
| [CADDONREQ133](#caddonreq133) | No UI Elements | 🔴 Error |  |
| [CADDONREQ160](#caddonreq160) | BP Manifest Missing | 🔴 Error |  |
| [CADDONREQ161](#caddonreq161) | RP Manifest Missing | 🔴 Error |  |
| [CADDONREQ163](#caddonreq163) | RP Manifest Count | 🔴 Error |  |
| [CADDONREQ164](#caddonreq164) | BP Manifest Invalid | 🔴 Error |  |
| [CADDONREQ165](#caddonreq165) | BP-RP Dependency Missing | 🔴 Error |  |
| [CADDONREQ166](#caddonreq166) | BP-RP Dependency Invalid | 🔴 Error |  |
| [CADDONREQ168](#caddonreq168) | RP-BP Dependency Missing | 🔴 Error |  |
| [CADDONREQ169](#caddonreq169) | RP-BP Dependency Invalid | 🔴 Error |  |

---
## Rule Details

### CADDONREQ101
**🔴 No Loose Files**  
**Severity**: Error

#### What This Checks
In a cooperative Add-On, there should not be any 'loose files' - e.g., <pack>/entities/this_is_a_loose_file.json - inside of a folder.

#### How to Fix
Move loose files into a creator-namespaced subfolder. For example, move entities/my_mob.json to entities/creatorname_gamename/my_mob.json to avoid conflicts with other add-ons.

#### Technical Details
Data contains the path of the loose file found.

### CADDONREQ102
**🔴 No Common Folder Names**  
**Severity**: Error

#### What This Checks
Creator folders - e.g., <pack>/entities/<custom folder name> - should not be a 'common' name. It should probably be in the form <creator_short_name>_<game_shortName>. See attached list of creator names.

#### How to Fix
Rename the folder to use a unique prefix like 'creatorname_gamename'. For example, rename 'entities/mobs' to 'entities/myname_mygame'. This prevents conflicts when multiple add-ons are installed together.

#### Technical Details
Data contains the forbidden common folder name used.

### CADDONREQ104
**🔴 Loose Creator File**  
**Severity**: Error

#### What This Checks
Cooperative Add-Ons should not have loose files directly in creator folders.

#### Technical Details
Data contains the path of the loose file found.

### CADDONREQ108
**🟡 Multiple Creator Folders**  
**Severity**: Warning

#### What This Checks
Found more than one folder in creator folder besides common shared folders.

#### Technical Details
Data contains the folder names found.

### CADDONREQ109
**🔴 Unsupported Folder Name**  
**Severity**: Error

#### What This Checks
Type folder contains unsupported subfolder names that don't follow cooperative Add-On conventions.

#### Technical Details
Data contains the unsupported folder name.

### CADDONREQ110
**🟡 Multiple Type Folders**  
**Severity**: Warning

#### What This Checks
Found more than one folder in the type folder, which may indicate naming convention issues.

#### Technical Details
Data contains the folder names found.

### CADDONREQ111
**🔴 Loose Type Files**  
**Severity**: Error

#### What This Checks
Type folders should not contain loose files in cooperative Add-Ons.

#### Technical Details
Data contains the path of the loose file found.

### CADDONREQ131
**🔴 No Dimension Elements**  
**Severity**: Error

#### What This Checks
Cooperative Add-Ons should not contain dimension-related elements.

#### Technical Details
Data contains the dimension element path found.

### CADDONREQ133
**🔴 No UI Elements**  
**Severity**: Error

#### What This Checks
Cooperative Add-Ons should not contain custom UI elements.

#### Technical Details
Data contains the UI element path found.

### CADDONREQ160
**🔴 BP Manifest Missing**  
**Severity**: Error

#### What This Checks
Expected exactly one behavior pack manifest.json but found none or multiple.

#### Technical Details
Data contains the count of manifests found.

### CADDONREQ161
**🔴 RP Manifest Missing**  
**Severity**: Error

#### What This Checks
Expected exactly one resource pack manifest.json but found none or multiple.

#### Technical Details
Data contains the count of manifests found.

### CADDONREQ163
**🔴 RP Manifest Count**  
**Severity**: Error

#### What This Checks
Expected exactly one resource pack manifest.json but found incorrect count.

#### Technical Details
Data contains the count of manifests found.

### CADDONREQ164
**🔴 BP Manifest Invalid**  
**Severity**: Error

#### What This Checks
The behavior pack manifest.json file is not valid or cannot be parsed.

#### Technical Details
Data contains the validation error message.

### CADDONREQ165
**🔴 BP-RP Dependency Missing**  
**Severity**: Error

#### What This Checks
Expected exactly one dependency from behavior pack to resource pack but found none or multiple.

#### Technical Details
Data contains the dependency count found.

### CADDONREQ166
**🔴 BP-RP Dependency Invalid**  
**Severity**: Error

#### What This Checks
The dependency from behavior pack to resource pack is not valid.

#### Technical Details
Data contains the validation error message.

### CADDONREQ168
**🔴 RP-BP Dependency Missing**  
**Severity**: Error

#### What This Checks
Expected exactly one dependency from resource pack to behavior pack but found none or multiple.

#### Technical Details
Data contains the dependency count found.

### CADDONREQ169
**🔴 RP-BP Dependency Invalid**  
**Severity**: Error

#### What This Checks
The dependency from resource pack to behavior pack is not valid.

#### Technical Details
Data contains the validation error message.
