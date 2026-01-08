---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:json"
description: "Describes the minecraft:json mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:json

Validates JSON files against their corresponding schemas based on item type. Reports schema validation errors and warns when files are not at a current format version. Topic IDs 100+ are computed as JsonSchemaErrorBase (100) + ProjectItemType. Topic IDs 1100+ are computed as NotCurrentFormatVersionBase (1100) + ProjectItemType.


## JSON Schema Validation Validation Rules


### JSON1: JSON Parse Error

**Rule ID:** `JSON1`

**Severity:** Error

**What it checks:** The file could not be parsed as valid JSON. Check for syntax errors like missing commas, brackets, or quotes.

**How to fix:** Use a JSON validator or your editor's JSON mode to find syntax errors. Common issues include: missing or extra commas, unclosed brackets or braces, unquoted property names, and trailing commas before closing brackets.
