---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsaw_structure"
description: "Describes the minecraft:jigsaw_structure jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsaw_structure

Defines a jigsaw structure that generates in the world using template pools and structure sets. A Jigsaw Structure is a dynamic, modular structure composed of multiple Structure Templates connected via Jigsaw Blocks. Each Structure Template contains Jigsaw Blocks that define how it can connect to other templates and where those connections should occur; these blocks act as connectors, enabling the structure to grow by attaching new pieces. Construction begins by placing a single template; any Jigsaw Blocks within it are added to a pending list, and the system recursively expands the structure by resolving those connections until the specified max_depth is reached. Examples of Jigsaw Structures include Trail Ruins and Trial Chambers.

The overall behavior and placement of a Jigsaw Structure in the world are governed by its Jigsaw Structure JSON, which defines generation rules and constraints. For more info, see the Introduction to Jigsaw Structures documentation.

> [!Note]
> Currently only Trail Ruins can be modified via JSON with the Data-Driven Jigsaw Structure Experimental Toggle turned on. Other Jigsaw Structures such as Villages and Bastions use a legacy version of the Jigsaw Structure System and cannot be modified via JSON.

> [!Note]
> This generation process can be relatively time consuming depending on the complexity and quantity of Jigsaw Blocks in any given template.


## Jigsaw Structure Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | The format version of this jigsaw structure definition. | 
| minecraft:jigsaw | *not set* | [Jigsaw](#jigsaw) item | The jigsaw structure definition. | 

### Jigsaw

#### Jigsaw Definition Properties

**JSON path:** `minecraft:jigsaw`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| biome_filters | *not set* | Array of objects | Array of filter conditions that determine which biomes can generate this structure. | 
| description | *not set* | [Description](#jigsaw-structure-description) item | The description block containing the structure identifier. Must include a namespace; the 'minecraft' namespace must not be used unless overriding a vanilla structure. | 
| dimension_padding | 0 | Integer number | Padding at the top and bottom of the dimension when placing the structure. | 
| dimension_padding (as Object) | *not set* | [Dimension Padding (Dimension Padding)](#dimension-padding-dimension-padding) item | Separate top/bottom padding values. | 
| heightmap_projection | none | [Heightmap Projection](#heightmap-projection-choices) choices | Heightmap to use when determining the starting height. | 
| liquid_settings | apply_waterlogging | [Liquid Settings](#liquid-settings-choices) choices | How to handle waterloggable blocks that overlap with existing liquid in the world. | 
| max_depth | 7 | Integer number | Maximum recursion depth for jigsaw piece connections. For example, a road structure with max_depth of 5 will have paths at most 5 templates long in any direction from the origin. | 
| max_distance_from_center | *not set* | [Max Distance From Center](#max-distance-from-center) item | Maximum horizontal and vertical distance from jigsaw pieces to the structure start. | 
| pool_aliases | *not set* | Array of [Pool Aliases](#pool-aliases) items | Rewires jigsaw pool connections by redirecting pool references within an individual structure. | 
| start_height | *not set* | [Start Height](#start-height) item | Height provider that gives the offset at which the structure's start_pool should begin generating. | 
| start_jigsaw_name | *not set* | String | The name of the Jigsaw Block from the start_pool to be placed first. Optional. | 
| start_pool | *not set* | String | Identifier of the Template Pool to use as the starting point for structure generation. A Structure Template is randomly chosen from this pool and placed as the first piece. | 
| step | *not set* | [Step](#step-choices) choices | The world generation step during which this structure generates. | 
| terrain_adaptation | none | [Terrain Adaptation](#terrain-adaptation-choices) choices | How the terrain should adapt relative to the generated Jigsaw Structure. 'Beard' refers to mass added below structures that would otherwise float in air. | 

#### biome_filters

Array of filter conditions that determine which biomes can generate this structure. Biome filters are a type of Entity Filter that iterate only over biomes; most useful is the 'has_biome_tag' test paired with a value naming the biome tag to match. Jigsaw structures may behave unpredictably in dimensions other than the Overworld. Target Jigsaw Structures to overworld-specific biomes to prevent them from appearing unintentionally in other dimensions.

#### dimension_padding

Padding at the top and bottom of the dimension when placing the structure. Prevents the structure from creating holes in the bedrock or being cut off at the top. May be a positive integer (applied to both bounds) or an object specifying 'top' and 'bottom' separately.

#### pool_aliases

Rewires jigsaw pool connections by redirecting pool references within an individual structure. Allows thematic substitution across a full structure. For example, an alias 'chambers/melee' can be replaced by 'chambers/melee/normal', 'chambers/melee/poison', or 'chambers/melee/wither' which are specialized Template Pools.

#### start_height

Height provider that gives the offset at which the structure's start_pool should begin generating. This is an offset from the heightmap_projection; when heightmap_projection is set, the 'absolute' Vertical Anchor is recommended for ease of use.

#### step

The world generation step during which this structure generates. This is used as a grouping concept to keep similar world-generation features bundled together and to order structures against each other.


#### Jigsaw Structure Description
Identifies the Jigsaw Structure. The identifier set here is what other definitions reference: Structure Sets list this identifier in their 'structures' weighted list, and commands such as /locate use it to find an instance in the world. Must include a namespace; the 'minecraft' namespace must not be used unless overriding a vanilla structure.


##### Jigsaw Structure Description Properties

**JSON path:** `minecraft:jigsaw > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | Identifier of the Jigsaw Structure. | 

#### Dimension Padding (Dimension Padding)

##### Dimension Padding Properties

**JSON path:** `minecraft:jigsaw > dimension_padding`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| bottom | 0 | Integer number | Distance in blocks from the bottom of the dimension that may not be used by the Jigsaw Structure. | 
| top | 0 | Integer number | Distance in blocks from the top of the dimension that may not be used by the Jigsaw Structure. | 

### Heightmap Projection choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | Do not perform any heightmap projection; begin generating from a Y of 0.|
| world_surface | World Surface | Begin generating relative to the first non-air block encountered from the top down.|
| ocean_floor | Ocean Floor | Begin generating relative to the first motion-blocking block encountered from the top down.|

### Liquid Settings choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| apply_waterlogging | Apply Waterlogging | Waterloggable blocks become waterlogged where they overlap existing liquid.|
| ignore_waterlogging | Ignore Waterlogging | Do not waterlog any waterloggable blocks that overlap existing liquid.|

#### Max Distance From Center

##### Max Distance Properties

**JSON path:** `minecraft:jigsaw > max_distance_from_center`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| horizontal | 80 | Integer number | Maximum horizontal distance in blocks. Must be between 1 and 128 inclusive. | 
| vertical | 80 | Integer number | Maximum vertical distance in blocks. Must be greater than 1. | 

#### Pool Aliases

##### Pool Alias Properties

**JSON path:** `minecraft:jigsaw > pool_aliases`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| alias | *not set* | String | Identifier of the Template Pool to replace. Used by 'direct' and 'random' aliases. | 
| groups | *not set* | Array of objects | A weighted random list of groups of aliases. Each entry has a 'data' (an array of nested 'direct' or 'random' alias items) and a positive 'weight'. Used by 'random_group' aliases. | 
| target | *not set* | String | Identifier of the Template Pool to substitute when matched. Used by 'direct' aliases. | 
| targets | *not set* | Array of objects | A weighted random list of potential Template Pools to choose from when the alias matches. Each entry has a 'data' (the target pool identifier) and a positive 'weight'. Used by 'random' aliases. | 
| type | *not set* | [Type](#type-choices) choices | The type of pool alias, which determines what other fields are valid. | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| direct | Direct | Replaces a single alias with a single target. Requires 'alias' and 'target'.|
| random | Random | Replaces an alias with one of a weighted random list of targets. Requires 'alias' and 'targets'.|
| random_group | Random Group | Selects one of several groups of aliases via a weighted random list. Requires 'groups'. Groups may contain 'direct' or 'random' aliases (not nested 'random_group').|

#### Start Height

##### Start Height Properties

**JSON path:** `minecraft:jigsaw > start_height`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | [Max](#vertical-anchor) item | The Vertical Anchor to use as the maximum of the uniform distribution. Used only when type is 'uniform'. | 
| min | *not set* | [Min](#vertical-anchor) item | The Vertical Anchor to use as the minimum of the uniform distribution. Used only when type is 'uniform'. | 
| type | *not set* | [Type](#type-choices) choices | Height provider type. Determines the rest of the parameters in this object. | 
| value | *not set* | [Value](#vertical-anchor) item | The Vertical Anchor to use as the constant height. Used only when type is 'constant'. | 

##### Vertical Anchor
A vertical anchor defines a point in the dimension to offset from. Used as the 'value' (for constant height providers) or as 'min' and 'max' bounds (for uniform height providers). Exactly one of the four anchor properties below should be set.


###### Vertical Anchor Properties

**JSON path:** `minecraft:jigsaw > start_height > max`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| above_bottom | *not set* | Integer number | A relative height above the bottom of the dimension. Must be positive. | 
| absolute | *not set* | Integer number | An absolute Y coordinate. | 
| below_top | *not set* | Integer number | A relative height below the top of the dimension. Must be positive. | 
| from_sea | *not set* | Integer number | A relative height starting at the dimension's sea level. | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| constant | Constant | Single constant anchor point. Use 'value' to specify the Vertical Anchor.|
| uniform | Uniform | Uniform distribution of possible anchor points. Use 'min' and 'max' (each a Vertical Anchor) to bound the range.|

### Step choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| raw_generation | Raw Generation | Step 1.|
| lakes | Lakes | Step 2.|
| local_modifications | Local Modifications | Step 3.|
| underground_structures | Underground Structures | Step 4. Used by Trail Ruins.|
| surface_structures | Surface Structures | Step 5.|
| strongholds | Strongholds | Step 6.|
| underground_ores | Underground Ores | Step 7.|
| underground_decoration | Underground Decoration | Step 8.|
| fluid_springs | Fluid Springs | Step 9.|
| vegetal_decoration | Vegetal Decoration | Step 10.|
| top_layer_modification | Top Layer Modification | Step 11.|

### Terrain Adaptation choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | Do not adjust ambient block density.|
| bury | Bury | Ambient block density is added to all pieces of the structure, but only within the Y bounds of its starting piece. Ideal for structures that need to bury below the surface while letting another set of pieces stick up through the terrain uncovered.|
| beard_thin | Beard (Thin) | Ambient block density is added below the structure and block density is reduced just above the ground.|
| beard_box | Beard (Box) | Ambient block density is added below the structure, and block density is reduced within the entire box the structure occupies.|
| encapsulate | Encapsulate | Ambient block density is added all around every piece of the structure.|