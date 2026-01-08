---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:itemtype"
description: "Describes the minecraft:itemtype mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:itemtype

Validates behavior pack item type definitions including format versions, identifiers, and metadata. Can automatically update format versions to the latest.


## Item Types Validation Rules


### ITEMTYPE100: Version Defined

**Rule ID:** `ITEMTYPE100`

**Severity:** Info

**What it checks:** Confirms that a format_version field is defined in the item type JSON. Required for proper parsing.

**Technical details:** Data contains the format_version value.


### ITEMTYPE110: Major Version Low

**Rule ID:** `ITEMTYPE110`

**Severity:** Info

**What it checks:** Warning when the item's format_version major number is below the current version. Consider updating to access new features.

**Technical details:** Data contains the current format_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ITEMTYPE111: Major Version High

**Rule ID:** `ITEMTYPE111`

**Severity:** Info

**What it checks:** Error when the item's format_version major number is above the current version. The item may not load correctly.

**Technical details:** Data contains the format_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ITEMTYPE120: Minor Version Low

**Rule ID:** `ITEMTYPE120`

**Severity:** Info

**What it checks:** Warning when the item's format_version minor number is below the current version.

**Technical details:** Data contains the current format_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ITEMTYPE121: Minor Version High

**Rule ID:** `ITEMTYPE121`

**Severity:** Info

**What it checks:** Error when the item's format_version minor number is above the current version.

**Technical details:** Data contains the format_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ITEMTYPE130: Patch Version Low

**Rule ID:** `ITEMTYPE130`

**Severity:** Info

**What it checks:** Information when the item's format_version patch number is below the current version.

**Technical details:** Data contains the current format_version.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ITEMTYPE131: Patch Version High

**Rule ID:** `ITEMTYPE131`

**Severity:** Info

**What it checks:** Warning when the item's format_version patch number is above the current version.

**Technical details:** Data contains the format_version exceeding current.

**Auto-fix available:** Yes - This issue can be automatically fixed by MCTools.


### ITEMTYPE500: Version Fetch Error

**Rule ID:** `ITEMTYPE500`

**Severity:** Info

**What it checks:** Error when the current Minecraft version could not be determined for comparison.

**Technical details:** Data contains the error message.


### ITEMTYPE501: Version Parse Error

**Rule ID:** `ITEMTYPE501`

**Severity:** Info

**What it checks:** Error when the Minecraft version string could not be parsed into version numbers.

**Technical details:** Data contains the unparseable version string.


### ITEMTYPE53: Identifier

**Rule ID:** `ITEMTYPE53`

**Severity:** Info

**What it checks:** The identifier of the item type (e.g., mypack:custom_sword). Should follow namespace:name format.

**Technical details:** Data contains the item type identifier.


### ITEMTYPE54: Metadata

**Rule ID:** `ITEMTYPE54`

**Severity:** Info

**What it checks:** Additional metadata associated with the item type definition.

**Technical details:** Data contains the metadata value.


### ITEMTYPE55: Category

**Rule ID:** `ITEMTYPE55`

**Severity:** Info

**What it checks:** The category of the item type (equipment, items, nature, etc.) for creative inventory placement.

**Technical details:** Data contains the category name.
