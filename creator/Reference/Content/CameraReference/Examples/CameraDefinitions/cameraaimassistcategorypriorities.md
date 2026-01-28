---
author: mammerla
ms.author: mikeam
title: "Camera Documentation - minecraft:cameraaimassistcategorypriorities"
description: "Describes the minecraft:cameraaimassistcategorypriorities camera definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Camera Documentation - minecraft:cameraaimassistcategorypriorities

CameraAimAssistCategoryPriorities.


## CameraAimAssistCategoryPriorities Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_default | *not set* | Integer number | Optional. Default Aim-Assist targeting priority used for Blocks not found in 'blocks'. |  | 
| blocks | *not set* | Object | Optional. Map of Block identifiers to Aim-Assist targeting priority. Larger numbers have greater priority. |  | 
| entities | *not set* | Object | Optional. Map of Entity identifiers to Aim-Assist targeting priority. Larger numbers have greater priority. |  | 
| entity_default | *not set* | Integer number | Optional. Default Aim-Assist targeting priority used for Entities not found in 'entities'. |  | 