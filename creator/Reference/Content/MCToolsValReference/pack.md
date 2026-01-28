---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Pack Manifest Info"
description: "Documentation for Pack Manifest Info validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Pack Manifest Info Validation Rules
Extracts and validates information from behavior pack and resource pack manifest.json files including names, descriptions, UUIDs, versions, and icons.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [PACK104](#pack104) | BP Name | ℹ️ Info |  |
| [PACK105](#pack105) | BP Description | ℹ️ Info |  |
| [PACK106](#pack106) | BP Custom ID | ℹ️ Info |  |
| [PACK107](#pack107) | BP Min Version | ℹ️ Info |  |
| [PACK108](#pack108) | BP UUID | ℹ️ Info |  |
| [PACK109](#pack109) | BP Manifest | ℹ️ Info |  |
| [PACK111](#pack111) | RP Min Version | ℹ️ Info |  |
| [PACK112](#pack112) | RP UUID | ℹ️ Info |  |
| [PACK113](#pack113) | RP Manifest | ℹ️ Info |  |
| [PACK114](#pack114) | RP Name | ℹ️ Info |  |
| [PACK115](#pack115) | RP Description | ℹ️ Info |  |
| [PACK116](#pack116) | RP Custom ID | ℹ️ Info |  |
| [PACK117](#pack117) | RP Format Version | ℹ️ Info |  |
| [PACK118](#pack118) | Sub Packs | ℹ️ Info |  |
| [PACK121](#pack121) | RP Icon | ℹ️ Info |  |
| [PACK122](#pack122) | BP Icon | ℹ️ Info |  |
| [PACK123](#pack123) | Skin Pack Icon | ℹ️ Info |  |
| [PACK245](#pack245) | Subpack Tiers | ℹ️ Info |  |

---
## Rule Details

### PACK104
**ℹ️ BP Name**  
**Severity**: Info

#### What This Checks
The name field from the behavior pack manifest header. This is displayed in the game's pack selection UI.

#### Technical Details
Data contains the name string from manifest header.

### PACK105
**ℹ️ BP Description**  
**Severity**: Info

#### What This Checks
The description field from the behavior pack manifest header. Provides a brief summary of the pack's contents.

#### Technical Details
Data contains the description string from manifest header.

### PACK106
**ℹ️ BP Custom ID**  
**Severity**: Info

#### What This Checks
The custom identifier for the behavior pack, if specified. Used for internal referencing.

#### Technical Details
Data contains the custom id string if specified.

### PACK107
**ℹ️ BP Min Version**  
**Severity**: Info

#### What This Checks
The minimum Minecraft version required to use this behavior pack. Format: [major, minor, patch].

#### Technical Details
Data contains the min_engine_version array as string.

### PACK108
**ℹ️ BP UUID**  
**Severity**: Info

#### What This Checks
The unique identifier (UUID) for the behavior pack. Must be unique across all packs.

#### Technical Details
Data contains the UUID string from manifest header.

### PACK109
**ℹ️ BP Manifest**  
**Severity**: Info

#### What This Checks
General information extracted from the behavior pack manifest.json file.

#### Technical Details
Data contains summarized manifest information.

### PACK111
**ℹ️ RP Min Version**  
**Severity**: Info

#### What This Checks
The minimum Minecraft version required to use this resource pack. Format: [major, minor, patch].

#### Technical Details
Data contains the min_engine_version array as string.

### PACK112
**ℹ️ RP UUID**  
**Severity**: Info

#### What This Checks
The unique identifier (UUID) for the resource pack. Must be unique across all packs.

#### Technical Details
Data contains the UUID string from manifest header.

### PACK113
**ℹ️ RP Manifest**  
**Severity**: Info

#### What This Checks
General information extracted from the resource pack manifest.json file.

#### Technical Details
Data contains summarized manifest information.

### PACK114
**ℹ️ RP Name**  
**Severity**: Info

#### What This Checks
The name field from the resource pack manifest header. This is displayed in the game's pack selection UI.

#### Technical Details
Data contains the name string from manifest header.

### PACK115
**ℹ️ RP Description**  
**Severity**: Info

#### What This Checks
The description field from the resource pack manifest header. Provides a brief summary of the pack's contents.

#### Technical Details
Data contains the description string from manifest header.

### PACK116
**ℹ️ RP Custom ID**  
**Severity**: Info

#### What This Checks
The custom identifier for the resource pack, if specified. Used for internal referencing.

#### Technical Details
Data contains the custom id string if specified.

### PACK117
**ℹ️ RP Format Version**  
**Severity**: Info

#### What This Checks
The format_version field from the resource pack manifest. Determines which manifest features are available.

#### Technical Details
Data contains the format_version string.

### PACK118
**ℹ️ Sub Packs**  
**Severity**: Info

#### What This Checks
Information about subpacks defined in the manifest. Subpacks allow tiered content for different device capabilities.

#### Technical Details
Data contains subpack configuration summary.

### PACK121
**ℹ️ RP Icon**  
**Severity**: Info

#### What This Checks
The pack_icon.png found in the resource pack root. Used to display the pack in selection screens.

#### Technical Details
Data contains pack icon path.

### PACK122
**ℹ️ BP Icon**  
**Severity**: Info

#### What This Checks
The pack_icon.png found in the behavior pack root. Used to display the pack in selection screens.

#### Technical Details
Data contains pack icon path.

### PACK123
**ℹ️ Skin Pack Icon**  
**Severity**: Info

#### What This Checks
The pack_icon.png found in the skin pack root. Used to display the pack in selection screens.

#### Technical Details
Data contains pack icon path.

### PACK245
**ℹ️ Subpack Tiers**  
**Severity**: Info

#### What This Checks
Analysis of subpack memory_tier configurations. Tiers should be properly ordered for device capability matching.

#### Technical Details
Data contains subpack tier configuration analysis.
