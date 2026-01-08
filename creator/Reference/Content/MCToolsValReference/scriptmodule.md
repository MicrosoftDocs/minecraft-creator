---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:scriptmodule"
description: "Describes the minecraft:scriptmodule mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:scriptmodule

Validates script module dependencies in behavior pack manifests and package.json files. Checks for version compatibility and can update module versions to the latest supported versions.


## Script Modules Validation Rules


### SCRIPTMODULE100: BP Module Dependency

**Rule ID:** `SCRIPTMODULE100`

**Severity:** Info

**What it checks:** Reports a script module dependency declared in a behavior pack manifest. Shows the module name and version being used.

**Technical details:** Data field contains the version string. Content field contains the module name.


### SCRIPTMODULE101: Package Dependency

**Rule ID:** `SCRIPTMODULE101`

**Severity:** Info

**What it checks:** Reports a @minecraft/* package dependency in package.json. Shows the package name and version used for TypeScript development.

**Technical details:** Data field contains the version string. Content field contains the package name.


### SCRIPTMODULE102: Package Dev Dependency

**Rule ID:** `SCRIPTMODULE102`

**Severity:** Info

**What it checks:** Reports a @minecraft/* package devDependency in package.json. Shows the package name and version used for development tooling.

**Technical details:** Data field contains the version string. Content field contains the package name.


### SCRIPTMODULE110: Missing Package Registration

**Rule ID:** `SCRIPTMODULE110`

**Severity:** Error

**What it checks:** A script module is used in the behavior pack manifest but not registered in package.json. Add the dependency to package.json.

**How to fix:** Run 'npm install @minecraft/[module-name]' to add the missing module to package.json, or manually add it to dependencies.

**Technical details:** Data field contains the module name that is missing from package.json.


### SCRIPTMODULE111: Missing NPM Registration

**Rule ID:** `SCRIPTMODULE111`

**Severity:** Error

**What it checks:** A script module is used but could not be found in the NPM registry. Check if the module name is correct.

**How to fix:** Verify the module name is spelled correctly. Check the NPM registry or Minecraft documentation for valid @minecraft/* package names.

**Technical details:** Data field contains the module name that could not be found.


### SCRIPTMODULE114: Beta Version Outdated

**Rule ID:** `SCRIPTMODULE114`

**Severity:** Error

**What it checks:** The beta version of a script module is outdated compared to the current beta version. Update to the latest beta.

**How to fix:** Update to the latest beta version by running 'npm update @minecraft/[module-name]@beta' or use the 'Fix' button.

**Technical details:** Data field contains the outdated version string.
