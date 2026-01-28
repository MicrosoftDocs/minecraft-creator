---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Coop Item Naming"
description: "Documentation for Coop Item Naming validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Coop Item Naming Validation Rules
Validates individual content items against Cooperative Add-On naming conventions and structure requirements. Ensures items use properly namespaced identifiers to avoid conflicts with other add-ons.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CADDONIREQ100](#caddonireq100) | BAC ID Format | 🔴 Error |  |
| [CADDONIREQ101](#caddonireq101) | BAC Name Format | 🔴 Error |  |
| [CADDONIREQ110](#caddonireq110) | BA ID Format | 🔴 Error |  |
| [CADDONIREQ111](#caddonireq111) | BA Name Format | 🔴 Error |  |
| [CADDONIREQ112](#caddonireq112) | JSON ID Format | 🔴 Error |  |
| [CADDONIREQ120](#caddonireq120) | RAC ID Format | 🔴 Error |  |
| [CADDONIREQ121](#caddonireq121) | RAC Name Format | 🔴 Error |  |
| [CADDONIREQ130](#caddonireq130) | RA ID Format | 🔴 Error |  |
| [CADDONIREQ131](#caddonireq131) | RA Name Format | 🔴 Error |  |
| [CADDONIREQ140](#caddonireq140) | RC ID Format | 🔴 Error |  |
| [CADDONIREQ141](#caddonireq141) | RC Name Format | 🔴 Error |  |
| [CADDONIREQ150](#caddonireq150) | Geometry ID Format | 🔴 Error |  |
| [CADDONIREQ151](#caddonireq151) | Geometry Name | 🔴 Error |  |
| [CADDONIREQ160](#caddonireq160) | Material ID Format | 🔴 Error |  |
| [CADDONIREQ161](#caddonireq161) | Material Namespace | 🔴 Error |  |
| [CADDONIREQ170](#caddonireq170) | Missing Pack Scope | 🔴 Error |  |
| [CADDONIREQ191](#caddonireq191) | Dimension Found | 🔴 Error |  |

---
## Rule Details

### CADDONIREQ100
**🔴 BAC ID Format**  
**Severity**: Error

#### What This Checks
Error when a behavior animation controller ID doesn't follow the format 'controller.animation.xyz'. Use the correct prefix structure.

#### Technical Details
Data contains the invalid behavior animation controller ID.

### CADDONIREQ101
**🔴 BAC Name Format**  
**Severity**: Error

#### What This Checks
Error when the name portion of a behavior animation controller doesn't follow 'creatorshortname_projectshortname' format. Use namespaced naming.

#### Technical Details
Data contains the invalid BAC name portion.

### CADDONIREQ110
**🔴 BA ID Format**  
**Severity**: Error

#### What This Checks
Error when a behavior animation ID doesn't follow the format 'animation.xyz.animation_name'. Use the correct prefix structure.

#### Technical Details
Data contains the invalid behavior animation ID.

### CADDONIREQ111
**🔴 BA Name Format**  
**Severity**: Error

#### What This Checks
Error when the name portion of a behavior animation doesn't follow namespaced naming conventions.

#### Technical Details
Data contains the invalid BA name portion.

### CADDONIREQ112
**🔴 JSON ID Format**  
**Severity**: Error

#### What This Checks
Error when a JSON file's identifier doesn't follow the expected namespace:name format for cooperative add-ons.

#### Technical Details
Data contains the invalid JSON identifier.

### CADDONIREQ120
**🔴 RAC ID Format**  
**Severity**: Error

#### What This Checks
Error when a resource animation controller ID doesn't follow the format 'controller.animation.xyz'.

#### Technical Details
Data contains the invalid resource animation controller ID.

### CADDONIREQ121
**🔴 RAC Name Format**  
**Severity**: Error

#### What This Checks
Error when the name portion of a resource animation controller doesn't follow namespaced naming conventions.

#### Technical Details
Data contains the invalid RAC name portion.

### CADDONIREQ130
**🔴 RA ID Format**  
**Severity**: Error

#### What This Checks
Error when a resource animation ID doesn't follow the expected format.

#### Technical Details
Data contains the invalid resource animation ID.

### CADDONIREQ131
**🔴 RA Name Format**  
**Severity**: Error

#### What This Checks
Error when the name portion of a resource animation doesn't follow namespaced naming conventions.

#### Technical Details
Data contains the invalid RA name portion.

### CADDONIREQ140
**🔴 RC ID Format**  
**Severity**: Error

#### What This Checks
Error when a render controller ID doesn't follow the format 'controller.render.xyz'.

#### Technical Details
Data contains the invalid render controller ID.

### CADDONIREQ141
**🔴 RC Name Format**  
**Severity**: Error

#### What This Checks
Error when the name portion of a render controller doesn't follow namespaced naming conventions.

#### Technical Details
Data contains the invalid RC name portion.

### CADDONIREQ150
**🔴 Geometry ID Format**  
**Severity**: Error

#### What This Checks
Error when a geometry ID doesn't follow the format 'geometry.creatorshortname_projectshortname.name'.

#### Technical Details
Data contains the invalid geometry ID.

### CADDONIREQ151
**🔴 Geometry Name**  
**Severity**: Error

#### What This Checks
Error when the name portion of a geometry identifier doesn't follow namespaced naming conventions.

#### Technical Details
Data contains the invalid geometry name portion.

### CADDONIREQ160
**🔴 Material ID Format**  
**Severity**: Error

#### What This Checks
Error when a material identifier doesn't use proper namespacing. Use 'namespace:material_name' format.

#### Technical Details
Data contains the invalid material identifier.

### CADDONIREQ161
**🔴 Material Namespace**  
**Severity**: Error

#### What This Checks
Error when the first segment of a material identifier isn't properly namespaced.

#### Technical Details
Data contains the material namespace issue.

### CADDONIREQ170
**🔴 Missing Pack Scope**  
**Severity**: Error

#### What This Checks
Error when a resource pack manifest is missing 'pack_scope': 'world' in the header. Required for cooperative add-ons.

#### Technical Details
Data contains the manifest path missing pack_scope.

### CADDONIREQ191
**🔴 Dimension Found**  
**Severity**: Error

#### What This Checks
Error when dimension definition files are found in the pack. Custom dimensions are not permitted in cooperative add-ons.

#### Technical Details
Data contains the path to the dimension definition.
