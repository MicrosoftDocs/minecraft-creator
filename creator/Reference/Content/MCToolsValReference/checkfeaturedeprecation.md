---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:checkfeaturedeprecation"
description: "Describes the minecraft:checkfeaturedeprecation mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:checkfeaturedeprecation

Checks for deprecated features, blocks, and textures that may be removed in future Minecraft versions. Update deprecated content to ensure long-term compatibility.


## Deprecated Features Validation Rules


### CHECKFEATUREDEPRECATION101: Deprecated Block

**Rule ID:** `CHECKFEATUREDEPRECATION101`

**Severity:** Info

**What it checks:** Warning when overriding a deprecated vanilla block. The block may be removed in future versions, breaking your content.

**Technical details:** Data contains the deprecated block identifier.


### CHECKFEATUREDEPRECATION102: Deprecated Terrain

**Rule ID:** `CHECKFEATUREDEPRECATION102`

**Severity:** Info

**What it checks:** Warning when referencing a deprecated terrain texture name. Update to the current texture identifier.

**Technical details:** Data contains the deprecated terrain texture name.


### CHECKFEATUREDEPRECATION103: Deprecated Texture

**Rule ID:** `CHECKFEATUREDEPRECATION103`

**Severity:** Info

**What it checks:** Warning when using a deprecated texture path. Update to the current texture location.

**Technical details:** Data contains the deprecated texture path.


### CHECKFEATUREDEPRECATION104: JSON Parse Error

**Rule ID:** `CHECKFEATUREDEPRECATION104`

**Severity:** Info

**What it checks:** Error when a JSON file could not be parsed during deprecation checking.

**Technical details:** Data contains the JSON parse error message.
