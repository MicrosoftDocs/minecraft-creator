---
author: docsbryce
ms.author: v-bbortree
title: Addons Documentation - manifest.json
ms.prod: gaming
---

# Addons Documentation - manifest.json

The manifest file contains all the basic information about the pack that Minecraft needs to identify it. The tables below contain all the components of the manifest, their individual properties, and what they mean.

> [!NOTE]
> To learn more about how to get started with writing manifest.json files in Minecraft: Bedrock Edition, you can view the [Introduction to Resource Packs](../../../../Documents/ResourcePack.md) Tutorial.

## Properties

| Name| Description |
|:-----------|:-----------|
| format_version| The syntax version used in the manifest file. This may be 1 for skin packs or 2 for resource, behavior, and world packs. |
| header| Section containing information regarding the name of the pack, description, and other features that are public facing. |
| modules| Section containing information regarding the type of content that is being brought in.|
| dependencies| Section containing definitions for any other packs that are required in order for this manifest.json file to work. |
| capabilities| Section containing optional features that can be enabled in Minecraft. |
| metadata| Section containing the metadata about the file such as authors and licensing information. |

### header

| Name| Type| Description |
|:-----------|:-----------|:-----------|
| base_game_version|Vector [a, b, c]| This is the version of the base game your world template requires, specified as [majorVersion, minorVersion, revision]. We use this to determine what version of the base game resource and behavior packs to apply when your content is used. |
| description| String| This is a short description of the pack. It will appear in the game below the name of the pack. We recommend keeping it to 1-2 lines. |
| lock_template_options| Boolean| This option is required for any world templates. This will lock the player from modifying the options of the world. |
| min_engine_version| String| This is the minimum version of the game that this pack was written for.  This is a required field for resource and behavior packs. This helps the game identify whether any backwards compatibility is needed for your pack. You should always use the highest version currently available when creating packs. |
| name| String| This is the name of the pack as it appears within Minecraft. This is a required field. |
| uuid| String| This is a special type of identifier that uniquely identifies this pack from any other pack. UUIDs are written in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx where each x is a hexadecimal value (0-9 or a-f). We recommend using an online service to generate this and guarantee their uniqueness,|
| version|Vector [a, b, c]| This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower. |

## modules

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|description| String| This is a short description of the module. This is not user-facing at the moment but is a good place to remind yourself why the module is defined. |
|type| String|  This is the type of the module. Can be any of the following: `resources`, `data`, `client_data`, `interface`, `world_template` or `javascript`. |
|uuid| String| This is a unique identifier for the module in the same format as the pack's UUID in the header. This should be different from the pack's UUID, and different for every module. |
| version| Vector [a, b, c]| This is the version of the module in the same format as the pack's version in the header. This can be used to further identify changes in your pack. |

> [!IMPORTANT]
> In order to submit any content to the marketplace, the version `a` value will need to be set to a value greater than 0. e.g `"version": [1, 0, 0]`

### dependencies

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|uuid| String| This is the unique identifier of the pack that this pack depends on. It needs to be the exact same UUID that the pack has defined in the header section of it's manifest file. |
|version| Vector [a, b, c]|  This is the specific version of the pack that your pack depends on. Should match the version the other pack has in its manifest file. |

### capabilities

| Name| Description |
|:-----------|:-----------|
| experimental_custom_ui| The pack can use HTML files to create custom UI, as well as use or modify the custom UI. |
| chemistry| The pack can add, remove, or modify chemistry behavior. |
| raytraced| The pack uses Ray Tracking functionality and may use custom shaders. |

### metadata

|Name| Type| Description |
|:-----------|:-----------|:-----------|
| authors| Array| Name of the author(s) of the pack |
| license| String| The license of the pack |
| generated_with | JSON Object | This is the tools used to generate a manifest.json file. The tool names are strings that must be [a-zA-Z0-9_-] and 32 characters maximum. The tool version number are semver strings for each version that modified the manifest.json file. |
| url| String| The home website of your pack |

## Examples

Listed below are two examples showcasing how a manifest.json file can be written for a behavior pack and a resource pack.

### Behavior Pack

```JSON
{
    "format_version": 1,
    "header": {
        "description": "Example vanilla behavior pack",
        "name": "Vanilla Behavior Pack",
        "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
        "version": [1, 0, 0],
        "min_engine_version": [1, 16, 0]
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
        }
    ],
    "metadata": {
        "authors": ["exampleAuthor"],
        "license": "MIT",
        "url": "http://www.exampleurl.com",
        "generated_with": {
            "example_tool": ["1.0.0", "1.1.0"]
        }
    }
}
```

### Resource Pack

```JSON

{
    "format_version": 1,
    "header": {
        "description": "Example vanilla resource pack",
        "name": "Vanilla Resource Pack",
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
        "version": [1, 0, 0],
        "min_engine_version": [1, 2, 6],
        "vanilla": [1, 12, 0]
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
