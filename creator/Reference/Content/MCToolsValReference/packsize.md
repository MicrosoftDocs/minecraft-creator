---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:packsize"
description: "Describes the minecraft:packsize mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:packsize

Analyzes pack file sizes and counts to ensure content fits within platform limits. Large packs can cause download issues and slow loading times on mobile devices.


## Pack Size Validation Rules


### PACKSIZE101: Total Size

**Rule ID:** `PACKSIZE101`

**Severity:** Info

**What it checks:** Total size in bytes of all files in the pack, including non-content files.

**Technical details:** Data contains the size in bytes as a number.


### PACKSIZE102: File Count

**Rule ID:** `PACKSIZE102`

**Severity:** Info

**What it checks:** Total number of files in the pack.

**Technical details:** Data contains the file count as a number.


### PACKSIZE103: Folder Count

**Rule ID:** `PACKSIZE103`

**Severity:** Info

**What it checks:** Total number of folders in the pack.

**Technical details:** Data contains the folder count as a number.


### PACKSIZE104: Content Size

**Rule ID:** `PACKSIZE104`

**Severity:** Info

**What it checks:** Total size in bytes of content files only (JSON, images, sounds, etc.), excluding system files.

**Technical details:** Data contains the content size in bytes as a number.


### PACKSIZE105: Content Files

**Rule ID:** `PACKSIZE105`

**Severity:** Info

**What it checks:** Number of content files in the pack.

**Technical details:** Data contains the content file count as a number.


### PACKSIZE106: Content Folders

**Rule ID:** `PACKSIZE106`

**Severity:** Info

**What it checks:** Number of content folders in the pack.

**Technical details:** Data contains the content folder count as a number.


### PACKSIZE401: Addon Size Warning

**Rule ID:** `PACKSIZE401`

**Severity:** Info

**What it checks:** Warning when the add-on exceeds recommended size limits. Large add-ons may have issues on mobile platforms or with Realms uploads.

**How to fix:** Reduce pack size by compressing textures, removing unused assets, or splitting into multiple packs. Target under 100MB for best mobile compatibility.

**Technical details:** Data contains the size that exceeds the limit.


### PACKSIZE402: Package Size Warning

**Rule ID:** `PACKSIZE402`

**Severity:** Info

**What it checks:** Warning when the packaged content (.mcaddon/.mcpack) exceeds recommended size limits for distribution.

**How to fix:** Compress textures to reduce file size, use lower resolution for mobile targets, and remove any development/debug files before packaging.

**Technical details:** Data contains the package size that exceeds the limit.


### PACKSIZE410: Zip Processing Error

**Rule ID:** `PACKSIZE410`

**Severity:** Info

**What it checks:** Error when a zip file within the pack could not be read or processed. May indicate corruption or unsupported compression.

**How to fix:** The zip file may be corrupted. Try re-downloading or re-creating the zip. Ensure you're using standard ZIP compression without advanced features.

**Technical details:** Data contains the path to the problematic zip file.
