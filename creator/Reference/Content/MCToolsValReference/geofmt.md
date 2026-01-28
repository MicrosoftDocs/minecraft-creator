---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Geometry Format"
description: "Documentation for Geometry Format validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Geometry Format Validation Rules
Validates model geometry files for format compatibility and restricted features. Identifies geometry features that may not work on all platforms.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [GEOFMT101](#geofmt101) | Restricted Poly Mesh | 🔴 Error |  |
| [GEOFMT102](#geofmt102) | JSON Parse Error | 🔴 Error |  |

---
## Rule Details

### GEOFMT101
**🔴 Restricted Poly Mesh**  
**Severity**: Error

#### What This Checks
Error when geometry contains poly_mesh data. Poly meshes are a restricted feature that may not be available on all platforms.

#### Technical Details
Data contains the geometry identifier with poly_mesh.

### GEOFMT102
**🔴 JSON Parse Error**  
**Severity**: Error

#### What This Checks
Error when the geometry JSON file could not be parsed. Check for syntax errors in the geometry definition.

#### Technical Details
Data contains the JSON parse error message.
