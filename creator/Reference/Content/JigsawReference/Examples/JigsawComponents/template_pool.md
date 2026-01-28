---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:template_pool"
description: "Describes the minecraft:template_pool jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:template_pool

Defines a template pool containing structure elements that can be connected via jigsaw blocks.


## Template Pool Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | The format version of this template pool definition. |  | 
| minecraft:template_pool | *not set* | [Template Pool](#template-pool) item | The template pool definition. |  | 

## Template Pool

#### Template Pool Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#jigsawstructuretemplatepool-description) item | The description block containing the template pool identifier. |  | 
| elements | *not set* | Array of [Elements](#elements) items | Array of pool elements that can be selected when generating structures. |  | 
| fallback | *not set* | String | Optional fallback pool identifier to use when no elements can be placed. |  | 

## JigsawStructureTemplatePool Description
JigsawStructureTemplatePool Description.


#### JigsawStructureTemplatePool Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | Identifier of the template pool. Used by Jigsaw Structures to assign processors to Structure Templates. |  | 

## Elements

#### Pool Element Entry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| element | *not set* | [Element](#element) item | The structure element configuration. |  | 
| weight | 1 | Integer number | The relative weight for selecting this element. Higher weights are more likely to be chosen. |  | 

## Element

#### Pool Element Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| element_type | *not set* | String | The type of pool element. Valid values: 'minecraft:single_pool_element', 'minecraft:list_pool_element', 'minecraft:feature_pool_element', 'minecraft:empty_pool_element', 'minecraft:legacy_single_pool_element'. |  | 
| location | *not set* | String | Path to the structure template file, relative to the structures folder. |  | 
| processors | *not set* | String | Identifier of the processor list to apply to this element, or inline processor configuration. |  | 
| processors (Alternate 1) | *not set* | Object | Inline processor configuration. |  | 
| projection | rigid | String | How the element projects onto terrain. Valid values: 'rigid', 'terrain_matching'. |  | 