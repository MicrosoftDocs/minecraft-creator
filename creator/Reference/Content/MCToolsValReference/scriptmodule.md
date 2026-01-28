---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Script Modules"
description: "Documentation for Script Modules validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Script Modules Validation Rules
Validates script module dependencies in behavior pack manifests and package.json files. Checks for version compatibility and can update module versions to the latest supported versions.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [SCRIPTMODULE100](#scriptmodule100) | BP Module Dependency | ℹ️ Info |  |
| [SCRIPTMODULE101](#scriptmodule101) | Package Dependency | ℹ️ Info |  |
| [SCRIPTMODULE102](#scriptmodule102) | Package Dev Dependency | ℹ️ Info |  |
| [SCRIPTMODULE110](#scriptmodule110) | Missing Package Registration | 🔴 Error |  |
| [SCRIPTMODULE111](#scriptmodule111) | Missing NPM Registration | 🔴 Error |  |
| [SCRIPTMODULE114](#scriptmodule114) | Beta Version Outdated | 🔴 Error |  |

---
## Rule Details

### SCRIPTMODULE100
**ℹ️ BP Module Dependency**  
**Severity**: Info

#### What This Checks
Reports a script module dependency declared in a behavior pack manifest. Shows the module name and version being used.

#### Technical Details
Data field contains the version string. Content field contains the module name.

### SCRIPTMODULE101
**ℹ️ Package Dependency**  
**Severity**: Info

#### What This Checks
Reports a @minecraft/* package dependency in package.json. Shows the package name and version used for TypeScript development.

#### Technical Details
Data field contains the version string. Content field contains the package name.

### SCRIPTMODULE102
**ℹ️ Package Dev Dependency**  
**Severity**: Info

#### What This Checks
Reports a @minecraft/* package devDependency in package.json. Shows the package name and version used for development tooling.

#### Technical Details
Data field contains the version string. Content field contains the package name.

### SCRIPTMODULE110
**🔴 Missing Package Registration**  
**Severity**: Error

#### What This Checks
A script module is used in the behavior pack manifest but not registered in package.json. Add the dependency to package.json.

#### How to Fix
Run 'npm install @minecraft/[module-name]' to add the missing module to package.json, or manually add it to dependencies.

#### Technical Details
Data field contains the module name that is missing from package.json.

### SCRIPTMODULE111
**🔴 Missing NPM Registration**  
**Severity**: Error

#### What This Checks
A script module is used but could not be found in the NPM registry. Check if the module name is correct.

#### How to Fix
Verify the module name is spelled correctly. Check the NPM registry or Minecraft documentation for valid @minecraft/* package names.

#### Technical Details
Data field contains the module name that could not be found.

### SCRIPTMODULE114
**🔴 Beta Version Outdated**  
**Severity**: Error

#### What This Checks
The beta version of a script module is outdated compared to the current beta version. Update to the latest beta.

#### How to Fix
Update to the latest beta version by running 'npm update @minecraft/[module-name]@beta' or use the 'Fix' button.

#### Technical Details
Data field contains the outdated version string.
