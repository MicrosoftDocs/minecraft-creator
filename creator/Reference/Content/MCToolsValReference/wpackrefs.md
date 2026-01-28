---
author: mammerla
ms.author: mikeam
title: "Validation Rules - World Pack Refs"
description: "Documentation for World Pack Refs validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# World Pack Refs Validation Rules
Validates pack references in world templates. Ensures that behavior_packs.json and resource_packs.json correctly reference the packs bundled with the world.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [WPACKREFS201](#wpackrefs201) | Invalid JSON | 🔴 Error |  |
| [WPACKREFS202](#wpackrefs202) | Missing References | 🟡 Warning |  |
| [WPACKREFS203](#wpackrefs203) | Invalid Pack ID | 🔴 Error |  |
| [WPACKREFS204](#wpackrefs204) | Missing Version | 🟡 Warning |  |
| [WPACKREFS205](#wpackrefs205) | Invalid Version | 🔴 Error |  |
| [WPACKREFS206](#wpackrefs206) | Pack Not Found | 🔴 Error |  |
| [WPACKREFS207](#wpackrefs207) | Processing Error | 🔴 Error |  |

---
## Rule Details

### WPACKREFS201
**🔴 Invalid JSON**  
**Severity**: Error

#### What This Checks
Error when behavior_packs.json or resource_packs.json contains invalid JSON syntax. Check for missing commas, brackets, or malformed entries.

#### Technical Details
Data contains the JSON parse error message.

### WPACKREFS202
**🟡 Missing References**  
**Severity**: Warning

#### What This Checks
Warning when expected pack reference files are missing from the world folder. Packs may not load correctly without proper references.

#### Technical Details
Data contains the expected file name (behavior_packs.json or resource_packs.json).

### WPACKREFS203
**🔴 Invalid Pack ID**  
**Severity**: Error

#### What This Checks
Error when a pack reference contains an invalid or malformed UUID. Ensure pack_id matches the UUID in the referenced pack's manifest.

#### Technical Details
Data contains the invalid pack_id value.

### WPACKREFS204
**🟡 Missing Version**  
**Severity**: Warning

#### What This Checks
Warning when a pack reference is missing the version field. Include the exact version array to ensure compatibility.

#### Technical Details
Data contains the pack_id missing the version.

### WPACKREFS205
**🔴 Invalid Version**  
**Severity**: Error

#### What This Checks
Error when the version field in a pack reference is not a valid version array [major, minor, patch]. Version must match the referenced pack.

#### Technical Details
Data contains the invalid version value.

### WPACKREFS206
**🔴 Pack Not Found**  
**Severity**: Error

#### What This Checks
Error when a referenced pack UUID does not match any pack bundled with the world. Verify the pack exists and the UUID is correct.

#### Technical Details
Data contains the UUID of the missing pack.

### WPACKREFS207
**🔴 Processing Error**  
**Severity**: Error

#### What This Checks
An internal error occurred while processing pack references. Check logs for details.

#### Technical Details
Data contains details about the internal error.
