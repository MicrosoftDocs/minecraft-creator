---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:vandupes"
description: "Describes the minecraft:vandupes mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:vandupes

Detects content that duplicates vanilla Minecraft files. Unnecessary copies increase pack size and may cause conflicts with game updates.


## Vanilla Duplicates Validation Rules


### VANDUPES101: Exact Duplicate

**Rule ID:** `VANDUPES101`

**Severity:** Info

**What it checks:** Error when a file is an exact copy of a vanilla Minecraft file. This wastes space and may cause issues when the vanilla file is updated. Remove the duplicate.

**Technical details:** Data contains the path to the duplicated vanilla file.


### VANDUPES102: Partial Duplicate

**Rule ID:** `VANDUPES102`

**Severity:** Info

**What it checks:** Warning when a file appears to be a mostly-unchanged copy of vanilla content with minor modifications. Consider using only the necessary overrides rather than duplicating the entire file.

**Technical details:** Data contains the path to the partial duplicate and similarity percentage.
