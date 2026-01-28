---
author: mammerla
ms.author: mikeam
title: "JSON UI Documentation - minecraft:ui_screen"
description: "Describes the minecraft:ui_screen json ui component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# JSON UI Documentation - minecraft:ui_screen

A UI screen definition file for Minecraft Bedrock Edition. UI screens define complete interface layouts including namespaces, element definitions, and global variables.

> [!Note]
> UI screen files use a namespace-based structure where each JSON key (except 'namespace') defines a UI element. Elements can inherit from other elements using the '@' syntax (e.g., 'my_button@common.button'). Variables are defined with '$' prefix and can be overridden.


## UI Screen Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| namespace | *not set* | String | The namespace for this UI screen. Used to reference elements from other UI files using the 'namespace.element_name' syntax. |  | 