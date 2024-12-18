---
author: iconicNurdle
ms.author: mikeam
title: Addons Documentation - manifest.json
description: "A reference document detailing the basic information about manifest.json files"
ms.service: minecraft-bedrock-edition
---

# Addons Documentation - manifest.json

The manifest file contains all the basic information about the pack that Minecraft needs to identify it. The tables below contain all the components of the manifest, their individual properties, and what they mean.

> [!NOTE]
> To learn more about how to get started with writing manifest.json files in Minecraft: Bedrock Edition, you can view the [Introduction to Resource Packs](../../../../Documents/ResourcePack.md) Tutorial.

## Properties

| Name| Description |
|:-----------|:-----------|
| format_version| The syntax version used in the manifest file. This may be 1 for skin packs or 2 for resource, behavior, and world templates. |
| header| Section containing information regarding the name of the pack, description, and other features that are public facing. |
| modules| Section containing information regarding the type of content that is being brought in.|
| dependencies| Section containing definitions for any other packs that are required in order for this manifest.json file to work. |
| capabilities| Section containing optional features that can be enabled in Minecraft. |
| metadata| Section containing the metadata about the file such as authors and licensing information. |

### header

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|allow_random_seed| Boolean| This option will generate a random seed every time a template is loaded and allow the player to change the seed before creating a new world. (world template manifest JSON only) |
| base_game_version|Vector [a, b, c]| This is the version of the base game your world template requires, specified as [majorVersion, minorVersion, revision]. We use this to determine what version of the base game resource and behavior packs to apply when your content is used. (world template manifest JSON only) |
| description| String| This is a short description of the pack. It will appear in the game below the name of the pack. We recommend keeping it to 1-2 lines. |
| lock_template_options| Boolean| This option is required for any world templates. This will lock the player from modifying the options of the world. (world template manifest JSON only) |
| min_engine_version|Vector [a, b, c]| This is the minimum version of the game that this pack was written for.  This is a required field for resource and behavior packs. This helps the game identify whether any backwards compatibility is needed for your pack. You should always use the highest version currently available when creating packs. |
| name| String| This is the name of the pack as it appears within Minecraft. This is a required field. |
| pack_scope | String| For resource packs, an optional string that specifies whether this resource pack can be used across the game or at an individual world level. Valid values are "world", which specifies that a pack is only addable in the context of a world "global", which means that a pack is only addable across the game, and "any" which indicates that a pack can apply either across the  game or to a specific world. If not specified, this is interpreted as "any". |
| uuid| String| This is a special type of identifier that uniquely identifies this pack from any other pack. UUIDs are written in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx where each x is a hexadecimal value (0-9 or a-f). We recommend using an online service to generate this and guarantee their uniqueness. |
| version|Vector [a, b, c] or [SemVer](https://semver.org/) String| This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower. |

## modules

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|description| String| This is a short description of the module. This is not user-facing at the moment but is a good place to remind yourself why the module is defined. |
|type| String|  This is the type of the module. Can be any of the following: `resources`, `data`, `world_template` or `script`. |
|uuid| String| This is a unique identifier for the module in the same format as the pack's UUID in the header. This should be different from the pack's UUID, and different for every module. |
| version| Vector [a, b, c] or [SemVer](https://semver.org/) String | This is the version of the module in the same format as the pack's version in the header. This can be used to further identify changes in your pack. |
|language| String| Only present if `type` is `script`.  This indicates the language in which scripts are written in the pack.  The only supported value is `javascript`. |

> [!IMPORTANT]
> In order to submit any content to the marketplace, the version `a` value will need to be set to a value greater than 0. e.g `"version": [1, 0, 0]` or `"version": "1.0.0"`

### dependencies

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|uuid| String| This is the unique identifier of the pack that this pack depends on. It needs to be the exact same UUID that the pack has defined in the header section of its manifest file. |
|module_name| String| For dependencies on built-in scripting modules, contains the name of the module. (for example, @minecraft/server) |
|version| Vector [a, b, c] or [SemVer](https://semver.org/) String |  This is the specific version of the pack that your pack depends on. Should match the version the other pack has in its manifest file. |

### capabilities

| Name| Description |
|:-----------|:-----------|
| chemistry| The pack can add, remove, or modify chemistry behavior. |
| editorExtension| Indicates that this pack contains extensions for the Minecraft Editor. |
| experimental_custom_ui| The pack can use HTML files to create custom UI, as well as use or modify the custom UI. |
| raytraced| The pack uses Ray Tracking functionality and may use custom shaders. |

### metadata

|Name| Type| Description |
|:-----------|:-----------|:-----------|
| authors| Array| Name of the author(s) of the pack. |
| license| String| The license of the pack. |
| generated_with | JSON Object | This is used to identify tools used to generate a manifest.json file. The tool names are strings that must be [a-zA-Z0-9_-] and 32 characters maximum. The tool version number are semver strings for each version that modified the manifest.json file. |
| product_type | String | This optional string is used to identify a targeted context for this pack. The only supported value is "addon", indicating this pack is intended to be added to players' worlds. Setting product_type to "addon" should not change how the pack functions in-game. |
| url| String| The home website of your pack. |

## Examples

Listed below are two examples showcasing how a manifest.json file can be written for a behavior pack and a resource pack.

### Behavior Pack

```json
{
    "format_version": 2,
    "header": {
        "description": "Example vanilla behavior pack",
        "name": "Vanilla Behavior Pack",
        "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
        "version": [1, 0, 0],
        "min_engine_version": [1, 20, 0]
    },
    "modules": [
        {
            "description": "Example behavior pack module",
            "type": "data",
            "uuid": "fa6e90c8-c925-460f-8155-c8a60b753caa",
            "version": [1, 0, 0]
        },
        {
            "description": "Example client scripts module",
            "type": "client_data",
            "uuid": "c05a992e-482a-455f-898c-58bbb4975e47",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
            "version": [1, 0, 0]
        }, 
        {
            "module_name": "@minecraft/server",
            "version": "1.9.0"
        }
    ],
    "metadata": {
        "authors": ["exampleAuthor"],
        "license": "MIT",
        "url": "http://www.contoso.com",
        "generated_with": {
            "example_tool": ["1.0.0", "1.1.0"]
        }
    }
}
```

### Resource Pack

```json
{
    "format_version": 2,
    "header": {
        "description": "Example vanilla resource pack",
        "name": "Vanilla Resource Pack",
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
        "pack_scope": "world",
        "version": [1, 0, 0],
        "min_engine_version": [1, 20, 0]
    },
    "modules": [
        {
            "description": "Example vanilla resource pack",
            "type": "resources",
            "uuid": "743f6949-53be-44b6-b326-398005028819",
            "version": [1, 0, 0]
        }
    ]
}
```
