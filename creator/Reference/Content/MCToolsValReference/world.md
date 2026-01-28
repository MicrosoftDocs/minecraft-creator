---
author: mammerla
ms.author: mikeam
title: "Validation Rules - World Validation"
description: "Documentation for World Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# World Validation Validation Rules
Validates world-level settings including experiments, version requirements, and metadata. These settings affect how the world loads and what features are available.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [WORLD101](#world101) | Beta APIs | ℹ️ Info |  |
| [WORLD102](#world102) | Data Driven Items | ℹ️ Info |  |
| [WORLD103](#world103) | Deferred Preview | ℹ️ Info |  |
| [WORLD107](#world107) | Base Game Version | ℹ️ Info |  |
| [WORLD108](#world108) | World Name | ℹ️ Info |  |
| [WORLD109](#world109) | World Description | ℹ️ Info |  |

---
## Rule Details

### WORLD101
**ℹ️ Beta APIs**  
**Severity**: Info

#### What This Checks
Indicates whether the Beta APIs experiment is enabled in the world. Required for using experimental script API features.

#### Technical Details
Data contains a boolean indicating experiment status.

### WORLD102
**ℹ️ Data Driven Items**  
**Severity**: Info

#### What This Checks
Indicates whether the Data Driven Items experiment is enabled. Required for certain custom item features.

#### Technical Details
Data contains a boolean indicating experiment status.

### WORLD103
**ℹ️ Deferred Preview**  
**Severity**: Info

#### What This Checks
Indicates whether the Deferred Technical Preview experiment is enabled. Used for testing upcoming rendering features.

#### Technical Details
Data contains a boolean indicating experiment status.

### WORLD107
**ℹ️ Base Game Version**  
**Severity**: Info

#### What This Checks
The base game version specified for the world. Determines which Minecraft features and behaviors are available.

#### Technical Details
Data contains the version array as a string [major, minor, patch].

### WORLD108
**ℹ️ World Name**  
**Severity**: Info

#### What This Checks
The display name of the world shown to players.

#### Technical Details
Data contains the world name string.

### WORLD109
**ℹ️ World Description**  
**Severity**: Info

#### What This Checks
The description text for the world, shown in world selection screens.

#### Technical Details
Data contains the world description string.
