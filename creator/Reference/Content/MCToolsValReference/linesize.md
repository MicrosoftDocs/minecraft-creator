---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:linesize"
description: "Describes the minecraft:linesize mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:linesize

Aggregates file size and line count statistics for all project items, broken down by item type. For binary files, reports file size; for text files, reports number of significant lines. Topic IDs are computed dynamically as TopicTestIdBase (100) + ProjectItemType value. All topics produce featureAggregate (info) type messages.

Topic IDs correspond to ProjectItemType enum values offset by 100. Each topic aggregates counts for files of that type.
