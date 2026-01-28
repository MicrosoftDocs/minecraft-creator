---
author: mammerla
ms.author: mikeam
title: "Camera Documentation - minecraft:cameraaimassistpresetdefinition"
description: "Describes the minecraft:cameraaimassistpresetdefinition camera definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Camera Documentation - minecraft:cameraaimassistpresetdefinition

CameraAimAssistPresetDefinition.


## CameraAimAssistPresetDefinition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default_item_settings | *not set* | String | Optional. Default Aim-Assist Category used for Items not found in 'item_settings'. |  | 
| exclusion_list | *not set* | Array of objects | Optional. List of block/entity identifiers to exclude from aim assist targeting. |  | 
| hand_settings | *not set* | String | Optional. Aim-assist Category used for an empty hand. |  | 
| identifier | *not set* | String | Namespaced identifier for Camera Aim-Assist preset. Namespace and name must be separated by a ':'. |  | 
| item_settings | *not set* | Object | Optional. Map of Item identifiers to Aim-Assist Category names found in the specified 'categories'. |  | 
| liquid_targeting_list | *not set* | Array of objects | Optional. List of item identifiers that will target liquid blocks with aim-assist when being held. |  | 