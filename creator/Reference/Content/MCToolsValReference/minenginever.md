---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Min Engine Version"
description: "Documentation for Min Engine Version validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Min Engine Version Validation Rules
Validates and updates the min_engine_version field in pack manifests. This version specifies the minimum Minecraft version required to use the pack.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [MINENGINEVER100](#minenginever100) | BP Version Defined | ℹ️ Info |  |
| [MINENGINEVER110](#minenginever110) | BP Major Low | 🟡 Warning | ✅ |
| [MINENGINEVER111](#minenginever111) | BP Major High | 🔴 Error | ✅ |
| [MINENGINEVER120](#minenginever120) | BP Minor Low | 🟡 Warning | ✅ |
| [MINENGINEVER121](#minenginever121) | BP Minor High | 🔴 Error | ✅ |
| [MINENGINEVER130](#minenginever130) | BP Patch Low | ℹ️ Info | ✅ |
| [MINENGINEVER131](#minenginever131) | BP Patch High | 🟡 Warning | ✅ |
| [MINENGINEVER180](#minenginever180) | No Manifest | 🔴 Error |  |
| [MINENGINEVER181](#minenginever181) | Version Errors | 🔴 Error |  |
| [MINENGINEVER200](#minenginever200) | RP Version Defined | ℹ️ Info |  |
| [MINENGINEVER210](#minenginever210) | RP Major Low | 🟡 Warning | ✅ |
| [MINENGINEVER211](#minenginever211) | RP Major High | 🔴 Error | ✅ |
| [MINENGINEVER220](#minenginever220) | RP Minor Low | 🟡 Warning | ✅ |
| [MINENGINEVER221](#minenginever221) | RP Minor High | 🔴 Error | ✅ |
| [MINENGINEVER230](#minenginever230) | RP Patch Low | ℹ️ Info | ✅ |
| [MINENGINEVER231](#minenginever231) | RP Patch High | 🟡 Warning | ✅ |
| [MINENGINEVER500](#minenginever500) | Version Retrieved | ℹ️ Info |  |
| [MINENGINEVER501](#minenginever501) | Version Parsed | ℹ️ Info |  |

---
## Rule Details

### MINENGINEVER100
**ℹ️ BP Version Defined**  
**Severity**: Info

#### What This Checks
Confirms that min_engine_version is defined in the behavior pack manifest header.

#### Technical Details
Data contains the min_engine_version value.

### MINENGINEVER110
**🟡 BP Major Low**  
**Severity**: Warning

#### What This Checks
Warning when the behavior pack's min_engine_version major number is below the current Minecraft version. Update to access newer features.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the current min_engine_version.

### MINENGINEVER111
**🔴 BP Major High**  
**Severity**: Error

#### What This Checks
Error when the behavior pack's min_engine_version major number is above the current Minecraft version. The pack may not load.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the min_engine_version exceeding current.

### MINENGINEVER120
**🟡 BP Minor Low**  
**Severity**: Warning

#### What This Checks
Warning when the behavior pack's min_engine_version minor number is below the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the current min_engine_version.

### MINENGINEVER121
**🔴 BP Minor High**  
**Severity**: Error

#### What This Checks
Error when the behavior pack's min_engine_version minor number is above the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the min_engine_version exceeding current.

### MINENGINEVER130
**ℹ️ BP Patch Low**  
**Severity**: Info

#### What This Checks
Information when the behavior pack's min_engine_version patch number is below the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the current min_engine_version.

### MINENGINEVER131
**🟡 BP Patch High**  
**Severity**: Warning

#### What This Checks
Warning when the behavior pack's min_engine_version patch number is above the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the min_engine_version exceeding current.

### MINENGINEVER180
**🔴 No Manifest**  
**Severity**: Error

#### What This Checks
Error when no manifest.json file was found in the pack root.

#### Technical Details
Data contains the expected manifest path.

### MINENGINEVER181
**🔴 Version Errors**  
**Severity**: Error

#### What This Checks
Error when the min_engine_version field could not be parsed or validated.

#### Technical Details
Data contains the version processing error.

### MINENGINEVER200
**ℹ️ RP Version Defined**  
**Severity**: Info

#### What This Checks
Confirms that min_engine_version is defined in the resource pack manifest header.

#### Technical Details
Data contains the min_engine_version value.

### MINENGINEVER210
**🟡 RP Major Low**  
**Severity**: Warning

#### What This Checks
Warning when the resource pack's min_engine_version major number is below the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the current min_engine_version.

### MINENGINEVER211
**🔴 RP Major High**  
**Severity**: Error

#### What This Checks
Error when the resource pack's min_engine_version major number is above the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the min_engine_version exceeding current.

### MINENGINEVER220
**🟡 RP Minor Low**  
**Severity**: Warning

#### What This Checks
Warning when the resource pack's min_engine_version minor number is below the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the current min_engine_version.

### MINENGINEVER221
**🔴 RP Minor High**  
**Severity**: Error

#### What This Checks
Error when the resource pack's min_engine_version minor number is above the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the min_engine_version exceeding current.

### MINENGINEVER230
**ℹ️ RP Patch Low**  
**Severity**: Info

#### What This Checks
Information when the resource pack's min_engine_version patch number is below the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the current min_engine_version.

### MINENGINEVER231
**🟡 RP Patch High**  
**Severity**: Warning

#### What This Checks
Warning when the resource pack's min_engine_version patch number is above the current Minecraft version.

> [!TIP]
> **Auto-Fix Available**: This issue can be automatically fixed.
> - Set min_engine_version to latest version.

#### Technical Details
Data contains the min_engine_version exceeding current.

### MINENGINEVER500
**ℹ️ Version Retrieved**  
**Severity**: Info

#### What This Checks
Status indicating the current Minecraft version was retrieved for comparison.

#### Technical Details
Data contains the retrieved Minecraft version.

### MINENGINEVER501
**ℹ️ Version Parsed**  
**Severity**: Info

#### What This Checks
Status indicating the Minecraft version string was parsed into version numbers.

#### Technical Details
Data contains the parsed version components.
