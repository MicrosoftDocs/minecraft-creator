---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Content Tags"
description: "Documentation for Content Tags validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Content Tags Validation Rules
Tracks content types and component usage across JSON files in the project. Used to build content indexes for cross-referencing.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [JSONTAGS101](#jsontags101) | Entity Type | ℹ️ Info |  |
| [JSONTAGS102](#jsontags102) | Block Type | ℹ️ Info |  |
| [JSONTAGS103](#jsontags103) | Item Type | ℹ️ Info |  |
| [JSONTAGS104](#jsontags104) | Terrain Texture | ℹ️ Info |  |
| [JSONTAGS105](#jsontags105) | Item Texture | ℹ️ Info |  |
| [JSONTAGS106](#jsontags106) | Sound Definition | ℹ️ Info |  |
| [JSONTAGS107](#jsontags107) | Music Definition | ℹ️ Info |  |
| [JSONTAGS108](#jsontags108) | Sound File | ℹ️ Info |  |

---
## Rule Details

### JSONTAGS101
**ℹ️ Entity Type**  
**Severity**: Info

#### What This Checks
Tracks entity type identifiers defined in behavior pack entity JSON files.

#### Technical Details
Data contains the entity type identifier.

### JSONTAGS102
**ℹ️ Block Type**  
**Severity**: Info

#### What This Checks
Tracks custom block type identifiers defined in behavior pack block JSON files.

#### Technical Details
Data contains the block type identifier.

### JSONTAGS103
**ℹ️ Item Type**  
**Severity**: Info

#### What This Checks
Tracks custom item type identifiers defined in behavior pack item JSON files.

#### Technical Details
Data contains the item type identifier.

### JSONTAGS104
**ℹ️ Terrain Texture**  
**Severity**: Info

#### What This Checks
Tracks terrain texture short names defined in terrain_texture.json.

#### Technical Details
Data contains the terrain texture short name.

### JSONTAGS105
**ℹ️ Item Texture**  
**Severity**: Info

#### What This Checks
Tracks item texture short names defined in item_texture.json.

#### Technical Details
Data contains the item texture short name.

### JSONTAGS106
**ℹ️ Sound Definition**  
**Severity**: Info

#### What This Checks
Tracks sound definition identifiers defined in sound_definitions.json.

#### Technical Details
Data contains the sound definition identifier.

### JSONTAGS107
**ℹ️ Music Definition**  
**Severity**: Info

#### What This Checks
Tracks music definition identifiers defined in music_definitions.json.

#### Technical Details
Data contains the music definition identifier.

### JSONTAGS108
**ℹ️ Sound File**  
**Severity**: Info

#### What This Checks
Tracks individual sound file references across sound definitions.

#### Technical Details
Data contains the sound file path.
