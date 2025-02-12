---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - home_distance"
description: "Describes the home_distance Entity Filters"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - home_distance

Tests the distance between the subject and its home. Returns false if the subject has no home or if their home is in a different dimension.


## Home Distance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | String | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | String | (Optional) The subject of this filter test. |  | 
| value | * not set * | Decimal number | (Required) A floating point value. |  | 