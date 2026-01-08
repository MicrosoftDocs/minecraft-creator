---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:pack"
description: "Describes the minecraft:pack mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:pack

Extracts and validates information from behavior pack and resource pack manifest.json files including names, descriptions, UUIDs, versions, and icons.


## Pack Manifest Info Validation Rules


### PACK104: BP Name

**Rule ID:** `PACK104`

**Severity:** Info

**What it checks:** The name field from the behavior pack manifest header. This is displayed in the game's pack selection UI.

**Technical details:** Data contains the name string from manifest header.


### PACK105: BP Description

**Rule ID:** `PACK105`

**Severity:** Info

**What it checks:** The description field from the behavior pack manifest header. Provides a brief summary of the pack's contents.

**Technical details:** Data contains the description string from manifest header.


### PACK106: BP Custom ID

**Rule ID:** `PACK106`

**Severity:** Info

**What it checks:** The custom identifier for the behavior pack, if specified. Used for internal referencing.

**Technical details:** Data contains the custom id string if specified.


### PACK107: BP Min Version

**Rule ID:** `PACK107`

**Severity:** Info

**What it checks:** The minimum Minecraft version required to use this behavior pack. Format: [major, minor, patch].

**Technical details:** Data contains the min_engine_version array as string.


### PACK108: BP UUID

**Rule ID:** `PACK108`

**Severity:** Info

**What it checks:** The unique identifier (UUID) for the behavior pack. Must be unique across all packs.

**Technical details:** Data contains the UUID string from manifest header.


### PACK109: BP Manifest

**Rule ID:** `PACK109`

**Severity:** Info

**What it checks:** General information extracted from the behavior pack manifest.json file.

**Technical details:** Data contains summarized manifest information.


### PACK111: RP Min Version

**Rule ID:** `PACK111`

**Severity:** Info

**What it checks:** The minimum Minecraft version required to use this resource pack. Format: [major, minor, patch].

**Technical details:** Data contains the min_engine_version array as string.


### PACK112: RP UUID

**Rule ID:** `PACK112`

**Severity:** Info

**What it checks:** The unique identifier (UUID) for the resource pack. Must be unique across all packs.

**Technical details:** Data contains the UUID string from manifest header.


### PACK113: RP Manifest

**Rule ID:** `PACK113`

**Severity:** Info

**What it checks:** General information extracted from the resource pack manifest.json file.

**Technical details:** Data contains summarized manifest information.


### PACK114: RP Name

**Rule ID:** `PACK114`

**Severity:** Info

**What it checks:** The name field from the resource pack manifest header. This is displayed in the game's pack selection UI.

**Technical details:** Data contains the name string from manifest header.


### PACK115: RP Description

**Rule ID:** `PACK115`

**Severity:** Info

**What it checks:** The description field from the resource pack manifest header. Provides a brief summary of the pack's contents.

**Technical details:** Data contains the description string from manifest header.


### PACK116: RP Custom ID

**Rule ID:** `PACK116`

**Severity:** Info

**What it checks:** The custom identifier for the resource pack, if specified. Used for internal referencing.

**Technical details:** Data contains the custom id string if specified.


### PACK117: RP Format Version

**Rule ID:** `PACK117`

**Severity:** Info

**What it checks:** The format_version field from the resource pack manifest. Determines which manifest features are available.

**Technical details:** Data contains the format_version string.


### PACK118: Sub Packs

**Rule ID:** `PACK118`

**Severity:** Info

**What it checks:** Information about subpacks defined in the manifest. Subpacks allow tiered content for different device capabilities.

**Technical details:** Data contains subpack configuration summary.


### PACK121: RP Icon

**Rule ID:** `PACK121`

**Severity:** Info

**What it checks:** The pack_icon.png found in the resource pack root. Used to display the pack in selection screens.

**Technical details:** Data contains pack icon path.


### PACK122: BP Icon

**Rule ID:** `PACK122`

**Severity:** Info

**What it checks:** The pack_icon.png found in the behavior pack root. Used to display the pack in selection screens.

**Technical details:** Data contains pack icon path.


### PACK123: Skin Pack Icon

**Rule ID:** `PACK123`

**Severity:** Info

**What it checks:** The pack_icon.png found in the skin pack root. Used to display the pack in selection screens.

**Technical details:** Data contains pack icon path.


### PACK245: Subpack Tiers

**Rule ID:** `PACK245`

**Severity:** Info

**What it checks:** Analysis of subpack memory_tier configurations. Tiers should be properly ordered for device capability matching.

**Technical details:** Data contains subpack tier configuration analysis.
