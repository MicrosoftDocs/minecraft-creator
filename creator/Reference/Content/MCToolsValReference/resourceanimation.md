---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:resourceanimation"
description: "Describes the minecraft:resourceanimation mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:resourceanimation

Analyzes resource pack animation files to count animations and bone references. Used to assess animation complexity.


## Animation Analysis Validation Rules


### RESOURCEANIMATION101: Animation Count

**Rule ID:** `RESOURCEANIMATION101`

**Severity:** Info

**What it checks:** Count of animation definitions in resource pack animation files.

**Technical details:** Data contains the count of animations as a number.


### RESOURCEANIMATION102: Bone Count

**Rule ID:** `RESOURCEANIMATION102`

**Severity:** Info

**What it checks:** Count of bone references used across animations. More bones generally means more complex animations.

**Technical details:** Data contains the count of bone references as a number.
