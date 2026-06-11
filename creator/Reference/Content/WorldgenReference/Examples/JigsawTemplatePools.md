---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:template_pool"
description: "Describes the minecraft:template_pool jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:template_pool

Defines a template pool containing structure elements that can be connected via jigsaw blocks. Template Pools are groups of related structure templates with assigned weights and processors. During world generation, the Jigsaw Structure's start_pool specifies which Template Pool to use first. A Structure Template is then randomly chosen from the pool and placed as the first structure piece. Jigsaw Blocks within the placed structure may also specify Template Pools from which subsequent structure pieces are placed recursively until the Jigsaw Structure becomes fully generated.


## Template Pool Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | The format version of this template pool definition. | 
| minecraft:template_pool | *not set* | [Template Pool](#template-pool) item | The template pool definition. | 

### Template Pool

#### Template Pool Definition Properties

**JSON path:** `minecraft:template_pool`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#template-pool-description) item | The description block containing the template pool identifier. | 
| elements | *not set* | Array of [Elements](#elements) items | Array of pool elements that can be selected when generating structures. Each entry pairs an element configuration with a weight controlling the likelihood of selection. | 
| fallback | *not set* | String | Optional fallback pool identifier to use when no elements can be placed. | 

#### Template Pool Description
Identifies the template pool. The identifier set here is what other definitions reference: the Jigsaw Structure's start_pool, a Jigsaw Block's target pool, and any pool_aliases targets all match against this value.


##### Template Pool Description Properties

**JSON path:** `minecraft:template_pool > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | Identifier of the template pool. Used by Jigsaw Structures to assign processors to Structure Templates. | 

#### Elements

##### Pool Element Entry Properties

**JSON path:** `minecraft:template_pool > elements`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| element | *not set* | [Element](#element) item | The structure element configuration. | 
| weight | 1 | Integer number | The relative weight for selecting this element. | 

##### element

The structure element configuration. The fields that apply depend on the element_type. Each variant has its own reference page: [Single](JigsawPoolElementSingle.md), [Legacy Single](JigsawPoolElementLegacySingle.md), [Feature](JigsawPoolElementFeature.md), [List](JigsawPoolElementList.md), [Empty](JigsawPoolElementEmpty.md).

##### weight

The relative weight for selecting this element. Valid range is 1 to 200 inclusive. Weighted probability is calculated by comparing the individual weight with the total weight of all weights in the pool added together. For example, two elements with weights of 1 and 3 (total 4) will have 25% and 75% chances respectively. A large weight does not mean a large probability. Weights of 10 and 30 yield the same probabilities as 1 and 3, but the smaller numbers are more performant under the hood. Prefer the smallest weights that express the ratio you want.


##### Element

###### Pool Element Properties

**JSON path:** `minecraft:template_pool > elements > element`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| element_type | *not set* | [Element Type](#element-type-choices) choices | The type of pool element, which determines what other fields are valid on this element. | 
| elements | *not set* | Array of objects | Nested array of pool element configurations composed together as a single element. Used by minecraft:list_pool_element. | 
| feature | *not set* | String | Identifier of the Feature to place when this element is chosen. Used by minecraft:feature_pool_element. Example: 'minecraft:eyeblossom_feature'. | 
| location | *not set* | String | Path to the structure template file, relative to the behavior pack's structures folder. Used by minecraft:single_pool_element and minecraft:legacy_single_pool_element. | 
| processors | *not set* | String | Identifier of the processor list to apply to this element, or an inline processor configuration. Applicable to minecraft:single_pool_element and minecraft:legacy_single_pool_element. | 
| processors (as Object) | *not set* | Object | Inline processor configuration. | 
| projection | rigid | [Projection](#projection-choices) choices | How the element projects onto terrain. | 

###### projection

How the element projects onto terrain. 'rigid' places without height adjustment; 'terrain_matching' adjusts blocks along the Y axis to match the ground. See the Terrain Matching Tips & FAQ for more guidance.


### Element Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:single_pool_element | Single Pool Element | Places a single structure template. Requires 'location'; optionally accepts 'processors' and 'projection'. See [Single Pool Element](JigsawPoolElementSingle.md) for the full field reference.|
| minecraft:legacy_single_pool_element | Legacy Single Pool Element | Variant of single_pool_element used for legacy-format structure files. Same field set as single_pool_element. See [Legacy Single Pool Element](JigsawPoolElementLegacySingle.md).|
| minecraft:feature_pool_element | Feature Pool Element | Places a Feature (from the Features Reference) as part of the Jigsaw Structure. Requires 'feature'. See [Feature Pool Element](JigsawPoolElementFeature.md) for details and examples.|
| minecraft:list_pool_element | List Pool Element | Composes several pool elements together so they are placed as a group. Requires 'elements'. See [List Pool Element](JigsawPoolElementList.md).|
| minecraft:empty_pool_element | Empty Pool Element | Takes no additional fields. When chosen, places nothing in the world. Useful as a weighted 'do nothing' option. See [Empty Pool Element](JigsawPoolElementEmpty.md).|

### Projection choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| rigid | Rigid | Structures are placed without any height adjustment.|
| terrain_matching | Terrain Matching | Structures are placed relative to the terrain height. Structure blocks will adjust along the Y axis to match the ground.|