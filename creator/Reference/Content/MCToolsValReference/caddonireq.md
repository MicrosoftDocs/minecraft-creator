---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:caddonireq"
description: "Describes the minecraft:caddonireq mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:caddonireq

Validates individual content items against Cooperative Add-On naming conventions and structure requirements. Ensures items use properly namespaced identifiers to avoid conflicts with other add-ons.


## Coop Item Naming Validation Rules


### CADDONIREQ100: BAC ID Format

**Rule ID:** `CADDONIREQ100`

**Severity:** Info

**What it checks:** Error when a behavior animation controller ID doesn't follow the format 'controller.animation.xyz'. Use the correct prefix structure.

**Technical details:** Data contains the invalid behavior animation controller ID.


### CADDONIREQ101: BAC Name Format

**Rule ID:** `CADDONIREQ101`

**Severity:** Info

**What it checks:** Error when the name portion of a behavior animation controller doesn't follow 'creatorshortname_projectshortname' format. Use namespaced naming.

**Technical details:** Data contains the invalid BAC name portion.


### CADDONIREQ110: BA ID Format

**Rule ID:** `CADDONIREQ110`

**Severity:** Info

**What it checks:** Error when a behavior animation ID doesn't follow the format 'animation.xyz.animation_name'. Use the correct prefix structure.

**Technical details:** Data contains the invalid behavior animation ID.


### CADDONIREQ111: BA Name Format

**Rule ID:** `CADDONIREQ111`

**Severity:** Info

**What it checks:** Error when the name portion of a behavior animation doesn't follow namespaced naming conventions.

**Technical details:** Data contains the invalid BA name portion.


### CADDONIREQ112: JSON ID Format

**Rule ID:** `CADDONIREQ112`

**Severity:** Info

**What it checks:** Error when a JSON file's identifier doesn't follow the expected namespace:name format for cooperative add-ons.

**Technical details:** Data contains the invalid JSON identifier.


### CADDONIREQ120: RAC ID Format

**Rule ID:** `CADDONIREQ120`

**Severity:** Info

**What it checks:** Error when a resource animation controller ID doesn't follow the format 'controller.animation.xyz'.

**Technical details:** Data contains the invalid resource animation controller ID.


### CADDONIREQ121: RAC Name Format

**Rule ID:** `CADDONIREQ121`

**Severity:** Info

**What it checks:** Error when the name portion of a resource animation controller doesn't follow namespaced naming conventions.

**Technical details:** Data contains the invalid RAC name portion.


### CADDONIREQ130: RA ID Format

**Rule ID:** `CADDONIREQ130`

**Severity:** Info

**What it checks:** Error when a resource animation ID doesn't follow the expected format.

**Technical details:** Data contains the invalid resource animation ID.


### CADDONIREQ131: RA Name Format

**Rule ID:** `CADDONIREQ131`

**Severity:** Info

**What it checks:** Error when the name portion of a resource animation doesn't follow namespaced naming conventions.

**Technical details:** Data contains the invalid RA name portion.


### CADDONIREQ140: RC ID Format

**Rule ID:** `CADDONIREQ140`

**Severity:** Info

**What it checks:** Error when a render controller ID doesn't follow the format 'controller.render.xyz'.

**Technical details:** Data contains the invalid render controller ID.


### CADDONIREQ141: RC Name Format

**Rule ID:** `CADDONIREQ141`

**Severity:** Info

**What it checks:** Error when the name portion of a render controller doesn't follow namespaced naming conventions.

**Technical details:** Data contains the invalid RC name portion.


### CADDONIREQ150: Geometry ID Format

**Rule ID:** `CADDONIREQ150`

**Severity:** Info

**What it checks:** Error when a geometry ID doesn't follow the format 'geometry.creatorshortname_projectshortname.name'.

**Technical details:** Data contains the invalid geometry ID.


### CADDONIREQ151: Geometry Name

**Rule ID:** `CADDONIREQ151`

**Severity:** Info

**What it checks:** Error when the name portion of a geometry identifier doesn't follow namespaced naming conventions.

**Technical details:** Data contains the invalid geometry name portion.


### CADDONIREQ160: Material ID Format

**Rule ID:** `CADDONIREQ160`

**Severity:** Info

**What it checks:** Error when a material identifier doesn't use proper namespacing. Use 'namespace:material_name' format.

**Technical details:** Data contains the invalid material identifier.


### CADDONIREQ161: Material Namespace

**Rule ID:** `CADDONIREQ161`

**Severity:** Info

**What it checks:** Error when the first segment of a material identifier isn't properly namespaced.

**Technical details:** Data contains the material namespace issue.


### CADDONIREQ170: Missing Pack Scope

**Rule ID:** `CADDONIREQ170`

**Severity:** Info

**What it checks:** Error when a resource pack manifest is missing 'pack_scope': 'world' in the header. Required for cooperative add-ons.

**Technical details:** Data contains the manifest path missing pack_scope.


### CADDONIREQ191: Dimension Found

**Rule ID:** `CADDONIREQ191`

**Severity:** Info

**What it checks:** Error when dimension definition files are found in the pack. Custom dimensions are not permitted in cooperative add-ons.

**Technical details:** Data contains the path to the dimension definition.
