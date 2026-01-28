---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - Jigsaw Structures"
description: "A reference document describing all current Jigsaw Structures"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation

| Jigsaw Structures | Description |
|:-----|:----------|
| [JigsawBlockMetadata](JigsawComponents/jigsawblockmetadata.md)| JigsawBlockMetadata |
| [JigsawStructureDefinition Description](JigsawComponents/jigsawstructuredefinition_description.md)| JigsawStructureDefinition Description |
| [JigsawStructureMetadata](JigsawComponents/jigsawstructuremetadata.md)| JigsawStructureMetadata |
| [JigsawStructureMetadataRegistry](JigsawComponents/jigsawstructuremetadataregistry.md)| JigsawStructureMetadataRegistry |
| [JigsawStructureProcessorList Description](JigsawComponents/jigsawstructureprocessorlist_description.md)| JigsawStructureProcessorList Description |
| [JigsawStructureSet Description](JigsawComponents/jigsawstructureset_description.md)| JigsawStructureSet Description |
| [JigsawStructureSet RandomSpreadPlacement](JigsawComponents/jigsawstructureset_randomspreadplacement.md)| Defines random spread placement with spacing and separation for structure sets. |
| [JigsawStructureSet Structure](JigsawComponents/jigsawstructureset_structure.md)| JigsawStructureSet Structure |
| [JigsawStructureTemplatePool Description](JigsawComponents/jigsawstructuretemplatepool_description.md)| JigsawStructureTemplatePool Description |
| [JigsawStructureTemplatePool SinglePoolElement](JigsawComponents/jigsawstructuretemplatepool_singlepoolelement.md)| Defines a single structure template element for template pools. |
| [JigsawStructureTemplatePool TemplatePoolElement](JigsawComponents/jigsawstructuretemplatepool_templatepoolelement.md)| Defines a weighted template pool element with structure and processor references. |
| [JigsawStructure ProcessorRule AlwaysTrueBlock](JigsawComponents/jigsawstructure_processorrule_alwaystrueblock.md)| Predicate that always evaluates to true. |
| [JigsawStructure ProcessorRule AlwaysTruePos](JigsawComponents/jigsawstructure_processorrule_alwaystruepos.md)| Predicate that always evaluates to true. |
| [JigsawStructure ProcessorRule AppendLoot](JigsawComponents/jigsawstructure_processorrule_appendloot.md)| Modifier will attempt to add loot to a block entity. |
| [JigsawStructure ProcessorRule AxisAlignedLinear](JigsawComponents/jigsawstructure_processorrule_axisalignedlinear.md)| Predicate that evaluates to true if the block is within the distance range along the provided axis and a random number is generated between the chance range. |
| [JigsawStructure ProcessorRule BlockMatch](JigsawComponents/jigsawstructure_processorrule_blockmatch.md)| Predicate that evaluates to true if the block at the specified location matches the specified block. |
| [JigsawStructure ProcessorRule Passthrough](JigsawComponents/jigsawstructure_processorrule_passthrough.md)| Modifier that leaves the state unchanged. |
| [JigsawStructure ProcessorRule RandomBlockMatch](JigsawComponents/jigsawstructure_processorrule_randomblockmatch.md)| Predicate that evaluates to true with a given probability if the block at the specified location matches the specified block. |
| [JigsawStructure ProcessorRule TagMatch](JigsawComponents/jigsawstructure_processorrule_tagmatch.md)| Predicate that evaluates to true if the block at the specified location contains the tag. |
| [JigsawStructure Processors BlockIgnore](JigsawComponents/jigsawstructure_processors_blockignore.md)| Specifies block types in the template that should be ignored by other processors. |
| [JigsawStructure Processors BlockRules](JigsawComponents/jigsawstructure_processors_blockrules.md)| Replaces and modifies blocks based on a series of rules |
| [JigsawStructure Processors Capped](JigsawComponents/jigsawstructure_processors_capped.md)| Processor that wraps a processor and caps the number of times the delegated processor can be applied. |
| [JigsawStructure Processors ProtectedBlock](JigsawComponents/jigsawstructure_processors_protectedblock.md)| Protect blocks from this structure's placement in the world. |
| [JigsawStructure Rule](JigsawComponents/jigsawstructure_rule.md)| A block rule that is evaluated on all blocks of a Structure Template. |
| [JigsawStructure](JigsawComponents/jigsaw_structure.md)| Defines a jigsaw structure that generates in the world using template pools and structure sets. |
| [Jigsaw Structure Metadata](JigsawComponents/minecraft_jigsaw_structure_metadata.md)| Jigsaw Structure Metadata |
| [ProcessorList](JigsawComponents/processor_list.md)| Defines a list of structure processors that modify blocks during structure generation. |
| [Scatter Chance](JigsawComponents/scatter_chance.md)| Scatter probability represented by an expression or an object with a numerator and denominator. |
| [Scatter Params](JigsawComponents/scatter_params.md)| Controls the scatter distribution of a particular object. |
| [StructureSet](JigsawComponents/structure_set.md)| Defines a structure set that controls the placement and distribution of structures in the world. |
| [TemplatePool](JigsawComponents/template_pool.md)| Defines a template pool containing structure elements that can be connected via jigsaw blocks. |