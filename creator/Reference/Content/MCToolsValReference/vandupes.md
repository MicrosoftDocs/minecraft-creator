---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Vanilla Duplicates"
description: "Documentation for Vanilla Duplicates validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Vanilla Duplicates Validation Rules
Detects content that duplicates vanilla Minecraft files. Unnecessary copies increase pack size and may cause conflicts with game updates.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [VANDUPES101](#vandupes101) | Exact Duplicate | 🔴 Error |  |
| [VANDUPES102](#vandupes102) | Partial Duplicate | 🟡 Warning |  |

---
## Rule Details

### VANDUPES101
**🔴 Exact Duplicate**  
**Severity**: Error

#### What This Checks
Error when a file is an exact copy of a vanilla Minecraft file. This wastes space and may cause issues when the vanilla file is updated. Remove the duplicate.

#### Technical Details
Data contains the path to the duplicated vanilla file.

### VANDUPES102
**🟡 Partial Duplicate**  
**Severity**: Warning

#### What This Checks
Warning when a file appears to be a mostly-unchanged copy of vanilla content with minor modifications. Consider using only the necessary overrides rather than duplicating the entire file.

#### Technical Details
Data contains the path to the partial duplicate and similarity percentage.
