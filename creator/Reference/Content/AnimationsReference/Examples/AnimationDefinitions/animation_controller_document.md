---
author: mammerla
ms.author: mikeam
title: "Animations Documentation - minecraft:animation_controller_document"
description: "Describes the minecraft:animation_controller_document animation definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Animations Documentation - minecraft:animation_controller_document

A Minecraft Bedrock Edition animation controller definition document. Animation controllers use a state machine to control which animations play based on conditions. They can transition between states based on Molang queries.


## Animation Controller Document Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animation_controllers | *not set* | Object | A dictionary of animation controller definitions. Keys are controller identifiers like 'controller.animation.entity.controller_name', values are controller objects with initial_state and states properties. |  | 
| format_version | *not set* | Version | The format version of this animation controller file. Use '1.10.0' or later. |  | 