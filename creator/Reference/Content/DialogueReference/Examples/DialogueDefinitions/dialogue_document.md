---
author: mammerla
ms.author: mikeam
title: "Dialogue Documentation - minecraft:dialogue_document"
description: "Describes the minecraft:dialogue_document dialogue definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Dialogue Documentation - minecraft:dialogue_document

A Minecraft Bedrock Edition NPC dialogue definition document. Dialogue files define conversation scenes for NPCs, including dialogue text, buttons, and commands that execute when players interact with NPCs.


## NPC Dialogue Document Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this dialogue file. Use '1.20.80' or later. |  | 
| minecraft:npc_dialogue | *not set* | [Npc Dialogue](#npc-dialogue) item | The NPC dialogue definition containing scenes. |  | 

## Npc Dialogue

#### NPC Dialogue Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| scenes | *not set* | Array of strings | Array of dialogue scene definitions. Each scene has a scene_tag, optional text, npc_name, buttons, and commands. |  | 