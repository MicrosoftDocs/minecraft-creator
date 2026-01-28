---
author: mammerla
ms.author: mikeam
title: "Animations Documentation - minecraft:animation_document"
description: "Describes the minecraft:animation_document animation definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Animations Documentation - minecraft:animation_document

A Minecraft Bedrock Edition animation definition document. Animations define bone transformations (position, rotation, scale) over time for entities. They can be used in both behavior packs (for server-side animations) and resource packs (for client-side visual animations).


## Animation Document Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animations | *not set* | Object | A dictionary of animation definitions. Keys are animation identifiers like 'animation.entity.anim_name', values are animation objects with loop, animation_length, timeline, and bones properties. |  | 
| format_version | *not set* | Version | The format version of this animation file. Use '1.8.0' or later. |  | 